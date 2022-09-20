import Sprite from "./Sprite.js"

class Ball extends Sprite {

    constructor(x, y, width, height, color, dx, dy) {
        super(x, y, width, height, color, dx, dy)
    }

    bounce(canvasWidth, canvasHeight) {
        if (this.x + this.width > canvasWidth || this.x < 0) {
            //TODO flip dx sign
            this.dx *= -1;
        }

        if (this.y < 0) {
            this.dy *= -1;
        } else if (this.y + this.height > canvasHeight) {
            return false;
        }
        return true;


    }
    

    collide(paddle) {
        if(this.intersects(paddle)) {
            this.dy *= -1;
        }
    }
}

export default Ball;