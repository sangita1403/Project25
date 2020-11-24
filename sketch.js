
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 
var engine, world;
var paper,dustbin1,dustbin2,dustbin3;
function preload()
{
	
}

function setup() {
	 createCanvas(1600, 500);


	 engine = Engine.create();
   world = engine.world;
	 ground=new Ground(600,490,2000,20)
	 paper=new Paper (1500,480,38)
	//  boxSide1 = Bodies.rectangle(480,375,20,210)
  //  boxSide2 = Bodies.rectangle(270,375,20,210)
  //  boxSide3 = Bodies.rectangle(375,470,190,20)
   dustbin1 = new Dustbin(375,340,190,280)

	Engine.run(engine)
}


function draw() {
  rectMode(CENTER);
  background(225);
  // dustbin1.display();
  // dustbin2.display();
  // dustbin3.display();
  dustbin1.display();
  paper.display();
  ground.display();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
	   Matter.Body.applyForce(paper.body,paper.body.position,{x:-85,y:-85})
	 }
   }

