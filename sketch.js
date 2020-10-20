
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground;
var box1;
var box2;
var box3;
var ball;

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
	
	ground = new Ground(width/2,670,width,20);
	box1 = new Box(width/2+670,565,20,180);
	box2 = new Box(1390,585,160,150);
	box3 = new Box(width/2+520,565,20,180);
  ball = new Paper(200, 450, 70);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(225);
  
  ground.display();
  ball.display();
  box2.display();
  box3.display();
  box1.display(); 
}

function keyPressed()
    {
      if (keyCode === UP_ARROW)
      {
         Matter.Body.applyForce(ball.body, ball.body.position,{x:300,y:-300})
      }
    }

