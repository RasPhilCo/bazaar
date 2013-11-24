
function PhotoColumnCtrl($scope) {
  $scope.photos = [
    {"name": "Some Camera Thingy",
     "snippet": "Quick witty discription",
     "imageUrl": "../img/1.jpg", 
     "age": 0},
    {"name": "Some Vacation Thingy",
    "snippet": "Quick witty discription",
     "imageUrl": "../img/2.jpg", 
     "age": 1},
    {"name": "Some Fashion Thingy",
    "snippet": "Quick witty discription",
     "imageUrl": "../img/3.jpg", 
     "age": 2}
  ];

  $scope.orderProp = 'age';
}
