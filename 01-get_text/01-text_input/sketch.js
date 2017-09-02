var input;


function setup() {
  noCanvas();

  // create the input box
  input = createInput();

  input.changed(newText);
}

function newText() {
  console.log(input.value());
}


/*
/////////
// NOTES
- all DOM elements have events connected to them



// NEW
createInput();
var.changed(function to call on change)
var.value(); in console

*/
