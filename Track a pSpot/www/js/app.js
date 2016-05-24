angular.module('statusFilters', []).filter('spotavailability', function(){
    return function(input){
        return (input == "1") ? 'Available' : 'Occupied';
    };
})

angular.module('starter', ['ionic', 'statusFilters'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
}).controller('mainCtrl', function($scope, $http){

    $scope.getSpots = function(){
        var _response = "";
        //$http.get('http://jpavelw.me:5001/spots').then(function(response) {
        $http.get('http://localhost:5001/spots').then(function(response) {
            $scope.spots = [];
            for (var key in response.data) {
                $scope.spots.push(response.data[key]);
            }
        });
    }

    $scope.updateList = function(){
        $scope.getSpots();
    }

    $scope.getSpots();
})
