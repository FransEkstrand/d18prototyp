import Phaser from "phaser";
import background from "./assets/background.png";
import player from "./assets/Bruh run (2).png"

let screenwidth = 800;
let screenheight = 600
let gameScene = new Phaser.Scene('Game');
const config = {
    type: Phaser.AUTO,
    parent: "phaser-example",
    width: screenwidth,
    height: screenheight,
    scene: gameScene
};



const game = new Phaser.Game(config);

gameScene.preload = function () {
    this.load.image('background', background);
    this.load.spritesheet('player',
        player,
        { frameWidth: 32, frameHeight: 32 }
    );
}

gameScene.create = function () {
    let bg = this.add.sprite(0, 0, 'background');
    bg.setOrigin(0, 0);

    this.anims.create({
        key: "walk",
        frameRate: 7,
        frames: this.anims.generateFrameNumbers("player", { start: 0, end: 1 }),
        repeat: -1
    });

    this.player = this.add.sprite(50, 450, 'player');
    this.player.play("walk");
}
gameScene.update = function () {

    if (this.input.activePointer.isDown) {
        this.player.x += this.playerSpeed;
    }
}
gameScene.init = function () {
    this.playerSpeed = 1.5;
    this.enemyMaxY = 280;
    this.enemyMinY = 80;
}

