<!DOCTYPE html>
<html class="full" lang="en">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		
		<!-- Title -->
		<title>GBF Comic Viewer</title>

		<!-- Bootstrap -->
		<link href="css/bootstrap.min.css" rel="stylesheet">
		
		<style>
		.white {
			background-color: white;
			padding: 3px;
			border-radius: 3px;
		}
		</style>
	</head>
  
	<body class="bg-none">
		<div class="container-fluid">
			<div class="row"> 
				<div class="center">
					<ul class="pager">
						<li id="prev" class="previous disabled" style="position: fixed; left: 1%;"><a href="" onclick="comic_back(); return false;"><span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></a></li>
						<li id="next" class="next"><a href="" onclick="comic_next(); return false;" style="position: fixed; right: 1%;"><span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span></a></li>
					</ul>
					<div id="comic" style="overflow: scroll; height: 100vh;"></div>
				</div>
			</div>
		</div>
		<div class="container-fluid">
			<div class="" style="position: fixed; top: 1%; right: 1%;">
				<button type="button" class="btn btn-default btn-lg" onclick="open_menu();">
					<span class="glyphicon glyphicon-menu-hamburger" aria-hidden="true"></span>
				</button>
			</div>
		</div>
		
		<!-- Include all compiled plugins (below), or include individual files as needed -->
		<script src="jquery/jquery-1.11.3.min.js"></script>
		<script src="js/bootstrap.min.js"></script>
		<!-- Custom -->
		<script src="js/gbfcomic.js"></script>
	</body>
</html>