/**
 * Finn Marable
 * IGME-101: Project 3, 12/7/22
 * Description and interaction instructions
 * This program makes a grid of square class instances. The squares change color based on whether or not the checkbox is on. (random or black)
 * It also creates two sliders per instance that can be moved to change the height of width of each square.
 */

"use strict"; //catch some common coding errors

/* Global variables */
let thing //original square
let checkbox1
let gui1 //global variable for the 2 sliders
let gui2
let w = 25 //default size of the squares
let h = 25
let grids = []

/**
 * setup :
 */
function setup() {
   createCanvas(600, 400);

   gui1 = createSlider(50, 200) //creates the two sliders for height and width adjustment of squaares
   gui2 = createSlider(50, 200)
   thing = new Squares(510, 290, w, h) //original instance of the square

   gui1.changed(gui1Changed) //callback functions to update the height and width to the current value of the sliders
   gui2.changed(gui2Changed)

   function gui1Changed() { //obtains the current value of the slider and sets the square's dimensions to that
      thing.updateSize(gui1.value(), gui2.value())
      w = gui1.value()
      console.log("slider1 width: " + gui1.value())
   }

   function gui2Changed() { //same as above
      thing.updateSize(gui1.value(), gui2.value())
      h = gui2.value()
      console.log("slider2 height: " + gui2.value())
   }

   grids[0] = new Squares(90, 90, w, h) //adding each new square into the array
   grids[1] = new Squares(290, 90, w, h)
   grids[2] = new Squares(490, 90, w, h)
   grids[3] = new Squares(290, 290, w, h)
   grids[4] = new Squares(290, 290, w, h)
   grids[5] = thing
}

/**
 * draw :
 */
function draw() {
   background("beige") //background color and functions to show and move the squares
   let i = 0
   while (i < grids.length) { //loop to display each square
      grids[i].display()
      i += 1
   }
   grids[5].move(90, 90) //the reason this isn't a loop is because I had to use parameters in the move() function so that I could constrain them each based on their starting position, there is probably a better way to do this, but it works so we ball.
   grids[0].move(290, 90)
   grids[1].move(490, 90)
   grids[2].move(90, 290)
   grids[3].move(290, 290)
   grids[4].move(490, 290)
   
}
