var img; 

function setup()
{
    createCanvas(1040,1450);
    img = loadImage("bg.png");  
    img2 = loadImage("man.png");
    img3 = loadImage("space.png");
}


function mouseClicked(){
    
    if(f===0){
        f=1;
    }else if(f===1){
        f=0;
    }
}


function draw()
{
    background(img);
    noFill();
    noStroke();

    if(f === 0 ){
        img();
    }else if(f===1){
        img3();
    }

    var duration = 8000;
    var timing = (new Date()%duration)/duration;

    //남자
    image(img2,365 + Math.cos(timing*2*PI)*15+ Math.cos(timing*2*PI)*5,           // x좌표
    744 + Math.sin(timing*2*PI)*15+ Math.cos(timing*2*PI)*5);                     // y좌표
  
}


