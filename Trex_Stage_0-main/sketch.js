var trex,ground;
var groundImage,trex_running;
function preload(){
  groundImage=loadImage("ground2.png")
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
}
function setup() 
{
  createCanvas(400,400);
trex=createSprite(50,300,20,20)
ground=createSprite(200,350,400,20)
ground.shapeColor="yellow"
ground.addImage("ground",groundImage)
ground.x=ground.width/2
trex.addAnimation("running",trex_running)
}

function draw() 
{
background(51);

if(keyDown("space")){
  trex.velocityY=-6
}
//apply gravity to bring the trex down
trex.velocityY=trex.velocityY + 0.5
trex.collide(ground)

ground.velocityX=-2

if(ground.x<0){
  ground.x=ground.width/2
}

drawSprites()

}

