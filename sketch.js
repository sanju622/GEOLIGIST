
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

	//Create the Bodies Here.
	plane = new Plane(600,height,1200,20)

	stone = new stone(700,320,100,100)
	iron = new Iron(300,350);
	rubber = new Rubber(900,450,70)
	hammer = new Hammer(10,100)

	sand1 = new Sand(505,450,10)
	sand2 = new Sand(510,450,10)
	sand3 = new Sand(515,450,10)
	sand4 = new Sand(520,450,10)
	sand5 = new Sand(525,450,10)
	sand6 = new Sand(530,450,10)
	sand7 = new Sand(535,450,10)
	sand8 = new Sand(540,450,10)
    sand9 = new Sand(545,450,10)
    sand10 = new Sand(550,450,10)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  plane.Display();
  stone.Display();
  iron.Display();
  rubber.Display();
  hammer.Display();
  sand1.Display();
  sand2.Display();
  sand3.Display();
  sand4.Display();
  sand5.Display();
  sand6.Display();
  sand7.Display();
  sand8.Display();
  sand9.Display()
  sand10.Display();
  background(0);

  
  drawSprites();
 
}



