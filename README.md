# my-contacts
Contact Manager SPA built with [Backbone.js]

Eventual goal is to make UI similar to Google Contacts UI
with very selected set of features.

We will progressively enhance it/add features under several versions
(v1, v2, v3, etc..) as a learning tool for building apps with Backbone.

## Instructions for v1

### Get project files
Download ZIP file or clone this repository.

cd to directory where the files are installed on your system.

**Note: This app uses npm to install node modules.
[node] needs to be installed and working on your system.
**

We use [Grunt] with the [grunt-contrib-jst] plugin to compile our templates

### Install Grunt
    $ npm install -g grunt-cli (may need to run as root)

### Install node modules
    $ ls
    LICENSE  README.md  README.txt  v1
    $ cd v1
    $ ls
    Gruntfile.js  package.json  public  templates
    $ npm install (may need to run as root)
    
### Compile templates
    $ grunt jst

Templates will be in file public/js/templates.js

### Launch app
To launch app, point your browser to: ../v1/public/index.html

Ex: file:///home/raynaldmo/my-contacts/v1/public/index.html

## Instructions for v2  

#### Added Features over v1
* Use bower to install client-side libraries
* Use require.js to load client-side libraries
* Use express.js based web server
* Add unit tests (Jasmine)


Download ZIP file or clone this repository.

cd to directory where the files are installed on your system.

**Note: This app uses npm to install node modules.  
[node] needs to be installed and working on your system.
**

We use [bower] to install all  client side libraries (backbone.js, require.js etc.)

### Install bower
    $ npm install -g bower (may need to run as root)
    
### Install node modules
    $ ls
    LICENSE  README.md  README.txt  v1  v2
    
    $ cd v2
    $ ls
    bower.json package.json  public  README.txt  server.js
    
    $ npm install (may need to run as root)
    $ bower install (shouldn't need to run as root)
    

### Start node web server
    $ node server
    my-contacts server listening on port 5000

### Launch app
To launch app, point your browser to localhost:5000

## Instructions for v3
TODO

[Backbone.js]:http://backbonejs.org/
[node]:http://nodejs.org
[Grunt]:http://gruntjs.com/
[grunt-contrib-jst]:https://github.com/gruntjs/grunt-contrib-jst
[bower]:http://bower.io

