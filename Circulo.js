class Circulo extends Figura {
	constructor(posX, posY, radio, fill, context, isSelect) {
		super(posX, posY, fill, context, isSelect);
		this.radio = radio;
	}

	draw() {
		this.ctx.fillStyle = this.fill;
		this.ctx.beginPath();
		this.ctx.arc(this.posX, this.posY, this.radio, 0, 2 * Math.PI);
		this.ctx.fill();
		if (this.isSelect) {
			this.ctx.stroke();
		}
	}

	estaElPunto(x, y) {
		let cordenadaX = this.posX - x;
		let cordenadaY = this.posY - y;

		let distAlCentro = Math.sqrt(
			cordenadaX * cordenadaX + cordenadaY * cordenadaY
		);

		return distAlCentro <= this.radio;
	}
}
