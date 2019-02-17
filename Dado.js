var numaleatorio;

function setup() {
  createCanvas(400, 400);
	background(255);
  uno()
}

function draw() {
	if(mouseIsPressed == true)
		numaleatorio = int(random(1,6));
		switch(numaleatorio){
				case 1:
				uno();
				break;
				case 2:
				dos();
				break;
				case 3:
				tres();
				break;
				case 4:
				cuatro();
				break;
				case 5:
				cinco();
				break;
				case 6:
				seis();
				break;
		}
	
	
}

function uno(){
	fill(220);
	rect(100,100,200,200);
	fill(0);
	ellipse(200,200,20,20);
}


function dos(){
	fill(220);
	rect(100,100,200,200);
	fill(0);
	ellipse(250,150,20,20);
	fill(0);
	ellipse(150,250,20,20);
}

function tres(){
	fill(220);
	rect(100,100,200,200);
	fill(0);
	ellipse(250,150,20,20);
	fill(0);
	ellipse(200,200,20,20);
	fill(0);
	ellipse(150,250,20,20);
}

function cuatro(){
	fill(220);
	rect(100,100,200,200);
	fill(0);
	ellipse(150,150,20,20);
	fill(0);
	ellipse(250,250,20,20);
	fill(0);
	ellipse(250,150,20,20);
	fill(0);
	ellipse(150,250,20,20);
}

function cinco(){
	fill(220);
	rect(100,100,200,200);
	fill(0);
	ellipse(150,150,20,20);
	fill(0);
	ellipse(250,250,20,20);
	fill(0);
	ellipse(250,150,20,20);
	fill(0);
	ellipse(150,250,20,20);
	fill(0);
	ellipse(200,200,20,20);
}

function seis(){
	fill(220);
	rect(100,100,200,200);
	fill(0);
	ellipse(150,150,20,20);
	fill(0);
	ellipse(150,200,20,20);
	fill(0);
	ellipse(150,250,20,20);
	fill(0);
	ellipse(250,150,20,20);
	fill(0);
	ellipse(250,200,20,20);
	fill(0);
	ellipse(250,250,20,20);
}
