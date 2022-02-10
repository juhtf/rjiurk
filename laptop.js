img=" ";


function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
}

function preload(){
    img=loadImage('laptop.jfif');
}

function draw(){
    image(img,0,0,640,420);
    fill("#FF0000");
    text("laptop",45,75);
    noFill();
    stroke("green");
    rect(30,60,450,350);
}