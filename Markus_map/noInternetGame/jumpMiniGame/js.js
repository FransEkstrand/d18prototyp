let myCanvas = document.getElementById('myCanvas');
myCanvas.width = 900;
myCanvas.height = 330;
var ctx = myCanvas.getContext("2d");
class Player {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.velocity = 0;
    }
    draw(ctx) {
        ctx.beginPath();
        ctx.lineWidth = "4";
        ctx.strokeStyle = "green";
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.stroke();
    }
    update() {
        this.velocity += 0.12;
        this.y += this.velocity;
        if (this.y > 200) {
            this.y = 200;
        }
    }
    jump() {
        if (this.y == 200) {
            this.velocity = -5.5;
        }
    }
}
let player = new Player(100, 100, 40, 40)

function update() {
    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
    player.update()
    player.draw(ctx)
}
setInterval(update, 10)
document.addEventListener('keydown', player.jump.bind(player))