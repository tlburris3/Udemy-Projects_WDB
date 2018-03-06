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
