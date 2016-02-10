angular.module('TodoModule').controller('TodoController', ['$scope', '$http', '$mdDialog', function($scope, $http, $mdDialog) { 
  $scope.helloAngular = "Hello World Angular";
  $scope.showProgressbar = false;
  
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
    
  $scope.addTask = function() {
    $scope.showProgressbar = true;
    $scope.task.status = false;
    $http.post("/api/add_task", $scope.task)
    .then(
      function success(response) {
        $mdDialog.show(
        $mdDialog.alert()
          .parent(angular.element(document.querySelector('#popupContainer')))
          .clickOutsideToClose(false)
          .title('Task Added')
          .textContent('Your task has been successfully added.')
          .ariaLabel('Task Added')
          .ok('ok')
        ).then(function() {
          $scope.task.name = '';
          $scope.task.description = '';
        });
      }, 
      function error(response) {
        $mdDialog.show(
        $mdDialog.alert()
          .parent(angular.element(document.querySelector('#popupContainer')))
          .clickOutsideToClose(false)
          .title('Error')
          .textContent('Error while adding task. Please try again.')
          .ariaLabel('Error')
          .ok('ok')
        );
    }).finally(function() {
      $scope.showProgressbar = false;
    });
  }
  
}]);