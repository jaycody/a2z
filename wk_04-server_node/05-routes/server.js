/* create ROUTES 
[x]  add a callback function listening() to app.listen, add console log
[ ]  add search to the route with a search term 

usage:
$ npm install
$ node server.js

http://localhost:3000/flower
http://localhost:3000/search/sunflowers
http://localhost:3000/count/redlinen/200
*/

var express = require("express");
var app     = express();
var server  = app.listen(3000, listening);

function listening() {
  console.log("express instance lisenting on port 3000");
}
app.use(express.static('public'));


// setup routes here to handle GET Requests
// if anyone goes to /flower, the sendFlower is called.
// every web transaction has two parts, the REQUEST and the RESPONSE 
// all my info is included in the 'request' and all the server info is in the 'response'

// such that http://localhost:3000/flower  resolves to
// I love flowers too
// 
app.get('/flower/', sendFlower);

function sendFlower(request, response) {
  response.send("I love flowers too");
  
}

app.get('/search/:flower/', sendFlowerSearch);

function sendFlowerSearch(request, response) {
  var data = request.params;
  response.send("I love " + data.flower + " too");
}


app.get("/count/:flowers/:num", sendFlowerCount);

function sendFlowerCount(request, response){
  var moreData      = request.params;
  var anotherFlower = moreData.flowers;
  var num           = moreData.num;
  var reply      = ""; //set response to empty string
  
  
  for (var i = 0; i < num; i ++) {
    reply += "<h4>I count " + i + " " + anotherFlower + "</h4>";
  }
  
  response.send(reply);
}
