class Obstcle {

    constructor() {
        this.size = 60
        this.x = width
        this.y = height - this.size

    }

    show() {
        image(oImg, this.x, this.y, this.size, this.size)
    }

    move() {
        this.x = this.x - 6
    }

    freeze() {
        this.x = 0
    }


}