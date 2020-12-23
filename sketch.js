const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine;
var world;
var bodies;
var bodies2;

function setup(){
  var canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var options = {
      restitution: 0.75
  }
  bodies = Bodies.circle(200,100,25,options);
  World.add(world,bodies); 
  var spaceOptions = {
      isStatic: true
  }
  bodies2 = Bodies.rectangle(200,390,200,20,spaceOptions);
  World.add(world,bodies2);
}
function draw(){
    background("blue");
    Engine.update(engine);
    rectMode(CENTER);
    rect(bodies2.position.x,bodies2.position.y,400,20);
    ellipseMode(RADIUS);
    ellipse(bodies.position.x,bodies.position.y,25,25);
   
}

