'use strict';

/* Controllers */

function PhotoColumnCtrl($scope, $http) {
  $http.get('../json/photos.json').success(function(data) {
    $scope.photos = data;
  });
 
  $scope.orderProp = 'age';
}