
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball

var ground;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
 
	//Create the Bodies Here.
     
	 var ball_options={
		isStatic : false,
		restitution:0.3,
		frction:0,
		density:1.2
	 }
	 ball = Matter.Bodies.circle(140,30,20,ball_options)
	 World.add(world,ball);

	 ground =new Ground(width/2,670,width,20);
	 leftSide =new Ground(1100,600,20,120);
	 rightSide =new Ground(1450,600,20,120)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ellipse(ball.position.x,ball.position.y,20);
  ground.show();
  leftSide.show();
  rightSide.show();
  drawSprites();
 
}
function KeyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:+2,y:-2})

	}
}



