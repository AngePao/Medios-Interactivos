var boton1x = 40;
var boton1y = 40;
var boton1tam = 20;

var boton2x = 70;
var boton2y = 40;
var boton2tam = 20;

var boton3x = 100;
var boton3y = 40;
var boton3tam = 20;

var boton4x = 130;
var boton4y = 40;
var boton4tam = 20;

var boton5x = 160;
var boton5y = 40;
var boton5tam = 20;

var boton6x = 40;

var boton6y = 70;
var boton6tam = 20;

var boton7x = 70;
var boton7y = 70;
var boton7tam = 20;

var boton8x = 100;
var boton8y = 70;
var boton8tam = 20;

var boton9x = 130;
var boton9y = 70;
var boton9tam = 20;

var boton10x = 160;
var boton10y = 70;
var boton10tam = 20;



var herramienta = 0;
var colorSelect = 0;

function setup() {
	
	//espacio de trabajo//
	createCanvas(windowWidth, windowHeight);
	//color de fondo blanco//
	background(250, 250,250);

}

function draw() {
	 
	//rectángulo blanco que encierra los botones//
	fill(255);
	rect(0, 0, 220, 120);

	//cuadrado pequeño negro//
	fill(0, 0, 0);
	rect(boton1x, boton1y, boton1tam, boton1tam);
	
	//cuadrado pequeño blanco//
	fill(255, 255, 255);
	rect(boton2x, boton2y, boton2tam, boton2tam);
	
	//cuadrado pequeño café//
	fill(200, 100, 0);
	rect(boton3x, boton3y, boton3tam, boton3tam);
	
	//cuadrado pqueño azul//
	fill(0, 100, 255);
	rect(boton4x, boton4y, boton4tam, boton4tam);
	
	//cuadrado pequeño amarillo//
	fill(255, 204, 0);
	rect(boton5x, boton5y, boton5tam, boton5tam);
	
	//cuadrado pequeño morado//
	fill(150, 100, 255);
	rect(boton6x, boton6y, boton6tam, boton6tam);
	
	//cuadrado pequeño verde//
	fill(150, 255, 150);
	rect(boton7x, boton7y, boton7tam, boton7tam);
	
	//cuadrado pequeño magenta//
	fill('magenta');
	rect(boton8x, boton8y, boton8tam, boton8tam);
	
	//cuaddrado pequeño cyan//
	fill('cyan');
	rect(boton9x, boton9y, boton9tam, boton9tam);
	
	//cuadrado pequlo rojo//
	fill('red');
	rect(boton10x, boton10y, boton10tam, boton10tam);


//condicional de que pase algo si el mouse esta presionado en los botones//
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
		if (mouseX > boton5x && mouseX < boton5x + boton5tam &&
			mouseY > boton5y && mouseY < boton5y + boton5tam) {
			herramienta = 4;
		}
		if (mouseX > boton6x && mouseX < boton6x + boton6tam &&
			mouseY > boton6y && mouseY < boton6y + boton6tam) {
			herramienta = 5;
		}
		if (mouseX > boton7x && mouseX < boton7x + boton7tam &&
			mouseY > boton7y && mouseY < boton7y + boton7tam) {
			herramienta = 6;
		}
		if (mouseX > boton8x && mouseX < boton8x + boton8tam &&
			mouseY > boton8y && mouseY < boton8y + boton8tam) {
			herramienta = 7;
		}
		if (mouseX > boton9x && mouseX < boton9x + boton9tam &&
			mouseY > boton9y && mouseY < boton9y + boton9tam) {
			herramienta = 8;
		}
		if (mouseX > boton10x && mouseX < boton10x + boton10tam &&
			mouseY > boton10y && mouseY < boton10y + boton10tam) {
			herramienta = 9;
		}
		
		
		if (mouseX > boton1x && mouseX < boton1x + boton1tam &&
			mouseY > boton1y && mouseY < boton1y + boton1tam) {
			colorSelect = 0;
		}
		if (mouseX > boton2x && mouseX < boton2x + boton2tam &&
			mouseY > boton2y && mouseY < boton2y + boton2tam) {
			colorSelect = 1;
		}
		if (mouseX > boton3x && mouseX < boton3x + boton3tam &&
			mouseY > boton3y && mouseY < boton3y + boton3tam) {
			colorSelect = 2;
		}
		if (mouseX > boton4x && mouseX < boton4x + boton4tam &&
			mouseY > boton4y && mouseY < boton4y + boton4tam) {
			colorSelect = 3;
		}
		if (mouseX > boton5x && mouseX < boton5x + boton5tam &&
			mouseY > boton5y && mouseY < boton5y + boton5tam) {
			colorSelect = 4;
		}
		if (mouseX > boton6x && mouseX < boton6x + boton6tam &&
			mouseY > boton6y && mouseY < boton6y + boton6tam) {
			colorSelect = 5;
		}
		if (mouseX > boton7x && mouseX < boton7x + boton7tam &&
			mouseY > boton7y && mouseY < boton7y + boton7tam) {
			colorSelect = 6;
		}
		if (mouseX > boton8x && mouseX < boton8x + boton8tam &&
			mouseY > boton8y && mouseY < boton8y + boton8tam) {
			colorSelect = 7;
		}
		if (mouseX > boton9x && mouseX < boton9x + boton9tam &&
			mouseY > boton9y && mouseY < boton9y + boton9tam) {
			colorSelect = 8;
		}
		if (mouseX > boton10x && mouseX < boton10x + boton10tam &&
			mouseY > boton10y && mouseY < boton10y + boton10tam) {
			colorSelect = 9;
		}

		if (colorSelect == 0) {
			fill(0, 0, 0);
		}
		if (colorSelect == 1) {
			fill(255, 255, 255);
		}
		if (colorSelect == 2) {
			fill(200, 100, 0);
		}
		if (colorSelect == 3) {
			fill(0, 100, 255);
		}
		if (colorSelect == 4) {
			fill(255, 204, 0);
		}
		if (colorSelect == 5) {
			fill(150, 100, 255);
		}
		if (colorSelect == 6) {
			fill(150, 255, 150);
		}
		if (colorSelect == 7) {
			fill('magenta');
		}
		if (colorSelect == 8) {
			fill('cyan');
		}
		if (colorSelect == 9) {
			fill('red');
		}
		
		if (herramienta == 0) {
			ellipse(mouseX , mouseY , 10, 10);
			line(width / 2, height / 2, mouseX, mouseY);
			stroke(0,0,0)
		}
		if (herramienta == 1) {
			ellipse(mouseX, mouseY, 10, 10);
			line(width / 2, height / 2, mouseX, mouseY);
			stroke(255, 255, 255)
		}
		if (herramienta == 2) {
			ellipse(mouseX , mouseY, 10, 10);
			line(width / 2, height / 2, mouseX, mouseY);
			stroke(200, 100, 0)
		}
		if (herramienta == 3) {
			ellipse(mouseX - 10, mouseY - 10, 10, 10);
			line(width / 2, height / 2, mouseX, mouseY);
			stroke(0, 100, 255)
		}
		if (herramienta == 4) {
			ellipse(mouseX - 10, mouseY - 10, 10, 10);
			line(width / 2, height / 2, mouseX, mouseY);
			stroke(255, 204, 0)
		}
		if (herramienta == 5) {
			ellipse(mouseX - 10, mouseY - 10, 10, 10);
			line(width / 2, height / 2, mouseX, mouseY);
			stroke(150, 100, 255)
		}
		
		if (herramienta == 6) {
			ellipse(mouseX - 10, mouseY - 10, 10, 10);
			line(width / 2, height / 2, mouseX, mouseY);
			stroke(150, 255, 150)
		}
		if (herramienta == 7) {
			ellipse(mouseX, mouseY , 10, 10);
			line(width / 2, height / 2, mouseX, mouseY);
			stroke('magenta')
		}
		if (herramienta == 8) {
			ellipse(mouseX - 10, mouseY - 10, 10, 10);
			line(width / 2, height / 2, mouseX, mouseY);
			stroke('cyan')
		}
		if (herramienta == 9) {
			ellipse(mouseX , mouseY , 10, 10);
			stroke('red')
		}
	}
}
