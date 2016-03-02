var app = angular.module("bitcoinApp", []);

app.controller("mainCtrl", function($scope, $http){
    $scope.currencies = [
        {id: 1, label: 'Australian', code: "aud"},
        {id: 2, label: 'Euro', code: "eur"},
        {id:3, label: 'US Dollar', code: "usd"}
    ];

    $scope.click = function(currency){
        console.log($scope.selected);
        $http.get("/bitcoin?currency=" + $scope.selected.code).then(function(config){
            $scope.data = JSON.parse(config.data.body);
        }, function(config){
            console.log("configError: ", config);
        });
    }
});