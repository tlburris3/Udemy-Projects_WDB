var answer = 7;
var userNumber = prompt("What's your guess?");

if (userNumber === null) {
	alert("Insert a number, please!")
	console.log("users num was " + userNumber)
}
else if (userNumber > answer) {
	alert("Your number is too high!")
}
else if (userNumber < answer) {
	alert("Your number is too low!")
}
else {
	alert("Good guess, you got the number!")
}