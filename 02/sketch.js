
var posXrect= 0
var posYrect= 0

var posXnaranja=50
var posYnaranja= 0

var posXabajo= 0
var posYabajo= 225

function setup() { 
	//espacio de trabajo//
  createCanvas(400, 400);
	//color de fondo café claro//
  background(219,204,173,200);
	
	
	strokeWeight (1);
	fill(0,0,0)
	//cuadrados negros verticales costado izquierdo superior//
	rect(posXrect, posYrect, 50, 200)
	//cuadrados negros verticales de la mitad//
        rect(posXrect+150,posYrect,50,200)
	//cuadrados negros verticales en el costado derecho superior//
	rect(posXrect+250,posYrect,50,200)
	
fill(193,78,46)
	//rectángulo pequeño naranja superior izquierdo//
	rect(posXnaranja, posYnaranja,50,25)
	
	//rectángulo pequeño naranja superior derecha//
	rect(posXnaranja+250,posYnaranja,50,25)
	
	//rectánglo pequeño naranja segunda fila superior izquierda//
	rect(posXnaranja,posYnaranja+50,50,25)
	
	//rectángulo pequeño naranja segunda fila superior derecha//
	rect(posXnaranja+250,posYnaranja+50,50,25)
	
	//rectángulo pequeño naranja tercera fila superior izquierdo//
        rect(posXnaranja,posYnaranja+100,50,25)
	
	//rectángulo pequeño naranja tercera fila superior derecha//
        rect(posXnaranja+250,posYnaranja+100,50,25)
	
	//rectángulo pequeño naranja cuarta fila superior izquierdo//
        rect(posXnaranja,posYnaranja+150,50,25)
	
	//rectángulo pequeño naranja cuarta fila superior derecha//
        rect(posXnaranja+250,posYnaranja+150,50,25)
	
	fill(64,47,39)
	//rectángulo pequeño café primera fila superior derecha//
	rect(posXnaranja+300,posYnaranja,50,25)
	
	//rectángulo pequeño café segunda fila superior deracha//
	rect(posXnaranja+300,posYnaranja+50,50,25)
	
	//rectángulo pequeño café tercera fila superior derecha//
        rect(posXnaranja+300,posYnaranja+100,50,25)
	
	//rectángulo pequeño café cuarta fila superior derecha//
        rect(posXnaranja+300,posYnaranja+150,50,25)

	//rectángulos cafés pequeños primera fila superior izquierda y centro//
	for(var posX2 = 0; posX2 < 200; posX2 = posX2 + 100){
		rect(posX2+100, 0, 50, 25);
	}
	
	//rectángulos cafés pequeños segunda fila superior izquierda y centro//
	for(var posX2 = 0; posX2 < 200; posX2 = posX2 + 100){
		rect(posX2+100, 50, 50, 25);
	}
	
	//rectángulos cafés pequeños tercera fila superior izquierda y centro//
	for(var posX2 = 0; posX2 < 200; posX2 = posX2 + 100){
		rect(posX2+100, 100, 50, 25);
	}
	
	//rectángulos cafés pequeños cuarta fila superior izquierda y centro//
	for(var posX2 = 0; posX2 < 200; posX2 = posX2 + 100){
		rect(posX2+100, 150, 50, 25);
	}
  
	fill(192,177,144)
  noStroke(1)
	//rectángulo pequeño café claro primera fila superior derecha//
  rect(posXnaranja+300,posYnaranja+25,50,25)
	
	//rectángulo pequeño café claro segunda fila superior derecha//
  rect(posXnaranja+300,posYnaranja+75,50,25)
	
	//rectángulo pequeño café claro tercera fila superior derecha//
  rect(posXnaranja+300,posYnaranja+125,50,25)
	
	//rectángulo pequeño café claro cuarta fila superior derecha//
  rect(posXnaranja+300,posYnaranja+175,50,25)
  
	//rectángulos pequeños café claro primera fila izquierda y centro//
  for(var posX2 = 0; posX2 < 200; posX2 = posX2 + 100){
		rect(posX2+100, 25, 50, 25);
	}
	
	//rectángulos pequeños café claro segunda fila izquierda y centro//
	for(var posX2 = 0; posX2 < 200; posX2 = posX2 + 100){
		rect(posX2+100, 75, 50, 25);
	}
	
	//rectángulos pequeños café claro tercera fila izquierda y centro//
	for(var posX2 = 0; posX2 < 200; posX2 = posX2 + 100){
		rect(posX2+100, 125, 50, 25);
	}
	
	//rectángulos pequeños café claro cuarta fila izquierda y centro//
	for(var posX2 = 0; posX2 < 200; posX2 = posX2 + 100){
		rect(posX2+100, 175, 50, 25);
  }
	
  fill(255)
  
	//línea vertical blanca superior izquierda//
	rect(25,0,2,200)
	
	//línea vertical blanca superior centro//
        rect(175,0,2,200)
	
	//línea vertical blanca superior derecha//
        rect(275,0,2,200)
	
  fill(219,204,173,200)
	//línea café clara horizontal superior//
  rect(0,100,400,2)
  
  fill(0)
	//línea negra vertical inferior izquierda//
  rect(125,200,2,200)
	
	//línea negra vertical inferior centro //
  rect(225,200,2,200)
	
	//línea negra vertical inferior derecha//
  rect(375,200,2,200)
	
  strokeWeight(5)
	//línea negra inferior horizontal izquierda//
  rect(100,300,50,2)
  
	//línea negra inferior horizontal centro//
  rect(200,300,50,2)
	
	//línea negra inferior horizontal derecha//
  rect(350,300,50,2)
  
  fill(193,78,46)
	//rectángulo naranja pequeño primera fila inferior izquierdo//
  rect(posXabajo,posYabajo,50,25)
	
	//rectángulo naranja pequeño segunda fila inferior izquierdo//
  rect(posXabajo,posYabajo+50,50,25)
	
	//rectángulo naranja pequeño tercera fila inferior izquierdo//
  rect(posXabajo,posYabajo+100,50,25)
	
	//rectángulo naranja pequeño cuarta fila inferior izquierdo//
  rect(posXabajo,posYabajo+150,50,25)
  
  //rectángulos pequeños naranjas primera fila inferior centro y derecha//
  for(var posX2 = 0; posX2 < 200; posX2 = posX2 + 100){
		rect(posX2+150, 225, 50, 25);
	}
 
  //rectángulos pequeños naranjas segunda fila inferior centro y derecha//
	for(var posX2 = 0; posX2 < 200; posX2 = posX2 + 100){
		rect(posX2+150, 275, 50, 25);
	}
	
//rectángulos pequeños naranjas tercera fila inferior centro y derecha//
	for(var posX2 = 0; posX2 < 200; posX2 = posX2 + 100){
		rect(posX2+150, 325, 50, 25);
	}
	
//rectángulos pequeños naranjas cuarta fila inferior centro y derecha//
	for(var posX2 = 0; posX2 < 200; posX2 = posX2 + 100){
		rect(posX2+150, 375, 50, 25);
  }
  
  fill(64,47,39)
	
//rectángulos pequeños café primera fila inferior izquierda y derecha//
 for(var posX2 = 50; posX2 < 1000; posX2 = posX2 +250){
		rect(posX2, 225, 50, 25);
	}
	
//rectángulos pequeños café segunda fila inferior izquierda y derecha//
  for(var posX2 = 50; posX2 < 1000; posX2 = posX2 +250){
		rect(posX2, 275, 50, 25);
	}
	
//rectángulos pequeños café tercera fila inferior izquierda y derecha//
  for(var posX2 = 50; posX2 < 1000; posX2 = posX2 +250){
		rect(posX2, 325, 50, 25);
    
	}
  
//rectángulos pequeños café cuartaa fila inferior izquierda y derecha//
  for(var posX2 = 50; posX2 < 1000; posX2 = posX2 +250){
		rect(posX2, 375, 50, 25);
	}
  
  fill(192,177,144)
  noStroke(1)
	
	//rectángulos pequeños café claro primera fila inferior izquierda y derecha//
  for(var posX2 = 50; posX2 < 1000; posX2 = posX2 +250){
		rect(posX2, 200, 50, 25);
	}
	
	//rectángulos pequeños café claro segunda fila inferior izquierda y derecha//
  for(var posX2 = 50; posX2 < 1000; posX2 = posX2 +250){
		rect(posX2, 250, 50, 25);
	}
	
	//rectángulos pequeños café claro tercera fila inferior izquierda y derecha//
  for(var posX2 = 50; posX2 < 1000; posX2 = posX2 +250){
		rect(posX2, 300, 50, 25);
    
	}
  
	//rectángulos pequeños café claro cuarta fila inferior izquierda y derecha//
  for(var posX2 = 50; posX2 < 1000; posX2 = posX2 +250){
		rect(posX2, 350, 50, 25);
	}
}
