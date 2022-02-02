var texa, texb, texm, texm1, texm2;
var ry, h;

function preload(){
  texa=loadImage("https://latex.codecogs.com/png.image?%5Cdpi%7B300%7D%20%5Ccolor%7Bwhite%7DA");
  texb=loadImage("https://latex.codecogs.com/png.image?%5Cdpi%7B300%7D%20%5Ccolor%7Bwhite%7DB");
  texm=loadImage("https://latex.codecogs.com/png.image?%5Cdpi%7B300%7D%20%5Ccolor%7Bwhite%7DM");
  texm1=loadImage("https://latex.codecogs.com/png.image?%5Cdpi%7B300%7D%20%5Ccolor%7Bwhite%7Dm_1");
  texm2=loadImage("https://latex.codecogs.com/png.image?%5Cdpi%7B300%7D%20%5Ccolor%7Bwhite%7Dm_2");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  fill(0,100,180);
  ry=1;
  rx=0;
	h=height;
}

function draw() {
  background(50);
  noStroke();
  if(mouseIsPressed){
    ry+=(mouseX-pmouseX)*0.01;
    //rx-=(mouseY-pmouseY)*0.01;
  } 
  rotateY(ry);
	
  push();
	//mirror plane
  plane(h/1.5,h/1.5,250);
  fill(255,0,0);
  
  push();
	//point A
  translate(h/4,0,h/4);
  sphere(h/80);
  pop();
  
  push();
	//point B
  translate(-h/8,0,h/6);
  sphere(h/80);
  pop();
  
  push();
	//point M
  translate(0,-h/8,0);
  sphere(h/80);
  pop();
  
  push();
  fill(160);
  
  push();
	//weight m1
  translate(h/4,h/5,h/4);
  cylinder(h/40,h/38);
  pop();
  
  push();
	//weight m2
  translate(-h/8,h/6,h/6);
  cylinder(h/40,h/38);
  pop();
  pop();
  
  push();
	//strings
  stroke(255);
  line(h/4,0,h/4,0,-h/8,0);
  line(-h/8,0,h/6,0,-h/8,0);
  line(h/4,0,h/4,h/4,h/5,h/4);
  line(-h/8,0,h/6,-h/8,h/6,h/6);
  pop();
  
  push();
	//A
  translate(h/4,-h/38,h/4);
  //rotateX(-rx);
  rotateY(-ry);
  texture(texa);
  plane(h/38,h/38);
  pop();
  
  push();
	//B
  translate(-h/8,-h/38,h/6);
  //rotateX(-rx);
  rotateY(-ry);
  texture(texb);
  plane(h/38,h/38);
  pop();
  
  push();
  translate(0,-h/8-h/38,h/38);
  //rotateX(-rx);
  rotateY(-ry);
  texture(texm);
  plane(h/30,h/38);
  pop();
  
  push();
	//m1
  translate(h/4-h/38,h/5-h/38,h/4);
  //rotateX(-rx);
  rotateY(-ry);
  texture(texm1);
  plane(h/20,h/40);
  pop();
  
  push();
	//m2
  translate(-h/8-h/38,h/6-h/38,h/6);
  //rotateX(-rx);
  rotateY(-ry);
  texture(texm2);
  plane(h/20,h/40);
  pop();
  
  pop();
}
