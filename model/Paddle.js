import Sprite from "./Sprite.js";

class Paddle extends Sprite {
    constructor(x, y, width, height, color) {
        super(x, y, width, height, color, 0, 0);
        document.addEventListener(
            "keydown",
            this.handleKeyDown.bind(this)
        )
        document.addEventListener(
            "keyup",
            this.handleKeyUp.bind(this)
        )
    }

    handleKeyDown(event) {
        if (event.key === "Right" || event.key === "ArrowRight") {
            //move right
            this.dx = 10;
        } else if (event.key === "Left" || event.key === "ArrowLeft") {
            //move left
            this.dx = -10;
        } else if (event.key === "Up" || event.key === "ArrowUp") {
            this.dy = -10;
        } else if (event.key === "Down" || event.key === "ArrowDown") {
            this.dy = 10;
        }
    }

    handleKeyUp(event) {
        if (event.key === "Right" || event.key === "ArrowRight") {
            //stop moving right
            this.dx = 0;
        } else if (event.key === "Left" || event.key === "ArrowLeft") {
            //stop moving left
            this.dx = 0;
        } else if (event.key === "Up" || event.key === "ArrowUp") {
            this.dy = 0;
        } else if (event.key === "Down" || event.key === "ArrowDown") {
            this.dy = 0;
        }
    }

    move(canvasWidth) {
        super.move();
        if (this.x < 0) {
            this.x = 0;
        } else if (this.x + this.width > canvasWidth) {
            this.x = canvasWidth - this.width;
        }
    }

}

export default Paddle;