/**
 * Finn Marable
 * IGME-101: Project 1: Tributes, 9/21/22
 * Description and interaction instructions
 * 
 * First art is inspired by Pablo Picasso: Untitled(1939) - girl and boat
 * https://www.wikiart.org/en/pablo-picasso/untitled-1939-2
 * My art is a recreation of the girl in the painting as well as the boat. The boat will continuously move from left to right, resetting on the left side of the screen
 * Upon reaching the end of the canvas, the boat returns to beginning. It does this point by point for the triangle, which is why it morphs for a brief moment during the reset.
 * I constructed the art using various triangles, ellipses, rectangles, lines, and quadrilaterals of multiple colors
 * If you press the LEFT-ARROW key, the boat will move to the x and y coordinates of your mouse. 
 * If you press and hold the MOUSE-BUTTON, the boat will follow your mouse around the screen, and continue it's movement once you release the button.
 * 
 * Second art is inspired by Salvador Dali: Untitled(1972) - stereoscopic painting
 * https://www.wikiart.org/en/salvador-dali/untitled-stereoscopic-painting
 * For this art I also used various multi-colored shapes, primarily triangles and lines, but with a few ellipses and rectangles as well.
 * If you press the RIGHT-ARROW key, you will alternate between two different shades of green for the background of the art.
 * If you hold down the MOUSE-BUTTON, 2 things will happen: The first is the yellow half circle will get bigger until it is too big and will reset to its original size.
 * The second is that you have angered the art, and it has now changed its background to red. Don't worry! You can still change it back to green by pressing the RIGHT-ARROW key.
 * Similar to the first art, there is a moving triangle across the screen that resets to the top of the screen upon reaching the bottom. For a brief moment, the triangle morphs as all 3 points of the triangle shift.
 * To switch between the scenes, use the DOWN-ARROW key to switch off the default art, and the UP-ARROW key to switch back
 */

"use strict"; //catch some common coding errors

/* Global variables */
let scene = 0 //used for flipping the scene
let boatX = 100 //used for creation and movement of the boat in art #1
let boatY = 100
let daliBackground = "palegreen" //used to change shades of green on art #2
let sunY = 150 //moves the yellow half sun on map#2 along the y axis
let sunSize = 200 //Default size for the sun on art #2
let blueTriY = 100 //default y coordinate of the blue triangle in art #2
/**
 * setup :
 */
function setup() {
   createCanvas(400, 400);
}

/**
 * draw :
 */
function draw() {
   if (scene === 0) { // the following code is what draws the first piece of art
      fill("orange")
      rect(0, 50, 400, 150)
      fill(255, 200, 100)
      rect(0, 200, 400, 150)
      fill("darkgreen")
      rect(0, 350, 400, 50)

      fill("grey")// this is the code that draws the boat
      boatX += 1 //moves the boat from left to right, mod functions reset the x coordinates of the shapes that make up the boat
      rect((boatX - 5) % 400, boatY - 40, 10, 50)
      fill("navy")
      arc(boatX % 400, boatY, 75, 30, 0, PI, CHORD)
      fill("white")
      stroke("black")
      triangle((boatX - 35) % 400, boatY - 10, boatX % 400, boatY - 50, (boatX + 35) % 400, boatY - 10)

      if (mouseIsPressed) { //if you hold the mouse button, the boat will follow your mouse
         boatX = mouseX
         boatY = mouseY
      }


      fill("beige") //drawing the girl
      quad(150, 225, 175, 275, 225, 275, 250, 225)
      quad(175, 275, 225, 275, 275, 325, 125, 325)
      triangle(175, 275, 125, 250, 125, 300)
      triangle(250, 225, 300, 270, 310, 220)

      fill("navy")
      triangle(150, 225, 250, 225, 200, 175)

      fill(192, 192, 192)
      ellipseMode(CENTER)
      rect(195, 100, 25, 80)
      ellipse(200, 150, 40, 60)
      triangle(220, 100, 185, 75, 170, 125)
      noStroke() //drawn twice to overlap stroke lines to create shape
      rect(195, 100, 25, 80)
      ellipse(200, 150, 40, 60)
      triangle(220, 100, 185, 75, 170, 125)
      stroke("black")
      rect(175, 325, 25, 45)
      rect(230, 325, 25, 40)

      fill("white") //drawing the eyes and mouth and hair of the girl
      strokeWeight(3)
      ellipse(187, 95, 10, 10)
      ellipse(212, 115, 10, 10)
      line(205, 160, 220, 160)
      line(220, 100, 250, 200)
      line(220, 100, 260, 200)
      line(220, 100, 255, 200)
      line(220, 100, 265, 200)

      fill("Red")
      rect(0,0,400,50)
      textSize(8)
      noStroke()
      fill("black")
      text("Tribute scene of Pablo Picasso's art by Finn Marable. \n Left arrow to bring boat to your mouse coordinates \n Down arrow to change the scene. \n Hold mouse button to have the boat follow your mouse", 15,15)
      stroke("black")


   } else { // the following code is what draws the second piece of art

      stroke("black")//drawing the background
      background("white")
      fill(daliBackground)
      rect(0, 0, 400, 200)
      ellipseMode(CENTER)
      fill("yellow")
      ellipse(200, sunY, 400, sunSize)
      fill(daliBackground)
      rect(0, 150, 400, 250)

      if (mouseIsPressed) { //this makes the yellow half circle grow bigger as you hold down the mouse button, it will reset it to it's original size once it is too big
         if (sunSize < 400) {
            sunSize += 1
            daliBackground = "Red"
         } else {
            sunSize = 200
         }
         sunY = mouseY
      }

      fill("navy") // drawing the central features of the art
      quad(200, 130, 235, 150, 235, 125, 220, 120)
      fill(212, 175, 55)
      triangle(215, 145, 230, 180, 160, 165)
      noStroke()
      triangle(200, 140, 230, 180, 160, 165)
      stroke("black")
      line(160, 165, 200, 140)
      line(200, 140, 208, 148)
      line(160, 165, 200, 160)
      line(200, 160, 230, 180)
      fill("maroon")
      triangle(150, 125, 175, 100, 220, 115)
      ellipse()
      fill("black")
      triangle(237, 125, 245, 115, 255, 130)
      fill("skyblue")
      triangle(160, (blueTriY + 50) % 400, 120, (blueTriY + 80) % 400, 100, (blueTriY + 50) % 400) //animating the blue triangle on art #2
      blueTriY += 1

      textSize(8)
      noStroke()
      fill("black")
      text("Tribute scene of Salvador Dali's art by Finn Marable. \n Right arrow to alternate between 2 background colors \n Up arrow to change the scene. \n Hold mouse button to change background to red and make the sun grow", 15,15)

   }
}

function keyPressed() { // this code allows the viewer to change the art by pressing either up or down arrow
   if (keyCode === DOWN_ARROW) {
      scene = 1
   }
   if (keyCode === UP_ARROW) {
      scene = 0
   }
   if (keyCode === LEFT_ARROW) {// pressing the left arrow will move an object to the location of your mouse on both arts
      boatX = mouseX
      boatY = mouseY
   }
   if (keyCode === RIGHT_ARROW) { //pressing the right arrow will alternate between different shades of green for the background of art #2
      if (daliBackground === "palegreen")
         daliBackground = "forestgreen"
      else {
         daliBackground = "palegreen"
      }
   }
}