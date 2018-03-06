// ToDo List - Part 1
var todos = [];

window.setTimeout(function(){}, 7000);

var input = prompt("What would you like to do?");
while (input !== "exit") {
	if (input === "list") {
		listTodos();
	}
	else if (input === "new") {
		newTodos();
	}
	else if (input === "delete") {
		deleteTodos();
	}

	// Ask again for another function.
	input = prompt("What would you like to do?");
}

console.log("Ok, you just exited the app.");

// Modularity
function listTodos() {
	console.log("**********");
	// Note: "i" naturally becomes a counter when used as a param
	// inside the anonymous function.
	todos.forEach(function (item, i) {
		console.log(i + ": " + item);
	});
	console.log("**********");
}

function newTodos() {
	// ask for new todo
	var newTodo = prompt("Enter new todo");
	// add to todos array
	todos.push(newTodo);
	console.log(newTodo + " added to list.");
}

function deleteTodos() {
	var index = prompt("Enter an index of the list to delete");
	// Note: splice - index to remove at, how many values from that index.
	var deletedItem = todos.splice(index, 1);
	console.log("Deleted todo " + deletedItem);
}

