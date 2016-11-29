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
4. save data anytime a word gets added to the 'words' object
5. sync vs async AND readFile vs readFileSync
      sync is a BLOCKING line of code (like when loading data from the server)
      async uses callbacks while waiting for other connections.  (like when writing info back to the file)
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

//////////////////////////////////////////
// JSON db
app.get('/alljson', showAllJson);
app.get('/add_to_json/:next_word', addToJson);

// localhost:3000/alljson
function showAllJson(request, response) {
  response.send(words);
}

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



//////////////////////////////////////////
// temp instance context db
app.get('/all', showAll);
app.get('/add_to_words_array/:fourth_word', addToWordsArray);

// localhost:3000/all
function showAll(request, response) {
  response.send(words_array);
}

// localhost:3000/add_to_words_array/the_fourth_word
function addToWordsArray(request, response) {
  var data = request.params;
  var word_to_add = data.fourth_word;
  words_array[word_to_add] = 4;
  response.send(words_array);
}
