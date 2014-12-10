var img; 
var count;
var count2;
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



    if(f === 0 ){
        image(img5,0,0);
    }else if(f===1){
        image(img4,0,0);
    }


    object();


    var duration = 8000;
    var timing = (new Date()%duration)/duration;


    //남자
    image(img2,365 + Math.cos(timing*2*PI)*15+ Math.cos(timing*2*PI)*5,           // x좌표
    744 + Math.sin(timing*2*PI)*15+ Math.cos(timing*2*PI)*5);                     // y좌표
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


function object(){
	var duration = 8500;
    var timing = (new Date()%duration)/duration;
    image(img6, 324 + Math.cos(timing*2*PI)*10, 544 + Math.sin(timing*2*PI)*10); 
    image(img7, 13 + Math.cos(timing*2*PI)*3, 739 + Math.sin(timing*2*PI)*5); 

    image(img9,107,count2*0.2);
    count2=count2+1;
    if(count2>631){
       count2=0;
    }  
}