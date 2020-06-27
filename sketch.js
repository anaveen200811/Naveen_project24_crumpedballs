var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground1,ground,dustbin1,dustbin2,dustbin3,paper;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	World.add(world, packageBody);
	

	//Create a Ground
	ground1 = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground1);


	Engine.run(engine);
	ground = new Ground(600,height,1200,20);
    dustbin1 = new Dustbin(600,height-40,200,20);
	dustbin2 = new Dustbin(500,height-100,20,120);
	dustbin3 = new Dustbin(700,height-100,20,120);
	paper = new Paper(0, 350, 20);

}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper.display();
  keyPressed();
  drawSprites();
}
function keyPressed() {
	if (keyCode === UP_ARROW ) {
		Matter.Body.applyForce(paper.body,paper.position,{x:2600,y:-285});
		
	}
	
}