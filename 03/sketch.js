var posX= 20;
var dir= 1;

function setup() { 
	//espacio de trabajo//
  createCanvas(400, 450);
} 


function draw (){
	//color del fondo de verde oscuro a azul//
  background ( 20,30,posX)
  frameRate(4)
	
	//cuadrado del medio con moviento horizontal de color azul a rosado//
  fill(posX,20,255)
  rect (posX+40, 150, 20, 20)
  posX = posX + 3*dir;
  
       //círculo rojo de moviento vertical, el cual casi se estrella con las demás figuras//
  fill( posX,5, 50)
  ellipse (250,posX , 30, 30)
  posX = posX+ 1*dir
  
	//triángulo grande en la parte inferior izquierda, una esquina tiene movimiento vertical//
  fill(10, 3, 20,posX)
  triangle( 300,posX +40,50,posX+350,10,300)
  
       //rectángulo blanco pequeño de movimiento horizontal//
  fill( 255,255,255, posX)
  rect (posX-10 +80,100, 40, 20)
  
 //círculo con trasparencia con moviento vertical que va antes del círculo rojo, este círculo casi se choca con las demás figuras//
  noStroke (1)
  fill( 0, 0, 30,50)
  ellipse (200,posX+45, 30, 30)
  posX = posX+ 1*dir
  
	//círculo con trasnparenica con movimiento horizontal, este es el punto de partida//
   noStroke (1)
  fill( 0, 0, 30,60)
  ellipse (posX+201,40, 30, 30)
  posX = posX+ 1*dir
  

  //condicional para que se devuelvan las figuras//
  if(posX >width|| posX <0){
     dir= -dir
     }
  
//condicionales para que después decierta distancia cambie la velocidad//
  if(posX < width/4){
    posX= posX+5*dir
  }
  
  if(posX >= 100 && posX <200){
    posX= posX+ 1*dir;
  }
  
  if(posX >= 200){
    posX= posX+ 2*dir;
  }
  

//cuadrado negro casi pegado en la parte inferior del triángulo//
fill(0)
rect(250,posX+ 100, 30, 30)
  
//condicionalpara que guardara las fotos//
//if(frameCount<70){
	//saveCanvas("MyFlipbook" + frameCount,'jpg');
//}
	
}
