var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloudImage
var o1, o2, o3, o4, o5, o6 
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  cloudImage = 
    loadImage("cloud.png")
  
  o1 = loadImage("obstacle1.png")
  o2 = loadImage("obstacle2.png")
  o3 = loadImage("obstacle3.png")
  o4 = loadImage("obstacle4.png")
  o5 = loadImage("obstacle5.png")
  o6 = loadImage("obstacle6.png")
  
  groundImage = loadImage("ground2.png")
}

function setup() {
  createCanvas(600, 200);
  
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
}

function draw() {
  background(255);
  
  if(keyDown("space")) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //scoring
  var count = Math.round(frameCount/4);
  text("Score: "+ count,500 , 20);
  
  trex.collide(invisibleGround);
  spawnObstacles()
  spawnClouds()
  drawSprites();
}
function spawnClouds() {
  //write code here to spawn the clouds
  if (World.frameCount % 60 === 0) {
    var cloud = createSprite(600,188,40,10);
    cloud.y = Math.round( random(50,120));
    cloud.scale = 0.5;
    cloud.velocityX = -3;
    cloud.addImage("cloud", cloudImage)
    
     //assign lifetime to the variable
    cloud.lifetime = 200;
    
    //adjust the depth
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
  }}

function spawnObstacles() {
  if(World.frameCount % 60 === 0) {
    var obstacle = createSprite(600,170,10,40);
    obstacle.velocityX = -4;
    
    //generate random obstacles
    var rand = Math.round(random(1,6));
    switch(rand){
      case 1:obstacle.addImage("o1", o1)
        break
      case 2:obstacle.addImage("o2", o2)
        break
      case 3:obstacle.addImage("o3", o3)
        break
      case 4:obstacle.addImage("o4", o4)
        break
     case 5:obstacle.addImage("o5", o5)
        break
     case 6:obstacle.addImage("o6", o6)
        break
        
        
    }
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 150;
  }
}
  