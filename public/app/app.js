var app = angular.module("bitcoinApp", []);

app.controller("mainCtrl", function($scope, $http){
    $scope.currencies = [{id: 1, label: 'aud'}, {id: 2, label: 'eur'}, {id:3, label: 'usd'}];

    $scope.click = function(currency){
        console.log($scope.selected);
        $http.get("/bitcoin?currency=" + $scope.selected.label).then(function(config){
            console.log("data: ", config);
            $scope.data = JSON.parse(config.data.body);
        }, function(config){
            console.log("configError: ", config);
        });
    }
});