function count(c) {
	var chars = c.value;
	var words = c.value.split(" ");
	
	$('#char_count').empty();
	$('#word_count').empty();
	
	//Check if the text area is empty
	if ($("#text_counter").val()) {
		//Character count
		if (chars.length < 2) {
			$('#char_count').append(chars.length + " character");
		} else {
			$('#char_count').append(chars.length + " characters");
		}
		//Word count
		$('#word_count').empty();
		if (words.length < 2) {
			$('#word_count').append(words.length + " word");
		} else {
			$('#word_count').append(words.length + " words");
		}
	}
}