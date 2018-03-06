// Creating a movies array with 4 movie objects
var movies = [
	{
		name: "Aladdin",
		rating: 4.5,
		hasWatched: false
	},
	{
		name: "Big Hero 6",
		rating: 4.8,
		hasWatched: true
	},
	{
		name: "Lord of the Rings",
		rating: 5,
		hasWatched: true
	},
	{
		name: "How to Train a Dragon",
		rating: 4.9,
		hasWatched: true
	}
];

// Iterating through the movies array to print out
// what is inside the movie objects.
for (var i = 0; i < movies.length; i++) {
	if (movies[i].hasWatched === true) {
		console.log("You have watched " + 
			"\"" + movies[i].name + "\"" + " - "
			+ movies[i].rating + " stars");
	}
	else {
		console.log("You have not watched " + 
			"\"" + movies[i].name + "\"" + " - "
			+ movies[i].rating + " stars");
	}
}