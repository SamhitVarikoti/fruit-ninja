var PLAY = 1;
var END = 0;
var gameState = 1;

var sword;

var score = 0;

var fruit1,fruit2,fruit3,fruit4;
var monster;

var gameOver;


function preload(){
  
  swordImage = loadImage("sword.png")
  
  fruit1 = loadImage("fruit1.png");
  fruit2 = loadImage("fruit2.png");
  fruit3 = loadImage("fruit3.png");
  fruit4 = loadImage("fruit4.png");
  
  monsterImage = loadImage("alien1.png");
  
  gameOverImage = loadImage("gameover.png");
  
 
}

function setup(){
  createCanvas(600,600);
  
  sword = createSprite(40,200,20,20);
  sword.addImage(swordImage);
  sword.scale = 0.7;
  
  fruitGroup = createGroup();
  enemyGroup = createGroup();
  
  /*gameOver = createSprite(300,100);
  gameOver.addImage(gameOverImage);
  gameOver.visible = false;*/
  
  
}

function draw(){
  background("lightblue");
  
 
  
  fill("white");
  textSize(20);
  text("score:" + score,250,20);
  
   
  
  if(gameState === PLAY){
    sword.y = World.mouseY;
    sword.x = World.mouseX;
    fruit();
    enemy();  
    if(fruitGroup.isTouching(sword)){
       fruitGroup.destroyEach();
       score = score + 2;
       }
     }
  
  if(enemyGroup.isTouching(sword)){
     gameState = END;
     }
  if(gameState === END){
     sword.x = World.mouseX;
     sword.y = World.mouseY;
     fruitGroup.setVelocityEach(0);
     fruitGroup.setLifetimeEach(0);
     enemyGroup.setVelocityEach(0);
     enemyGroup.setLifetimeEach(0);
     sword.addImage(gameOverImage);
     sword.x = 200;
     sword.y = 200;
     //gameOver.visible = true;
     }
  
  
  
  
drawSprites();
}
function fruit(){
  if(frameCount % 20 ===0){
     var fruit = createSprite(20,10,10,40);
     fruit.scale = 0.2;
     var rand = Math.round(random(1,4));
     switch(rand){
       case 1 :fruit.addImage(fruit1);
               fruit.x = 0;
               fruit.y = Math.round(random(10,590));
               fruit.velocityX = (6+score/4);
               break;
      case 2 : fruit.addImage(fruit2);
               fruit.x = 0;
               fruit.y = Math.round(random(10,590));
               fruit.velocityX = (6+score/4);
               break;
     case 3 : fruit.addImage(fruit3);
              fruit.x = 0;
              fruit.y = Math.round(random(10,590));
              fruit.velocityX = (6+score/4);
              break;
     case 4 : fruit.addImage(fruit4);
              fruit.x = 0;
              fruit.y = Math.round(random(10,590));
              fruit.velocityX = (6+score/4);
              break;
    default : break;
     }
       fruit.lifetime = 100;
       fruitGroup.add(fruit);
     }
}
function enemy(){
  if(frameCount % 200 === 0){
     monster = createSprite(400,200,20,20);
     monster.addAnimation("moving",monsterImage);
     monster.y = Math.round(random(100,300));
     monster.velocityX = -8;
     monster.lifetime = 50;
     enemyGroup.add(monster);
     }
}
