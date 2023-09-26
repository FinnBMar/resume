/**
 * Finn Marable
 * IGME-101: P2 Local Modular, 11/14/22
 * This code creates the class for the roaming instance, in this case a moving, bouncing ball.
 * The ball will have a random speed and direction every time you refresh.
 * This roaming class does not require any parameters, has a location and random speed already assigned to it when you start the program.
*/

class Ball {
    constructor() {
        //ball position
        this.x = width / 3
        this.y = height / 2
        this.xSpeed = random(-5, 5)//randomly determines ball speed
        this.ySpeed = random(-5, 5)//both are random, chance they are the same and ball only goes in a straight line but very small chance of this, pepehands
    }

    display() { //this code draws the Orange ball
        fill("orange")
        ellipse(this.x, this.y, 20)
    }

    move() {
        // This code moves the ball
        this.x += this.xSpeed
        this.y += this.ySpeed

        if (this.x >= width - 10 || this.x <= 10) {
            //reverse xSpeed and bounces if hits a side wall
            this.xSpeed *= -1
        }
        if (this.y >= height - 10 || this.y <= 10) {
            //reverse ySpeed and bounces if hits a top or bottom wall
            this.ySpeed *= -1
        }

        //keeps the ball within the canvas
        this.x = constrain(this.x, 10, width - 10)
        this.y = constrain(this.y, 10, height - 10)

    }

    isWithin(x, y) {
        //this code checks if the ball is inside on of the symbol rectangles, returning True or False (also with small deadzones on the corners)
        let distance = dist(x, y, this.x, this.y)
        return distance <= 50
    }
}