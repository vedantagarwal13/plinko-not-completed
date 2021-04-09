const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 
var divisions =[];
var divisionHeight=300;
var particles = [];
var plinkos = [];

function setup() {
  createCanvas(800, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400,690,800,20);

  //create division objects
  for (var i = 0; i <=width; i = i + 80) {
    divisions.push(new Divisions(i, height-divisionHeight/2, 10, divisionHeight));
  }

  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects
  for (var j = 75; j <=width; j=j+50) 
  {
    plinkos.push(new Plinko(j,275));
  }
  
  //create 4th row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,375));
  }

  //create particle objects
  
    
}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();
 // drawSprites();

  for (var n= 0; n <divisionHeight.length;n++) 
  {
    divisions[n].display();
  }

  
  
  //display the plinkos 
  for (var h = 0; h < plinkos.length; h++) {
    plinkos[h].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //display the paricles 
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
    particles.display();
  }
}