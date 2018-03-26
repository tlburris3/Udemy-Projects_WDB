/* colorPicker.js
 * 
 * Purpose:
 * 		For better understanding how to implement
 * 		the addEventListener(type, functionToCall);
 * 		JS function.
 * Notes:
 * 		Every time the button is clicked,
 * 		a new color from the array will be randomly
 * 		chosen, based off a random index generator
 * 		function. The background will then be changed
 * 		to the chosen color.
 */

var colors = ["green", "red", "blue", "purple", "orange"];

var button = document.querySelector("button");
var body = document.querySelector("body");

button.addEventListener("click", changeColor);

/* randomIndex
 *
 * Purpose:
 * 		Generates a random number used for an index.
 * Returns:
 * 		Random index number between 0 and 5 (exclusive).
 */
function randomIndex() {
	return Math.floor(Math.random() * colors.length);
}

/* randomIndex
 *
 * Purpose:
 * 		Changes the background color of the body element.
 * Notes:
 * 		Uses the randomIndex() function to choose the
 * 		color which will it will be changed to.
 */
function changeColor() {
	var color = colors[randomIndex()];
	body.style.background = color;
	console.log("color is: " + color);
}

/* Changing background based off of one color with an if statement */
/*
	var isPurple = false;

	button.addEventListener("click", function (){
		if (isPurple)
			document.body.style.background = "white";
		else
			document.body.style.background = "purple";

		isPurple = !isPurple;
	});
*/

/* Another way is by the "toggle" function */
/*
	button.addEventListener("click", function() {
		document.body.classList.toggle("purple");
	});
*/

