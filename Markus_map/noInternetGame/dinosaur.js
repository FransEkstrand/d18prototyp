class Dino {
    constructor(x, y) {
        this.image = new Image();
        this.image.src = "sprites/idle-dino.png";
        this.x = x;
        this.y = y;
        this.groundLevel = 359;
        this.velocity = {
            x: 700,
            y: 0
        };
        this.runAnimationTime = 0;
        this.runAnimation = 1;
        document.addEventListener('keydown', this.jump.bind(this))
        this.isDead = false;
    }
    draw(context, cameraX) {
        context.drawImage(this.image,
            this.x - cameraX,
            this.y,
            this.image.width - 30, this.image.height - 30);
    }

    update(deltaTime) {
        if (this.isDead) {
            this.runningAnimation();
            return;
        }

        this.velocity.y += 5000 * deltaTime;
        this.x += this.velocity.x * deltaTime;
        this.y += this.velocity.y * deltaTime;
        if (this.y > this.groundLevel) {

            this.y = this.groundLevel;
        }

        this.runAnimationTime -= deltaTime;
        if (this.runAnimationTime < 0) {
            this.runningAnimation();
            this.runAnimationTime = 0.2;
        }

    }
    jump() {


        if (this.y >= this.groundLevel) {
            this.velocity.y = -1300;
        }
    }

    runningAnimation() {

        if (this.isDead) {
            this.image.src = "sprites/deth-dino.png";
        } else {
            if (this.runAnimation == 1) {
                this.image.src = "sprites/dino.png";
                this.runAnimation = 0;
            } else {
                this.image.src = "sprites/dino2.png";
                this.runAnimation = 1;
            }
        }
    }

}