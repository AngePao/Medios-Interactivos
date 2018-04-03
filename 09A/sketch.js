//La idea es sacada del juego world of warcraft(WOW)//
//Existen dos bandos, azul contra rojo//
var Goblin1;
var Goblin2;

var NoMuerto1;
var NoMuerto2;

var Huarguen1;
var Huarguen2;

var Enano1;
var Enano2;

var pocion;


//direcciones de las especies//

var dirxg = 1;
var diryg = 1;

var dirxnm = 1;
var dirynm = 1;

var dirxh = 1;
var diryh = 1;

var dirxe = 1;
var dirye = 1;


//variable de la imagen del fondo//

var fondo;

function preload(){
 fondo = loadImage( 'assets/FONDO.jpg');
 
}

function setup() {
  createCanvas(800, 600);
  background(201,157,102);
  
  //Goblins//
  //Le ganan a los enanos//
  //Son derrotados por los Huarguen//

  Goblin1 = new Goblin (1);
  Goblin2= new Goblin (2); 
  
  //NoMuertos//
  //Le ganan a los Huarguen//
  //Pierden contra los enanos//
  
  NoMuerto1 = new NoMuerto (1); 
  NoMuerto2 = new NoMuerto(2); 
  
  //Huargen//
  //Gana a los Goblin//
  //Derrotado por los NoMuertos//
  Huarguen1 = new Huarguen (1); 
  Huarguen2 = new Huarguen (2);
  
  //Enanos//
  //Ganan contra los NoMuertos//
  //Pierden contra los Goblin//
  Enano1 = new Enano(1);
  Enano2 = new Enano(2);
  
  //pocion crecer//
  pocion =  new Pocion();
  
}

function draw() {
  background(201);
  
  //imagen del fondo, campo de batalla//
  image(fondo, 0,0,800,600);

 
  //líneas que marcan el territorio de solo el bando rojo//
  fill('red');
  rect(0,0,10,height);
  rect(0,0,200,10);
  rect(0,height-10,200,10);

  //líneas que marcan el territorio de solo el bando azul//
  fill('blue')
  rect(width-10,0,10,height);
  rect(600,0,800,10);
  rect(600,height-10,200,10);
  
  //líneas que marcan el territorio en el que ambos bandos pueden estar//
  fill('brown');
  rect(200,0,400,10);
  rect(200,height-10,400,10);


  
//Condicionales para que cada personaje que coja la poción, la poción aparezca en otra parte//
  
  if (dist(Goblin1.x, Goblin1.y, pocion.x, pocion.y) < pocion.tamano) {
    pocion.morirse();
  
  }
  
  
    if (dist(Goblin2.x, Goblin2.y, pocion.x, pocion.y) < pocion.tamano) {
    pocion.morirse();
  
  }
  
    if (dist(NoMuerto1.x, NoMuerto1.y, pocion.x, pocion.y) < pocion.tamano) {
    pocion.morirse();
  
  }
  
    if (dist(NoMuerto2.x, NoMuerto2.y, pocion.x, pocion.y) < pocion.tamano) {
    pocion.morirse();
  
  }
  
    if (dist(Huarguen1.x, Huarguen1.y, pocion.x, pocion.y) < pocion.tamano) {
    pocion.morirse();
  
  }
  
    if (dist(Huarguen2.x, Huarguen2.y, pocion.x, pocion.y) < pocion.tamano) {
    pocion.morirse();
  
  }
  
    if (dist(Enano1.x, Enano1.y, pocion.x, pocion.y) < pocion.tamano) {
    pocion.morirse();
  
  }
  
  if (dist(Enano2.x, Enano2.y, pocion.x, pocion.y) < pocion.tamano) {
    pocion.morirse();
  
  }
  
  
  
//condicionales para que cuando se encuentren 2 personajes de un equipo el otro muera//
 

   if (dist(Goblin1.x, Goblin1.y, Enano1.x, Enano1.y) < Enano1.tamano) {
    Enano1.morirse();
  }
  
  
   if (dist(Goblin1.x, Goblin1.y, Enano2.x, Enano2.y) < Enano1.tamano) {
    Enano1.morirse();
   }
  
   if (dist(Goblin2.x, Goblin2.y, Enano1.x, Enano1.y) < Enano2.tamano) {
    Enano2.morirse();
   }
  
  
   if (dist(Goblin2.x, Goblin2.y, Enano2.x, Enano2.y) < Enano2.tamano) {
    Enano2.morirse();
   }
  
    if (dist(Huarguen1.x, Huarguen1.y, Goblin1.x, Goblin1.y) < Goblin1.tamano) {
    Goblin1.morirse();
  
   }
  
   if (dist(Huarguen1.x, Huarguen1.y, Goblin2.x, Goblin2.y) < Goblin2.tamano) {
    Goblin2.morirse();
  
   } 
  
  if (dist(Huarguen2.x, Huarguen2.y, Goblin1.x, Goblin1.y) < Goblin1.tamano) {
    Goblin1.morirse();
  
   }
  
  if (dist(Huarguen2.x, Huarguen2.y, Goblin2.x, Goblin2.y) < Goblin2.tamano) {
    Goblin2.morirse();
  
   }
    
  
  if (dist(NoMuerto1.x, NoMuerto1.y, Huarguen1.x, Huarguen1.y) < Huarguen1.tamano) {
    Huarguen1.morirse();
   }
  
  if (dist(NoMuerto1.x, NoMuerto1.y, Huarguen2.x, Huarguen2.y) < Huarguen2.tamano) {
    Huarguen2.morirse();
   }
  
  if (dist(NoMuerto2.x, NoMuerto2.y, Huarguen1.x, Huarguen1.y) < Huarguen1.tamano) {
    Huarguen1.morirse();
   }
  
  if (dist(NoMuerto2.x, NoMuerto2.y, Huarguen2.x, Huarguen2.y) < Huarguen2.tamano) {
    Huarguen2.morirse();
   }
   
  if (dist(Enano1.x , Enano1.y, NoMuerto1.x, NoMuerto1.y) < NoMuerto1.tamano){
   NoMuerto1.morirse();
  } 
  
   if (dist(Enano1.x , Enano1.y, NoMuerto2.x, NoMuerto2.y) < NoMuerto2.tamano){
   NoMuerto2.morirse();
  } 
  
   if (dist(Enano2.x , Enano2.y, NoMuerto1.x, NoMuerto1.y) < NoMuerto1.tamano){
   NoMuerto1.morirse();
  } 
  
  if (dist(Enano2.x , Enano2.y, NoMuerto2.x, NoMuerto2.y) < NoMuerto2.tamano){
   NoMuerto2.morirse();
  } 
    
  //Equipo Rojo//
  
//Goblins con sus funciones//
 Goblin1.dibujarse();
 Goblin1.moverse(); 
  
  
 Goblin2.dibujarse();
 Goblin2.moverse(); 
  
//No muertos con sus funciones//
  NoMuerto1.dibujarse();
  NoMuerto1.moverse();
  
  
  NoMuerto2.dibujarse();
  NoMuerto2.moverse();
  
//Huarguen con sus funciones//
  Huarguen1.dibujarse();
  Huarguen1.moverse();
  
  Huarguen2.dibujarse();
  Huarguen2.moverse();

//Enanos con sus funciones//
  Enano1.dibujarse();
  Enano1.moverse();
  
  Enano2.dibujarse();
  Enano2.moverse();
  
//Pocion dibujada//
  pocion.dibujarse();  
  
   //if (mouseIsPressed == true) {
    //Huarguen1.x = mouseX;
    //Huarguen1.y = mouseY;
  //}

  
}

//Especie 1: Goblin, humanitos verdes con orejas grandes//
//Bando rojo//
function Goblin(_genero){
  this.x = random (10,600);
  this.y = random (10,height-10);
  this.tamano = 40;
  this.genero = _genero 
  this.vivo = 1;
  
  this.dibujarse = function(){
   if(this.vivo ==1){
   
     //marca que es del bando rojo//
    stroke('red');
     
     if(this.genero==1){
      fill( 0, 141,54);
     } else {
       fill(42, 183, 93);
     }
     
     //cuerpo//
       ellipse( this.x, this.y+35, this.tamano+21, this.tamano+30);
     ellipse( this.x, this.y, this.tamano+15, this.tamano);
     ellipse(this.x-10,this.y+70,this.tamano-20,this.tamano-25);
     ellipse(this.x+10,this.y+70,this.tamano-20,this.tamano-25);
     
     //orejas//
   triangle(this.x -20, this.y -15,this.x-30,this.y+2,this.x-35,this.y-30);
   triangle(this.x +20, this.y -15,this.x+30,this.y+2,this.x+35,this.y-30);  
     
     //ojos//
     noStroke();
     fill(0);
     ellipse(this.x-10, this.y-6, this.tamano-35)
     ellipse(this.x+10, this.y-6, this.tamano-35)
    
   
  
     }
     
     
   }
  
  
  
  this.moverse = function(){
     this.x = this.x- 5*dirxg;
     this.y = this.y- 4* diryg;
    
    
  
         
    
      if(this.x <= 10 || this.x >= 590 ){
     dirxg = dirxg * -1;
     }
    
     if(this.y <= 10 || this.y <= height -10 ){
     diryg = diryg * -1;
     }
  }
  
  
  this.morirse = function(){
    this.x = 20;
    this.y = 20;
  }
}


//Especie2:NoMuertos, son una clase de humanos semi muertos//
function NoMuerto( _genero){
  
  this.x = random(0,550);
  this.y = random (0,height);
  this.genero = _genero;
  this.tamano = 50;
  this.vivo = 1;
  
  this.dibujarse = function(){
    
    if(this.vivo==1){
      
      
      stroke('red');
      
      if(this.genero==1){
      fill(80,14,102);
      } else{
       fill(135,27,170); 
      }
  
      //cuerpo//
 ellipse(this.x, this.y+40,this.tamano,this.tamano+50)
 ellipse(this.x, this.y,this.tamano)
      
  //cara//    
  noStroke();
  fill(255)
      ellipse(this.x-10,this.y-7,this.tamano-35,this.tamano-30);
      ellipse(this.x+10,this.y-7,this.tamano-35,this.tamano-30);
      ellipse(this.x,this.y+10,this.tamano-30,this.tamano-38);
    }
  }
  
  this.moverse = function() {
    
    this.x = this.x + (1, 4) * dirxnm;
    this.y = this.y + (1, 4) * dirynm;
    
    
      if(this.x <= 10 || this.x >= 550 ){
     dirxnm = dirxnm * -1;
     }
    
     if(this.y <= 10 || this.y <= height -10 ){
     dirynm = dirynm * -1;
     }
  
     
    
  }
  
 this.morirse = function(){
    this.x = 20;
    this.y = 560;
   
 }
  
  
}

//Especie2:Son los huarguen, son hombres lobo)
//Son del equipo azul//
function Huarguen( _genero){

this.x = random (200,width-10);
this.y = random (10, height-10);
this.genero = _genero;
this.tamano = 80;
this.vivo=1;
  
  this.dibujarse = function(){
   
    if(this.vivo==1){
     
    stroke('blue');
      
     if(this.genero==1){
      fill(153,115,10);
     }else{
      fill(102,77,7);
     }
    }
    
  //Orejas//
    
     triangle(this.x +16, this.y -36,this.x+30,this.y-60,this.x+35,this.y-28); 
    triangle(this.x -16, this.y -36,this.x-30,this.y-60,this.x-35,this.y-28); 
    
    //cuerpo//
    rect(this.x-40, this.y+30, this.tamano,this.tamano+30);
    ellipse(this.x,this.y,this.tamano+10,this.tamano);
    
    //Orejas//
    
     triangle(this.x +16, this.y -36,this.x+30,this.y-60,this.x+35,this.y-30);  
    
    //rostro//
    noStroke();
    fill(0);
    ellipse(this.x,this.y+15,this.tamano-68,this.tamano-70);
    ellipse(this.x-15,this.y-6,this.tamano-70,this.tamano-70);
    ellipse(this.x+15,this.y-6,this.tamano-70,this.tamano-70);


    
  }

  this.moverse = function(){
    
    this.x = this.x - random (1, 3) * dirxh;
    this.y = this.y - random (1, 3) * diryh;
     
      if(this.x <= 220 || this.x >= width -10 ){
     dirxh = dirxh * -1;
     }
    
     if(this.y <= 10 || this.y <= height -10 ){
     diryh = diryh* -1;
     }
    
  }
  
  this.morirse = function(){
    this.x = 720;
    this.y = 590;
   
  }
  
}



//Especie 4:Enanos//
//Equipo azul//
function Enano ( _genero){
  
 this.x = random(200,width);
 this.y = random(0,height);
 this.tamano = 30;
 this.genero = _genero;
 this.vivo = 1;
  
  this.dibujarse = function(){
   
    if(this.vivo==1){
      
     stroke('blue');
      
     if(this.genero==1){
      fill(25,95,127);
     } else{
      fill(14,66,104); 
     }
      
      
    rect(this.x-10, this.y+5, this.tamano-10, this.tamano+5) 
      
      fill(231,199,179);
    ellipse(this.x, this.y, this.tamano, this.tamano);
      
    }
    
  }
  
  this.moverse = function(){
    
    this.x = this.x -(1, 2) * dirxe;
    this.y = this.y -(1, 2) * dirye ;
    
    if(this.x <= 210 || this.x >= width -10 ){
     dirxe = dirxe * -1;
     }
    
     if(this.y <= 10 || this.y <= height -10 ){
     dirye = dirye * -1;
     }
  
     
    
    
  }
  
  this.morirse = function(){
    this.x = 780;
    this.y = 590;
  }
}

//la poción hace que se hagan más rápidos//
function Pocion (){

this.x = random(200, 600);
this.y = random(10,height-10);
this.tamano = 6;
this.vivo =1;
  
  this.dibujarse = function (){
  
   if( this.vivo ==1){
     
   noStroke();
     fill(255);
    rect(this.x-3,this.y+5,this.tamano+10,this.tamano); 
   triangle(this.x+5,this.y+5, this.x-10,this.y+30,this.x+20,this.y+30);
     
    
   }
    
        
}
  
  //Aparece en la mitad del territorio//
  this.morirse = function() {
    this.x = random(200, 600);
    this.y = random(200, 600);
  }
  
}