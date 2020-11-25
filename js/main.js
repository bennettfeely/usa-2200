import border from "./border.json";
import bitmap from "./bitmap.json";
import schemes from "./schemes.json";
import states from "./states.json";

var raf;
var is_paused;

var loading_status = document.querySelector(".loading-status");
var loading_pct;
loading_pct = 0;

var Settings = {
	bitmap: {
		width: 160,
		height: 100,
	},
	damping: 400,
	scheme: "cool", // cool, neon, tomorrow, diverging, paired, tableau
	map: {
		width: 1600,
		height: 1000,
		cellSize: 10,
		padding: 6,
	},
	font: `36px VT323, Monaco, monospace`,
};

// Iterate through states array and assign placeholders
Object.entries(states).forEach(([key, state], i) => {
	state.count = 0;
	state.centroid = { x: [], y: [] };
	state.pixels = [];
});

// Setup Canvas
var canvas = document.querySelector("canvas");
canvas.width =
	Settings.map.width + Settings.map.padding * Settings.map.cellSize * 2;
canvas.height =
	Settings.map.height + Settings.map.padding * Settings.map.cellSize * 2;

var ctx = canvas.getContext("2d", {
	alpha: true,
	desynchronized: true,
	preserveDrawingBuffer: true,
});
ctx.imageSmoothingEnabled = false;
ctx.textAlign = "center";
ctx.textBaseline = "middle";
ctx.lineJoin = "miter";
ctx.font = Settings.font;

function findNeighbors(grid, x, y) {
	var prevRow = grid[y - 1] || [];
	var currentRow = grid[y];
	var nextRow = grid[y + 1] || [];
	var neighbors = [
		prevRow[x - 1],
		prevRow[x],
		prevRow[x + 1],
		currentRow[x - 1],
		currentRow[x],
		currentRow[x + 1],
		nextRow[x - 1],
		nextRow[x],
		nextRow[x + 1],
	].filter((e) => e);

	return neighbors;
}

function getNewCell(neighbors, cell) {
	// Pick a random neighbor
	return neighbors[Math.floor(Math.random() * neighbors.length)];
}

function fillCell(cell, colIndex, rowIndex) {
	// Add pixel to canvas
	let size = Settings.map.cellSize;
	let x = (colIndex + Settings.map.padding) * size;
	let y = (rowIndex + Settings.map.padding) * size;

	ctx.fillStyle = schemes[Settings.scheme][states[cell].color];
	ctx.fillRect(x, y, size, size);
}

function damp(arr) {
	// Get average value in array of numbers
	let sum = arr.reduce((a, b) => a + b, 0);
	let avg = sum / arr.length || 0;

	return avg;
}

function label(state) {
	// Add state labels with stroke outline
	let center_x =
		damp(state.centroid.x) * Settings.map.cellSize +
		Settings.map.padding * Settings.map.cellSize;
	let center_y =
		damp(state.centroid.y) * Settings.map.cellSize +
		Settings.map.padding * Settings.map.cellSize;

	ctx.fillStyle = "#fff";
	ctx.strokeStyle = "#000";
	ctx.lineWidth = Settings.map.cellSize / 2;
	ctx.strokeText(state.name, center_x, center_y);

	ctx.fillText(state.name, center_x, center_y);
}

function countOccurrences(arr, val) {
	return arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
}

function initRenderCanvas(ctx) {
	// Draw US outline
	border.forEach((cell) => {
		var colIndex = cell[0];
		var rowIndex = cell[1];

		fillCell("US", colIndex, rowIndex, false);
	});

	// Start Loading count up
	setTimeout(loadingIndicator, 500);
}

function loadingIndicator() {
	var min = 30;
	var max = 120;
	var rand_interval = Math.floor(Math.random() * (max - min + 1) + min);
	var rand_update = Math.floor(Math.random() * loading_pct * 0.1 + 2);

	loading_pct = loading_pct + rand_update;

	if (loading_pct < 100) {
		loading_status.innerHTML = `Loading ${loading_pct}%`;

		setTimeout(loadingIndicator, rand_interval);
	} else {
		loading_status.innerHTML = `Loading 100%`;

		setTimeout(() => {
			document.querySelector("html").classList.remove("is-loading");
			document.querySelector("html").classList.add("is-started");

			startSimulation();
		}, 700);
	}
}

function renderCanvas(grid, ctx) {
	// Clear the canvas
	ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

	// Iterate through each row and each column
	grid.forEach((row, rowIndex) => {
		row.forEach((cell, colIndex) => {
			// If current cell is part of the US mainland
			if (cell !== null) {
				var neighbors = findNeighbors(grid, colIndex, rowIndex);
				var friendlys = countOccurrences(neighbors, cell);
				var newCell = getNewCell(neighbors, cell);

				if (friendlys > 6) {
					// This cell is surrounded by similar cells, keep it
					fillCell(cell, colIndex, rowIndex);
				} else {
					// Update bitmap matrix
					grid[rowIndex][colIndex] = newCell;

					// Tally number of cells that make up each state
					states[newCell].count += 1;

					if (states[newCell].centroid.x.length > Settings.damping) {
						states[newCell].centroid.x.shift();
						states[newCell].centroid.y.shift();
					} else {
						states[newCell].centroid.x.push(colIndex);
						states[newCell].centroid.y.push(rowIndex);
					}
				}
			}
		});
	});

	// Label each state
	Object.entries(states).forEach(([key, state]) => {
		if (state.count !== 0) {
			label(state);

			// Reset each state count
			state.count = 0;
		}
	});
}

function getRealPixelSize() {
	// Get real px size of pixel on the canvas
	let map = document.querySelector(".map");
	let size = map.offsetWidth / Settings.bitmap.width;

	// Set --pixel CSS variable
	document.documentElement.style.setProperty("--pixel", `${size}px`);
}

function closeAd() {
	document.querySelector(".add").remove();
}

function clickAnimation(elem) {
	elem.classList.add("is-active");

	setTimeout(() => {
		elem.classList.remove("is-active");
	}, 200);
}

function toggleInformation() {
	let info_toggle = document.querySelector(".toggle-information");
	clickAnimation(info_toggle);

	document.querySelector("html").classList.toggle("has-information");

	if (document.querySelector("html").classList.contains("has-information")) {
		pauseSimulation();

		info_toggle.innerHTML = "Hide Info";
	} else {
		startSimulation();

		info_toggle.innerHTML = "Info";
	}
}

function toggleSimulation() {
	let sim_toggle = document.querySelector(".toggle-simulation");

	clickAnimation(sim_toggle);

	if (is_paused === false) {
		pauseSimulation();

		sim_toggle.innerHTML = "Play";
	} else {
		startSimulation();

		sim_toggle.innerHTML = "Pause";
	}
}

function pauseSimulation() {
	is_paused = true;

	cancelAnimationFrame(raf);
}

function startSimulation() {
	is_paused = false;

	raf = requestAnimationFrame(simulation);
}

function simulation() {
	renderCanvas(bitmap, ctx);

	raf = requestAnimationFrame(simulation);
}

function init() {
	// Figure out the size of a pixel and update on resize
	getRealPixelSize();
	window.onresize = getRealPixelSize;

	// Run/Pause simualtion
	let sim_toggle = document.querySelector(".toggle-simulation");
	sim_toggle.onclick = toggleSimulation;

	// Toggle infobox
	let info_toggle = document.querySelector(".toggle-information");
	info_toggle.onclick = toggleInformation;

	// Handle closing advertisment
	let close = document.querySelector(".carbon-close");
	close.onclick = closeAd;

	// Render the US Outline
	initRenderCanvas(ctx);
}

init();
