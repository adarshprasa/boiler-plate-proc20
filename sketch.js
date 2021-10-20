var astronaut
var sleep
var brush 
var gym 
var eat 
var drink
var move

function preload(){
  sleep = loadAnimation("images/sleep.png");
  brush = loadAnimation("images/brush.png");
  gym   = loadAnimation("images/gym1.png","images/gym2.png","images/gym11.png","images/gym12.png");
  eat   = loadAnimation("images/eat1.png","images/eat2.png");
  drink = loadAnimation("images/drink1.png","images/drink2.png");
  move  = loadAnimation("images/move.png","images/move1.png")
  backgroundimg = loadImage("images/iss.png");

}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping",sleep)
  astronaut.scale =0.1
}

function draw() {
  background(backgroundimg);
  drawSprites();

  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing",brush);
    astronaut.changeAnimation("brushing");
    astronaut.y=350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  } 

  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("eating",eat);
    astronaut.changeAnimation("eating");
    astronaut.y=350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("gyming",gym);
    astronaut.changeAnimation("gyming");
    astronaut.y=350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("drinking",drink);
    astronaut.changeAnimation("drinking");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("SPACE")){
    astronaut.addAnimation("moving",move);
    astronaut.changeAnimation("moving");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  
}
