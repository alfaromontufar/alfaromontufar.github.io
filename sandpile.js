
let w = 101;

let cells = [];
let nextcells = [];
let wstep;
let hstep;

function setup() {
	createCanvas(600, 600);
	wstep = int(width/w);
	hstep =	int(height/w);
	frameRate(10);
	for (let i = 0; i < w; i++) {
		cells[i] = [];
	}
	init();
	/*for (let i = 0; i < w; i++) {
		nextcells[i] = [];
	}*/
}

// reset board when mouse is pressed
function mousePressed() {
	init();
}

// Fill board randomly
function init() {
	for (let i = 0; i < w; i++) {
		cells[i] = [];
		for (let j = 0; j < w; j++) {
			cells[i][j] = int(random(0, 4));
		}
	}
	cells[floor(random(0,w))][floor(random(0,w))] = 100;
}

function draw() {
	toppling();
	for (let i = 0; i < w; i++) {
		for (let j = 0; j < w; j++) {
			fill( int( cells[i][j] * 255 / 4 ) );
			noStroke();
			rect(i * wstep, j * hstep, wstep, hstep);
		}
	}
}

function toppling() {
	for (let i = 0; i < w; i++) {
		for (let j = 0; j < w; j++) {
			if (cells[i][j] > 3) {
				cells[i][j] = cells[i][j] - 4;
				if ( i > 0 ){
					cells[i-1][j] = cells[i-1][j] + 1;
				}
				if ( j > 0 ){
					cells[i][j-1] = cells[i][j-1] + 1;
				}
				if ( i < w - 1 ){
					cells[i+1][j] = cells[i+1][j] + 1;
				}
				if ( j < w - 1 ){
					cells[i][j+1] = cells[i][j+1] + 1;
				}
				break;
			}
		}
	}
}




