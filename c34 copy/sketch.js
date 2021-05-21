const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var box1,ground,chain1,rock
var bg , box2 ,box3,box4,box9 ,box10,box11,box12 ,box13,box14;
var pole1,pole2,box5,box6,box7,box8;
var monster;
function preload() {
    // create getBackgroundImg( ) here
    backgroundImg=loadImage("background img.jpeg")
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
    box1= new Box(700,400,50,100)
    box2= new Box(750,400,50,100)
    box3= new Box(800,400,50,100)
    box4= new Box(850,400,50,100)

    box5= new Box(700,300,50,100)
    box6= new Box(750,300,50,100)
    box7= new Box(800,300,50,100)
    box8= new Box(850,300,50,100)
     
    box9 = new Box(700,200,50,100)
    box10= new Box(750,200,50,100)
    box11= new Box(800,200,50,100)
    box12= new Box(850,200,50,100)
    
    rock = new Rock(250,200,200)
    

    chain1 = new Chain(rock.body,{x:250,y:200})
    ground = new Ground(600,670,1200,30)

    monster = new Monster(1000,600,200,200)
}

function draw(){
    // add condition to check if any background image is there to add
    background(backgroundImg)
    // write code to display time in correct format here
    box1.display()
    box2.display()
    box3.display()
    box4.display()
    box5.display()
    box6.display()
    box7.display()
    box8.display()
    box9.display()
    box10.display()
    box11.display()
    box12.display()
    ground.display()
    
    rock.display()
    chain1.display()

    monster.display()
    Engine.update(engine);
}
function mouseDragged(){
    Matter.Body.setPosition(rock.body,{x:mouseX,y:mouseY})
}
