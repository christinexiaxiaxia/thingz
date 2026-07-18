// HOVER TO EXPAND + SHRINK COLUMNS

// $('.shelf').hover(function(){
// 	// $('.shelf').toggleClass('shrink');
// 	$(this).toggleClass('expand');
// 	$('.item', this).toggleClass('expand-type');
// })


// ON LOAD

$(document).ready(function(){
	$('.collapse').next().addClass('closed');
	$('.collapse').next().addClass('indent');
})


// CLICK TO EXPAND + SHRINK COLUMNS

$('.shelf').on('click', function(){
	if (!$('.collapse').hasClass('hover-button')) { // add this so when un/collapsing the column doesn't shrink/expand
		$(this).toggleClass('expand');
		$('.item', this).toggleClass('expand-type');

		$('.shelf').not(this).removeClass('expand');
		$('.item').not($(this).find('.item')).removeClass('expand-type');
	} else {

	}
})



// COLLAPSING BUTTON

$('.collapse').on('click', function(){
	if (!$(this).next().hasClass('open')) {
		$(this).next().removeClass('closed')
		$(this).next().addClass('open')
	} else {
		$(this).next().removeClass('open')
		$(this).next().addClass('closed')
	}
})

$('.collapse').hover(function(){
	$(this).toggleClass('hover-button')
})