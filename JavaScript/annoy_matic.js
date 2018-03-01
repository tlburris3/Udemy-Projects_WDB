var answer = prompt("Are we there yet?");

// while (answer !== "yes" && answer !== "yeah")
// {
// 	var answer = prompt("Are we there yet?");	
// }

// Note: indexOf() function looks within the sentence for that specific
// string that you have inside the parenthesis.
while (answer.indexOf("yes") === -1 && answer.indexOf("yeah") === -1)
{
	var answer = prompt("Are we there yet?");
}
alert("YEAH BOY, WE HERE!")