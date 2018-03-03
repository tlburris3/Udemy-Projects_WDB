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

// kebabToSnake()
// 	Purpose:
// 		Replace "-" with "_" if relevant.
// 	Parameters:
// 		str: a string that will either have a "-" or not.
// 	Returns:
// 		str: the same string that was started with if there was not a "-".
// 		newStr: a new string that now has a "_".

function kebabToSnake(str)
{
	if (str.indexOf("-") === false)
		return str;
	else
	{
		for (var i = 0; i < str.length; i++)
		{
			if (str[i] === "-")
				str[i] = "_";
		}
		return str;
	}
}