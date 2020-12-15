class Player {
    constructor(x, y, height) {
        this.color = "#FFFF00";
        this.x = x;
        this.y = y;
        this.score = 0;
        this.height = 80;
        this.width = 10;
        this.downKeyCode = 40;
        this.upKeyCode = 38;
        document.addEventListener("keydown", this.onKeyDown.bind(this));


    }
    draw(context) {
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.width, this.height);

    }

    onKeyDown(e) {

        if (e.keyCode == this.upKeyCode) {
            this.y -= 10;

            if (this.y <= 0) {
                this.y = 0;
            }
        } else if (e.keyCode == this.downKeyCode) {
            this.y += 10;


            if (this.y >= 280) {
                this.y = 280;

            }
        }
    }
}
// up 38 down 40 w