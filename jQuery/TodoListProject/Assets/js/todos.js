// check off specific todos by clicking
$("li").click(function() {
	// if black - turn gray
	if ($(this).css("color") === "rgb(128, 128, 128)") {
		$(this).css({
			color: "black",
			textDecoration: "none"
		});
	}
	else {
		$(this).css({
			color: "gray",
			textDecoration: "line-through"
		});
	}
	// if gray - turn black
});