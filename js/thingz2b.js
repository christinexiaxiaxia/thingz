// BLURRING

$('*').click(function(){
	$('body').toggleClass('blur');
})


// TYPING

$('body').on('keypress', function (e) {
    console.log(e.keyCode);
    $('.paper').append('<p>Test</p>')
});
