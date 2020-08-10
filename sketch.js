
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stone = new stone(100,500,50,50);
	ground = new Ground(400,675,800,50);
	sling = new SlingShot(stone.body,{x:104,y:533});
	m1 = new mango(700,375,50,50);
	m2 = new mango(600,300,50,50);
	m3 = new mango(650,340,50,50);
	m4 = new mango(560,300,50,50);
	m5 = new mango(470,340,50,50);
	m6 = new mango(760,340,50,50);
	m7 = new mango(780,390,50,50);
	tree = new tree(650,450,500,500);
	boy = new boy(170,600,200,250);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  ground.display();
  tree.display();
  boy.display();
  stone.display();
  sling.display();
  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  m6.display();
  m7.display();

  dc(stone,m1);
  dc(stone,m2);
  dc(stone,m3);
  dc(stone,m4);
  dc(stone,m5);
  dc(stone,m6);
  dc(stone,m7);

  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling.fly();
}

function keyPressed() {
    if(keyCode === 32) {
		Matter.Body.setPosition(stone.body, {x:100,y:500});
        sling.attach(stone.body);
    }
}

function dc(lstone,lmango) {
	s = lstone.body.position
	m = lmango.body.position

	var distance = dist(s.x, s.y, m.x, m.y);
	if(distance<lmango.width+lmango.width) {
		Matter.Body.setStatic(lmango.body,false);
	}
}



