//variables
var datos;
var posX = 50;
var posY = 50;

function preload() {
  datos = loadTable('assets/mortUN.csv', 'csv', 'header');
}

function setup() {
  createCanvas(900,600);
  background(150);

  
  
}

function draw() {
  background(0,0,0);

 
  
  posX = 50;
  posY = 50;

  //Condicionales para que cambie de color 
   
  
  if (mouseX < 300) {
    miFecha = "2005-2010";
    fill('red')
  } 
  if(mouseX >301 && mouseX < 600){
    miFecha = "2015-2020";
    fill('blue')
  }
  
  if(mouseX >601 && mouseX < 900){
    miFecha =  "2095-2100";
    fill('green')
  }
  
  

  print(miFecha);

  //recorre la base de datos
  for (var r = 0; r < datos.getRowCount()-1; r++) { 

    //Guardar las fechas de la base de datos
    var fechas = datos.getString(r, "Year(s)");

    if (fechas == miFecha) {
      //Guarda los paises en la base de datos
      var pais = datos.getString(r, "Country or Area");

      
        var valor = parseInt(datos.getString(r, "Value"));
        

        noStroke();

        //figuras
        noStroke();
        rect(posX, posY, valor-30, valor);
    

        posX = posX +100;

       
      if (posX > width-50) {
          posX = 60;
          posY = posY+20;
        }
     
    }
  }
}
