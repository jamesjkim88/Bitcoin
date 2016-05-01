var app = angular.module("bitcoinApp", []);

app.controller("mainCtrl", function($scope, $http){
    $scope.currencies = [
        {id: 1, label: 'Australian Dollar', code: "aud"},
        {id: 2, label: 'British Pound', code: "gbp"},
        {id: 3, label: 'Brazilian Real', code: "brl"},
        {id: 4, label: 'Canadian Dollar', code: "cad"},
        {id: 5, label: 'Euro', code: "eur"},
        {id: 6, label: 'Japanese Yen', code: "jpy"},
        {id: 7, label: 'Singapore Dollar', code: "sgd"},
        {id: 8, label: 'South Korean Won', code: "krw"},
        {id: 9, label: 'Swiss Franc', code: "chf"},
        {id: 10, label: 'Thai Baht', code: "thb"},
        {id: 11, label: 'US Dollar', code: "usd"}
    ];

    $scope.click = function(currency){
        $http.get("/bitcoin?currency=" + $scope.selected.code).then(function(config){
            $scope.data = JSON.parse(config.data.body);
            $scope.total = $scope.data.amount * $scope.amount;
            $(".amount").addClass("show");
        }, function(config){
            console.log("configError: ", config);
        });
    }
});