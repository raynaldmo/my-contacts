/**
 * Created by raynald on 8/22/14.
 */

define(['backbone'], function(Backbone) {
  var Contact = Backbone.Model.extend({

    defaults : {
      firstname : "",
      lastname : "",
      email : "",
      phone : "",
      address : "",
      notes : ""
    }
  });
  return Contact;

});

/*
define(function(require) {

  var Backbone = require('backbone');

  var Contact = Backbone.Model.extend({

    default : {
      id : "",
      firstName : "",
      lastName : "",
      email : "",
      phone : ""
    }
  });
  return Contact;

});
*/