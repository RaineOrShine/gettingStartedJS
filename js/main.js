$(function() {

	var ENTER = 13;
	var TAB = "     ";

	// set proper tab size by replacing tabs with spaces
	$("code").each(function() {
		$(this).text($(this).text().replace(/\t/g, TAB));
	});

	// Grab code from textareas and add them as code blocks with syntax highlighting
	// This is done so that HTML code doesn't have to be escaped ahead of time.
	$("textarea.code").each(function() {
		var codeBlock = create(
			["pre code", $(this).val()]
		);
		$(this).after(codeBlock).remove();
	});

	$(".run-code").click(function() {
		var code = $("section.present pre").text();
		eval(code);
	});

	$("input").keydown(function(e) {

		// add ENTER handler to inputs
		if(e.keyCode === ENTER) {
			$("section.present .run-code").trigger("click");
		}

		// prevent reveal.js keydown events when inside an input element
		e.stopPropagation();
	});

});
