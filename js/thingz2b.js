const keyLower = [
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

const keyUpper = [
	'#a-upper',
	'#b-upper',
	'#c-upper',
	'#d-upper',
	'#e-upper',
	'#f-upper',
	'#g-upper',
	'#h-upper',
	'#i-upper',
	'#j-upper',
	'#k-upper',
	'#l-upper',
	'#m-upper',
	'#n-upper',
	'#o-upper',
	'#p-upper',
	'#q-upper',
	'#r-upper',
	'#s-upper',
	'#t-upper',
	'#u-upper',
	'#v-upper',
	'#w-upper',
	'#x-upper',
	'#y-upper',
	'#z-upper'
]



$(document).mousemove(function(e){
	$('.cursor').css({'top': e.clientY + 10, 'left': e.clientX + 10})
})



// BLURRING

$('*').click(function(){
	$('.paper').toggleClass('blur');
})


// SIZE JITTER ON MOUSE MOVE

// function jitter(max) {
// 	return Math.floor(Math.random() * max);
// }

// $('*').on("mousemove", function(event) {
// 	var dotWidthJitter = jitter(2.5);
// 	$('.dot', this).css({'width': dotWidthJitter + 'rem'})
// } );


// VISIBILITY

$(document).ready(function(e){
    for (i = 0; i < 26; i++) {
    	$(keyLower[i]+'.storage').addClass('bye-letter');
    	$(keyUpper[i]+'.storage').addClass('bye-letter');
    	$('#space'+'.storage').addClass('bye-letter');
    }
})



// TYPING LETTERS

$(document).on('keypress', function (e) {

    for (i = 0; i < 26; i++) {
    	if (event.keyCode == i+97) {
    		console.log(e.keyCode);
    		$(keyLower[i]).clone().appendTo('.paper').addClass('hello-letter').removeClass('bye-letter');
    	}

    	if (event.keyCode == i+65) {
    		console.log(e.keyCode + 'shift');
    		$(keyUpper[i]).clone().appendTo('.paper').addClass('hello-letter').removeClass('bye-letter');
    	}
    }
});





// SPACE

$('html').keydown(function(e){
	if (e.keyCode == 32) {
    	$('#space').clone().appendTo('.paper').addClass('hello-letter').removeClass('bye-letter');
	}
})  



// BACKSPACING

$('html').keydown(function(e){
	if (e.keyCode == 8) {
    	console.log("backspace");
    	$('.paper').children().last().remove();
	}
})  

