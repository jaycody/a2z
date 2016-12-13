/* jstephens 2016_12
API via Node via shiffman a2z
features:
1. An API with routes that accept parameters
2. Persistence: new config variables can be saved to config.json
3. An interface: allows interaction with the API
*/

///////////////////////////////////////////////////
// setup express server
console.log("server starting....");

var express = require("express");
var app     = express();
var server  = app.listen(3000, listening);
app.use(express.static('public'));

function listening() {
  console.log("server running on localhost/3000")
}
///////////////////////////////////////////////////



///////////////////////////////////////////////////
// load and parse config.json
//    - use node's fs module
var fs      = require("fs");
var data    = fs.readFileSync("config.json");
var config  = JSON.parse(data);
console.log(config);
///////////////////////////////////////////////////



///////////////////////////////////////////////////
// create API route to show config file
//   /show_config -->
app.get("/show_config", showConfig);

function showConfig(request, response) {
  response.send(config);
}
///////////////////////////////////////////////////
