/**
 * Created by raynald on 8/31/14.
 */
/**
 * Created by raynald on 8/30/14.
 */
var require = {
  baseUrl : 'js',

  paths: {

    'jquery': 'bower_components/jquery/dist/jquery.min',
    'backbone': 'bower_components/backbone/backbone',
    'storage': 'bower_components/backbone.localStorage/backbone.localStorage',
    'underscore': 'bower_components/underscore/underscore-min',
    'text' : 'bower_components/requirejs-text/text'
  },

  shim: {
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    'underscore': {
      exports: '_'
    }

  }
};
