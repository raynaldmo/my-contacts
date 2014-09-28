/**
 * Created by raynald on 8/31/14.
 */

// ------------ BEGIN MODULE SCOPE VARIABLES --------------
var express = require('express');
var http = require('http');
var path = require('path');
var app = express();

// ------------- END MODULE SCOPE VARIABLES ---------------

// ------------- BEGIN SERVER CONFIGURATION ---------------

// No need to set env. By default environment will be set to development
// app.set('env', 'development');

app.set('port', process.env.PORT || 5000);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.urlencoded())
  .use(express.json());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// ------------- BEGIN SERVER CONFIGURATION ---------------

// ----------CREATE AND START SERVER ---------------
http.createServer(app).listen(app.get('port'), function(){
  console.log('my-contacts server listening on port ' + app.get('port'));
});


