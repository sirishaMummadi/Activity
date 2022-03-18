var SERVE;
var PLAY;
var END;
var GameState=SERVE;

var road1=createSprite(200,200);
road1.scale=0.9


var road=createSprite(200,200,400,10);
road.setAnimation("asphalt-road.jpg_1");
road.scale=2.4;
road.visible=false;

var care=createSprite(200,400,10,10);
care.setAnimation("car_red_1");
care.visible=false;

care.setCollider("rectangle",0,0,75,130);
//care.debug = true;

var carGroup=createGroup();

var score;
//score+Math.round(score++)

function draw() {
  background("white");
  
  if (GameState===SERVE){
    road1.setAnimation("porsche");
    carGroup.setVelocityYEach(0);
    carGroup.velocitY=0;
    if (keyDown("s")){
      GameState=PLAY;
      carGroup.setVelocityYEach(0);
      road1.visible=false;
   road.visible=true;
    care.visible=true;
      text(score++,280,40);
      score.visible=true;
    }
  }
  
  



if (GameState===PLAY){
  
  

care.velocityY=-1;

if (care.y===300){
  care.velocityY=0;}


 
  if (keyDown("left")){
    care.velocityX=-2;
  }
  else{
    if (keyDown("right")){
    care.velocityX=2;
  }
   else{
    care.velocityX=0;
  }
  }
  
    caro();
   
   carGroup.setVelocityYEach(5);
  
  
 console.log(World.frameCount); 
}
 
 if (carGroup.isTouching(care)){
   carGroup.setVelocityYEach(0);
   care.velocitX=0;
   carGroup.velocitY=0;
   carGroup.setLifetimeEach(-1);
 }
  
  drawSprites();

}


function caro(){
  if(World.frameCount % 150===0 && GameState===PLAY){
    var car=createSprite(randomNumber(30,350),-70,10,10);
    car.setAnimation("car"+randomNumber(1,4));
    car.velocityY=50;
    car.setCollider("rectangle",0,0,70,120);
    car.lifetime=100;
    //car.debug = true;
    
    carGroup.add(car);
  
      
    }
    
    
  
  
    
    
    
  
}
