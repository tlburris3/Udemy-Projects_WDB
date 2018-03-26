/* Button Selectors */
var p1Button = document.getElementById("p1");
var p2Button = document.getElementById("p2");
var rButton = document.getElementById("reset");
var inputNumber = document.querySelector("input[type='number'");
/* Score Selectors */
var p1Display = document.getElementById("p1Display");
var p2Display = document.getElementById("p2Display");
var maxNumDisplay = document.getElementById("maxNumDisplay");
// Can also do: var maxNumDisplay = document.querySelector(p span);
/* Score */
var p1Score = 0;
var p2Score = 0;
var maxScore = 5;
/* Game Over Boolean */
var gameOver = false;

/* Event Listeners */
p1Button.addEventListener("click", p1);
p2Button.addEventListener("click", p2);
rButton.addEventListener("click", reset);
inputNumber.addEventListener("input", changedInput);

/* p1 and p2
 * 
 * Purpose:
 * 		Sets scores and changes displays of both
 * 		player 1 and player 2.
 * Notes:
 * 		Updates score first, and then checks if
 * 		the game is over or not.
 */
function p1() {
	if (!gameOver) {
		p1Score++;
		if (p1Score === maxScore) {
			p1Display.style.color = "green";
			p2Display.style.color = "red";
			gameOver = true;
		}
	}
	p1Display.textContent = p1Score;
}

function p2() {
	if (!gameOver) {
		p2Score++;
		if (p2Score === maxScore) {
			p2Display.style.color = "green";
			p1Display.style.color = "red";
			gameOver = true;
		}
	}
	p2Display.textContent = p2Score;
}

/* reset
 * 
 * Purpose:
 * 		Sets all values back to default.
 * Notes:
 * 		Including colors of displays,
 * 		placholders of input box, and
 * 		gameOver value.
 */
function reset() {
	p1Score = 0;
	p2Score = 0;

	p1Display.style.color = "black";
	p2Display.style.color = "black";

	p1Display.textContent = p1Score;
	p2Display.textContent = p2Score;

	gameOver = false;
}

/* changedInput
 * 
 * Purpose:
 * 		Gets a number from the user's interaction
 * 		with the input element, and changes
 * 		the maxScore to the number.
 * Notes:
 * 		
 */
function changedInput () {
	maxNumDisplay.textContent = inputNumber.value;
	maxScore = Number(inputNumber.value);
	reset();
}
