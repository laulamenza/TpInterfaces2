class Figura {
	constructor(posX, posY, fill, context, isSelect) {
		this.posX = posX;
		this.posY = posY;
		this.fill = fill;
		this.ctx = context;
		this.isSelect = isSelect;
	}

	draw() {}

	moveTo(posX, posY) {
		this.posX = posX;
		this.posY = posY;
	}

	selected(isSelect) {
		this.isSelect = isSelect;
	}

	estaElPunto(x, y) {}
}
