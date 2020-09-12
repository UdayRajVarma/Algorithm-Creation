var movingRect,fixedRect;

function setup() {
  createCanvas(1200,800);
  movingRect = createSprite(600,200,50,50);
  movingRect.debug = true;
  movingRect.shapeColor = "green";
  movingRect.velocityY = 2;

  fixedRect = createSprite(600,400,50,50);
  fixedRect.debug = true;
  fixedRect.shapeColor = "green";
  fixedRect.velocityY = -2;
}

function draw() {
  background(0,0,0);
  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2
   && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 ){
    movingRect.velocityX = movingRect.velocityX * (-1);
    fixedRect.velocityX = fixedRect.velocityX * (-1);
  }  
  if(movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2
    && fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2 ){
     movingRect.velocityY = movingRect.velocityY * (-1);
     fixedRect.velocityY = fixedRect.velocityY * (-1);
   }  
  drawSprites();
  }