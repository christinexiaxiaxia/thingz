// BLURRING

$('*').click(function(){
	$('body').toggleClass('blur');
})


// SIZE JITTER ON MOUSE MOVE

// function jitter(max) {
// 	return Math.floor(Math.random() * max);
// }

// $('*').on("mousemove", function(event) {
// 	var dotWidthJitter = jitter(2.5);
// 	$('.dot', this).css({'width': dotWidthJitter + 'rem'})
// } );



// TYPING

var aLower = document.getElementById('a-lower'),
	aLowerClone = aLower.cloneNode(true);

aLowerClone.id = 'a-lower-clone';


// TYPING LETTERS

$('html').on('keypress', function (e) {

    const keyID = [
    	'#a-lower',
    	'#b-lower',
    	'#c-lower',
    	'#d-lower',
    	'#e-lower',
    	'#f-lower',
    	'#g-lower',
    	'#h-lower',
    	'#i-lower',
    	'#j-lower',
    	'#k-lower',
    	'#l-lower',
    	'#m-lower',
    	'#n-lower',
    	'#o-lower',
    	'#p-lower',
    	'#q-lower',
    	'#r-lower',
    	'#s-lower',
    	'#t-lower',
    	'#u-lower',
    	'#v-lower',
    	'#w-lower',
    	'#x-lower',
    	'#y-lower',
    	'#z-lower'
    ]

    for (i = 0; i < 26; i++) {
    	if (event.keyCode == i+97) {
    		console.log(e.keyCode);
    		$(keyID[i]).clone().appendTo('.paper').addClass('hello-letter');;
    	}
    }
});





// BACKSPACING

$('html').keydown(function(e){
	if (e.keyCode == 8) {
    	console.log("backspace");
    	$('.paper').children().last().remove();
	}
})  

