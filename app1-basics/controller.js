angular.module('myApp1').controller('myCtrl', function($scope, myService, $timeout) {

  $scope.ready = "I'm not ready";

  $scope.countdown = "";

  $scope.counterDowner = function() {
    //setTimeout does not work well in angular on controllers, so we will use $timeout, which has to be injected
    $scope.countdown = 5;
    for (var i = 5; i >= 0; i--) {
      $timeout(timer(i), 1000 * (5 - i))
    }

    function timer(i) {
      return function() {
        $scope.countdown = i;

        //this closure will maintain access to the parents variables at the time that it's called.
      }
    }
  }

  $scope.areYouReadyYet = function() {
    $scope.counterDowner();
    myService.readyYet().then(function(response) {
      $scope.ready = response;
    })
  }

})