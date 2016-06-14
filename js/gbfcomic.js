var comicPos = 1;
var lastPos = 1;

//Load page according to its number
function load_comic() {
	$("#comic").empty();
	$("#comic").append("<img id='gbstrip' style='-webkit-user-select: none; max-width: 100%;' src='http://gbf.game-a1.mbga.jp/assets_en/img/sp/assets/comic/episode/episode_" + comicPos + ".jpg' onerror='fallback()'></img>");
}

//Load previous page
function comic_back() {
	if (comicPos > 1) {
		lastPos = comicPos;
		comicPos -= 1;
		load_comic();
		if (comicPos == 1 && !$("#prev").hasClass("disabled")) {
			$("#prev").addClass("disabled");
		}
	}
}

//Load next page
function comic_next() {
	lastPos = comicPos;
	comicPos += 1;
	load_comic();
	if (comicPos > 1 && $("#prev").hasClass("disabled")) {
		$("#prev").removeClass("disabled");
	}
}

//Converts an integer to a string with three digits
function detect_digits(n) {
	//n is 1 digit
	if (n < 10) {
		n = "00" + n.toString();
	} 
	//n is 2 digits
	else if (n < 100) {
		n = "0" + n.toString();
	} 
	//n is 3 digits
	else {
		n = n.toString();
	}
	
	return n;
}

//Modal displaying the strip# being viewed and allows the user to load a custom strip#
function open_menu() {
	var thumbPos = detect_digits(comicPos);
	var viewer_menu =
	'<div id="menu" class="modal fade">' +
	'	<div class="modal-dialog">' +
	'		<div class="modal-content">' +
	'			<div class="modal-header text-center">' +
	'        		<button type="button" class="close" data-dismiss="modal">&times;</button>' +
	'      		</div>' +
	'			<div class="modal-body text-center">' +
	'				<p><strong>Currently viewing strip #' + comicPos + '</strong></p>' +
	'				<img src="http://gbf.game-a1.mbga.jp/assets_en/img/sp/assets/comic/thumbnail/thum_00' + thumbPos + '.png"></img></ br>' +
	'				<p><strong>Load a strip:</strong></p>' +
	'				<form class="form-inline">' +
	'					<div class="input-group">' +
	'						<div class="input-group-addon">#</div>' +
	'						<input type="text" id="stripNo" class="form-control" placeholder="Strip">' +
	'					</div>' +
	'					<button class="btn btn-primary" onclick="custom_load(); return false;">Load</button>' +
	'				</form>' +
	'   	 	</div>' +
	'			<div class="modal-footer">' +
	'    		</div>' +
	'      	</div>' +
	'	</div>' +
	'</div>';
	$(viewer_menu).modal();
}

//Modal shown when a non-existing strip# is requested
function holdthepresses() {
	var viewer_menu =
	'<div id="menu" class="modal fade">' +
	'	<div class="modal-dialog">' +
	'		<div class="modal-content">' +
	'			<div class="modal-header text-center">' +
	'        		<button type="button" class="close" data-dismiss="modal">&times;</button>' +
	'      		</div>' +
	'			<div class="modal-body text-center">' +
	'				<p><strong>Strip #' + comicPos + '</strong> does not exist.</p>' +
	'				<p><strong>Load a strip:</strong></p>' +
	'				<form class="form-inline">' +
	'					<div class="input-group">' +
	'						<div class="input-group-addon">#</div>' +
	'						<input type="text" id="stripNo" class="form-control" placeholder="Strip">' +
	'					</div>' +
	'					<button class="btn btn-primary" onclick="custom_load(); return false;">Load</button>' +
	'				</form>' +
	'   	 	</div>' +
	'			<div class="modal-footer">' +
	'    		</div>' +
	'      	</div>' +
	'	</div>' +
	'</div>';
	$(viewer_menu).modal();
}

//Loads the previously-viewed strip if a non-existing strip is requested by the user
function fallback() {
	comicPos = lastPos;
	load_comic();
}

//Loads the user-specified strip
function custom_load() {
	if ($.isNumeric($("#stripNo").val())) {
		lastPos = comicPos;
		comicPos = parseInt($("#stripNo").val());
		load_comic();
		$(".modal").modal("hide");
		$(".modal").empty();
	}
}

$(function() {
	load_comic();	

	//Transition between pages using keystrokes (currently only the left and right arrow keys are used)
	$(document).keydown(function(e) {
		if (e.keyCode == 37) {
			if ($("#menu").data("bs.modal")) {
				$(".modal").modal("hide");
			}
			comic_back();
		} else if (e.keyCode == 39) {
			if ($("#menu").data("bs.modal")) {
				$(".modal").modal("hide");
			}
			comic_next();
		}
	});
});
