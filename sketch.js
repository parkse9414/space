var img; 

function setup()
{
    createCanvas(1040,1554);
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
    image(img2,365 + Math.cos(timing*2*PI)*25+ Math.cos(timing*2*PI)*5,           // x좌표
    844 + Math.sin(timing*2*PI)*25+ Math.cos(timing*2*PI)*5);                     // y좌표
  
}

