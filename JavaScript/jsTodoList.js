var todos = [];

var input = prompt("What would you like to do?");

while (input !== "exit") {
	if (input === "list") {
		console.log(todos)
	}
	else if (input === "new") {
		// ask for new todo
		var newTodo = prompt("Enter new todo");
		// add to todos array
		todos.push(newTodo);
	}

	input = prompt("What would you like to do?");
}

console.log("Ok, you just exited the app.")