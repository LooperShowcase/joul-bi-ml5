class Player {
    constructor() {
        this.size = 65
        this.x = this.size
        this.y = height - this.size
        this.velocityY = 0
        this.gravity = 0.5
        this.walk = 0
    }

    show() {
        image(pImg, this.x, this.y, this.size, this.size)
    }

    jump() {
        if (this.y == height - this.size) {
            this.velocityY = -10
        }

    }

    move() {
        this.y = this.y + this.velocityY
        this.velocityY += this.gravity
        this.y = constrain(this.y, 0, height - this.size)
    }

    collided(currentObs) {
        let isColliding = collideRectRect(this.x, this.y, this.size, this.size, currentObs.x + 20, currentObs.y + 40, currentObs.size - 20, currentObs.size - 20)
        return isColliding;
    }

    walkforward() {
        this.x += 5
    }

    walkbackward() {
        this.x -= 5
    }



}
