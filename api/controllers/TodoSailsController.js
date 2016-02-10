/**
 * TodoSailsController
 *
 * @description :: Server-side logic for managing Todosails
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	addTask: function(req, res) {
    var taskObj = req.body;
    TodoSails.create(taskObj).exec(function (err, todo){
      if (err) {
        res.status(err.status);
        res.json(err.details);
      } else {
        res.status(201);
        res.json(todo);
      }
    });
  },
  getAllTasks: function(req, res) {
    TodoSails.find().exec(function (err, todoList) {
      if (err) {
        res.status(err.status);
        res.json(err.details);
      } else {
        res.status(200);
        res.json(todoList);
      }
    });
  },
  updateTask: function(req, res) {
    var receivedId = req.param('id');
    var receivedStatus = req.param('status');
    TodoSails.update({id:receivedId},{status:receivedStatus}).exec(function (err, updatedTodo) {
      if (err) {
        res.status(err.status);
        res.json(err.details);
      } else {
        res.status(200);
        res.json(updatedTodo);
      }
    });
  },
  deleteTask: function(req, res) {
    var receivedId = req.param('id');
    TodoSails.destroy({id:receivedId}).exec(function (err) {
      if (err) {
        res.status(err.status);
        res.json(err.details);
      } else {
        res.status(200);
        var obj = new Object();
        obj.message = "Deleted the task";
        res.json(obj);
      }
    });
  }
};

