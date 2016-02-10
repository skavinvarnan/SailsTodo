/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	test: function(req, res) {
    res.status(200);
    res.send("Your test controller works");
  },
  addUser: function(req, res) {
    var userObj = req.body;
    User.create(userObj).exec(function (err, user){
      if (err) {
        res.status(err.status);
        res.json(err.details);
      } else {
        res.status(201);
        res.json(user);
      }
    });
  }
};

