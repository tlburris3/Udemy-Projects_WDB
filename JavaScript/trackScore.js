/* h1 Selector */
var h1 = document.querySelector("h1");
/* Button Selectors */
var p1Button = document.getElementById("p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");
/* Score Selectors */
var p1Score = 0;
var p2Score = 0;
var maxScore = 5;
/* Game Over Boolean */
var gameOver = false;

p1Button.addEventListener("click", function() {
	if (!gameOver) {
		p1Score++;
		if (p1Score === maxScore)
			gameOver = true;
	}
	h1.textContent = p1Score + " to " + p2Score;
});

p2Button.addEventListener("click", function() {
	if (!gameOver) {
		p2Score++;
		if (p2Score === maxScore)
			gameOver = true;
	}
	h1.textContent = p1Score + " to " + p2Score;
});

