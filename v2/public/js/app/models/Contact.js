/**
 * Created by raynald on 8/22/14.
 */

define(['backbone'], function(Backbone) {
  var Contact = Backbone.Model.extend({

    defaults : {
      id : "",
      firstName : "",
      lastName : "",
      email : "",
      phone : ""
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