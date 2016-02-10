angular.module('TodoModule').controller('TodoController', ['$scope', function($scope) { 
  $scope.helloAngular = "Hello World Angular";
  
  $scope.todos = [
      {
        name: 'Achiever Dashboard UI items',
        desc: 'Replicate the same design from iOS to Android'
      },
      {
        name: 'Send message through notification',
        desc: 'Notification should be received on a new message arrival'
      },
      {
        name: 'Crash on dialog display',
        desc: 'Dialog box gets crashed when screen idle for a long time'
      },
      {
        name: 'Hide keyboard in edit profile screen',
        desc: 'Hide the keyboard on the tap of the background image. Refer iOS'
      },
      {
        name: 'Quiz list screen',
        desc: 'Create the quiz list screen from scratch'
      }
    ];
  
}]);