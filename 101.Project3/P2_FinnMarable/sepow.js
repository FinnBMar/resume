/**
 * Finn Marable
 * IGME-101: P2 Local Modular, 11/14/22
 * This code creates the sepow class, and contains the code to change the appearance with arrow key input, as well as the actual code behind the display of the sepow symbol.
 * Here is the source for the sepow symbol: https://symbolikon.com/downloads/sepow-adinkra/#:~:text=The%20Sepow%20symbol%20depicts%20a,pointed%20triangle%20above%20a%20circle.
 * You can use the arrow keys (left,right,up, and down) to change the orientation of the 4 symbols
 * Requires an x and y coordinate for symbol location, randomizes stroke color on each initialization for instance distinction, and has a placeholder state characteristic
 */


class Sepow {
    constructor(x, y) {
        this.state = "faceleft" //initializes sepow as faceleft, allows itself to be changed later
        this.x = x
        this.y = y
        this.strokeColor = color(random(0, 255), random(0, 255), random(0, 255)) //random stroke color used later
    }

    updateState() { //code that changes the appearance of the sepow pattern depending on an arrow key input
        if (keyIsDown(LEFT_ARROW)) {
            this.state = "faceleft"
        } else if (keyIsDown(RIGHT_ARROW)) {
            this.state = "faceright"
        } else if (keyIsDown(DOWN_ARROW)) {
            this.state = "facedown"
        } else if (keyIsDown(UP_ARROW)) {
            this.state = "faceup"
        }
    }

    display() {
        stroke(this.strokeColor) //sets the color of the pattern to a random color
        strokeWeight(3)
        if (this.state === "faceup") {
            ellipseMode(CENTER) //the following code is the shape pattern to make the sepow symbol, 4 times for each different appearance
            ellipse(this.x, this.y, 50)
            triangle(this.x + 25, this.y - 25, this.x - 25, this.y - 25, this.x, this.y - 50)
        } else if (this.state === "faceleft") {
            ellipseMode(CENTER)
            ellipse(this.x, this.y, 50)
            triangle(this.x - 25, this.y + 25, this.x - 25, this.y - 25, this.x - 50, this.y)
        } else if (this.state === "faceright") {
            ellipseMode(CENTER)
            ellipse(this.x, this.y, 50)
            triangle(this.x + 25, this.y - 25, this.x + 25, this.y + 25, this.x + 50, this.y)
        } else {
            ellipseMode(CENTER)
            ellipse(this.x, this.y, 50)
            triangle(this.x + 25, this.y + 25, this.x - 25, this.y + 25, this.x, this.y + 50)
        }
    }

    isWithin(x, y) {
        //this code checks if the mouse is less than or equal to 50 pixels away from the center of any of the symbol rectangles, effectively checking if the mouse is within the box, returning True or False. (With a few small deadzones in the corners)
        let distance = dist(x, y, this.x, this.y)
        return distance <= 50
    }
}