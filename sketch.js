const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var box, box2,box3,box4,box5;
var log1,log2,log3,log4;
var pig1,pig2;
var bird;

function setup(){
    var canvas = createCanvas(1000,500);
    engine = Engine.create();
    world = engine.world;

    box = new Box(500,450,60,60);
    box2 = new Box(700,450,60,60);
    box3 = new Box(500,350,60,60);
    box4 = new Box(700,350,60,60);
    box5 = new Box(600,250,60,60);
    pig1 = new Pig(600,450)
    pig2 = new Pig(600,350);
    ground = new Ground(500,480,1000,10) 
    log = new Log(600,400,300,PI/2);
    log2 = new Log(600,300,300,PI/2);
    log3 = new Log(540,250,110,PI/8);
    log4 = new Log(650,250,110,-PI/8);
    bird = new Bird(758,575)



}

function draw(){
    background(0);

    Engine.update(engine)
    box.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    pig1.display();
    pig2.display();
    ground.display();
    log.display();
    log2.display();
    log3.display();
    log4.display();
    bird.display();
}