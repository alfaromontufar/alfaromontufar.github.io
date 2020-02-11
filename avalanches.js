
let w = 401;

let cells = [];
let wstep;
let hstep;
var button;
let finished = false;
var n_iter = 0;

function setup() {
	createCanvas(800, 800);
	wstep = int(width/w);
	hstep =	int(height/w);
	frameRate(10000);
	for (let i = 0; i < w; i++) {
		cells[i] = [];
	}
	init();
}

// reset board when mouse is pressed
function mousePressed() {
	
}

// Fill board randomly
function init() {
	for (let i = 0; i < w; i++) {
		cells[i] = [];
		for (let j = 0; j < w; j++) {
			cells[i][j] = 0;
		}
	}
	cells[floor(w/2)][floor(w/2)] = 4;
}

function draw() {
	toppling();
	for (let i = 0; i < w; i++) {
		for (let j = 0; j < w; j++) {
			fill( 255 - int( cells[i][j] * 255 / 4 ) );
			noStroke();
			rect(i * wstep, j * hstep, wstep, hstep);
		}
	}
}

function toppling() {
	let toppled = false;
	for (let i = 0; i < w; i++) {
		for (let j = 0; j < w; j++) {
			if (cells[i][j] > 3) {
				sand = floor(cells[i][j]/4)*4;
				cells[i][j] = cells[i][j] - sand;
				if ( i > 0 ){
					cells[i-1][j] = cells[i-1][j] + sand/4;
				}
				if ( j > 0 ){
					cells[i][j-1] = cells[i][j-1] + sand/4;
				}
				if ( i < w - 1 ){
					cells[i+1][j] = cells[i+1][j] + sand/4;
				}
				if ( j < w - 1 ){
					cells[i][j+1] = cells[i][j+1] + sand/4;
				}
				toppled = true;
				break;
			}
		}
		if (toppled == true){
			break;
		}
	}
	if (toppled == false & finished == false){
		saveSVG();
		
		for (let i = 0; i < w; i++) {
			for (let j = 0; j < w; j++) {
				cells[i][j] = 2*cells[i][j];
			}
		}

		n_iter = n_iter + 1;

		//finished = true;
	}
}

function saveSVG() {
	save("mySVG" + str(n_iter) + ".svg"); // give file name
	print("saved svg");
}



