/* Variables */
var numOfSquares = 6;
var colors = [];
var correctColor;

/* Selectors */
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

/* Common Code */
init();

resetButton.addEventListener("click", function() {
	reset();
});

/* Functions */
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

/*
 * setupSquares
 * 
 * Purpose:
 * 		Sets up the squares on the screen.
 * Notes:
 *  	Button listeners and colors.
 */
function setupSquares() {
/* Sets click listeners to each square on screen */
	for (var i = 0; i < squares.length; i++) {
		squares[i].addEventListener("click", function() {
			// Get color of clicked square
			var clickedColor = this.style.backgroundColor;
			// compare color to correct color
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
}

/*
 * setupModeButtons
 * 
 * Purpose:
 * 		Sets up the listeners for the
 *  	difficulty buttons.
 * Notes:
 *  	"Easy" - 3 squares
 * 		"Hard" - 6 squares
 */
function setupModeButtons() {
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function() {
			for (var j = 0; j < modeButtons.length; j++)
				modeButtons[j].classList.remove("selected");
			this.classList.add("selected");

			switch (this.textContent) {
				case "Easy":
					numOfSquares = 3;
					break;
				case "Hard":
					numOfSquares = 6;
					break;
			}
			reset();
		});
	}
}

/*
 * reset
 * 
 * Purpose:
 * 		Generates new colors, a new answer,
 * 		sets back all text contents to default,
 * 		the h1 back to original color, as well as
 * 		all the squares back to display based on difficulty.
 * Notes:
 *  	
 */
function reset() {
	// generate all new colors
	colors = generateRandomColors(numOfSquares);
	// pick new random color from array
	correctColor = generateAnswer();
	// change text contents to default
	colorDisplay.textContent = correctColor;
	resetButton.textContent = "New Colors"
	messageDisplay.textContent = "";
	// change colors of squares
	for (var i = 0; i < squares.length; i++) {
		// If there is a color, the square is
		// displayed, and the background color
		// of the square is changed to that of colors[i].
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else {
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
}

/*
 * init
 * 
 * Purpose:
 * 		The initilization of the colors game.
 * 		Sets up the buttons and squares.
 * Notes:
 *  	
 */
function init() {
	setupModeButtons();
	setupSquares();
	reset();
}

