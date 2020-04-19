var tool;

function setup() {
  createCanvas(800,400);
 tool= createSprite(400, 200, 50, 50);
 tool.shapeColor="white";
}

function draw() {
  background(255,255,255);  
  tool.x=mouseX;

  if (tool.x<200){
background(0,0,0);
  }
  if (tool.x>200 && tool.x<400){
background(0,0,70);
  }
  if (tool.x>400 && tool.x<600){
    background (0,0,150);
  }
  if (tool.x>600 && tool.x<800){
    background(0,0,255);
  }


  drawSprites();
}