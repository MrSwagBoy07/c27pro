const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
 var bg;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
   log = new Log(200,100,200,PI/2);
   
   box = new Box(200,300);
   slingshot = new slingShot(box.body,{x:200, y:300});
}

function draw(){
    background(100);
 log.display();
 box.display();
}