
	$(document).ready(function(){
		// Masonry
		imagesLoaded( '.grid', function() {
			$('.grid').masonry({
			  itemSelector: '.grid-item',
			  columnWidth: 200,
				gutter:20
			});
		});
		// $('.grid').masonry({
		//   itemSelector: '.grid-item',
		//   columnWidth: 200,
		// 	gutter:20
		// });
	});
