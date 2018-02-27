var hora;
var minuto;
var segundo;

var segundoMapeado;
var horaMapeada;
var minutoMapeado;

var zz;


function setup() { 
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES)

  hora= hour();
  minuto= minute();
  segundo= second();
  
} 

function draw() { 
  zz=map( segundo, 0, 60, 0, 255)
  background(255-zz,220-zz,255-zz);
  
  
  hora= hour();
  minuto= minute();
  segundo= second();
  
  
  translate(width/2, height/2);
  
  stroke(zz,200) 
  noFill();
  ellipse(0,0,width/6,width/6);
  ellipse(0,0,width/3, width/3);
	ellipse(0,0,width/2,width/2);
	ellipse(0,0,1,1)
  
  segundoMapeado = map( segundo,0, 59, 0, 359)
  
 if( hora>12){
   hora= hora -12
  }
  minutoMapeado= map(minuto,0,59,0,359) 
  horaMapeada = map( hora, 0, 12, 0, 359)

  push();
 rotate(segundoMapeado);
  fill('orange');
  noStroke();
  rect(width/27,width/20,20,20);
  pop();
 
  push();
  rotate(minutoMapeado);
  fill (0,0,230);
	noStroke();
  rect(width/20,width/-6,40,40);
  pop();
  
  push();
  noStroke();
  fill('green')
  rotate(horaMapeada);
  rect(width/-200,width/-3.5,60,60)
  pop();
  

  
 
}