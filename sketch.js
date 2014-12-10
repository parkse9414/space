var img; 
var count;
var f = 0;

function setup()
{
    createCanvas(1040,1450);
    img = loadImage("bg.png");  
    img2 = loadImage("man.png");
    img3 = loadImage("star.png");
    img4 = loadImage("bg2.png");
    count=0;
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

    var duration = 8000;
    var timing = (new Date()%duration)/duration;

    //남자
    image(img2,365 + Math.cos(timing*2*PI)*15+ Math.cos(timing*2*PI)*5,           // x좌표
    744 + Math.sin(timing*2*PI)*15+ Math.cos(timing*2*PI)*5);                     // y좌표

    if(f === 0 ){
        img();
    }else if(f===1){
        img4();
    }

}


function mouseClicked(){
    if(f===0){
        f=1;
    }else if(f===1){
        f=0;
    }
}


function drawstar(x,y){
    image(img3,x-img3.width/2,y-img3.height/2);
}

