
var boton1x= 30;
var boton1y= 50;
var boton1tam=30

var boton2x= 70;
var boton2y= 50;
var boton2tam= 30;

var boton3x=110;
var boton3y= 50;
var boton3tam= 30;

var boton4x= 150;
var boton4y= 50;
var boton4tam=30; 


var filtro=1;

var sombrero;

function preload(){
  sombrero= loadImage('assets/rene.jpg');

}

function setup() {
  
  createCanvas(400, 400);
background(220);
}


function draw() {
  
  image(sombrero,0,0,400,400);
  
  fill(0);
  rect(boton1x,boton1y,boton1tam,boton1tam);
  
  fill('purple');
  rect(boton2x, boton2y, boton2tam,boton2tam);
  
  fill('cyan')
  rect(boton3x, boton3y, boton3tam, boton3tam);
  
  if (mouseIsPressed) {
		
		if (mouseX > boton1x && mouseX < boton1y + boton1tam &&
			mouseY > boton1x && mouseY < boton1y + boton1tam) {
			herramienta = 0;
		}
		if (mouseX > boton2x && mouseX < boton2x + boton2tam &&
			mouseY > boton2y && mouseY < boton2y + boton2tam) {
			herramienta = 1;
		}
		if (mouseX > boton3x && mouseX < boton3x + boton3tam &&
			mouseY > boton3y && mouseY < boton3y + boton3tam) {
			herramienta = 2;
		}
		if (mouseX > boton4x && mouseX < boton4x + boton4tam &&
			mouseY > boton4y && mouseY < boton4y + boton4tam) {
			herramienta = 3;
		}
    
    if(herramienta==0){
      filter(THRESHOLD);
        }
  
     if(herramienta==1){
    filter(GRAY);
        }
  
    if(herramienta==2){
      filter(INVERT);
    }
    
  }
    
} 
    
    
    
    
    