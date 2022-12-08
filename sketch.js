
var trex ,trex_running;
var ground;
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");

}

function setup(){
  createCanvas(600,200)
 //create a trex sprite
 trex = createSprite(50,160,20,50);
trex.addAnimation("running",trex_running);
//to reduce the size of trex
trex.scale = 0.5;
trex.x=50;
 //create ground 
ground = createSprite(200,180,400,20);
}

function draw(){
  background("white")
  //to make the trex jump 
  if(keyDown("space")){
    trex.velocityY=-10;
  }
  //to add gravity to trex 
  trex.velocityY=trex.velocityY + 0.5;
  //to make the trex stand on the ground 
  trex.collide(ground);
 drawSprites();
}
