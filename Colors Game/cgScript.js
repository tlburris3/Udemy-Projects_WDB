/* Variables */
var numOfSquares = 6;

/* Selectors */
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset")
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");

/* Instances */
var colors = generateRandomColors(numOfSquares);
var correctColor = generateAnswer();

/* Common Code */
colorDisplay.textContent = correctColor;

for (var i = 0; i < squares.length; i++) {
	// use bgColor instead bc of FireFox doesn't
	// always work with just background only
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click", function() {
		// Get color of clicked square
		var clickedColor = this.style.backgroundColor;
		// compare color to goal color
		if (clickedColor === correctColor) {
			messageDisplay.textContent = "Correct!";
			changeColors(clickedColor);
			h1.style.background = correctColor;
			resetButton.textContent = "Play Again?";
		}
		else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try again!";
		}
	});
}

easyButton.addEventListener("click", function() {
	easyButton.classList.add("selected");
	hardButton.classList.remove("selected");
	
	numOfSquares = 3;
	colors = generateRandomColors(numOfSquares);
	
	correctColor = generateAnswer();
	colorDisplay.textContent = correctColor;
	h1.style.background = "steelblue";
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors"

	
	for (var i = 0; i < squares.length; i++) {
		if (colors[i])
			squares[i].style.backgroundColor = colors[i];
		else
			squares[i].style.display = "none";
	}
});

hardButton.addEventListener("click", function() {
	hardButton.classList.add("selected");
	easyButton.classList.remove("selected");

	numOfSquares = 6;
	colors = generateRandomColors(numOfSquares);

	correctColor = generateAnswer();
	colorDisplay.textContent = correctColor;
	h1.style.background = "steelblue";
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors"

	
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
});

resetButton.addEventListener("click", function() {
	// generate all new colors
	colors = generateRandomColors(numOfSquares);
	// pick new random color from array
	correctColor = generateAnswer();
	// change colorDisplay to match correctColor
	colorDisplay.textContent = correctColor;
	resetButton.textContent = "New Colors"
	messageDisplay.textContent = "";
	// change colors of squares
	for (var i = 0; i < squares.length; i++) {
	// use bgColor instead bc of FireFox doesn't
	// always work with just background only
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
});

/*
 * changeColors
 * 
 * Purpose:
 * 		Changes colors to all the squares
 * 		as well as the background of the h1
 *  	when player gets correct answer.
 */
function changeColors(color) {
	for (var i = 0; i < squares.length; i++) {
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
	for (var i = 0; i < amt; i++) {
		retArray.push(randomRGB());
	}

	return retArray;
}

/*
 * randomRGB
 * 
 * Purpose:
 * 		Gives back a rgb() string that
 *  	will be used as one of the randomly
 *  	created colors in the "colors" array.
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
