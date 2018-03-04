var mx = 0.0;

function setup() {
  //espacio de trabajo 3D//
  createCanvas(700, 500, WEBGL);
  normalMaterial();
}


function draw() {
  
  //color de fondo de verano a invierno//
  background(240,240,255);
  if (mx<350) {
background(10,150,250)
  }
  
  if (mouseIsPressed)
  translate(mouseX-(width/2), mouseY-(height/2), 0);
  
  
  //el piso del paisaje//
    push();
  translate(10, 100, 10);
  rotateX(PI/2);
  noStroke(0)
  fill(0,100,100,80);
  if (mx<350) {
noStroke();
fill('brown');
  }
  
  plane(width, 300);
  pop();

  //la base de la casa//
  push();
  stroke(1);
  translate(0,50,0);
  fill(100,200,200);
   if (mx<350) {
stroke('red');
fill('orange');
}
  box(200,150,50);
  pop();
  
  //el techo de la casa//
  push();
  stroke(255);
  rotate(PI);
  translate(0,90,0);
  fill(100,200,200);
   if (mx<350) {
stroke('red');
fill('orange');
}
  cone(150,150);
   pop();
  
  //árboles que rodean la casa campestre//
  push();
  stroke(255);
  fill(10,255,20);
   if (mx<350) {
stroke(240,100,0);
}
  translate (150,-90,100);
  rotate(PI);
  cone(50,60);
  translate(0,-40,0);
  cone(50,60);
  translate(0,-40,0);
  cone(50,60);
  translate(0,-40,0);
  cone(50,60);
  pop();
  
    push();
  stroke(255);
  fill(10,255,20);
     if (mx<350) {
stroke(240,100,0);
}
  translate (-150,-90,100);
  rotate(PI);
  cone(50,60);
  translate(0,-40,0);
  cone(50,60);
  translate(0,-40,0);
  cone(50,60);
  translate(0,-40,0);
  cone(50,60);
  pop();
  

  
  var dif = mouseX - mx;
  if (abs(dif) > 1.0) {
    mx = mx + dif/32.0;
  }
  mx = constrain(mx, 1, width-1);

  //indicador de donde esta el mouse)
  push();
  fill(0,50);
  translate(mx-(width/2)-1, (height/2)-2);
  sphere(4, 5);
  pop();

  //nieve lado derecho//
  push();
  fill(10,150,250,50);
   if (mx<350) {
  noStroke();
fill(10,150,250);
}
   translate(100,-100,20);
  sphere(10);
  translate(200,-20,-20);
  sphere(10);
  translate(10,100,30);
  sphere(10);
  translate(-50,-200,-100);
  sphere(10);
  pop();
  
  //niever lado izquierdo//
  push();
  fill(10,150,250,50);
    if (mx<350) {
  noStroke();
fill(10,150,250);
}
  translate(-100,-150,20);
  sphere(10);
  translate(-80,-40,0);
  sphere(10);
  translate(-100,80,0);
  sphere(10);
  translate(280,-70,10);
  sphere(10);
  pop();
    
    
    
}