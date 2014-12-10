var img; 

function setup()
{
    createCanvas(1040,1554);
    img = loadImage("bg.png");  
}

function draw()
{
    background(img);
    noFill();
    noStroke();
}

