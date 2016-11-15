console.log('server is starting...');

// use require to pull the module
var express = require("express");

// with a reference to express, call it and save the results in an 'app'
// 'app' holds an express instance
var app = express();


// listen for incoming connections
// add a callback for listening
var server = app.listen(3000, listening);


function listening() {
  console.log("served up on port# 3000");
  console.log("listening.......");
}


// now serve up a public file
app.use(express.static('public'));
