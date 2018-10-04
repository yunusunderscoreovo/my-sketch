let x = 0;
let y = 0;
let spacing = 10;

function setup() {
	createCanvas(400, 400);
	background(230, 0, 20);
}

function draw() {
	fill(70, 30, 500);
	stroke(55,20, 100);
	if(random(1) < 0.9) {
	bezier(x, y,x+spacing,y+ spacing);
	} else {
	bezier(x, y + spacing,x + spacing, y);		 
	}
	x = x + spacing
	if (x > width){
	x = 0;
		y= y + spacing;
	}
	
}
