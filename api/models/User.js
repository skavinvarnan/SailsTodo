/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  //connection: 'mySQL', // Local mySQL
  connection: 'mongoLabsMongoDB', //Cloud mongoDB
  attributes: {
    firstName: {
      type: 'string',
      required: true
    },
    lastName: {
      type: 'string'
    },
    email: {
      type: 'string',
      unique: true
    }
  }
};

