var h = 0;
var s = 0;
var b = 0;

var rectStep = 45;


function setup() {
  createCanvas(400,400);

}

function draw() {
  background(255);
  //for interactive: rectStep = max(45, mouseX);


  colorMode(HSB, 360,100,100);
  for(var x=0; x < width; x +=rectStep){
    for(var y =0; y < height; y+=rectStep){
    noStroke();
    fill(h+x % 360,100,100);
    rect(x,y,rectStep,height);
    }

  }
}

function mousePressed(){
    h = random(360);
}