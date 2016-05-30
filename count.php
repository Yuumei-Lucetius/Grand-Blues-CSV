<!DOCTYPE html>
<html class="full" lang="en">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		
		<!-- Title -->
		<title>Count</title>

		<!-- Bootstrap -->
		<link href="css/bootstrap.min.css" rel="stylesheet">
		
		<!--Custom CSS-->
		<link href="css/main.css" rel="stylesheet">
		
		<style>
		.white {
			background-color: white;
			padding: 20px;
			border-radius: 20px;
		}
		</style>
	</head>
  
	<body class="bg-none">
		<div class="container-fluid">
			<div class="row"> 
				<div class="center">
				<form name="utext" class="white">
					<blockquote>
						<div id="char_count"></div>
						<div id="word_count"></div>
						<div id="common_word"></div>
					</blockquote>
					<textarea id="text_counter" class="form-control" onkeyup="count()" rows="10" style="width:600px;"></textarea>
					<div class="form-group">
						<div class="form-inline">
							<label for="originalText">Replace:</label>
							<input id="originalText" type="text" class="form-control">
							<label for="newText">With:</label>
							<input id="newText" type="text" class="form-control">
						</div>
						<div class="form-inline">
							<label class="radio-inline">
								<input id="embdtxt1" type="radio" name="embdtxt" value="embd1" checked="checked">Include embedded text
							</label>
							<label class="radio-inline">
								<input id="embdtxt2" type="radio" name="embdtxt" value="embd2">Exclude embedded text
							</label>
						</div>
						<button class="btn btn-default" onclick="replaceText(); return false;">Replace</button>
						<div id="stopdiv" class="form-inline">
							<label>Filter:</label>
							<label class="radio-inline">
								<input id="stopwords1" type="radio" name="stopwords" onclick="count()" value="sword1">Basic Stopwords
							</label>
							<label class="radio-inline">
								<input id="stopwords2" type="radio" name="stopwords" onclick="count()" value="sword2">All Stopwords
							</label>
							<label class="radio-inline">
								<input id="stopwords0" type="radio" name="stopwords" onclick="count()" value="sword0">None
							</label>
						</div>
					</div>
				</form>
				</div>
			</div>
		</div>
		
		<!-- Include all compiled plugins (below), or include individual files as needed -->
		<script src="jquery/jquery-1.11.3.min.js"></script>
		<script src="js/bootstrap.min.js"></script>
		<!-- Custom -->
		<script src="js/count.js"></script>
	</body>
</html>
