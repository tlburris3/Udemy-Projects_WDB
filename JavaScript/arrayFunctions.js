// printReverse
//
// Purpose:
//		prints elements of an array backwards in console.
// Parameters:
// 		input: A whole array list with elements.
// Returns:
// 		N/A.

function printReverse(input) {
	for (var i = input.length - 1; i >= 0; i--) {
		console.log(input[i]);
	}
}

// isUniform
//
// Purpose:
//		To see if all elements in the array are the same.
// Parameters:
// 		input: A whole array list with elements that are numbers/characters.
// Returns:
// 		true: if all elements are the same in the array.
// 		false: if one element is not the same of other elements.
// Notes:
// 		Have a variable that will keep track of
//		the first elememt of the array.
// 		If any other element is different in the array,
// 		the function automatically returns;

function isUniform(input) {
	var firstElem = input[0];
	// Note: Cannot use a .forEach loop because
	// it will only return within that specific function,
	// yet, it will not return in the function outside the forEach.
	for (var i = 1; i < input.length; i++) {
		if (input[i] !== firstElem)
			return false;
	}

	return true;
}

// sumArray
//
// Purpose:
//		Add numbers up and take the sum of the numbers.
// Parameters:
// 		input: A whole array list with elements that are numbers.
// Returns:
// 		sum: sum of all the numbers in the array.
// Notes:
// 		Assumed array elements are ONLY numbers.

function sumArray(input) {
	var sum = 0;

	input.forEach(function(num) {
		sum += num;
	});

	return sum;
}

// max
//
// Purpose:
//		Finds the max within the given array.
// Parameters:
// 		input: A whole array list with elements that are numbers.
// Returns:
// 		max: max element within the array.
// Notes:
// 		Assumed array elements are ONLY numbers.

function max(input) {
	var max = input[0];

	input.forEach(function(nextNum) {
		if (max < nextNum)
			max = nextNum;
	});

	return max;
}

// myForEach
//
// Purpose:
//		Created to make my own .forEach loop, through progression steps.
// 		Uses a function every iteration of a loop in order to execute the
// 		proper function that is desired from the user of the .myForEach.
// Parameters:
// 		arr: an array that contains elements that will be looped through.
//		func: a function that will be executed every iteration - e.g. alert.
// Notes:
// 		This is a higher ordered function. May be short and simple,
// 		but its task is to do something that a class from an object does.

function myForEach(arr, func) {
	for (var i = 0; i < arr.length; i++) {
		func(arr[i]);
	}
}

// This will be executed because of the () at the end.
(function () {
	console.log("Hi!");
}) () // these () are what is inside the myForEach, that way the parameter
// inside the anonymous functions call does not have to have them.

// Here, the alert will be announced on the screen 3x because of how many names
// are inside the array that was passed in, since that is what the
// myForEach loop does inside the code behind the scenes.
myForEach(["joe", "bill", "bob"], function() {alert("Hi!");});
