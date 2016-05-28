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
					</blockquote>
					<textarea id="text_counter" class="form-control" onkeyup="count(this)" rows="10"></textarea>
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