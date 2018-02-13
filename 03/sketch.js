var posX= 20;
var dir= 1;

function setup() { 
  createCanvas(400, 450);
} 


function draw (){
  background ( 20,30,posX)
  frameRate(4)
  fill(posX,20,255)
  rect (posX+40, 150, 20, 20)
  posX = posX + 3*dir;
  
  
  fill( posX,5, 50)
  ellipse (250,posX , 30, 30)
  posX = posX+ 1*dir
  
  fill(10, 3, 20,posX)
  triangle( 300,posX +40,50,posX+350,10,300)
  
  
  fill( 255,255,255, posX)
  rect (posX-10 +80,100, 40, 20)
  
  noStroke (1)
  fill( 0, 0, 30,50)
  ellipse (200,posX+45, 30, 30)
  posX = posX+ 1*dir
  
   noStroke (1)
  fill( 0, 0, 30,60)
  ellipse (posX+201,40, 30, 30)
  posX = posX+ 1*dir
  

  
  if(posX >width|| posX <0){
     dir= -dir
     }
  
  if(posX < width/4){
    posX= posX+5*dir
  }
  
  if(posX >= 100 && posX <200){
    posX= posX+ 1*dir;
  }
  
  if(posX >= 200){
    posX= posX+ 2*dir;
  }
  


fill(0)
rect(250,posX+ 100, 30, 30)
  

//if(frameCount<70){
	//saveCanvas("MyFlipbook" + frameCount,'jpg');
//}
	
}