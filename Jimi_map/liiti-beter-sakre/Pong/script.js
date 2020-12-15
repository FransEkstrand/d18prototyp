let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");


//               x, y, w,  h
let player = new Player(10, 140);
let player2 = new Player(620, 140);
player2.upKeyCode = 87;
player2.downKeyCode = 83;
player2.color = "#00ff00";
let ball = new Ball(315, 175);

let plingSfx = new Audio("Powerup15.wav")

requestAnimationFrame(gameloop);

function gameloop() {
    context.fillStyle = "blue";
    context.fillRect(0, 0, 640, 360);
    context.fillStyle = "red";
    context.fillRect(320, 0, 5, 360);
    context.fillStyle = "";
    context.font = "30px Arial";
    context.fillText(player.score, 100, 100);
    context.font = "30px Arial";
    context.fillText(player2.score, 540, 100);


    handlePlayerBallCollision();
    handlePlayer2BallCollision();
    ball.update();

    player.draw(context);
    player2.draw(context);
    ball.draw(context);
    checkLeftWall();
    checkRightWall();
    ai();
    requestAnimationFrame(gameloop);
}

function ai() {
    if (ball.Xvelocity > 0) {

        if (player2.y > ball.y) {

            player2.y -= 2;
        } else {
            player2.y += 2;
        }
    } else {
        // if () {

        // } else {

        // }
    }
}

function handlePlayerBallCollision() {
    if (ball.x < player.x + player.width &&
        ball.y + ball.height >= player.y &&
        ball.y < player.y + player.height) {
        ball.Xvelocity = 3;
        plingSfx.play();
    }
}

function handlePlayer2BallCollision() {
    if (ball.x + ball.width >= player2.x &&
        ball.y + ball.height >= player2.y &&
        ball.y < player2.y + player2.height) {
        ball.Xvelocity = -3;
        plingSfx.play();
    }
}

function checkLeftWall() {
    if (ball.x <= 0) {
        ball.x = 315;
        ball.y = 175;
        ball.Xvelocity = +3;

        ball.hitSfx.play();
        player2.score++;
    }

}

function checkRightWall() {

    if (ball.x >= 640) {
        ball.x = 315;
        ball.y = 175;
        ball.Xvelocity = -3;
        ball.hitSfx.play();
        player.score++;
    }
}