$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// Click to delete the ToDo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if (event.which === 13) {
		// Grab new todo text from input
		var todoText = $(this).val();

		// create new li and add to ul
		$("ul").append("<li><span><i class=\"fa fa-remove\"></i></span>"+ todoText +"</li>");

		$(this).val("");
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});