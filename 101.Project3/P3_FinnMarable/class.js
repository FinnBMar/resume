/**
 * Finn Marable
 * IGME-101: Project 3, 12/7/22
 * Description and interaction instructions
 * This program makes a grid of square class instances. The squares change color based on whether or not the checkbox is on. (random or black)
 * It also creates two sliders per instance that can be moved to change the height of width of each square.
 * 
 * This code established the Class 
 */

"use strict"; //catch some common coding errors


class Squares {
    constructor(x, y, w, h) { //paremeters for starting position and height/width adjustments with slider
        this.x = x
        this.y = y
        width = w
        height = h
        this.fillColor = color(random(0, 255), random(0, 255), random(0, 255))
        this.xSpeed = 1
        this.ySpeed = 2
        this.checkbox1 = createCheckbox("checked?", [false])
    }

    display() { //display function that checks if the checkbox is checked, changing the color accordingly
        if (this.checkbox1.checked()) {
            fill(this.fillColor)
        } else {
            fill("black")
        }
        rect(this.x, this.y, width, height)

    }

    move(x, y) {
        // This code moves the squares
        this.x += this.xSpeed
        this.y += this.ySpeed
        this.initialX = x
        this.initialY = y

        if (this.x >= x + 50 || this.x <= x - 50) {
            //reverse xSpeed and bounces if hits a side wall
            this.xSpeed *= -1
        }
        if (this.y >= y + 50 || this.y <= y - 50) {
            //reverse ySpeed and bounces if hits a top or bottom wall
            this.ySpeed *= -1
        }

        //keeps the square within the canvas (based on the center of the default square)
        this.x = constrain(this.x, x - 50, x + 50)
        this.y = constrain(this.y, y - 50, y + 50)

    }

    updateSize(value1, value2) { //function used to update the height and width of the squares
        console.log(value1, value2)
        width = value1
        height = value2
    }
}