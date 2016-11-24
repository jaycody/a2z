/* Objective of this API
- look at all words
- add a word
- search for words
*/

// take in data from the user and put it into the objecta as a key value pair
//WRITE ALL REPLIES AS OBJECTS
// step1 of the API: EXPOSE THE DATA

// my basic sentiment analysis data
var words = {
  "rainbows": 30,
  "beans":    3000,
  "bullets":  99999
}


console.log('server starting...');
console.log(words);

var express = require('express');
var app     = express();
var server  = app.listen(3000, listening);


function listening() {
  console.log('listening on port 3000');
}

app.use(express.static('public'));


// step1 for creating an API: expose the data
// make an api request to my api
app.get('/all', sendAll);

function sendAll(request, response) {
  response.send(words)
}

//user add a content to database
app.get('/add/:word/:score', addWord);

function addWord(request, response) {
  var data  = request.params;
  var word  = data.word;
  var score = Number(data.score);
  var reply;
  // add validation in case some params are left off of the URL
  // make soome parameter optional, like using the '?' for the last parameters
  if (!score) {
    reply = {
      msg: "score is required"
    }
  }
  else {
    //take incoming params an assing them to the word json objct
    // take in data from the user and put it into the objecta as a key value pair
    words[word] = score;

    reply = {
      msg: "thank you for your wurd-up"
    }
  }
  //WRITE ALL REPLIES AS OBJECTS
  response.send(reply);
}
