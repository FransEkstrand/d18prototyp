class Game {
    constructor(width, height, canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.canvas.width = width;
        this.canvas.height = height;
        this.context = this.canvas.getContext("2d");
        this.enemies = [];
        this.cameraX = 0;
        this.init();
        this.previousTimestamp = 0;
        this.update(this.previousTimestamp);
    }
    init() {
        this.ground = new Ground(0, 400);
        this.player = new Dino(3, 340);
        for (let i = 0; i < 3; i++) {
            let x = 900 + 3000 * Math.random();
            this.enemies.push(new Cactus(x, 354));
        }
    }
    update(timestamp) {
        let deltaTime = (timestamp - this.previousTimestamp) / 1000;
        this.previousTimestamp = timestamp;
        this.cameraX = this.player.x;
        this.updateEntities(deltaTime);
        this.drawEntities();
        let af = window.requestAnimationFrame(this.update.bind(this));
        this.checkIfDead()
    }
    updateEntities(deltaTime) {
        for (let i = 0; i < this.enemies.length; i++) {
            this.enemies[i].update(deltaTime);
        }
        this.player.update(deltaTime);
        this.ground.update(deltaTime);
    }
    drawEntities() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ground.draw(this.context, this.cameraX);
        this.player.draw(this.context, this.cameraX);
        for (let i = 0; i < this.enemies.length; i++) {
            this.enemies[i].draw(this.context, this.cameraX);
        }
    }
    gameOver() {
        this.context.font = "30px Arial";
        this.context.fillText("he died, but we aint stressin doe", 10, 50);
        this.player.isDead = true;
    }
    checkIfDead() {
        for (let i = 0; i < this.enemies.length; i++) {
            if (this.player.x < (this.enemies[i].x - 32) + (this.enemies[i].image.width - 44) &&
                this.player.x + this.player.image.width > (this.enemies[i].x + 36) &&
                this.player.y < this.enemies[i].y + (this.enemies[i].image.height + 20) &&
                this.player.y + (this.player.image.height - 10) > this.enemies[i].y) {
                this.gameOver()
            }
        }
    }
}