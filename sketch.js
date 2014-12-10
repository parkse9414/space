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

    image(img2,434 + Math.cos(timing*2*PI)*25+ Math.cos(timing*2*PI)*5,           // x좌표
              944 + Math.sin(timing*2*PI)*25+ Math.cos(timing*2*PI)*5);           // y좌표
  
}

