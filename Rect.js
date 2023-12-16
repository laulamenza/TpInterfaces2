class Rect extends Figura {
	constructor(posX, posY, width, height, fill, context, isSelect) {
		super(posX, posY, fill, context, isSelect);
		this.width = width;
		this.height = height;
	}

	draw() {
		this.ctx.fillStyle = this.fill;
		this.ctx.beginPath();
		this.ctx.rect(this.posX, this.posY, this.width, this.height);
		this.ctx.fill();
		if (this.isSelect) {
			this.ctx.stroke();
		}
	}

	estaElPunto(x, y) {
		return (
			x >= this.posX &&
			x <= this.posX + this.width &&
			y >= this.posY &&
			y <= this.posY + this.height
		);
	}
}
