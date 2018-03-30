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
			alert("correct");
		}
		else {
			alert("wrong");
		}
	});
}

