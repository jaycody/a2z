var r, g, b;

function setup() {
  createCanvas(300,100);
  background(60);

  // call your own API!!
  loadJSON("/show_config", gotData);
}



function gotData(config) {
  console.log(config);
  r = config.colorR;
  g = config.colorG;
  b = config.colorB;

}

function draw(config) {
  fill(r, g, b);
  ellipse(10,10,25,25);
}
