// landing page index
//    lists links to exercises from a text file


var exercises;
var link1;
var sectionTitle;

var links = []; // array to hold all exercises

function preload() {
  exercises = loadStrings("exercise-list.txt", readExercises);
}

function setup() {
  noCanvas();

  /////
  // create section header from 1 element in the exercises list
  sectionTitle = createElement('h2', exercises[0]);


  //////
  // create and display p element for each exercise in the exercise list
  for (var i = 1; i < exercises.length; i++) {
      links[i] = createP("<a href='" + exercises[i] + "'>" + exercises[i] + "</a>");
    }
}

function draw() {

}

function readExercises(exercises) {
  console.log(exercises);


}
