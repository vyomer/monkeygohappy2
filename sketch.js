
var monkey , monkey_running,ground,bground,bgimage;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
  bgimage=loadImage("jungle.jpg");
 
}



function setup() {
  createCanvas(600,600)
  
  bground=createSprite(200,200,400,400);
  bground.shapeColor="cyan";
  bground.velocityX=3;
  bground.addImage("jungle",bgimage);
  
  
monkey=createSprite(80,400,20,20);
monkey.addAnimation("moving",monkey_running);
monkey.scale=0.05; 
  
ground=createSprite(400,420,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  ground.visible=false;
  
  FoodGroup=createGroup();
  obstacleGroup=createGroup();
  
  score=0;
}


function draw() {
background("white");
  textSize(20);
  stroke("green");
  fill("green");
  
  if(bground.x<400){
    bground.x=200;
    bground.y=200;
bground.velocityX=3;
  }
  if(keyDown("space")){
    monkey.velocityY=-12;
    }
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  if (FoodGroup.isTouching(monkey)){
    score=score+2;
    FoodGroup.destroyEach();
    monkey.scale=monkey.scale+0.02;
  }
  if (obstacleGroup.isTouching(monkey)){
   monkey.scale=monkey.scale-0.02; 
   obstacleGroup.destroyEach(); 
  }
 
  food();
  obstacles();
drawSprites(); 
  text("SCORE : "+score,50,50);
}
function food(){
  if(frameCount%80===0)
{
 var banana=createSprite(500,165,10,40); 
   banana.y= Math.round(random(120,200));
  banana.velocityX = -3;
  banana.addImage(bananaImage);
  banana.scale=0.1;
  banana.lifetime=200;
  
  FoodGroup.add(banana);
}
}
function obstacles(){
   if (frameCount % 300 === 0){
   var obstacle = createSprite(500,400,10,40);
    obstacle.velocityX = -3;
     obstacle.addImage(obstacleImage);
     obstacle.scale=0.1;
     obstacle.lifetime=200;
     
     obstacleGroup.add(obstacle);
   }
}




