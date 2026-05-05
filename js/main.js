// $('.shelf').hover(
// 	function(){
// 		$(this).css({'width':'40vw'});
// 	}, function(){
// 		$(this).css({'width':'auto'})
// 	}
// )

$('.shelf').hover(function(){
	// $('.shelf').toggleClass('shrink');
	$(this).toggleClass('expand');
})


// $('.shelf').on('click', function(){
// 	$('.shelf').toggleClass('shrink');
// 	$(this).toggleClass('expand');
// })