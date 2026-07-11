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

const numberLining = [
	'#num-lining-0',
	'#num-lining-1',
	'#num-lining-2',
	'#num-lining-3',
	'#num-lining-4',
	'#num-lining-5',
	'#num-lining-6',
	'#num-lining-7',
	'#num-lining-8',
	'#num-lining-9'
]

const punctuationA = [
	'#punc-exclamation', 		//33
	'punc-', 					//34
	'#punc-hashtag', 			//35
	'#punc-dollar', 			//36
	'#punc-percent', 			//37
	'#punc-ampersand', 			//38
	'#punc-quote-right', 		//39
	'#punc-parentheses-left', 	//40
	'#punc-parentheses-right', 	//41
	'#punc-asterisk', 			//42
	'#punc-plus', 				//43
	'#punc-comma', 				//44
	'#punc-hyphen', 			//45
	'#punc-period', 			//46
	'#punc-slash-forward', 		//47
	'#punc-',					//48
	'#punc-',					//49
	'#punc-',					//50
	'#punc-',					//51
	'#punc-',					//52
	'#punc-',					//53
	'#punc-',					//54
	'#punc-',					//55
	'#punc-',					//56
	'#punc-',					//57
	'#punc-colon', 				//58
	'#punc-semicolon', 			//59
	'#punc-anglebracket-left', 	//60
	'#punc-equal', 				//61
	'#punc-anglebracket-right', //62
	'#punc-question', 			//63
	'#punc-atsymbol' 			//64
]

const punctuationB = [
	'#punc-endash', //8211
	'#punc-emdash', //8212
]

const punctuationC = [
	'#punc-slash-backward',		// 92
	'#punc-',					// 93
	'#punc-',					// 94
	'#punc-underscore'			// 95
]

const quoteDouble = [
	'#punc-doublequote-left',	//198? unconfirmed
	'#punc-doublequote-right' 	//34
]

const quoteSingle = [
	'#punc-quote-left',			//230? unconfirmed
	'#punc-quote-right' 		//34
]



// $(document).mousemove(function(e){
// 	$('.cursor').css({'top': e.clientY + 10, 'left': e.clientX + 10})
// })




// ON LOAD

$(document).ready(function(e){
    $('.specimen').addClass('front'); // ALLOWS YOU TO HOVER OVER SPECIMEN DOTS
    $('.plaque').addClass('front');
    $('.paper').addClass('back'); // AVOIDS BLOCKING SPECIMEN
	$('.letter').addClass('zoom-display')
	$('.letter').addClass('width-regular')
	$('.letter').addClass('grid')
	$('.button-display').addClass('button-selected')
	$('.button-regular').addClass('button-selected')
})


// REMOVE TRANSITION DURATION WHEN RESIZING WINDOW

$(window).resize(function(){
	// $('.front').addClass('no-transition');
	// $('.html').addClass('no-transition');
	// $('.letter').addClass('no-transition');
	$('*').addClass('no-transition');
});


// BUTTONS

$('.button-text').click(function(){
	$('.button-text').addClass('button-selected')
	$('.button-display').removeClass('button-selected')
	$('.letter').addClass('zoom-text')
	$('.letter').removeClass('zoom-display')
	if ($('.specimen').hasClass('blur-display')) {
		$('.specimen').addClass('blur-text');
		$('.paper').addClass('blur-text');
		$('.specimen').removeClass('blur-display');
		$('.paper').removeClass('blur-display');
	}
})

$('.button-display').click(function(){
	$('.button-display').addClass('button-selected')
	$('.button-text').removeClass('button-selected')
	$('.letter').removeClass('zoom-text')
	$('.letter').addClass('zoom-display')
	if ($('.specimen').hasClass('blur-text')) {
		$('.specimen').addClass('blur-display');
		$('.paper').addClass('blur-display');
		$('.specimen').removeClass('blur-text');
		$('.paper').removeClass('blur-text');
	}
})

// $('.button-regular').click(function(){
// 	$('.letter').removeClass('width-condensed')
// 	$('.letter').addClass('width-regular')
// 	$('.button-regular').addClass('button-selected')
// 	$('.button-condensed').removeClass('button-selected')
// })

$('.button-condensed').click(function(){
	$('.button-condensed').toggleClass('button-selected')
	$('.letter').toggleClass('width-condensed')
	$('*').removeClass('no-transition');
})

$('.button-blurred').click(function(){
	$('.button-blurred').toggleClass('button-selected')
	if ($('.letter').hasClass('zoom-display')) {
		$('.specimen').toggleClass('blur-display');
		$('.paper').toggleClass('blur-display');
		$('.specimen').removeClass('blur-text');
		$('.paper').removeClass('blur-text');
	}
	if (!$('.letter').hasClass('zoom-display')) {
		$('.specimen').toggleClass('blur-text');
		$('.paper').toggleClass('blur-text');
		$('.specimen').removeClass('blur-display');
		$('.paper').removeClass('blur-display');
	}
	$('*').removeClass('no-transition');
})

$('.button-inverted').click(function(){
	$('.button-inverted').toggleClass('button-selected')
	$('html').toggleClass('colour-inverted')
	$('*').removeClass('no-transition');
})

function toggleUniform(){	

}

$('.button-uniform').click(function(){
	$('.button-uniform').toggleClass('button-selected')
	$('.dot-0-25').removeClass('dot-0-25').addClass('dot-uniform-0-25')
}, function(){
	$('.dot-uniform-0-25').addClass('dot-0-25').removeClass('dot-uniform-0-25')
})



// SIZE JITTER ON MOUSE MOVE

// function jitter(max) {
// 	return Math.floor(Math.random() * max);
// }

// $(document).on("mousemove", function(event) {
// 	var dotWidthJitter = jitter(2.5);
// 	$('.dot', this).css({'border': dotWidthJitter + 'rem' + 'solid white'})
// } );

// $(document).ready(function(event) {
// 	var dotWidthJitter = jitter(2.5);
// 	$('.dot', this).css({'border': dotWidthJitter + 'rem' + 'solid rgb(255,255,255)'})
// } );



// START TYPING MAKES SPECIMEN DISAPPEAR

$(document).on('keypress', function() {
	$('.specimen').css('opacity','0');
	$('.specimen').removeClass('front');
	$('.specimen').addClass('back');

    $('.paper').removeClass('back');
   	$('.paper').addClass('front');
})






// KEYCODE INPUT
$(document).on('keypress', function(e) {
    console.log(e.keyCode);
})



// KEYBOARD APPEARS ON MOBILE

$('.specimen').click(function(){
    $('#mobilekeyboard').focus();
})

$('.paper').click(function(){
    $('#mobilekeyboard').focus();
})




// TYPING LETTERS

$(document).on('keypress', function(e) {
    for (i = 0; i < 26; i++) {
    	if (event.keyCode == i+97) {
    		$(keyLower[i]).clone().appendTo('.paper');
    	}
    	if (event.keyCode == i+65) {
    		$(keyUpper[i]).clone().appendTo('.paper');
    	}
    }
});

// TYPING NUMBERS

$(document).on('keypress', function(e) {
    for (i = 0; i < 10; i++) {
    	if (event.keyCode == i+48) {
    		$(numberLining[i]).clone().appendTo('.paper');
    	}
    }
});

// TYPING PUNCTUATION

$(document).on('keypress', function(e) {
    for (i = 0; i < 33; i++) {
    	if (event.keyCode == i+33) {
    		$(punctuationA[i]).clone().appendTo('.paper');
    	}
    }
    for (i = 0; i < 2; i++) {
    	if (event.keyCode == i+8211) {
    		$(punctuationB[i]).clone().appendTo('.paper');
    	}
    }
    for (i = 0; i < 5; i++) {
    	if (event.keyCode == i+92) {
    		$(punctuationC[i]).clone().appendTo('.paper');
    	}
    }
    for (i = 0; i < 1; i++) {
    	if (event.keyCode == 230) {
    		$(quoteSingle[i]).clone().appendTo('.paper');
    	}
    }
    for (i = 0; i < 1; i++) {
    	if (event.keyCode == 198) {
    		$(quoteDouble[i]).clone().appendTo('.paper');
    	}
    }
});

// TYPING QUOTES

$(document).on('keypress', function(e) {
    if (event.keyCode == 34) {
    	console.log($('.letter:last').class);

    	if (!$('.letter:last').class == '.space') {
    		// console.log('previous character is a space')
    		$(quoteDouble[0]).clone().appendTo('.paper');
    	} 
    	else {
    		// console.log('previous character is a letter')
    		$(quoteDouble[1]).clone().appendTo('.paper');
    	}
    }
});

// TYPING SPACE

$(document).keydown(function(e){
	if (e.keyCode == 32) {
    	$('#space').clone().appendTo('.paper');
	}
})  

// BACKSPACING

$('html').keydown(function(e){
	if (e.keyCode == 8) {
    	console.log("backspace");
    	$('.paper').children().last().remove();
	}
})  

