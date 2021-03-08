var bg,bgImage
var car,carImage
var cone,coneImage

function preload()  {
bgImage=loadImage("road.jpg")
carImage=loadImage("car.png")
coneImage=loadImage("cone.png")
}



function setup() {
createCanvas(650,500);
background("blue");
bg=createSprite(200,200,displayWidth,displayHeight);
bg.addImage(bgImage);
bg.scale=2.7
car=createSprite(150,400,70,50);
car.addImage(carImage)
car.scale=0.5

}

function draw() {
  background(0);  
  bg.velocityX=-3;
  if (bg.x<0){
    bg.x=bg.width/2
  }
  createCones();
  drawSprites();
}
function createCones(){
  if(frameCount%75===0){
cone=createSprite(650,475)
cone.addImage(coneImage);
cone.velocityX=-3
cone.scale=0.5
  }
}
