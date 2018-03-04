

var hora;
var minuto;
var segundo;

var segundoMapeado;
var horaMapeada;
var minutoMapeado;

var ind;
var dir = 1;
var X = 300;
var Y=300;

var segundoMapeado;
var minutoMapeado;
var horaMapeada;

function setup() { 
  createCanvas(windowWidth,windowHeight);


  hora= hour();
  minuto= minute();
  segundo= second();
  
} 

function draw() { 
  background(0);
  frameRate(5);
 
  hora= hour();
  minuto= minute();
  segundo= second();
  
  translate(width/8, height/8)
  
  
  
  segundoMapeado = map (segundo,0 , 59, 0,259);
  if (hora > 12){
    hora = hora -12
  }
  
  minutoMapeado= map(minuto,0,59,0,359);
  horaMapeada= map(hora,0,12,0,359);
  
//triángulo sin relleno morado, en la esquina superior se mueve conforme a los segundos y la esquina inferior se mueve como para mi los segundos //
push();
  noFill();
  stroke('purple')
  triangle(0,segundo,width/2,minuto,hora,X);
  X=X+1*dir
  
  if(X >400|| X <0){
     dir= -dir
     }
  
pop();
  
 //en el elipse azul quise jugar con la percepción de los segundos, el tamaño del círculo depende de los minutos, pero avanza como si esos fueran los segundos//
push();
  noFill();
  stroke('blue')
  ellipse (X,hora, minuto, segundo);
  
  if(X> height||X <0){
    dir= -dir
  }
  
  if(X >width|| X <0){
     dir= -dir
     }
  
pop();
  
 //rectángulo al costado derecho su tamaño depende de segundos y minutos//
push();
  noFill();
  stroke(0,200,200)
  rect(width/2, height/2, segundo,minuto);
pop();
  
 //línea roja inferior que pareciera que da los segundos//
  push();
  
  stroke('red')
  line(X-300,400,X+100,400)
  
    if(X >width|| X <0){
     dir= -dir
     }
  pop();
  
  //en este reloj se puede elegir cual de las figuras se desea que de los segundos//
  
}
