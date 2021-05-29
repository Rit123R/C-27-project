
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bobObject1,bobObject2,bobobject3,bobOject4,bobObject5;
var world;
var roofObj;
var rope1,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1=new Bob(160,250,30,);
	bobObject2=new Bob(200,450,40);
	bobObject3=new Bob(200,450,40);
	bobObject4=new Bob(200,450,40);
	bobObject5=new Bob(200,450,40);
	rope1=new rope(bobObject1.body,roofObj.body,-bobDaimeter*2,0)
	rope2=new rope(bobObject2.body,roofObj.body,-bobDaimeter*2,0)
	rope3=new rope(bobObject3.body,roofObj.body,-bobDaimeter*2,0)
	rope4=new rope(bobObject4.body,roofObj.body,-bobDaimeter*2,0)
	rope5=new rope(bobObject5.body,roofObj.body,-bobDaimeter*2,0)
	
	

	
 roofObj=new roof(width/2,300,width,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bobObject1.draw();
  bobObject2.draw();
  bobObject3.draw();
  bobObject4.draw();
  bobObject5.draw();
  roofObj.draw();
 rope1.show();
 rope2.show();
 rope3.show();
 rope4.show();
 rope5.show();
 
}



