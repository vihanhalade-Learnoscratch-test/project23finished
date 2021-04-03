const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var binp1,binp2,binp3;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    binp1 = new Bin(width/2+400, height-50+17,200,20);
    binp2 = new Bin(width/2-90+400,height-110+30,20,100);
    binp3 = new Bin(width/2+90+400,height-110+17,20,100)
    paper = new Paper(100,20,20)
    ground = new Ground(600,height,1200,10)
}

function draw(){
    background(0);
    Engine.update(engine);
    binp1.display();
    binp2.display();
    binp3.display();
    paper.display();
    ground.display();
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        Matter.Body.applyForce(paper.body,paper.body.position,{x:45,y:-45});
    }
}