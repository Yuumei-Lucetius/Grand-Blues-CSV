function count() {
	var chars = $("#text_counter").val();
	var words = $("#text_counter").val().split(" ");
	var max_index = 0;
	var max_value = 0;
	var stopwordsBasic = ["the", "of", "to", "in", "a", "said", "and", "for", "it", "on", "from", "its", "is", "that", "by", "at", "with", "will", "be", "was", "he", "has", "would", "an", "as", "which", "or", "but", "one", "this", "have", "had", "about", "are", "were", "also", "been", "than"]
	var stopwordsFull = ["a", "about", "above", "above", "across", "after", "afterwards", "again", "against", "all", "almost", "alone", "along", "already", "also", "although", "always", "am", "among", "amongst", "amoungst", "amount",  "an", "and", "another", "any", "anyhow", "anyone", "anything", "anyway", "anywhere", "are", "around", "as",  "at", "back", "be", "became", "because", "become", "becomes", "becoming", "been", "before", "beforehand", "behind", "being", "below", "beside", "besides", "between", "beyond", "bill", "both", "bottom", "but", "by", "call", "can", "cannot", "cant", "co", "con", "could", "couldnt", "cry", "de", "describe", "detail", "do", "done", "down", "due", "during", "each", "eg", "eight", "either", "eleven", "else", "elsewhere", "empty", "enough", "etc", "even", "ever", "every", "everyone", "everything", "everywhere", "except", "few", "fifteen", "fify", "fill", "find", "fire", "first", "five", "for", "former", "formerly", "forty", "found", "four", "from", "front", "full", "further", "get", "give", "go", "had", "has", "hasnt", "have", "he", "hence", "her", "here", "hereafter", "hereby", "herein", "hereupon", "hers", "herself", "him", "himself", "his", "how", "however", "hundred", "ie", "if", "in", "inc", "indeed", "interest", "into", "is", "it", "its", "itself", "keep", "last", "latter", "latterly", "least", "less", "ltd", "made", "many", "may", "me", "meanwhile", "might", "mill", "mine", "more", "moreover", "most", "mostly", "move", "much", "must", "my", "myself", "name", "namely", "neither", "never", "nevertheless", "next", "nine", "no", "nobody", "none", "noone", "nor", "not", "nothing", "now", "nowhere", "of", "off", "often", "on", "once", "one", "only", "onto", "or", "other", "others", "otherwise", "our", "ours", "ourselves", "out", "over", "own", "part", "per", "perhaps", "please", "put", "rather", "re", "same", "see", "seem", "seemed", "seeming", "seems", "serious", "several", "she", "should", "show", "side", "since", "sincere", "six", "sixty", "so", "some", "somehow", "someone", "something", "sometime", "sometimes", "somewhere", "still", "such", "system", "take", "ten", "than", "that", "the", "their", "them", "themselves", "then", "thence", "there", "thereafter", "thereby", "therefore", "therein", "thereupon", "these", "they", "thickv", "thin", "third", "this", "those", "though", "three", "through", "throughout", "thru", "thus", "to", "together", "too", "top", "toward", "towards", "twelve", "twenty", "two", "un", "under", "until", "up", "upon", "us", "very", "via", "was", "we", "well", "were", "what", "whatever", "when", "whence", "whenever", "where", "whereafter", "whereas", "whereby", "wherein", "whereupon", "wherever", "whether", "which", "while", "whither", "who", "whoever", "whole", "whom", "whose", "why", "will", "with", "within", "without", "would", "yet", "you", "your", "yours", "yourself", "yourselves", "the"] //Retrieved from http://xpo6.com/list-of-english-stop-words/
	var wDict = {};
	
	$("#char_count").empty();
	$("#word_count").empty();
	$("#common_word").empty();
	
	//Check if the text area is empty
	if ($("#text_counter").val()) {
		//Map words to their frequency in the text area, within a dictionary
		$.each(words, function(index) {
			var w = words[index]
			
			if (!wDict[w]) {
				wDict[w] = 0;
			}
			
			wDict[w] += 1;
		});
		
		//Determine the most frequent word
		$.each(wDict, function(word, freq) {
			//Prevent a basic (i.e. a, the, of) stopword from being displayed as the most frequent word
			if ($("#stopwords1").is(":checked")) {
				if (freq > max_value && $.inArray(word, stopwordsBasic) == -1) {
					max_value = freq;
					max_index = word;
				}
			} 
			//Prevent a more complex (i.e. above, behind, meanwhile) stopword from being displayed as the most frequent word
			else if ($("#stopwords2").is(":checked")) {
				if (freq > max_value && $.inArray(word, stopwordsFull) == -1) {
					max_value = freq;
					max_index = word;
				}
			}
			//Do not filter stopwords
			else if ($("#stopwords0").is(":checked")) {
				if (freq > max_value) {
					max_value = freq;
					max_index = word;
				}
			}
		});
		
		//Display the number of characters in the text area
		if (chars.length < 2) {
			$("#char_count").append(chars.length + " character");
		} else {
			$("#char_count").append(chars.length + " characters");
		}
		
		//Display the number of words in the text area
		if (words.length < 2) {
			$("#word_count").append(words.length + " word");
		} else {
			$("#word_count").append(words.length + " words");
			//Display the most frequently used word in the text area
			if ($("#stopwords1").is(":checked") || $("#stopwords2").is(":checked") || $("#stopwords0").is(":checked")) {
				$("#common_word").append(max_index + " is the most frequently used word (" + max_value + ")");
			}
		}
	}
}

function replaceText() {
	//Replace text (including embedded text)
	if ($("#embdtxt1").is(":checked")) {
		var re = new RegExp($("#originalText").val(), "g");
		$("#text_counter").val($("#text_counter").val().replace(re, $("#newText").val())); 
	}
	//Replace text (excluding embedded text)	
	else if ($("#embdtxt2").is(":checked")) {
		var re = new RegExp("\\b" + $("#originalText").val() + "\\b");
		$("#text_counter").val($("#text_counter").val().replace(re, $("#newText").val())); 
	}
}
