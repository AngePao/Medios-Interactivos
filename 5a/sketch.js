var hora;
var minuto;
var segundo;

var segundoMapeado;
var horaMapeada;
var minutoMapeado;

var zz;


function setup() { 
	//espacio de trabajo//
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES)

  hora= hour();
  minuto= minute();
  segundo= second();
  
} 

function draw() { 
  zz=map( segundo, 0, 60, 0, 255)
	//color del fondo de morado más claro a morado más oscuro//
  background(255-zz,220-zz,255-zz);
  
  
  hora= hour();
  minuto= minute();
  segundo= second();
  
  
  translate(width/2, height/2);
  
	//son los tres círculos grandes que cambian de color claro a oscuro//
  stroke(zz,200) 
  noFill();
	//círculo de los segundos//
  ellipse(0,0,width/6,width/6);
	
	//círculo de los minutos //
  ellipse(0,0,width/3, width/3);
	
        //círculo de las horas//	
  ellipse(0,0,width/2,width/2);
	
	//punto del medio//
	ellipse(0,0,1,1)
  
  segundoMapeado = map( segundo,0, 59, 0, 359)
  
 if( hora>12){
   hora= hora -12
  }
  minutoMapeado= map(minuto,0,59,0,359) 
  horaMapeada = map( hora, 0, 12, 0, 359)
	
//cuadrado naranja que marca los segundos//
  push();
 rotate(segundoMapeado);
  fill('orange');
  noStroke();
  rect(width/27,width/20,20,20);
  pop();
 
//cuadrado azul que marca los minutos//
  push();
  rotate(minutoMapeado);
  fill (0,0,230);
	noStroke();
  rect(width/20,width/-6,40,40);
  pop();
  
//cuadrado verde que marca las horas//
  push();
  noStroke();
  fill('green')
  rotate(horaMapeada);
  rect(width/-200,width/-4,60,60)
  pop();
  

  
 
}
