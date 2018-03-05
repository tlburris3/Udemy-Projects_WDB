// isEven()
// 	Purpose:
// 		Say whether or not a number passed in is even or odd.
// 	Parameters:
// 		num: a number, which will be categorized as even or odd.
// 	Returns:
// 		true: number is even
//		false: number is odd

function isEven(num)
{
	if (num % 2 === 0)
		return true;
	else
		return false;
}

// solutions way:
// function isEven(num) { return num % 2 === 0;}

// factorial()
// 	Purpose:
// 		Implement the factorial of a number that is given by the function's parameters.
// 	Parameters:
// 		num: a number that will be used to find the factorial.
// 	Returns:
// 		Factorial of num variable.

function factorial (num)
{
	if (num === 0)
		return 1;
	else if (num === 1)
		return 1;
	return num * factorial(num - 1);
}

// solutions way:
// function factorial(num) {
//		for (var i = num-1; i >= 0; i--)
//		{
//			return num * i;
//		}
//}

// kebabToSnake()
// 	Purpose:
// 		Replace "-" with "_" if relevant.
// 	Parameters:
// 		str: a string that will either have a "-" or not.
// 	Returns:
// 		str: same string if "-" is not present.
//		newStr: new string if "_" is replaced.
// 		

function kebabToSnake(str)
{
	if (str.indexOf("-") === -1)
		return str;

	var newStr = str.replace(/-/g, "_");

	return newStr;
}

// solutions way:
// function kebabToSnake(str) {var newStr = str.replace(/-/g, "_"); return newStr;}