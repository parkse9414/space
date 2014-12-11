var img; 
var count;
var count2;
var count3;
var count4;
var f = 0;

function setup()
{
    createCanvas(1040,1450);
    img = loadImage("bg.png");  
    img2 = loadImage("man.png");
    img3 = loadImage("star.png");
    img4 = loadImage("bg2.png");
    img5 = loadImage("none.png");
    img6 = loadImage("paper.png");
    img7 = loadImage("pot.png");
    img8 = loadImage("pot2.png");
    img9 = loadImage("potb.png");
    img10 = loadImage("fish.png");
    img11 = loadImage("fish1.png");
    img12 = loadImage("fish2.png");
    img13 = loadImage("fish3.png");
    img14 = loadImage("pan.png");
    img15 = loadImage("pan2.png");
    img16 = loadImage("earth.png");
    img17 = loadImage("moon.png");
    count=0;
    count2=0;
    count3=0;
    count4=0;
}



function draw()
{
    background(img);
    noFill();
    noStroke();


    drawstar(count*0.3,725);
    count=count+1;
    if(count>1040){
       count=0;
    }

    
    if(f === 0 ){
        image(img5,0,0);
    }else if(f===1){
        object();
    }


    var duration = 8000;
    var timing = (new Date()%duration)/duration;

    image(img2,365 + Math.cos(timing*2*PI)*15+ Math.cos(timing*2*PI)*5,         
    744 + Math.sin(timing*2*PI)*15+ Math.cos(timing*2*PI)*5);       

    image(img16, 62, 62);

    var duration = 4500;
    var timing = (new Date()%duration)/duration;
    image(img17, mouseX + Math.cos(timing*4*PI)*100 - 7, 
          mouseY + Math.sin(timing*4*PI)*100 - 7)            
}

