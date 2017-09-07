// landing page index
//    lists links to exercises from a text file


var exercises;

function preload() {
  exercises = loadStrings("exercise-list.txt", readExercises);
}

function setup() {
  noCanvas();


}

function readExercises(exercises) {
  console.log(exercises);

}
