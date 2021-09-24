const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var ground,tree,boy,stone,mango;
var mango1,mango2,mango3,mango4;

function preload()
{
	
	stone = loadImage("Images/Images/stone.png");
	tree = loadImage("Images/Images/tree.png");
	mango= loadImage("Images/Images/mango.png")
}

function setup() {
	var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

	

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20);
	platform = new Ground(150, 305, 300, 170)
	launcher = new Launcher(stone.body,{x:200, y:100});
	mango1 = new Mango(700,320,70,70);
    mango2 = new Mango(800,320,70,70);
	mango3 = new Mango(900,320,70,70);
    mango4 = new Mango(1000,320,70,70);
	tree=new Tree(200,300,10,10)
	Engine.run(engine);
  
}


function draw() {
	background(backgroundImg);
	Engine.update(engine);
    strokeWeight(4);
    
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  stone.display();
  launcher.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
detectollision(stone,mango1);
detectollision(stone,mango2);
detectollision(stone,mango3);
detectollision(stone,mango4);
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
    launcher.fly();
}

function keyPressed(){
	if(keyCode===32)
	Matter.Body.setPosition(stone.body, {x:235,y:420})
	launcher.attach(stone.body)
}
function detectollision(stone,mango){
	mangoBodyPosition=mango.body.position
	stoneBodyPosition=stone.body.position

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=mango.r+stone.r){
		Matter.Body.serState(mango.body,false)
	}
}
