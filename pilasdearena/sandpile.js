
let w = 10;

let cells = [];
let wstep;
let hstep;
var button;
var colorusado = 'black';

function setup() {
	createCanvas(600, 600);
	wstep = int(width/w);
	hstep =	int(height/w);
	frameRate(5);
	for (let i = 0; i < w; i++) {
		cells[i] = [];
	}
	//init();
}

// reset board when mouse is pressed
function mousePressed() {
	init();
	colorusado = 'blue'
}

// Fill board randomly
function init() {
	for (let i = 0; i < w; i++) {
		cells[i] = [];
		for (let j = 0; j < w; j++) {
			cells[i][j] = int(random(0, 4));
		}
	}
	//cells[floor(random(0,w))][floor(random(0,w))] = 100;
}

function draw() {
	toppling();
}

function toppling() {
	let toppled = false;
	for (let i = 0; i < w; i++) {
		for (let j = 0; j < w; j++) {
			if (cells[i][j] > 3) {
				cells[i][j] = cells[i][j] - 4;
				fill( int( cells[i][j] * 255 / 4 ) );
				stroke('red');
				strokeWeight(10);
				rect(i * wstep, j * hstep, wstep, hstep);
				if ( i > 0 ){
					cells[i-1][j] = cells[i-1][j] + 1;
					fill( int( cells[i-1][j] * 255 / 4 ) );
					//stroke('red');
					//strokeWeight(10);
					rect((i-1) * wstep, j * hstep, wstep, hstep);
				}
				if ( j > 0 ){
					cells[i][j-1] = cells[i][j-1] + 1;
					fill( int( cells[i][j-1] * 255 / 4 ) );
					//stroke('red');
					//strokeWeight(10);
					rect(i * wstep, (j-1) * hstep, wstep, hstep);
				}
				if ( i < w - 1 ){
					cells[i+1][j] = cells[i+1][j] + 1;
					fill( int( cells[i+1][j] * 255 / 4 ) );
					//stroke('red');
					//strokeWeight(10);
					rect((i+1) * wstep, j * hstep, wstep, hstep);
				}
				if ( j < w - 1 ){
					cells[i][j+1] = cells[i][j+1] + 1;
					fill( int( cells[i][j+1] * 255 / 4 ) );
					//stroke('red');
					//strokeWeight(10);
					rect(i * wstep, (j+1) * hstep, wstep, hstep);
				}
				toppled = true;
				break;
			}
		}
		if (toppled == true){
			break;
		}
	}
	if (toppled == false){
		let i1 = floor(random(0,w));
		let j1 = floor(random(0,w));
		cells[i1][j1] = cells[i1][j1] + 1;

		fill( int( cells[i1][j1] * 255 / 4 ) );

		for (let i = 0; i < w; i++) {
			for (let j = 0; j < w; j++) {
				fill( int( cells[i][j] * 255 / 4 ) );
				noStroke();
				if(i == i1 && j == j1){
					stroke(colorusado);
					strokeWeight(10);
				}
				rect(i * wstep, j * hstep, wstep, hstep);
			}
		}
	}
}

function saveSVG() {
	save("mySVG.svg"); // give file name
	print("saved svg");
}


