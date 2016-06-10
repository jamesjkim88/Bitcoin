var app = angular.module("bitcoinApp", []);

app.controller("mainCtrl", function($scope, $http){
    $scope.currencies = [
        {id: 1, label: 'Australian Dollar', code: "AUD"},
        {id: 2, label: 'British Pound', code: "GBP"},
        {id: 3, label: 'Brazilian Real', code: "BRL"},
        {id: 4, label: 'Canadian Dollar', code: "CAD"},
        {id: 5, label: 'Euro', code: "EUR"},
        {id: 6, label: 'Japanese Yen', code: "JPY"},
        {id: 7, label: 'Singapore Dollar', code: "SGD"},
        {id: 8, label: 'South Korean Won', code: "KRW"},
        {id: 9, label: 'Swiss Franc', code: "CHF"},
        {id: 10, label: 'Thai Baht', code: "THB"},
        {id: 11, label: 'US Dollar', code: "USD"}
    ];

    $scope.click = function(currency){
        $http.get("/bitcoin?currency=" + $scope.selected.code).then(function(config){
            console.log("config: ", config);
            $scope.data = JSON.parse(config.data.body);
            $scope.total = $scope.data.amount * $scope.amount;
            // $(".amount").addClass("show");
            var text = '<p class="show amount animated zoomIn">' + $scope.total.toFixed(2) + " " + $scope.data.currency + '</p>';
            $("#totalBox").html(text)
        }, function(config){
            console.log("configError: ", config);
        });
    }
});