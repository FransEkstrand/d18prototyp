class GameScene extends Phaser.Scene {
    constructor(config) {
        super({
            key: 'game-scene'
        });


    }

    init(data) {
        this.balls = [];
        this.ballSpawnTime = 1500;
        this.ballspawnCooldown = 0;
        this.ballShrinkSpeed = 40;
        this.score = 0;
        this.isGameOver = false;
        this.gameOverTime = 0;
    }

    preload() {

    }

    create(data) {
        this.scoreLabel = this.add.text(15, 5, 'Score: 0', {
            fontFamily: 'Arial',
            fontSize: 32
        });
        this.gameOverLabel = this.add.text(0, 0, 'Game Over', {
            fontFamily: 'Arial',
            fontSize: 72
        });
        this.gameOverLabel.x = 400 - this.gameOverLabel.width * 0.5;
        this.gameOverLabel.y = 300 - this.gameOverLabel.height * 0.5;
        this.gameOverLabel.setVisible(false);
    }



    update(time, delta) {
        if (this.isGameOver) {

            if (time > this.gameOverTime + 1000 && this.input.activePointer.isDown) {
                this.scene.restart();
            }
            return;
        }

        for (let i = this.balls.length - 1; i >= 0; i--) {
            this.balls[i].update(time, delta);
            this.balls[i].radius -= this.ballShrinkSpeed * (delta / 1000);

            if (this.balls[i].radius < 3) {
                this.destroyBall(i);
                this.onGameOver(time);

            } else if (this.balls[i].wasClicked) {
                this.onBallClicked(i);

            }
        }

        this.ballspawnCooldown -= delta;
        if (this.ballspawnCooldown < 0) {
            this.ballspawnCooldown = this.ballSpawnTime;
            this.createBall();
        }

    }

    createBall() {
        const radius = 60;
        const x = Phaser.Math.Between(radius, 800 - radius)
        const y = Phaser.Math.Between(radius, 600 - radius)
        const ball = new Ball(
            this,
            x,
            y,
            radius
        );

        this.balls.push(ball);
    }

    destroyBall(index) {
        this.balls[index].destroy();
        this.balls.splice(index, 1);
    }

    onBallClicked(index) {
        this.destroyBall(index);
        this.ballSpawnTime *= 0.99;
        this.score++;
        this.scoreLabel.text = 'Score: ' + this.score;
    }

    onGameOver(time) {
        this.isGameOver = true;
        this.gameOverTime = time;
        this.gameOverLabel.setVisible(true);

    }

}