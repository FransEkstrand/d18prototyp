class Ground {
    constructor(x, y) {
        this.image = new Image();
        this.image.src = "sprites/ground.png";
        this.x = x;
        this.y = y;
    }
    draw(context, cameraX) {
        context.drawImage(this.image,
            (this.x - cameraX) % (this.image.width * 0.5),
            this.y,
            this.image.width, this.image.height);
    }
    update(deltaTime) {

    }
}