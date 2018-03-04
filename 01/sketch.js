function setup() { 
	//tamaño de espacio de trabajo//
  createCanvas(400, 400); 
	//Color del fondo cafe claro con transparencia//
   background(249,176,94,20)
	
	//línea negra superior//
		strokeWeight (3);
	line( 1,1, 400, 1 )
	
	//círculo morado en el costado izquierdo//
	strokeWeight (1);
		fill(102,78,155)
	ellipse( 65, 150, 120,120)
	
strokeWeight (2);
	//linea negra vertical//
	line( 0,0, 180, 400)
	//línea negra superior corta//
	line(0,150, 320,150)
	
	
strokeWeight (1);
	//círculo gris con trasparencia en el costado derecho inferior//
	fill(119,115,115,220)
	ellipse(400,300,300,300)
	
	//triángulo amarillo con transparencia en el costado derecho superior//
	fill(255,209,0,100)
	triangle(360,0,200,170, 450,230)
    
	//línea negra inferior//
	strokeWeight (2);
  line(20,370, 300, 370) 
}
