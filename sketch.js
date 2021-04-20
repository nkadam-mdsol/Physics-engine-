const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;





function setup() {
    var canvas = createCanvas(1400, 800);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(800, height, 1000, 90);
    box1 = new Box(900,100,90,90);
    box2 = new Box(900,100,90,90);
    box3 = new Box(900,100,90,90);
    box4 = new Box(900,100,90,90);
    box5 = new Box(900,100,90,90);
    box6 = new Box(900,100,90,90);
    box7 = new Box(800,100,90,90);
    box8 = new Box(800,100,90,90);
    box9 = new Box(800,100,90,90);
    box10 = new Box(800,100,90,90);
    box11 = new Box(800,100,90,90);
    box12 = new Box(800,100,90,90);
    box13 = new Box(700,100,90,90);
    box14= new Box(700,100,90,90);
    box15= new Box(700,100,90,90);
    box16 = new Box(700,100,90,90);
    box17 = new Box(700,100,90,90);
    box18 = new Box(700,100,90,90);
   
    ball= new Ball(200,200,43,43)
    rope = new Rope(ball.body,{x:400,y:40})
}

function draw() {
    background("darkgrey");
   

    noStroke();
    
    Engine.update(engine);
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    ball.display();
    rope.display();
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});

    //}
}


