const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1500, 700);
    engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	dustbin1 = new Dustbin(1100,530,200,15);
  dustbin2 = new Dustbin(1000,480,15,100);
  dustbin3 = new Dustbin(1200,480,15,100);
  ground1 = new Ground(750,550,1500,15);
  ball = new Ball(100,520,15);
  }
function draw() {
  rectMode(CENTER);
  background(0);
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground1.display();
  ball.display();
 }
function keyPressed(){
  if(keyCode=== UP_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:50,y:-50});
  }
}
