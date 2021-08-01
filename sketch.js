//Declaration of variable
var trex;
var trexRunning;
var ground;
var edges;
var groundImage
//loadAnimation, loadImage,loadSound
function preload(){
  
  trexRunning=loadAnimation("trex1.png","trex3.png","trex4.png")
groundImage=loadImage("ground2.png")
}

//Creating anything
function setup(){
  createCanvas(600,200);

  //Create Trex Srpite
  trex=createSprite(50,160,20,50);
  trex.addAnimation("running",trexRunning);
  trex.scale=0.5;
 
  edges=createEdgeSprites();

  ground=createSprite(200,180,400,20)
  ground.addImage("groundb",groundImage)
 
}

function draw(){
  background("black");

  //making the ground move left
  ground.velocityX=-3;

  if(keyDown("space")){
    trex.velocityY=-10;
  }
  //adding gravity
  trex.velocityY=trex.velocityY+0.8;
 

  //0-left, 1-right, 2-top, 3-bottom
  //trex.collide(edges[3]);

  trex.collide(ground);

  //infinte scrolling effect
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  
  drawSprites();
}
