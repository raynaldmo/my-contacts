/**
 * Created by raynald on 8/30/14.
 */
var require = {
  baseUrl : 'js',

  paths: {
    'spec': 'test/spec',

    'jquery': 'bower_components/jquery/dist/jquery.min',
    'backbone': 'bower_components/backbone/backbone',
    'storage': 'bower_components/backbone.localStorage/backbone.localStorage',
    'underscore': 'bower_components/underscore/underscore-min',

    'sinon': 'bower_components/sinon/lib/sinon',
    'jasmine': 'bower_components/jasmine/lib/jasmine-core/jasmine',
    'jasmine-html': 'bower_components/jasmine/lib/jasmine-core/jasmine-html',
    'jasmine-jquery': 'bower_components/jasmine-jquery/jasmine-jquery',
    'jasmine-sinon': 'bower_components/jasmine-sinon/jasmine-sinon'
  },

  shim: {
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    'underscore': {
      exports: '_'
    },
    'jasmine': {
      exports: 'jasmine'
    },
    'sinon': {
      exports: 'sinon'
    },
    'jasmine-html': ['jasmine'],
    'jasmine-jquery': ['jasmine'],
    'jasmine-sinon': ['jasmine']
  }
};
