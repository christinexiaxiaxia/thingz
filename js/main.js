// HOVER TO EXPAND + SHRINK COLUMNS

// $('.shelf').hover(function(){
// 	// $('.shelf').toggleClass('shrink');
// 	$(this).toggleClass('expand');
// 	$('.item', this).toggleClass('expand-type');
// })


// CLICK TO EXPAND + SHRINK COLUMNS

$('.shelf').on('click', function(){
	$(this).toggleClass('expand');
	$('.item', this).toggleClass('expand-type');

	$('.shelf').not(this).removeClass('expand');
	$('.item').not($(this).find('.item')).removeClass('expand-type');
})