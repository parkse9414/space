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
    img16 = loadImage("planet.png");
    img17 = loadImage("planet2.png");
    img18 = loadImage("shadow.png");
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
    700 + Math.sin(timing*2*PI)*15+ Math.cos(timing*2*PI)*5);       

    image(img16, mouseX - 32, mouseY - 21);  

    var duration = 4500;
    var timing = (new Date()%duration)/duration;
    image(img17, mouseX + Math.cos(timing*4*PI)*50 - 8, 
    mouseY + Math.sin(timing*4*PI)*50 - 8);  
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
	image(img4,0,0);

	var duration = 8500;
    var timing = (new Date()%duration)/duration;
    image(img6, 324 + Math.cos(timing*2*PI)*10, 544 + Math.sin(timing*2*PI)*10); 
    image(img7, 40+ Math.cos(timing*2*PI)*7, 839 + Math.sin(timing*2*PI)*3); 
    image(img8, 40+ Math.cos(timing*2*PI)*3, 745 + Math.sin(timing*2*PI)*10); 

    var duration = 8000;
    var timing = (new Date()%duration)/duration;
    image(img10, 756 + Math.cos(timing*2*PI)*7, 864 + Math.sin(timing*2*PI)*15); 
    image(img13, 780+ Math.cos(timing*2*PI)*3, 998 + Math.sin(timing*2*PI)*15); 
    image(img14, 200+ Math.cos(timing*2*PI)*7, 1300 + Math.sin(timing*2*PI)*12); 
    image(img15, 230+ Math.cos(timing*2*PI)*1, 1000 + Math.sin(timing*2*PI)*7); 

    var duration = 8000;
    var timing = (new Date()%duration)/duration;

    image(img18,465 + Math.cos(timing*2*PI)*15+ Math.cos(timing*2*PI)*5,         
    880 + Math.sin(timing*2*PI)*15+ Math.cos(timing*2*PI)*5);   

    image(img9,140,count2+730);
    count2=count2-1;
    if(count2>100){
       count2=0;
    }  

    image(img11,826,count3+961);
    count3=count3-1;
    if(count3>100){
       count3=0;
    }  

    image(img12,833,count4+975);
    count4=count4-1;
    if(count4>300){
       count4=0;
    }
}