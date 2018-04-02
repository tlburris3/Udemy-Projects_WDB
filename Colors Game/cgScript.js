var colors = [
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 255)",
	"rgb(255, 0, 255)"
]

var squares = document.querySelectorAll(".square");
var goalColor = colors[3];
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");

colorDisplay.textContent = goalColor;

for (var i = 0; i < squares.length; i++) {
	// add initial colors to squares

	// use bgColor instead bc of FireFox doesn't
	// always work with just background only
	squares[i].style.backgroundColor = colors[i];

	// Add click listeners to squares
	squares[i].addEventListener("click", function() {
		// Get color of clicked square
		var clickedColor = this.style.backgroundColor
		// compare color to goal color
		if (clickedColor === goalColor) {
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

