var img; 

function setup()
{
    createCanvas(1040,1450);
    img = loadImage("bg.png");  
    img2 = loadImage("man.png");
}

function draw()
{
    background(img);
    noFill();
    noStroke();

    var duration = 8000;
    var timing = (new Date()%duration)/duration;

    //남자
    image(img2,365 + Math.cos(timing*2*PI)*5+ Math.cos(timing*2*PI)*5,           // x좌표
    744 + Math.sin(timing*2*PI)*5+ Math.cos(timing*2*PI)*5);                     // y좌표
  
}

