/* This API shall:
- PERSISTENCE: save to json: persistance between server instances
- save to json on change
- reload json on startup
- save to temp var words object

STEPS to implement 'save to json' functionality
1. create the words.json file
2. in server.js, load from the json file using 'fs' node module (file system API)
    - fsReadFile vs fsReadFileSync
3. parse incoming fs info with JSON.parse(data)
*/

// import from json
var fs = require('fs');
var data = fs.readFileSync('words.json');
var words = JSON.parse(data);
console.log(words);  // reads the raw data (looks like hex '<Buffer 7b 0a 20 20....')

// hardcoded DB
var words_array = {
  'first_word_in_array': 1,
  'second_word_in_array': 2,
  'third_word_in_array': 3
}

var express = require('express');
var app     = express();
var server  = app.listen(3000, listening);

function listening() {
  console.log('server starting on localhost/3000');
}

app.use(express.static('public'));


app.get('/all', showAll);
app.get('/add_to_words_array/:fourth_word', addToWordsArray);

function addToWordsArray(request, response) {
  var data = request.params;
  var word_to_add = data.fourth_word;
  words_array[word_to_add] = 4;
  response.send(words_array);
}

function showAll(request, response) {
  response.send(words_array);
}
