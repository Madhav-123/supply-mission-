
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,basket,basket2,basket3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	basket=createSprite(width/2,height-50,width/4,20)
	basket2=createSprite(width/2.7,height-90,20,100)
	basket3=createSprite(width/1.6,height-90,20,100)
	basket.shapeColor="red"
	basket2.shapeColor="red"
	basket3.shapeColor="red"

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , { isStatic:true,restitution:0.7});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 ,{isStatic:true});
 	World.add(world,ground);

	 basket=Bodies.rectangle(width/2,height-45,width/4,20,{isStatic:true})
    World.add(world,basket);

	basket2=Bodies.rectangle(width/2.7,height-90,20,100,{isStatic:true})
    World.add(world,basket2);

	basket3=Bodies.rectangle(width/1.6,height-90,20,100,{isStatic:true})
    World.add(world,basket3);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody,false);
    
  }
}



									