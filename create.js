function setup() {
	createCanvas(windowWidth, windowHeight);
	
}

function draw() {
	const ard = map(mouseX,0,width,0,255);
	const ard1 =map(mouseY,0,height,0,255);
	translate(mouseX,mouseY);
	const amiyafury =map (mouseY,0,height,0,TWO_PI);
	rotate(amiyafury);
	stroke(ard,ard1,255);
	line(-300,0,300,0);
}