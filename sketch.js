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

    var duration = 800;
    var timing = (new Date()%duration)/duration;

    image(img2,710 + Math.cos(timing*2*PI)*25+ Math.cos(timing*2*PI)*5,           // x좌표
              321 + Math.sin(timing*2*PI)*25+ Math.cos(timing*2*PI)*5,            // y좌표
              15,                                                                                                                                           // width
              15);     
}

