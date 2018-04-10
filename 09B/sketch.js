//La idea es sacada del juego world of warcraft(WOW)//
//Existen dos bandos, azul contra rojo//

var Goblins = [];


var NoMuertos = [];

var Huarguens = [];

var Enanos = [];

var pocion = [];

var rojos = [];

var azules = [];

//variables de los portales

//portal Goblin
var portal1X = 50;
var portal1y = 100;
var portal1xtam = 30;

//portal NoMuertos
var portal2X = 50;
var portal2y = 500;
var portal2tam = 30;

//portal Huarguen
var portal3X = 700;
var portal3y = 100;
var portal3tam = 30;

//portal Enanos
var portal4X = 700;
var portal4y = 500;
var portal4tam = 30;




//cañon rojo//
var rojox = 200;
var rojoy = 300;
var rojotam= 20;


//cañon azul
var azulx = 600;
var azuly = 300;
var azultam = 20;

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
  
  for (var i = 0; i < 10; i = i + 1) {
    Goblins[i] = new Goblin();
  }

  // Goblin1 = new Goblin (1);
  // Goblin2= new Goblin (2); 
  
  //NoMuertos//
  //Le ganan a los Huarguen//
  //Pierden contra los enanos//
  
   for (var i = 0; i < 15; i = i + 1) {
    NoMuertos[i] = new NoMuerto();
  }
  
  //Huargen//
  //Gana a los Goblin//
  //Derrotado por los NoMuertos//
 
  for (var i = 0; i < 8; i = i + 1) {
   Huarguens[i] = new Huarguen();
  }
  //Enanos//
  //Ganan contra los NoMuertos//
  //Pierden contra los Goblin//
  
 for (var i = 0; i < 2; i = i + 1) {
    Enanos[i] = new Enano();
  }
  
  //pocion velocidad//
  //for (var i = 0; i < 1; i = i + 1) {
    //pocion[i] = new Pocion();
  //}
  
  //cañones//
  for (var i = 0; i < 10; i = i + 1) {
    rojos[i] = new BolasdeCañonRojas();
  }
  
  for (var i = 0; i < 10; i = i + 1) {
    azules[i] = new BolasdeCañonAzules();
  }
  
}

function draw() {
  background(201);
  
  //imagen del fondo, campo de batalla//
  image(fondo, 0,0,800,600);

 
  //líneas que marcan el territorio de solo el bando rojo//
  fill('red');
  noStroke();
  rect(0,0,10,height);
  rect(0,0,200,10);
  rect(0,height-10,200,10);

  //líneas que marcan el territorio de solo el bando azul//
  fill('blue')
  noStroke();
  rect(width-10,0,10,height);
  rect(600,0,800,10);
  rect(600,height-10,200,10);
  
  //líneas que marcan el territorio en el que ambos bandos pueden estar//
  fill('brown');
  noStroke();
  rect(200,0,400,10);
  rect(200,height-10,400,10);

  //cañones dibujados
  //rojo//
  fill('red')
  ellipse(rojox,rojoy,rojotam);
  
  //azul
  fill ('blue');
  ellipse( azulx, azuly ,azultam);
        
  
// portales: los portales permiten traer refuerzos de cada especie//
  
  //portal de los Goblins//w
  
  fill(42, 183, 93);
  stroke(0);
  rect(portal1X,portal1y,portal1xtam,portal1xtam);
  
   var nacer =  false;
  	 
  for (var i = 0; i < Goblins.length; i = i+1) {
      if (Goblins[i].x > portal1X
      && Goblins[i].x < portal1X+ portal1xtam
      && Goblins[i].y > portal1y
      && Goblins[i].y < portal1y + portal1xtam) {
        nacer = true
if (nacer == true) {
   Goblins[Goblins.length] = new Goblin();
  
  }       
      }
    
  }
  
    
  //portal de los NoMuertos
  fill(135,27,170);
  stroke(0);
  rect(portal2X,portal2y,portal2tam,portal2tam);
  
  	 
  for (var i = 0; i < NoMuertos.length; i = i+1) {
      if (NoMuertos[i].x > portal2X
      && NoMuertos[i].x < portal2X+ portal2tam
      && NoMuertos[i].y > portal2y
      && NoMuertos[i].y < portal2y + portal2tam) {
        nacer = true
if (nacer == true) {
   NoMuertos[NoMuertos.length] = new NoMuerto();
  
  }       
      }
    
  }
  
  
 //portal de los Huarguen
  fill(102,77,7);
  stroke(0);
  rect(portal3X,portal3y,portal3tam,portal3tam);
  
  for (var i = 0; i < Huarguens.length; i = i+1) {
      if (Huarguens[i].x > portal3X
      && Huarguens[i].x < portal3X+ portal3tam
      && Huarguens[i].y > portal3y
      && Huarguens[i].y < portal3y + portal3tam) {
        nacer = true
if (nacer == true) {
   Huarguens[Huarguens.length] = new Huarguen();
  
  }       
      }
    
  }

  //portal de los enanos
  fill(14,66,104);
  stroke(0);
  rect(portal4X,portal4y,portal4tam,portal4tam);
  
   for (var i = 0; i < Enanos.length; i = i+1) {
      if (Enanos[i].x > portal4X
      && Enanos[i].x < portal4X+ portal4tam
      && Enanos[i].y > portal4y
      && Enanos[i].y < portal4y + portal4tam) {
        nacer = true
if (nacer == true) {
   Enanos[Enanos.length] = new Enano();
  
  }       
      }
    
  }

  
//Condicionales para que cada personaje que coja la poción, la poción aparezca en otra parte//
  
  /*
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
  
  */
  
  //cañones//
  
  //matar a Goblins
  for (var i = 0; i < azules.length; i = i+1) {
    for (var j = 0; j < Goblins.length; j = j+1) {
      if (azules[i].x > Goblins[j].x
      && azules[i].x < Goblins[j].x + 30
      && azules[i].y > Goblins[j].y
      && azules[i].y < Goblins[j].y + 50) {
        Goblins.splice(j, 1);
      }
    }
  }
  
  
 //matar a no muertos 
  for (var i = 0; i < azules.length; i = i+1) {
    for (var j = 0; j < NoMuertos.length; j = j+1) {
      if (azules[i].x > NoMuertos[j].x
      && azules[i].x < NoMuertos[j].x + 30
      && azules[i].y > NoMuertos[j].y
      && azules[i].y < NoMuertos[j].y + 50) {
        NoMuertos.splice(j, 1);
      }
    }
  }
  
 //matar a los del equipo azul//
  
  //matar a huarguens
  
   for (var i = 0; i < rojos.length; i = i+1) {
    for (var j = 0; j < Huarguens.length; j = j+1) {
      if (rojos  [i].x > Huarguens[j].x
      && rojos[i].x < Huarguens[j].x + 30
      && rojos[i].y > Huarguens[j].y
      && rojos[i].y < Huarguens[j].y + 50) {
        Huarguens.splice(j, 1);
      }
    }
  }
  
  //matar a los enanos
  
  for (var i = 0; i < rojos.length; i = i+1) {
    for (var j = 0; j < Enanos.length; j = j+1) {
      if (rojos  [i].x > Enanos[j].x
      && rojos[i].x < Enanos[j].x + 30
      && rojos[i].y > Enanos[j].y
      && rojos[i].y < Enanos[j].y + 50) {
        Enanos.splice(j, 1);
      }
    }
  }
   
  
//condicionales para que cuando se encuentren 2 personajes de un equipo el otro muera//
 
//Goblins a enanos
   for (var g = 0; g < Goblins.length; g = g+1) {
    for (var e = 0; e < Enanos.length; e = e+1) {
      if (Goblins[g].x > Enanos[e].x &&
          Goblins[g].x < Enanos[e].x + 30 && 
          Goblins[g].y > Enanos[e].y && 
          Goblins[g].y < Enanos[e].y + 50) {
        Enanos.splice(e, 1);
      }
    }
  }
  
  
  
  //Huarguens a Goblins
   for (var i = 0; i < Huarguens.length; i = i+1) {
    for (var g = 0; g < Goblins.length; g = g+1) {
      if (Huarguens[i].x > Goblins[g].x &&
          Huarguens[i].x < Goblins[g].x + 60 && 
          Huarguens[i].y > Goblins[g].y && 
          Huarguens[i].y < Goblins[g].y + 100) {
        Goblins.splice(g, 1);
      }
    }
  }
//no muertos a Huarguen//
   for (var i = 0; i < NoMuertos.length; i = i+1) {
    for (var h = 0; h < Huarguens.length; h = h+1) {
      if (NoMuertos[i].x > Huarguens[h].x &&
          NoMuertos[i].x < Huarguens[h].x + 50 && 
          NoMuertos[i].y > Huarguens[h].y && 
          NoMuertos[i].y < Huarguens[h].y + 90) {
        Huarguens.splice(h, 1);
      }
    }
  }
   
  //Enanos a NoMuertos//   

  for (var g = 0; g < Enanos.length; g = g+1) {
    for (var e = 0; e < NoMuertos.length; e = e+1) {
      if (Enanos[g].x > NoMuertos[e].x &&
          Enanos[g].x < NoMuertos[e].x + 30 && 
          Enanos[g].y > NoMuertos[e].y && 
          Enanos[g].y < NoMuertos[e].y + 50) {
        NoMuertos.splice(e, 1);
      }
    }
  }
    
  
  if(mouseIsPressed){
    if (mouseX > rojox && mouseX < rojoy + rojotam &&
			mouseY > rojox && mouseY < rojoy + rojotam) {
			cañon = 1;
		}
    
     if (mouseX > azulx && mouseX < azuly + azultam &&
			mouseY > azulx && mouseY < azuly + azultam) {
			cañon = 2;
		}
  
  
  if (cañon == 1) {
			rojos [i].vivo 
  }
    
     
  if (cañon == 2) {
			rojos [i].vivo 
  }
    
    
  }
  
//Goblins con sus funciones//
    for (var i = 0; i < Goblins.length; i = i + 1) {
  Goblins[i].dibujarse();
  Goblins[i].moverse();
  
}

  
//No muertos con sus funciones//
  for (var i = 0; i < NoMuertos.length; i = i + 1) {
  NoMuertos[i].dibujarse();
  NoMuertos[i].moverse();
  }
  
//Huarguen con sus funciones//
  for (var i = 0; i < Huarguens.length; i = i + 1) {
  Huarguens[i].dibujarse();
  Huarguens[i].moverse();
}
 
//Enanos con sus funciones//
  
   for (var i = 0; i < Enanos.length; i = i + 1) {
  Enanos[i].dibujarse();
  Enanos[i].moverse();
  }
  
//Pocion dibujada//
 //   for (var i = 0; i < pocion.length; i = i + 1) {
  //pocion[i].dibujarse();  
    //}
      
   //if (mouseIsPressed == true) {
    //Huarguen1.x = mouseX;
    //Huarguen1.y = mouseY;
  //}
//condicionales para que la pocion se desparezca
   for (var i = 0; i < Goblins.length; i = i+1) {
    for (var j = 0; j < pocion.length; j = j+1) {
      if (Goblins[i].x > pocion[j].x &&
          Goblins[i].x < pocion[j].x + 30 && 
          Goblins[i].y > pocion[j].y && 
          Goblins[i].y < pocion[j].y + 50) {
        pocion.splice(j, 1);
      }
    }
  }
}


function mouseClicked() {
 
  
  
  
}
//Especie 1: Goblin, humanitos verdes con orejas grandes//
//Bando rojo//
function Goblin(_genero){
  this.x = random (10,600);
  this.y = random (10,height-10);
  this.tamano = 25;
  //this.genero = _genero 
  this.vivo = 1;
  this.dirX = 3;
  this.dirY = 3;
  
  this.dibujarse = function(){
   if(this.vivo ==1){
   
     //marca que es del bando rojo//
    stroke('red');
     
     if(this.genero==1){
      fill( 0, 141,54);
     } else {
       fill(42, 183, 93);
     }
     
    //piernas//
     push();
     fill(216,196, 182);
     rect(this.x-15,this.y+55,this.tamano-13,this.tamano-5);
     rect(this.x+4,this.y+55,this.tamano-13,this.tamano-5);
    pop();
     //cuerpo//
      ellipse( this.x, this.y+35, this.tamano+20, this.tamano+22);
     ellipse( this.x, this.y, this.tamano+13, this.tamano);
     ellipse(this.x-10,this.y+70,this.tamano-7,this.tamano-15);
     ellipse(this.x+10,this.y+70,this.tamano-7,this.tamano-15);
     
     
     //orejas//
   triangle(this.x -13, this.y  -10, this.x-18,this.y+5  ,this.x-28,this.y-20);
   triangle(this.x +13, this.y  -10, this.x+18,this.y+5  ,this.x+28,this.y-20);  
     
     //ojos//
     noStroke();
     fill(0);
     ellipse(this.x-8, this.y-4, this.tamano-20)
     ellipse(this.x+8, this.y-4, this.tamano-20)
    
   
  
     }
     
     
   }
  
  
  
  this.moverse = function(){
     this.x = this.x - this.dirX;
     this.y = this.y - this.dirY;
     
   if (this.x <= 10 || this.x >= 596) {
      this.dirX = this.dirX*-1
    }
    if (this.y <= 10 || this.y >= height-10) {
      this.dirY = this.dirY*-1
    } 
    
  }
    
   
  this.morirse = function(){
    this.vivo = 0;
  }
}


//Especie2:NoMuertos, son una clase de humanos semi muertos//
function NoMuerto( _genero){
  
  this.x = random (10,550);
  this.y = random (10,height);
  this.genero = _genero;
  this.dirX = 1;
  this.dirY = 1;
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
 rect(this.x-29, this.y+35,this.tamano,this.tamano+50)
 ellipse(this.x, this.y,this.tamano)
      
//brazo
 rect(this.x-35,this.y+38,this.tamano-40, this.tamano + 30);
 rect(this.x+28,this.y+38,this.tamano-40, this.tamano + 30);
      
  //cara//    
  noStroke();
  fill(255)
      ellipse(this.x-10,this.y-7,this.tamano-35,this.tamano-30);
      ellipse(this.x+10,this.y-7,this.tamano-35,this.tamano-30);
      ellipse(this.x,this.y+10,this.tamano-30,this.tamano-38);
    }
  }
  
  this.moverse = function() {
    
   this.x = this.x + this.dirX;
   this.y = this.y + this.dirY;
     
   if (this.x <= 10 || this.x >= 596) {
      this.dirX = this.dirX*-1
    }
    if (this.y <= 10 || this.y >= height-10) {
      this.dirY = this.dirY*-1
    } 
    
  
     
    
  }
  
 this.morirse = function(){
    this.vivo = 0;
   
 }
  
  
}

//Especie2:Son los huarguen, son hombres lobo)
//Son del equipo azul//
function Huarguen( _genero){

this.x = random (200,width-10);
this.y = random (10, height-10);
this.dirX = 1;
this.dirY = 1;
this.genero = _genero;
this.tamano = 60;
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
    
     triangle(this.x +16, this.y -24,this.x+30,this.y-50,this.x+35,this.y-12); 
    triangle(this.x -16, this.y -24,this.x-30,this.y-50,this.x-35,this.y-12); 
    
    //cuerpo//
    rect(this.x-30, this.y+25, this.tamano,this.tamano+30);
    ellipse(this.x,this.y,this.tamano+10,this.tamano);
    
   
    
    //rostro//
    noStroke();
    fill(0);
    ellipse(this.x,this.y+15,this.tamano-48,this.tamano-50);
    ellipse(this.x-15,this.y-6,this.tamano-50,this.tamano-50);
    ellipse(this.x+15,this.y-6,this.tamano-50,this.tamano-50);


    
  }

  this.moverse = function(){
    
    this.x = this.x + this.dirX;
    this.y = this.y + this.dirY;
     
      if(this.x <= 220 || this.x >= width -10 ){
     this.dirX = this.dirX * -1;
     }
    
     if(this.y <= 10 || this.y >= height -10 ){
     this.dirY = this.dirY* -1;
     }
    
  }
  
  this.morirse = function(){
    this.vivo = 0;
   
  }
  
}



//Especie 4:Enanos//
//Equipo azul//
function Enano ( _genero){
  
 this.x = random(200,width);
 this.y = random(0,height);
 this.dirX = 3;
 this.dirY = 3;
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
    
    this.x = this.x + this.dirX;
    this.y = this.y + this.dirY ;
    
    if(this.x <= 210 || this.x >= width -10 ){
     this.dirX = this.dirX * -1;
     }
    
     if(this.y <= 10 || this.y >= height -10 ){
     this.dirY = this.dirY * -1;
     }
  
     
    
    
  }
  
  this.morirse = function(){
    this.vivo = 0;
  }
}


function BolasdeCañonRojas (){
  this.x = 200;
  this.y = 300;
  this.dirX = 1;
  this.dirY = 0;
  this.vivo = 1;
  
  
   this.dibujarse = function (){
     
     if(this.vivo ==1){
       fill('red');
       ellipse( this.x, this.y, 50);
       
     }  
     
   }
     
   
   this.moverse = function(){
   
     this.x = this.x + this.dirX;
    this.y = 0
    
    if(this.x <= 200 || this.x >= width -10 ){
     this.dirX = this.dirX 
     }
    
     
   }
   
  this.morirse = function(){
   this.vivo= 0
  }
}




function BolasdeCañonAzules (){
  this.x = 200;
  this.y = 300;
  this.dirX = -1;
  this.dirY = 0;
  this.vivo = 1;
  
  
   this.dibujarse = function (){
     
     if(this.vivo ==1){
       fill('red');
       ellipse( this.x, this.y, 50);
       
     }  
     
   }
     
   
   this.moverse = function(){
   
     this.x = this.x + this.dirX;
    this.y = 0
    
    if(this.x <= 200 || this.x >= width -10 ){
     this.dirX = this.dirX 
     }
    
     
   }
   
  this.morirse = function(){
   this.vivo= 0
  }
}


//}
/*
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
    this.y = random(200, 500);
  }
  
}

*/