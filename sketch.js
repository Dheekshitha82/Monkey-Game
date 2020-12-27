
var monkey , monkey_running, monkeyImage
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score
var survivalTime

function preload() {
  monkey_running =  loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}



function setup() {
  createCanvas(600,600)
  monkey = createSprite(80,315,20,20)
  monkey.addAnimation("moving", monkey_running)
  monkey.scale = 0.1
  
  ground = createSprite(400, 350, 900, 10)
  ground.velocityX=-4
  ground.x = ground.width/2
  // console.log(ground.x) 
  bananaGroup = createGroup();
  obstacleGroup = createGroup();
  survivalTime = 0;
  score = 0;
}


function draw() {
  background(300)
  // if(keyDown("space")){
  //   monkey.velocityY = -5
  // }
  // monkey.velocityY +=0.5

  ground.velocityX = 0;
  monkey.velocityY = 0
  //monkey.velocityY = monkey.velocityY + 10;

  //jump when the space key is pressed
  if (keyDown("space") && monkey.y >= 100) {
    monkey.velocityY = -25;
  }
  if (monkey.y < 315) {
    monkey.velocityY += 10;
  }
  // console.log("monkey.x: " + monkey.x + ", monkey.y: " + monkey.y);
  spawnBananas();
  spawnObstacles();
  
  /*
  if ( bananaGroup.isTouching(monkey) ) {
    bananaGroup.destroyEach();
    score = score + 1;
  }
  */
  
  stroke("black");
  textSize(20);
  fill("black");
  text("Score: " + score, 400, 50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("SurvivalTime: " + survivalTime, 100, 50);
  drawSprites();
}

function spawnBananas() {
  if (frameCount % 80 === 0) {
    banana = createSprite(600,165,10,40);
    banana.y = Math.round(random(120, 200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -4;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    //add each cloud to the group
    bananaGroup.add(banana);
  }
}

function spawnObstacles() {
  if (frameCount % 300 === 0) {
    obstacle = createSprite(600,165,10,40);
    obstacle.y = 320;
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -4;
    
    //add each cloud to the group
    obstacleGroup.add(obstacle);
  }
}
