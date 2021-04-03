var people
var peoplegroup,gamestate=0

function preload(){


  people=loadImage("im.jpg") ;
  
  
  
  
  }

function setup() {
  createCanvas(displayWidth,displayHeight);
  //createSprite(400, 200, 50, 50);
  
  peoplegroup=createSprite (displayWidth/2,displayHeight/2,displayWidth,displayHeight)
  peoplegroup.visible=false
  peoplegroup.addImage(people)
  peoplegroup.scale=3
}



function draw() {
  background(255,255,255);  

  if(gamestate==0){
    peoplegroup.visible=true
  }

  drawSprites();
}