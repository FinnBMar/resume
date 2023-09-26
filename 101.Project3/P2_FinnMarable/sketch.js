/**
 * Finn Marable
 * IGME-101: P2 Local Modular, 11/14/22
 * This code displays a pattern of 4 sepow symbols on the canvas. The stroke color of the symbols is random, and will change every time you refresh. There is a chance that 2 symbols can have the same or very similar stroke colors.
 * Here is the source for the sepow symbol: https://symbolikon.com/downloads/sepow-adinkra/#:~:text=The%20Sepow%20symbol%20depicts%20a,pointed%20triangle%20above%20a%20circle.
 * You can use the arrow keys (left,right,up, and down) to change the orientation of the 4 symbols
 * Hovering your mouse over any of the four rectangles will change the color of the rectangle. Text will also appear, showing you exactly which rectangle your mouse is currently in.
 * There is a ball flying around the canvas with a random speed every time you refresh. If the ball is inside of a rectangle, the rectangle will change color.
 */

"use strict"; //catch some common coding errors

/* Global variables */
//initializing the 4 symbol variable instances and the ball
let sepowTL
let sepowTR
let sepowBL
let sepowBR

let ball


function preload() {
   sepowTL = new Sepow(145, 145) //initializes four instances of the sepow pattern at different locations on the canvas, randomizing their stroke color as well
   sepowBL = new Sepow(145, 255)
   sepowTR = new Sepow(255, 145)
   sepowBR = new Sepow(255, 255)

   ball = new Ball() //creating 1 bouncing ball
}

/**
 * setup :
 */
function setup() {
   createCanvas(400, 400);
}

function rowOfCircles(y) { //function to draw one horizontal row of circles across the canvas
   let i = 0 //loop control variable
   let circX = 20
   while (i < 13) {
      ellipse(circX, y, 10)
      i += 1
      circX += 30
   }
}

/**
 * draw :
 */
function draw() {
   let j = 0 //loop control variable to print the background pattern down the canvas
   let circY = 20
   noStroke()
   fill("white") //fill for the background circles
   background("red") //background of the canvas
   ellipseMode(CENTER)
   while (j < 13) { //prints 12 rows of circles across the canvas
      rowOfCircles(circY)
      circY += 30 //space between rows
      j += 1
   }

   rectMode(CENTER)
   //I initially did this with 2 if statements that changed each diagonal pair of rectangles, but I realized when adding the ball I would have to do them individually to color when the ball was inside
   //bottom left rectangle code
   if (mouseX > 90 && mouseX < 200 && mouseY > 200 && mouseY < 310) { //if mouse is inside, color cyan
      fill("cyan")
   } else if (ball.isWithin(145, 255)) { // color rectangle purple if ball is inside (with some small deadzones)
      fill("purple")
   } else {//if ball not inside, and mouse not inside, color rectangle green
      fill("green")
   }
   rect(145, 255, 110) //background rectangles for the patterns
   noFill()

   //top right rectangle code
   if (mouseX > 200 && mouseX < 310 && mouseY > 90 && mouseY < 200) { //if mouse is inside, color cyan
      fill("cyan")
   } else if (ball.isWithin(255, 145)) { // color rectangle purple if ball is inside (with some small deadzones)
      fill("purple")
   } else {//if ball not inside, and mouse not inside, color rectangle green
      fill("green")
   }
   rect(255, 145, 110)
   noFill()

   //top left rectangle code
   if (mouseX > 90 && mouseX < 200 && mouseY > 90 && mouseY < 200) {
      fill("pink")
   } else if (ball.isWithin(145, 145)) { // color rectangle yellow if ball is inside (with some small deadzones)
      fill("yellow")
   } else {//if ball not inside, and mouse not inside, color rectangle blue
      fill("blue")
   }
   rect(145, 145, 110)
   noFill()

   //bottom right rectangle code
   if (mouseX > 200 && mouseX < 310 && mouseY > 200 && mouseY < 310) {
      fill("pink")
   } else if (ball.isWithin(255, 255)) { // color rectangle yellow if ball is inside (with some small deadzones)
      fill("yellow")
   } else { //if ball not inside, and mouse not inside, color rectangle blue
      fill("blue")
   }
   rect(255, 255, 110)
   noFill()

   //placeholder (mouseX > 200 && mouseX < 310 && mouseY > 90 && mouseY < 200)

   strokeWeight(1) //putting the pattern name on the canvas
   stroke("black")
   text("Pattern: Sepow Adinkra symbol", 10, 12)

   stroke("black") // the following code checks if the mouse is within any of the symbol boxes and displays text depending on which box the mouse is in
   if (sepowTL.isWithin(mouseX, mouseY)) {
      text("top left symbol", 100, 195)
   }
   if (sepowTR.isWithin(mouseX, mouseY)) {
      text("top right symbol", 205, 190)
   }
   if (sepowBL.isWithin(mouseX, mouseY)) {
      text("bottom left symbol", 100, 295)
   }
   if (sepowBR.isWithin(mouseX, mouseY)) {
      text("bottom right symbol", 205, 295)
   }

   sepowTL.updateState()//updates symbol states
   sepowTR.updateState()
   sepowBL.updateState()
   sepowBR.updateState()
   sepowTL.display() //displays the symbols
   sepowBL.display()
   sepowTR.display()
   sepowBR.display()


   ball.display() //displays and moves the ball
   ball.move()
}

