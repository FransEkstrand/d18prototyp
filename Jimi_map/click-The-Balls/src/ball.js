class Ball extends Phaser.GameObjects.Arc {
    constructor(scene, x, y, radius) {
        super(
            scene, x, y, radius,
            0, 360, false,
            0x9900ff, 1
        );
        scene.add.existing(this);

        this.wasMouseDown = false;
        this.wasClicked = false;
    }



    update(time, delta) {
        this.wasClicked = false;
        const xMouse = this.scene.input.activePointer.x;
        const yMouse = this.scene.input.activePointer.y;
        const isMouseInside = this.testPoint(xMouse, yMouse);
        const isMouseDown = this.scene.input.activePointer.isDown;

        if (isMouseDown && this.wasMouseDown == false && isMouseInside) {
            this.wasClicked = true;
        }

        this.wasMouseDown = isMouseDown;
    }

    testPoint(x, y) {
        const dx = x - this.x;
        const dy = y - this.y;
        return Math.sqrt(dx * dx + dy * dy) <= this.radius;
    }
}