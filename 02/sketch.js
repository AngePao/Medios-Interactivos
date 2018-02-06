
var posXrect= 0
var posYrect= 0

var posXnaranja=50
var posYnaranja= 0

var posXabajo= 0
var posYabajo= 225

function setup() { 
  createCanvas(400, 400); 
  background(219,204,173,200);
	
	strokeWeight (1);
	fill(0,0,0)
	rect(posXrect, posYrect, 50, 200)
  rect(posXrect+150,posYrect,50,200)
	rect(posXrect+250,posYrect,50,200)
fill(193,78,46)
	rect(posXnaranja, posYnaranja,50,25)
	rect(posXnaranja+250,posYnaranja,50,25)
	rect(posXnaranja,posYnaranja+50,50,25)
	rect(posXnaranja+250,posYnaranja+50,50,25)
  rect(posXnaranja,posYnaranja+100,50,25)
  rect(posXnaranja+250,posYnaranja+100,50,25)
  rect(posXnaranja,posYnaranja+150,50,25)
  rect(posXnaranja+250,posYnaranja+150,50,25)
	
	fill(64,47,39)
	rect(posXnaranja+300,posYnaranja,50,25)
	rect(posXnaranja+300,posYnaranja+50,50,25)
  rect(posXnaranja+300,posYnaranja+100,50,25)
  rect(posXnaranja+300,posYnaranja+150,50,25)

	
	for(var posX2 = 0; posX2 < 200; posX2 = posX2 + 100){
		rect(posX2+100, 0, 50, 25);
	}
	for(var posX2 = 0; posX2 < 200; posX2 = posX2 + 100){
		rect(posX2+100, 50, 50, 25);
	}
	for(var posX2 = 0; posX2 < 200; posX2 = posX2 + 100){
		rect(posX2+100, 100, 50, 25);
	}
	for(var posX2 = 0; posX2 < 200; posX2 = posX2 + 100){
		rect(posX2+100, 150, 50, 25);
	}
  
	fill(192,177,144)
  noStroke(1)
  rect(posXnaranja+300,posYnaranja+25,50,25)
	rect(posXnaranja+300,posYnaranja+75,50,25)
  rect(posXnaranja+300,posYnaranja+125,50,25)
  rect(posXnaranja+300,posYnaranja+175,50,25)
  
  for(var posX2 = 0; posX2 < 200; posX2 = posX2 + 100){
		rect(posX2+100, 25, 50, 25);
	}
	for(var posX2 = 0; posX2 < 200; posX2 = posX2 + 100){
		rect(posX2+100, 75, 50, 25);
	}
	for(var posX2 = 0; posX2 < 200; posX2 = posX2 + 100){
		rect(posX2+100, 125, 50, 25);
	}
	for(var posX2 = 0; posX2 < 200; posX2 = posX2 + 100){
		rect(posX2+100, 175, 50, 25);
  }
  fill(255)
  rect(25,0,2,200)
  rect(175,0,2,200)
  rect(275,0,2,200)
  
  fill(219,204,173,200)
  rect(0,100,400,2)
  
  fill(0)
  rect(125,200,2,200)
  rect(225,200,2,200)
  rect(375,200,2,200)
  strokeWeight(5)
  rect(100,300,50,2)
  rect(100,300,50,2)
  rect(200,300,50,2)
  rect(350,300,50,2)
  
  fill(193,78,46)
  rect(posXabajo,posYabajo,50,25)
  rect(posXabajo,posYabajo+50,50,25)
  rect(posXabajo,posYabajo+100,50,25)
  rect(posXabajo,posYabajo+150,50,25)
  
  
  for(var posX2 = 0; posX2 < 200; posX2 = posX2 + 100){
		rect(posX2+150, 225, 50, 25);
	}
	for(var posX2 = 0; posX2 < 200; posX2 = posX2 + 100){
		rect(posX2+150, 275, 50, 25);
	}
	for(var posX2 = 0; posX2 < 200; posX2 = posX2 + 100){
		rect(posX2+150, 325, 50, 25);
	}
	for(var posX2 = 0; posX2 < 200; posX2 = posX2 + 100){
		rect(posX2+150, 375, 50, 25);
  }
  
  fill(64,47,39)
 for(var posX2 = 50; posX2 < 1000; posX2 = posX2 +250){
		rect(posX2, 225, 50, 25);
	}
  for(var posX2 = 50; posX2 < 1000; posX2 = posX2 +250){
		rect(posX2, 275, 50, 25);
	}
  for(var posX2 = 50; posX2 < 1000; posX2 = posX2 +250){
		rect(posX2, 325, 50, 25);
    
	}
  
  for(var posX2 = 50; posX2 < 1000; posX2 = posX2 +250){
		rect(posX2, 375, 50, 25);
	}
  
  fill(192,177,144)
  noStroke(1)
  for(var posX2 = 50; posX2 < 1000; posX2 = posX2 +250){
		rect(posX2, 200, 50, 25);
	}
  for(var posX2 = 50; posX2 < 1000; posX2 = posX2 +250){
		rect(posX2, 250, 50, 25);
	}
  for(var posX2 = 50; posX2 < 1000; posX2 = posX2 +250){
		rect(posX2, 300, 50, 25);
    
	}
  
  for(var posX2 = 50; posX2 < 1000; posX2 = posX2 +250){
		rect(posX2, 350, 50, 25);
	}
}
