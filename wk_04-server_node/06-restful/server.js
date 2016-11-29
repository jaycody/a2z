/* This API features:
- look at all words
- add a word
- search for a word

TIPS:
// step1 for creating an API: expose the data
// make an api request to my own api
// take in data from the user and put it into the objecta as a key value pair
// WRITE ALL REPLIES AS OBJECTS
// step1 of the API: EXPOSE THE DATA
// Express auto formats output as JSON
// get request appended with '?' means last parameter is OPTIONAL
// my basic sentiment analysis data
*/

var linkString = "<h3>API requests:</h3><ul>" +
"<li><a href='http://localhost:3000'>localhost:3000</a></li>" +
"<li><a href='http://localhost:3000/all'>localhost:3000/all</a></li>" +
"<li><a href='http://localhost:3000/add/sunflowers'>localhost:3000/add/sunflowers</a></li>" +
"<li><a href='http://localhost:3000/add/palabra/200'>localhost:3000/add/palabra/200</a></li>" +
"<li><a href='http://localhost:3000/search/beans'>localhost:3000/search/beans</a></li>" +
"</ul>";

var words = {
  "rainbows": 30,
  "beans":    3000,
  "bullets":  99999
}

console.log('server starting...');
console.log(words);

var express = require('express');
var app     = express();

// server setup
var server  = app.listen(3000, listening);
function listening() {
  console.log('listening on port 3000');
}

// serve public
app.use(express.static('public'));

// define route with parameters
// show ALL words. Trigger sendAll response with simple get request
app.get('/all', sendAll);
function sendAll(request, response) {
  response.send(words);
  //response.send(linkString);
}

// handle error case: API without score
//app.get('/add/:word', addWord);


// route where user can insert data
app.get('/add/:word/:score?', addWord);  // '?' means last parameter is OPTIONAL
function addWord(request, response) {
  var reply;
  var data  = request.params;
  var word  = data.word;
  if (data.score){
    var score = Number(data.score);
  }

  // add validation in case some params are left off of the URL
  // make soome parameter optional, like using the '?' for the last parameters
  if (!data.score) {
    reply = {
      msg: "score is required"
    }
  }
  else {
    //take incoming params an assing them to the word json objct
    // take in data from the user and put it into the objecta as a key value pair
    words[word] = score;

    reply = {
      msg: "thank you for your wurd-up",
    }
  }
  //WRITE ALL REPLIES AS OBJECTS
  response.send(reply.msg + linkString);
}


// search route that allows user to query for word and its score
app.get('/search/:word', searchWord);

function searchWord(request, response) {
  var data = request.params;
  var word = request.params.word;
  var reply;

  if (words[word]) {
    reply = {
      msg: "search term: '" + word + "' has a score of: " + words[word]
    }
  } else {
    reply = {
      msg: "search term: '" + word + "' does not appear in this list"
    }
  }
  response.send(reply.msg + linkString);
}
