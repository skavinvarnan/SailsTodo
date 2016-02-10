angular.module('TodoModule').controller('TodoController', ['$scope', '$http', '$mdDialog', function($scope, $http, $mdDialog) { 
  $scope.helloAngular = "Hello World Angular";
  $scope.showProgressbar = false;
  
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
          $scope.getTaskList();
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
  
  $scope.getTaskList = function() {
    $http.get("/api/all_tasks")
    .then(
      function success(response) {
        $scope.todos = response.data;
      }, 
      function error(response) {
        //TODO Inform the user that the error has occured.
        console.log("Error occured");
    });
  }
  
  $scope.getTaskList();
  
  $scope.taskStatusChanged = function() {
    var todosArray = $scope.todos;
    for(var i = 0; i < todosArray.length; i++) {
      if(todosArray[i].status === true) {
        $http.get("/api/updateTask/" + todosArray[i].id + "/true")
        .then(
          function success(response) {
            console.log("Updated task");
            $scope.getTaskList();
          }, 
          function error(response) {
            console.log("Error occured");
        });
      }
    }
  }
  
  $scope.$watch('todos.status', function() {
    console.log('hey, todos has changed!');
  });
  
}]);