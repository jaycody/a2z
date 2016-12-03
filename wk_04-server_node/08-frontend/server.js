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
app.get('/update_config/:var_to_update/:new_value?', updateConfigVar);

function updateConfigVar(request, response) {
  var var_to_update = request.params.var_to_update;
  var new_value     = Number(request.params.new_value);
  var reply;
  console.log("\n...searching for config_var: '" + var_to_update + "'");

  // check for non-existent var_to_update
  if (!config[var_to_update]){
    reply = {
      alert: "config_var: '" + var_to_update + "' does not exist in config.json "
    }
    console.log(reply.alert);
  }

  // check for invalid input
  else if (isNaN(new_value) || (!typeof(new_value) === 'number')) {
    reply = {
      alert: request.params.new_value + " is not a valid input"
    }
    console.log(reply.alert);
  }

  // if var_to_update exists AND if new_value is valid, then
  else {
    var previous_value = config[var_to_update];
    config[var_to_update] = new_value;
    reply = {
      msg: "config_var: '" + var_to_update + "' has new value: " + config[var_to_update],
      var_to_update: var_to_update,
      new_value: new_value,
      previous_value: previous_value
    }
    console.log(reply.msg);
  }

  response.send(reply);
}
//////////////////////////////////



//////////////////////////////////
// /update_config/add/<new_key>/<new_value> -->
//    add new config_var
app.get('/update_config/add/:var_to_add/:val_to_add', addConfigVar);

function addConfigVar(request, response) {
  var var_to_add = request.params.var_to_add;
  var val_to_add = Number(request.params.val_to_add);
  var reply;

  config[var_to_add] = val_to_add;
  var configToString = JSON.stringify(config, null, 2);
  //to file config.json, wite configToString, then callback with finishWrite
  fs.writeFile("config.JSON", configToString, finishWrite);

  function finishWrite() {
    console.log('added config_var: ' + var_to_add);
    reply = {
      var_added: var_to_add,
      val_given: val_to_add
    }
    response.send(reply);
  }
}
//////////////////////////////////





/*
//////////////////////////////////////////
// add new word to json
app.get('/add_to_json/:next_word', addToJson);

function addToJson(request, response) {
  var data = request.params;
  var word = data.next_word;
  var reply;
  words[word] = 10;
  var wordsToString = JSON.stringify(words, null, 2);
  fs.writeFile("words.json", wordsToString, finishWrite);  //to file, with info, then callback

  function finishWrite() {
    console.log('all set');
    reply = {
      word: word,
      score: words[word],
      status: 'success'
    }
    response.send(reply);
  }
}
//////////////////////////////////////////
*/


/*
function displayConfig() {
  var configToString = JSON.stringify(config.show_config, null, 2);
  console.log('configToString = ' + configToString);
  console.log('config.show_config = ' + config.show_config);
  return config;
}
*/
