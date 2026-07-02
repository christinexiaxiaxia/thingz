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
	'', 	//34
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


// BLURRING

$(document).click(function(){
	$('.paper').toggleClass('blur');
	$('.specimen.large').toggleClass('blur');
	$('.front').removeClass('no-transition');
})


// REMOVE TRANSITION DURATION WHEN RESIZING WINDOW

$(window).resize(function(){
	$('.front').addClass('no-transition');
});



// SIZE JITTER ON MOUSE MOVE

function jitter(max) {
	return Math.floor(Math.random() * max);
}

// $(document).on("mousemove", function(event) {
// 	var dotWidthJitter = jitter(2.5);
// 	$('.dot', this).css({'border': dotWidthJitter + 'rem' + 'solid white'})
// } );

// $(document).ready(function(event) {
// 	var dotWidthJitter = jitter(2.5);
// 	$('.dot', this).css({'border': dotWidthJitter + 'rem' + 'solid rgb(255,255,255)'})
// } );


// ON LOAD

$(document).ready(function(e){
    $('.specimen').addClass('front'); // ALLOWS YOU TO HOVER OVER SPECIMEN DOTS
    $('.paper').addClass('back'); // AVOIDS BLOCKING SPECIMEN

    // $('#punc-exclamation').clone().addClass('text').prependTo('.specimen.small');
    // $('#e-lower').clone().addClass('text').prependTo('.specimen.small');
    // $('#p-lower').clone().addClass('text').prependTo('.specimen.small');
    // $('#y-lower').clone().addClass('text').prependTo('.specimen.small');
    // $('#t-lower').clone().addClass('text').prependTo('.specimen.small');
    // $('#space').clone().addClass('text').prependTo('.specimen.small');
    // $('#n-lower').clone().addClass('text').prependTo('.specimen.small');
    // $('#a-lower').clone().addClass('text').prependTo('.specimen.small');
    // $('#c-lower').clone().addClass('text').prependTo('.specimen.small');
    // $('#space').clone().addClass('text').prependTo('.specimen.small');
    // $('#u-lower').clone().addClass('text').prependTo('.specimen.small');
    // $('#o-lower').clone().addClass('text').prependTo('.specimen.small');
    // $('#y-lower').clone().addClass('text').prependTo('.specimen.small');
    // $('#space').clone().addClass('text').prependTo('.specimen.small');
    // $('#punc-comma').clone().addClass('text').prependTo('.specimen.small');
    // $('#s-lower').clone().addClass('text').prependTo('.specimen.small');
    // $('#e-lower').clone().addClass('text').prependTo('.specimen.small');
    // $('#y-upper').clone().addClass('text').prependTo('.specimen.small');
})



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

// $(document).ready(function(){
//     prompt('Type something');
// })

$(document).click(function(){
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

