// BLURRING

$('*').click(function(){
	$('body').toggleClass('blur');
})


// TYPING

var aLower = document.getElementById('a-lower'),
	aLowerClone = aLower.cloneNode(true);

aLowerClone.id = 'a-lower-clone';

$('html').on('keypress', function (e) {
    // console.log(e.keyCode);

    // TYPING LETTERS

    if (event.keyCode == 97) { // i have to make an array for the key codes and one for the ids, then create a loop so i don't have to brute force lol, i have to push myself to do this
    	console.log(e.keyCode);
    	$('#a-lower').clone().appendTo('.paper');
    }
});





// BACKSPACING

$('html').keyup(function(e){
	if (e.keyCode == 8) {
    	console.log("backspace");
    	$('.paper').children().last().remove();
	}
})  