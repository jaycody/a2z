var canvas;
var CANVAS_WIDTH;
var CANVAS_HEIGHT = 250;
var x = 100;
var y = 100;
var counter = 0;
var rectR = 255;
var rectG = 0;
var rectB = 255;
var button;

var bgcolor = 150;

var slider1;
var input;
var nameP;

function setup() {
  var CANVAS_WIDTH = window.innerWidth;
  canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  canvas.position(0,window.innerHeight*.42);
  button = createButton('change rect color');
  button.mousePressed(changeColor);

  slider1 = createSlider(0,255,150);
  slider1.position(window.innerWidth*.05, window.innerHeight*.9);
  
  input = createInput('this text appears on the canvas');
  input.position(window.innerWidth*.05, window.innerHeight*.8);
  input.size(200,20);
  
  nameP = createP('this is a createP paragraph');
  
}

function changeColor(){
  rectR = random(255);
  rectG = random(255);
  rectB = random(255);
  slider1.value(rectR);
  
}

function changeBgColor(){
  bgcolor = random(255);
}

function draw() {
  //clear();
  //button.mousePressed(changeColor());
  background(255-rectB);
  fill(slider1.value(), 255-slider1.value(), 0);
  ellipse(y, x, slider1.value(), slider1.value());
  fill(rectR,rectG,rectB);
  rect(x, y,50,50);
  x = x + random(-5,5);
  y = y + random(-5,5);
  x = constrain(x, 0, width*.8);
  y = constrain(y, 0, height*.8);
  fill(0);
  textSize(22);
  text(input.value(), 10, height*.8);
  
  nameP.html(input.value());
  
}