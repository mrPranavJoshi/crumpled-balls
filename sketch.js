const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var paper1

function setup(){
    var canvas = createCanvas(800,500);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(740,445,10,70);
    box2 = new Box(640,445,10,70);
    box3 = new Box(690,485,100,10)

    ground = new Ground(200,height,1200,20)

 paper1 = new Paper(220,400,20,20)
   
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display()
    paper1.display()
    ground.display();
}
function keyPressed(){
    if (keyCode === UP_ARROW){
        Matter.Body.appyForce(paper1.body,paper1.body.position,{x:85,y:-85})
    }
}