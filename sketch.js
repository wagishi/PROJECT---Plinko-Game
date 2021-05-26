 const Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var ground;
var divisionHeight = 300;

function setup() {
  createCanvas(800,700);

  engine = Engine.create();
  world = engine.world;

  //create ground sprite
  ground = new Ground(400,650,1000,20);

  //create divisions
  var divisionHeight = 300;

  for(var k = 0; k<=width; k=k+80){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
  }
  
  //create plinkos
   for(var j = 40; j<=width; j=j+80){
     plinkos.push(new Plinkos(j,75));
   }

   for(var j = 15; j<=width; j=j+80){
    plinkos.push(new Plinkos(j,175));
  }

  for(var j = 40; j<=width; j=j+80){
    plinkos.push(new Plinkos(j,275));
  }

  for(var j = 15; j<=width; j=j+80){
    plinkos.push(new Plinkos(j,375));
  }

}

function draw() {

  background("black");  
  Engine.update(engine);

  //display divisions and plinkos
  for(var i = 0; i<divisions.length; i++){
    divisions[i].display();
  }
  for(var i = 0; i<plinkos.length; i++){
    plinkos[i].display();
  }

  // create particles and display it.
  if(frameCount%60 === 0){
    particles.push(new Particles(random(width/2-10,width/2+10),10,10));
  }

  for(var i = 0; i<particles.length; i++){
    particles[i].display();
  }

  ground.display();

}