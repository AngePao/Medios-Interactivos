//condicionales de cancion, tiempo e imagen//
var cancion;
var imagen;
var tempo;

function preload(){
  
  //cancion brillas de Leon Larregui//
  cancion = loadSound('assets/Len_Larregui_-_Brillas_Mcj75l2gJcY.mp3')

  //imagen de un paisaje//
  imagen = loadImage('assets/landscape.jpg')
}

function setup() {
  //tamaño de espacio de trabajo//
  createCanvas(800, 800); 
  background(220);
    cancion.play();
   amplitud = new p5.Amplitude();
    image(imagen,0,0,800,800);
}

function draw() {
  
  //condicional para que cambie de filtro//
  tempo= cancion.currentTime();
  if(tempo>15){
    filter(GRAY);
  }
  
  //cambio de filtro en la imagen//
  if(tempo>30){
    filter(BLUR);
    
  }

  //cambio de filtro//
  if(tempo>45){
    filter(ERODE);
    
  }
  
  
  
  
   
  var nivel= amplitud.getLevel();
  nivel = map(nivel, 0.0, 1.0, 0, 400);
  
  //estrellas blancas/circulos blancos en la parte de arriba//
  noStroke();
  fill(255);
  ellipse(nivel+30,80,nivel-50);
  ellipse(nivel+300,100,nivel-50);
  ellipse(nivel+500,80,nivel-50);
 
  push();
  noStroke();
  fill('green')
    ellipse(650,650,nivel);
    ellipse(700,650,nivel);
    ellipse(550,700,nivel);
    ellipse(600,750,nivel);
  pop();
  
  strokeWeight(5);
  stroke(nivel,'bllue');
  
fill(nivel,100,100)
   line(0,400,800,400)
  
  //arcos boca abajo//
   
 translate(width/2,height/2);
  //arco 1//
arc(-210,0, 100,nivel, 0, PI);
  
  //arco2//
  arc(0,0, 100,nivel, 0, PI);
  
  //arcos boca arriba//
  rotate(PI)
  
  //arco1//
  arc(100,0, 100,nivel, 0, PI);
  
  //arco2//
  arc(-100,0, 100,nivel, 0, PI);
    
  
 

}