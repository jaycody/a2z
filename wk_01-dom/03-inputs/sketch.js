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

var slider1;
var input;
var nameP;

function setup() {
  canvas = createCanvas(500,500);
  canvas.position(window.innerWidth*.3,window.innerHeight*.3);
  button = createButton('change rect color');
  button.mousePressed(changeColor);
  
  buttonCanvas = createButton('move canvas');
  buttonCanvas.mousePressed(changeCanvasPos);
  
  buttonBackground = createButton('change bgcolor');
  buttonBackground.mousePressed(changeBgColor);
  
  buttonAllThree = createButton('select All');
  buttonAllThree.mousePressed(allThree);
  
  slider1 = createSlider(0,255,150);
  slider1.position(window.innerWidth*.05, window.innerHeight*.9);
  
  input = createInput('this text appears on the canvas');
  input.position(window.innerWidth*.05, window.innerHeight*.8);
  input.size(200,20);
  
  nameP = createP('this is a createP paragraph');
  
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
  //background(bgcolor);
  fill(rectR,rectG,rectB);
  rect(x, y,50,50);
  fill(slider1.value(), 255-slider1.value(), 0);
  ellipse(y, x, slider1.value(), slider1.value());
  x = x + random(-5,5);
  y = y + random(-5,5);
  x = constrain(x, 0, width*.8);
  y = constrain(y, 0, height*.8);
  fill(0);
  textSize(22);
  text(input.value(), 10, height*.8);
  
  nameP.html(input.value());
  
}