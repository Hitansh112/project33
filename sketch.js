var backgroundimg,snow,snowfall

function preload(){
snowfall=loadImage("snow4.webp")
backgroundimg=loadImage("snow3.jpg")
}

function setup() {
  createCanvas(800,400);
  snow=createSprite(200, 200, 50, 50);
  snow.addImage(snowfall)
  snow.scale=0.2
  snow.velocityY=2
}

function draw() {
  background(backgroundimg);  
  drawSprites();
}