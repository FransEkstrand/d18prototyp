let myCanvasThing = document.getElementById('myCanvas');
var myGamePiece;
var myBackground;
var myCactusTile1;
var myCactusTile2;
var myCactusTile3;


function startGame() {
    myGamePiece = new component(55, 60, "dino.png", 10, 140, "image");
    myCactusTile1 = new component(40, 70, "cactus1.png", 1000, 130, "cactus");
    myCactusTile2 = new component(60, 70, "cactus2.png", 1100, 130, "cactus");
    myCactusTile3 = new component(80, 70, "cactus3.png", 1200, 130, "cactus");
    myBackground = new component(4800, 30, "ground2.png", 40, 170, "background");
    myGameArea.start()
    yallVibing();

}

document.addEventListener('keydown', event => {
    console.log(event);
});

var myGameArea = {
    canvas: document.createElement("canvas"),

    start: function () {
        this.canvas.width = 900;
        this.canvas.height = 330;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 10);
    },
    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop: function () {
        clearInterval(this.interval);
    }
}
myGameArea.canvas.id = "myCanvas";

function component(width, height, color, x, y, type) {
    this.type = type;
    if (type == "image" || type == "background" || type == "cactus") {
        this.image = new Image();
        this.image.src = color;
    }
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;


    /* UPDATE */
    this.update = function () {
        ctx = myGameArea.context;
        let canvasWidth = myGameArea.canvas.width;

        if (type == "image") {
            ctx.drawImage(this.image,
                this.x,
                this.y,
                this.width, this.height);
            // ctx.strokeRect(this.x, this.y, this.width, this.height);


        } else if (type == "background") {
            if (this.x < -this.width * 0.5) {
                this.x = 0;
            }
            ctx.drawImage(this.image,
                this.x,
                this.y,
                this.width, this.height);

        } else if (type == "cactus") {
            ctx.drawImage(this.image,
                this.x,
                this.y,
                this.width, this.height);
            // ctx.strokeRect(this.x, this.y, this.width, this.height);

        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    this.newPos = function () {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.type == "background") {
            if (this.x == -(this.width)) {
                this.x = 0;
            }
        } else if (this.type == "cactus") {
            if (this.x < -(this.width)) {
                let lastCactusPostion = this.x = myGameArea.canvas.width + 1000 * Math.random();;
            }
        }
    }
}

// this is not fun: )



function updateGameArea() {

    myGameArea.clear();
    myBackground.speedX = -7;
    myCactusTile1.speedX = -7;
    myCactusTile2.speedX = -7;
    myCactusTile3.speedX = -7;
    myBackground.newPos();
    myCactusTile1.newPos();
    myCactusTile2.newPos();
    myCactusTile3.newPos();
    myBackground.update();
    myCactusTile1.update();
    myCactusTile2.update();
    myCactusTile3.update();
    myGamePiece.newPos();
    myGamePiece.update();
    runAnimation()
    vibeCheck();

}

function yallVibing() {

}

function move(dir) {

    if (dir == "up") {
        myGamePiece.speedY = -2;
    }
    if (dir == "down") {
        myGamePiece.speedY = 2;
    }
    if (dir == "left") {
        myGamePiece.speedX = -2;
    }
    if (dir == "right") {
        myGamePiece.speedX = 2;
    }
}

function clearmove() {
    myGamePiece.speedX = 0;
    myGamePiece.speedY = 0;
}


function GameOver() {
    myGameArea.stop();
    myGamePiece.image.src = "";
    myGameArea.context.font = "30px Arial";
    myGameArea.context.fillText("YOOOOOOOO THIS GAME IS SO TRASH MAN WTFFF??????", 10, 50);

    myGamePiece.image.src = "deth-dino.png";
    myGamePiece.update()


}

let runNumber = 2;

function runAnimation() {
    if (runNumber == 1) {
        myGamePiece.image.src = "dino.png";
        runNumber = 2;
    } else {
        myGamePiece.image.src = "dino2.png";
        runNumber = 1;
    }
}

function vibeCheck() {
    if (myGamePiece.x < myCactusTile1.x + myCactusTile1.width &&
        myGamePiece.x + myGamePiece.width > myCactusTile1.x &&
        myGamePiece.y < myCactusTile1.y + myCactusTile1.height &&
        myGamePiece.y + myGamePiece.height > myCactusTile1.y) {
        GameOver();
    }
    if (myGamePiece.x < myCactusTile2.x + myCactusTile2.width &&
        myGamePiece.x + myGamePiece.width > myCactusTile2.x &&
        myGamePiece.y < myCactusTile2.y + myCactusTile2.height &&
        myGamePiece.y + myGamePiece.height > myCactusTile2.y) {
        GameOver();
    }
    if (myGamePiece.x < myCactusTile3.x + myCactusTile3.width &&
        myGamePiece.x + myGamePiece.width > myCactusTile3.x &&
        myGamePiece.y < myCactusTile3.y + myCactusTile3.height &&
        myGamePiece.y + myGamePiece.height > myCactusTile3.y) {
        GameOver();
    }
}