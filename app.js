
//var myApp = angular.module('myApp', []);
//
//myApp.controller('LocationController', ['$scope', function($scope) {
//
//
//    $scope.columns = 10;
//    $scope.rows = 12;
//
//    //$scope.cells1 = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//    //$scope.rows  = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
//    $scope.cells = new Array($scope.columns * $scope.rows);
//
//    $scope.init = function(){
//        for( i=0 ; i<cells.length ; i++){
//            $scope.cells.push(i);
//        }
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
//    //$scope.getClass = function(ind){
//    //    if( ind === $scope. ){
//    //        return "selected";
//    //    } else{
//    //        return "";
//    //    }
//    //}
//}]);


function LocationController($scope){

    $scope.columns = 10;
    $scope.rows = 12;

    //$scope.cells1 = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    //$scope.rows  = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    //$scope.cells  = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    //$scope.cells = new Array($scope.columns * $scope.rows);
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

}


