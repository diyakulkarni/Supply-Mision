var helicopterIMG, helicopterSprite, packageSprite,packageIMG,boxSprite,box1Sprite;
var packageBody,ground,box;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
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

	boxSprite = createSprite(width/2,170,200,20);
	boxSprite.shapeColor =('red');
	
	box1Sprite = createSprite(width/2,170,100,20);
	box1Sprite.shapeColor = ('red');

	engine = Engine.create();
	world = engine.world;

	boxBody = Bodies.rectangle(width/2,650, 200,20,{ isStatic:true});
	World.add(world,boxBody);

	box1Body = Bodies.rectangle(width/2,650,100,20,{isStatic:true});
	World.add(world,box1Body);

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.7, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  boxSprite.x = boxBody.position.x;
  boxSprite.y = boxBody.position.y;
  box1Sprite.x = box1Body.position.x;
  box1Sprite.y = box1Body.position.y;
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	 packageSprite.x = packageBody.position.x;
	 packageSprite.y = packageBody.position.y;
	 Matter.Body.setStatic(packageBody,false);
    // Look at the hints in the document and understand how to make the package body fall only on
    
  }
}

function display(){
	boxSprite.display();
	box1Sprite.display();

}



