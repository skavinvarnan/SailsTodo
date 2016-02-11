/**
* TodoSails.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  //connection: 'mySQL', // Local mySQL
  connection: 'mongoLabsMongoDB', //Cloud mongoDB
  attributes: {
    name: {
      type: 'string',
      required: true
    },
    description: {
      type: 'string'
    },
    status: { // True for completed for false for pending
      type: 'boolean'
    }
  }
};

