var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var correctColor = generateAnswer();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");

colorDisplay.textContent = correctColor;

for (var i = 0; i < squares.length; i++) {
	// add initial colors to squares

	// use bgColor instead bc of FireFox doesn't
	// always work with just background only
	squares[i].style.backgroundColor = colors[i];

	// Add click listeners to squares
	squares[i].addEventListener("click", function() {
		// Get color of clicked square
		var clickedColor = this.style.backgroundColor;
		// compare color to goal color
		if (clickedColor === correctColor) {
			messageDisplay.textContent = "Correct!"
			changeColors(clickedColor);
		}
		else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try again!";
		}
	});
}

/*
 * changeColors
 * 
 * Purpose:
 * 		Changes colors to all the squares
 * 		as well as the background of the h1
 *  	when player gets correct answer.
 */
function changeColors(color) {
	// loop through squares
	for (var i = 0; i < squares.length; i++) {
		//change each color to match the given color
		squares[i].style.backgroundColor = color;
	}
}

/*
 * generateAnswer
 * 
 * Purpose:
 * 		Random number generator with a range
 * 		from 0-6. Number is used for which
 *  	color will be used.
 * Returns:
 * 		Random color from hardcoded "colors" list.
 * Notes:
 *  	Math.random() returns 0 - 1, exclusive.
 *  	* colors.length : 0 - (length-1).999...
 * 		Math.floor() truncates the result.
 */
function generateAnswer() {
	var rand = Math.floor(Math.random() * colors.length);
	return colors[rand];
}

/*
 * generateRandomColors
 * 
 * Purpose:
 * 		Fills and returns an array of size 
 *  	"amt" that is filled with
 * 		randomly generated colors.
 * Returns:
 * 		An array of "amt" random colors.
 * Notes:
 *  	Uses randomRGB to produce the colors.
 */
function generateRandomColors(amt) {
	var retArray = [];
	// add amt of colors to array
	for (var i = 0; i < amt; i++) {
		retArray.push(randomRGB());
	}

	return retArray;
}

/*
 * randomRGB
 * 
 * Purpose:
 * 		Fills and returns an array of size 
 *  	"amt" that is filled with
 * 		randomly generated colors.
 * Returns:
 * 		A generated rgb(...) string.
 * Notes:
 *  	
 */
function randomRGB() {
	// red
	var rRand = Math.floor(Math.random() * 256);
	// green
	var gRand = Math.floor(Math.random() * 256);
	// blue
	var bRand = Math.floor(Math.random() * 256);

	return "rgb(" + rRand + ", " + gRand + ", " + bRand + ")";
}
