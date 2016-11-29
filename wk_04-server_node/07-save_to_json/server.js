var express = require('express');
var app     = express();
var server  = app.listen(3000, listening);

function listening() {
  console.log('server starting on localhost/3000');
}

app.use(express.static('public'));


var words_array = {
  'first_word_in_array': 1,
  'second_word_in_array': 2,
  'third_word_in_array': 3
}


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
