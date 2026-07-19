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
	$('button').addClass('button-closed');
	$('.plus').addClass('closed');
})


// CLICK TO EXPAND + SHRINK COLUMNS

$('.shelf').on('click', function(){
	if (!$('.collapse').hasClass('hover-button')) { // add this so when un/collapsing the column doesn't shrink/expand
		$(this).toggleClass('expand');
		$('.item', this).toggleClass('expand-type');
		$('ul.item', this).children().toggleClass('expand-type'); // make list item type size follow the rest of the expanding type

		$('.shelf').not(this).removeClass('expand');
		$('.item').not($(this).find('.item')).removeClass('expand-type');
		$('ul.item').children().not($(this).find('li')).removeClass('expand-type'); // shrink type for all list items not in this shelf
	}
})



// COLLAPSING BUTTON

$('.collapse').on('click', function(){
	if (!$(this).next().hasClass('open')) {
		$(this).next().removeClass('closed')
		$(this).next().addClass('open')
		$(this).addClass('button-open')
		$(this).removeClass('button-closed')

		$(this).find('.minus').removeClass('closed')
		$(this).find('.plus').addClass('closed')
	} else {
		$(this).next().removeClass('open')
		$(this).next().addClass('closed')
		$(this).removeClass('button-open')
		$(this).addClass('button-closed')

		$(this).find('.minus').addClass('closed')
		$(this).find('.plus').removeClass('closed')
	}
})

$('.collapse').hover(function(){
	$(this).toggleClass('hover-button')

	$(this).find('.minus').toggleClass('closed')
	$(this).find('.plus').toggleClass('closed')
})