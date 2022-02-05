let hue;

function setup(){
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  colorMode(HSB, 360, 100, 100, 100);
  rectMode(CENTER);
  noStroke();

}

function draw(){
  let sat = map(mouseY,0,windowHeight,0,100);
  background(0,0,sat);
  hue = map(mouseX, 0, width, 0, 360);
  linearGradient(
    width/2-200, height/2-200, //Start point
    width/2+200, height/2+200, //End point
    color(hue+70, 100, 100, 100), //Start color
    color(hue, 100, 100, 100), //End color
  );
  ellipse(width/2,height/2, mouseX+1,mouseX+1);
  //rect(0, 0, windowWidth, windowHeight);
}

function linearGradient(sX, sY, eX, eY, colorS, colorE){
  let gradient = drawingContext.createLinearGradient(
    sX, sY, eX, eY
  );
  gradient.addColorStop(0, colorS);
  gradient.addColorStop(1, colorE);
  drawingContext.fillStyle = gradient;
}

