class Ball {
    constructor(x, y, height) {
        this.x = x;
        this.y = y;
        this.height = 10;
        this.width = 10;
        this.Xvelocity = 3;
        this.yVelocity = 3;
        this.hitSfx = new Audio("Hit_Hurt.wav");

    }
    draw(context) {
        context.fillStyle = "#FFFF00";
        context.fillRect(this.x, this.y, this.width, this.height);
    }
    update() {
        this.x += this.Xvelocity;

        this.y += this.yVelocity;
        if (this.y >= 350) {
            this.y = 350;
            this.yVelocity = -3;
            this.hitSfx.play();
        } else if (this.y <= 0) {
            this.y = 0;
            this.yVelocity = +3;
            this.hitSfx.play();
        }

    }

}
// inuti class får man inte skriva en funktion  såhär " function name (){content} " utan man skippar självaste "function" och skriver ut endast name och parametern = ()