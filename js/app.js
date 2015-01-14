var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl:'partials/main.html',
            controller: 'LocationController'
        })
        .when('/settings',{
            templateUrl:'partials/settings.html',
            controller: 'SettingsController'
        })
        .otherwise({
            redirectTo: '/'
        });

});


app.controller('SettingsController', function($rootScope, $scope){

    $scope.columns = ['3','4','5','6','7'];
    $scope.selectedColumn = $scope.columns[0];

    $scope.rows    = ['3','4','5','6','7','8'];
    $scope.selectedRow = $scope.rows[0];

    $scope.saveSettings = function(){
        var data = {columns : $scope.selectedColumn, rows : $scope.selectedRow};
        $rootScope.updateData(data);
    }
});

//function SettingsController($scope){
//    $scope.columns = ['3','4','5','6','7'];
//    $scope.selectedColumn = $scope.columns[0];
//
//    $scope.rows    = ['3','4','5','6','7','8'];
//    $scope.selectedRow = $scope.rows[0];
//
//    $scope.saveSettings = function() {
//
//    }
//}

app.controller('LocationController', function($rootScope, $scope){

    $scope.columns = 10;
    $scope.rows = 12;

    var size = $scope.columns * $scope.rows;
    $scope.cells = [];

    for( i=0 ; i<size ; i++){
        $scope.cells.push(i);
    }

    $scope.currentLocation = 5;

    $scope.getClass = function(index){
        if ($scope.currentLocation == index){
            return "location_red";
        }
        else{
            return "location_blue";
        }
    }


    $rootScope.updateData = function( data ){

        $scope.initiated = 'init';
        $scope.columns = data.columns;
        $scope.rows = data.rows;

        var size = $scope.columns * $scope.rows;
        //$scope.cells.length = 0;

        $scope.cells.splice(0, A.length);

        for( i=0 ; i<size ; i++){
            $scope.cells.push(i);
        }

        $scope.currentLocation = 5;

    };

});

//function LocationController($scope){
//
//    $scope.columns = 10;
//    $scope.rows = 12;
//
//    var size = $scope.columns * $scope.rows;
//    $scope.cells = [];
//
//    for( i=0 ; i<size ; i++){
//        $scope.cells.push(i);
//    }
//
//    $scope.currentLocation = 5;
//
//    $scope.getClass = function(index){
//        if ($scope.currentLocation == index){
//            return "location_red";
//        }
//        else{
//            return "location_blue";
//        }
//    }
//
//}


