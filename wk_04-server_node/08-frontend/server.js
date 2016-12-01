/* jstephens 2016_11_30
API Frontend - node express
from shiffman a2z
Features & Application Progrom Interface API

/show_config
    show key/values in config.json

/search_config/<search_term>
    search for key and retrieve its value in config.json

/update_config/<existing_key>/<value>
    update value for an existing key in config.json

/update_config/<new_key>/<value>
    add key/value to config.json
*/

/////////////////////////////////////////////
// setup express server
console.log('server starting....');

var express = require('express');
var app     = express();
var server  = app.listen(3000, listening);
app.use(express.static('public'));

function listening() {
  console.log('listening on localhost/3000');
}
/////////////////////////////////////////////



/////////////////////////////////////////////
// load config with node's file system module
var fs = require('fs');
var data = fs.readFileSync('config.json');
var config = JSON.parse(data);
console.log(config);  // writes to console
/////////////////////////////////////////////


//////////////////////////////////
// /show_config  -->
//    show config variables and their values
app.get('/show_config', showConfig);

function showConfig(request, response) {
  response.send(config);
}
//////////////////////////////////


//////////////////////////////////
// /search_config/<search_for_var>  -->
//    search config.json for config_var. return its value, else alert
app.get('/search_config/:search_for_var', searchConfig);

function searchConfig(request, response) {
  var keyName      = request.params.search_for_var;
  var reply;
  console.log("\n...searching for config_var: '" + keyName + "'");

  // validate keyName is config
  if (config[keyName]) {
    reply = {
      msg: "config_var: '" + keyName + "' = " + config[keyName],
      config_var: keyName,
      has_value: config[keyName]
    }
    console.log("found: \t" + reply.msg);

  } else {
    reply = {
      alert: "config_var: '" + keyName + "' does not exist in config.json "
    }
    console.log("alert: \t" + reply.alert);
  }
  response.send(reply);
}
//////////////////////////////////



//////////////////////////////////
// /update_config/<existing_key>/<value> -->
//    update value(s) in config
app.get('/update_config/:var_to_update/:new_value', updateConfigVar);

function updateConfigVar(request, response) {
  console.log('here it is');
  var reply = 'here it is';
  response.send(reply);
}




// add key/value to config





/*
function displayConfig() {
  var configToString = JSON.stringify(config.show_config, null, 2);
  console.log('configToString = ' + configToString);
  console.log('config.show_config = ' + config.show_config);
  return config;
}
*/
