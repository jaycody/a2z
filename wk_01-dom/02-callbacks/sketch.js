var h1;
var canvas;
var x = 100;
var y = 100;
var counter = 0;
var rectR = 255;
var rectG = 0;
var rectB = 255;
var button;
var buttonCanvas;

var bgcolor = 150;


function setup() {
  canvas = createCanvas(300,300);
  canvas.position(window.innerWidth/2,window.innerHeight/2);
  button = createButton('change rect color');
  button.mousePressed(changeColor);
  
  buttonCanvas = createButton('move canvas');
  buttonCanvas.mousePressed(changeCanvasPos);
  
  buttonBackground = createButton('change bgcolor');
  buttonBackground.mousePressed(changeBgColor);
  
  buttonAllThree = createButton('select All');
  buttonAllThree.mousePressed(allThree);
}
function allThree(){
  changeCanvasPos();
  changeColor();
  changeBgColor();
}

function mousePressed(){
}

function changeCanvasPos(){
  
  canvas.position(random(window.innerWidth*.5, window.innerWidth-150),random(window.innerHeight-150));
}

function changeColor(){
  rectR = random(255);
  rectG = random(255);
  rectB = random(255);
  
}

function changeBgColor(){
  bgcolor = random(255);
}

function draw() {
  //clear();
  //button.mousePressed(changeColor());
  background(bgcolor);
  fill(rectR,rectG,rectB);
  rect(x, y,50,50);
  x = x + random(-5,5);
  y = y + random(-5,5);
  x = constrain(x, 0, width*.8);
  y = constrain(y, 0, height*.8);
  
}