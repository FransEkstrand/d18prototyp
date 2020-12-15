class Cactus {
    constructor(x, y) {
        this.image = new Image();
        let cactieArray = ["sprites/cactus1.png", "sprites/cactus2.png", "sprites/cactus3.png"];
        let cactusNumberRandom = Math.floor(Math.random() * 3);
        this.image.src = cactieArray[cactusNumberRandom];

        this.x = x;
        this.y = y;
    }
    draw(context, cameraX) {

        if (this.x + this.image.width < cameraX) {
            this.x = cameraX + 1300 + 1000 * Math.random();;
        }

        context.drawImage(this.image,
            (this.x - cameraX),
            this.y,
            this.image.width, this.image.height);
    }
    update(deltaTime) {

    }
}