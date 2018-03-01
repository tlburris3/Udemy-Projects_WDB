var answer = 7;
var userNumber = prompt("What's your guess?");

if (userNumber === null) {
	alert("Insert a number, please!")
	console.log("users num was " + userNumber)
}
else if (userNumber > answer) {
	alert("Your number is too high!")
	console.log("users num was " + userNumber)

}
else if (userNumber < answer) {
	alert("Your number is too low!")
	console.log("users num was " + userNumber)

}
else {
	alert("Good guess, you got the number!")
	console.log("users num was " + userNumber)
}
// Note: You can turn a string into a number by using
// the Number() function.