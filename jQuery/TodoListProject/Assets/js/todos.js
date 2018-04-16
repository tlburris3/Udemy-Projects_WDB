// Check off specific todos by clicking.
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

// Delete specific todos from span.
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

// Adding user input as a new todo in list.
$("input[type='text']").keypress(function(event){
	if(event.which === 13) {
		var inputText = $(this).val();
		$(this).val("");
		addTodo(inputText);
	}
});

// Fading in and out the Add New Todo
$(".fa-pencil").click(function() {
	$("input[type='text']").fadeToggle();
});

/**
  * addTodo
  *
  * Purpose:
  * 	Takes the user input and appends it
  * 	to the todo list.
  * Parameters:
  * 	event: 	User's input.
  **/
function addTodo(event) {
	$("ul").append("<li><i class='fa fa-trash'></i> " +
		event + "</li>");
}