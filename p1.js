"use strict";

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;

let figuras = [];

let cantRect;
let cantCirc;

let veloc = 1000;

const CANTFIG = 10;

let figuraSeleccionada = null;

let mouseUp = false;
let mouseDown = false;

document.getElementById("figura").addEventListener("click", (e) => {
	limpiarCanvas();
	crearFiguras();
});

canvas.addEventListener("mousedown", (e) => {
	figuraSeleccionada = hayFiguraSeleccionada(e.layerX, e.layerY);
	if (figuraSeleccionada != null) {
		figuraSeleccionada.selected(true);
		figuraSeleccionada.draw();
	}
	mouseDown = true;
	mouseUp = false;
});

canvas.addEventListener("mouseup", (e) => {
	mouseUp = true;
	mouseDown = false;
	if (figuraSeleccionada != null) {
		figuraSeleccionada.selected(false);
		figuraSeleccionada.draw();
	}
	figuraSeleccionada = null;
});

canvas.addEventListener("mousemove", (e) => {
	if (mouseDown == true && figuraSeleccionada != null) {
		figuraSeleccionada.moveTo(e.layerX, e.layerY);
		dibujar();
	}
});

document.addEventListener("keydown", (e) => {
	if (figuraSeleccionada != null) {
		figuraSeleccionada.selected(true);
		switch (e.key) {
			case "ArrowUp":
				figuraSeleccionada.posY -= 10;
				dibujar();
				break;
			case "ArrowDown":
				figuraSeleccionada.posY += 10;
				dibujar();
				break;
			case "ArrowRight":
				figuraSeleccionada.posX += 10;
				dibujar();
				break;
			case "ArrowLeft":
				figuraSeleccionada.posX -= 10;
				dibujar();
				break;

			default:
				break;
		}
	}
});

function hayFiguraSeleccionada(x, y) {
	let i = 0;
	while (i < figuras.length) {
		if (figuras[i].estaElPunto(x, y)) {
			return figuras[i];
		} else {
			i++;
		}
	}
	return null;
}

function addFigura(isSelect) {
	let posX = Math.round(Math.random() * canvasWidth);
	let posY = Math.round(Math.random() * canvasHeight);
	let color = randomRgba();

	if (isSelect == true) {
		cantRect = cantRect + 1;
		let rect = new Rect(
			posX,
			posY,
			Math.round(Math.random() * 100),
			Math.round(Math.random() * 100),
			color,
			ctx,
			false
		);
		figuras.push(rect);
	} else {
		cantCirc = cantCirc + 1;
		let circulo = new Circulo(
			posX,
			posY,
			Math.round(Math.random() * 50),
			color,
			ctx,
			false
		);
		figuras.push(circulo);
	}
}

function crearFiguras() {
	if (figuras.length < CANTFIG) {
		addFigura(figuras.length < CANTFIG / 2);
		figuras[figuras.length - 1].draw();

		setTimeout(() => {
			crearFiguras();
		}, veloc);
	}
}

function randomRgba() {
	let r = Math.round(Math.random() * 255);
	let g = Math.round(Math.random() * 255);
	let b = Math.round(Math.random() * 255);
	let a = 255;

	return `rgba(${r}, ${g}, ${b}, ${a})`;
}

function limpiarCanvas() {
	let dibujo = new Rect(0, 0, canvasWidth, canvasHeight, "white", ctx, true);
	dibujo.draw();
}

function dibujar() {
	let i = 0;
	limpiarCanvas();
	while (i < figuras.length) {
		figuras[i].draw();
		i++;
	}
}

function main() {
	limpiarCanvas();
	cantCirc = 0;
	cantRect = 0;

	crearFiguras();
}
