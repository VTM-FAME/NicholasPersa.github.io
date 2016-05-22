
/*		// init Masonry
	var $grid = $('#content').masonry({
	columnWidth: 320,
	itemSelector: '.item',
	isFitWidth: true,
	isAnimated: !Modernizr.csstransitions
	});
		// layout Masonry after each image loads
	$grid.imagesLoaded().progress( function() {
		$grid.masonry('layout');
	});

*/

$(document).ready(function() {
var $grid = $('#content').imagesLoaded( function () {
	$grid.masonry({
	columnWidth: 470,
	itemSelector: '.item',
	isFitWidth: true,
	transitionDuration: 0,
	isAnimated: !Modernizr.csstransitions
	});
	});
	

$('#sortProjects').click(function(){
var $grid = $('#content').imagesLoaded( function () {
	$grid.masonry({
	columnWidth: 470,
	itemSelector: '.item',
	isFitWidth: true,
	transitionDuration: 0,
	isAnimated: !Modernizr.csstransitions
	});
	});
	
	
	
	});
	
	});
