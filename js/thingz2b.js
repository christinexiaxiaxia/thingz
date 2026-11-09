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
	'#punc-doublequote-right', 	//34
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
	'#punc-quote-right' 		//39
]




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
	$('.paper').append('<div class="word"></div>')
})


// REMOVE TRANSITION DURATION WHEN RESIZING WINDOW

$(window).resize(function(){
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
	if ($('.specimen').hasClass('blot-display')) {
		$('.specimen').addClass('blot-text');
		$('.paper').addClass('blot-text');
		$('.specimen').removeClass('blot-display');
		$('.paper').removeClass('blot-display');
	}
	// $('.specimen').css('font-size', '1.25px')
	// $('.letter').css('font-size', '1.25px')
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
	if ($('.specimen').hasClass('blot-text')) {
		$('.specimen').addClass('blot-display');
		$('.paper').addClass('blot-display');
		$('.specimen').removeClass('blot-text');
		$('.paper').removeClass('blot-text');
	}
})

$('.button-condensed').click(function(){
	$('.button-condensed').toggleClass('button-selected')
	$('.letter').toggleClass('width-condensed')
	$('*').removeClass('no-transition');
})

$('.button-blurred').click(function(){
	$('.button-blurred').toggleClass('button-selected')
	$('.button-blotted').removeClass('button-selected')
	if ($('.letter').hasClass('zoom-display')) {
		$('.specimen').toggleClass('blur-display');
		$('.paper').toggleClass('blur-display');
		$('.specimen').removeClass('blur-text');
		$('.paper').removeClass('blur-text');
		$('.specimen').removeClass('blot-display');
		$('.paper').removeClass('blot-display');
		$('.specimen').removeClass('blot-text');
		$('.paper').removeClass('blot-text');
	}
	if (!$('.letter').hasClass('zoom-display')) {
		$('.specimen').toggleClass('blur-text');
		$('.paper').toggleClass('blur-text');
		$('.specimen').removeClass('blur-display');
		$('.paper').removeClass('blur-display');
		$('.specimen').removeClass('blot-display');
		$('.paper').removeClass('blot-display');
		$('.specimen').removeClass('blot-text');
		$('.paper').removeClass('blot-text');
	}
	$('*').removeClass('no-transition');
})

$('.button-blotted').click(function(){
	$('.button-blotted').toggleClass('button-selected')
	$('.button-blurred').removeClass('button-selected')
	if ($('.letter').hasClass('zoom-display')) {
		$('.specimen').toggleClass('blot-display');
		$('.paper').toggleClass('blot-display');
		$('.specimen').removeClass('blot-text');
		$('.paper').removeClass('blot-text');
		$('.specimen').removeClass('blur-display');
		$('.paper').removeClass('blur-display');
		$('.specimen').removeClass('blur-text');
		$('.paper').removeClass('blur-text');
	}
	if (!$('.letter').hasClass('zoom-display')) {
		$('.specimen').toggleClass('blot-text');
		$('.paper').toggleClass('blot-text');
		$('.specimen').removeClass('blot-display');
		$('.paper').removeClass('blot-display');
		$('.specimen').removeClass('blur-display');
		$('.paper').removeClass('blur-display');
		$('.specimen').removeClass('blur-text');
		$('.paper').removeClass('blur-text');
	}
	$('*').removeClass('no-transition');
})

$('.button-inverted').click(function(){
	$('.button-inverted').toggleClass('button-selected')
	$('html').toggleClass('colour-inverted')
	$('*').removeClass('no-transition');
})

// function toggleUniform(){	

// }

$('.button-uniform').click(function(){
	console
	$('.button-uniform').toggleClass('button-selected')
	$('.dot').toggleClass('uniform')
// 	$('.dot-0-25').removeClass('dot-0-25').addClass('dot-uniform-0-25')
// }, function(){
// 	$('.dot-uniform-0-25').addClass('dot-0-25').removeClass('dot-uniform-0-25')
})



// SIZE JITTER ON MOUSE MOVE

// $(document).on("mousemove", function(event) {

// 	function jitter(max) {
// 		return Math.random() * max;
// 	}

// 	console.log('mouse is moving')
// 	$('.dot').css({'transform': 'scale(' + jitter(2) + ')'})
// } );

// $(document).ready(function(event) {
// 	var dotWidthJitter = jitter(2.5);
// 	$('.dot', this).css({'border': dotWidthJitter + 'rem' + 'solid rgb(255,255,255)'})
// } );




// KEYBOARD APPEARS ON MOBILE

$('.specimen').click(function(){
    $('#mobilekeyboard').focus();
})

$('.paper').click(function(){
    $('#mobilekeyboard').focus();
})


// START TYPING MAKES SPECIMEN DISAPPEAR
function displayPaper() {
	$('.specimen').css('opacity','0');
	$('.specimen').removeClass('front');
	$('.specimen').addClass('back');

	$('.paper').removeClass('back');
	$('.paper').addClass('front');

	$('#type-cursor').removeClass('hidden');
	$('#type-cursor').addClass('visible');
    $('.word').last().append($('#type-cursor'));

}


$(document).on('keypress', function(e) {

    displayPaper();

	// KEYCODE INPUT
    console.log(e.keyCode);

    // APPEND CURSOR TO LAST CHILD POSITION WITH EACH KEY PRESS
    // $('.word').last().append($('#type-cursor')); // nvm i think i have to put it after each individual thing


	// CREATING WORDS (to create proper line/word breaks?)

	// TYPING SPACE
	if (e.keyCode == 32) {
		var word = $('<div class="word"></div>');

    	$('.word').last().append($('#space').clone()); // from before typing cursor
    	$('.paper').append(word);
		$('.word').last().append($('#type-cursor'));
    	// $('#type-cursor').siblings(":last").append($('#space').clone());
    	// $('.paper').find('#type-cursor').before(append(word));
	}

	// TYPING LETTERS
    for (i = 0; i < 26; i++) {
    	if (event.keyCode == i+97) {
    		// $('#type-cursor').siblings(":last").append($(keyLower[i]).clone());
    		$('.word').last().append($(keyLower[i]).clone());
			$('.word').last().append($('#type-cursor'));
    	}
    	if (event.keyCode == i+65) {
    		// $('#type-cursor').before($(keyUpper[i]).clone());
    		$('.word').last().append($(keyUpper[i]).clone());
			$('.word').last().append($('#type-cursor'));
    	}
    }

	// TYPING NUMBERS
    for (i = 0; i < 10; i++) {
    	if (event.keyCode == i+48) {
    		// $('#type-cursor').before($(numberLining[i]).clone());
    		$('.word').last().append($(numberLining[i]).clone());
			$('.word').last().append($('#type-cursor'));
    	}
    }

	// TYPING PUNCTUATION
    for (i = 0; i < 33; i++) {
    	if (event.keyCode == i+33) {
    		// $('#type-cursor').before($(punctuationA[i]).clone());
    		$('.word').last().append($(punctuationA[i]).clone());
			$('.word').last().append($('#type-cursor'));
    	}
    }
    for (i = 0; i < 2; i++) {
    	if (event.keyCode == i+8211) {
    		// $('#type-cursor').before($(punctuationB[i]).clone());
    		$('.word').last().append($(punctuationB[i]).clone());
			$('.word').last().append($('#type-cursor'));
    	}
    }
    for (i = 0; i < 5; i++) {
    	if (event.keyCode == i+92) {
    		// $('#type-cursor').before($(punctuationC[i]).clone());
    		$('.word').last().append($(punctuationC[i]).clone());
			$('.word').last().append($('#type-cursor'));
    	}
    }
    // for (i = 0; i < 1; i++) {
    // 	if (event.keyCode == 230) {
    // 		$('#type-cursor').before($(quoteSingle[i]).clone());
    // 	}
    // }
    // for (i = 0; i < 1; i++) {
    // 	if (event.keyCode == 198) {
    // 		$('#type-cursor').before($(quoteDouble[i]).clone());
    // 	}
    // }

	// TYPING QUOTES

    // if (event.keyCode == 34) {
    	// console.log($('.letter:last').class);

    	// if (!$('.letter:last').class == '.space') {
    	// 	// console.log('previous character is a space')
    	// 	$(quoteDouble[0]).clone().appendTo('.word');
    	// } 
    	// else {
    		// console.log('previous character is a letter')
    		// $(quoteDouble[1]).clone().appendTo('.word');
    	// }
    // }
})


// BACKSPACING

$(document).keydown(function(e){
	if (e.keyCode == 8) {
    	console.log("backspace");

    	// backspace the last character
    	$('#type-cursor').prev($('.word').children().last()).remove();
		$('.word').last().append($('#type-cursor'));

		// delete the "word" container class if it's empty
    	// if ($('.word').last().length == 1 && $('.paper').children().length > 1) {
    	// if ($('#type-cursor').prev($('.word')).is(':empty') && $('.paper').children().length > 1) {
    	if ($('#type-cursor').siblings().length == 0 && $('.paper').children().length > 1) {
			$('.word').last().prev().append($('#type-cursor'));
    		$('.paper').children().last().remove();
    		// if ($('#type-cursor').prev($('.word').children().last()).remove()){
    		// };
    	}

    	// delete the word container with backspace if it only contains a space (invisible character)
    	// if ($('#type-cursor').siblings('.space').length == 1 && $('.paper').children().length > 1) {
		// 	$('.word').last().prev().append($('#type-cursor'));
    	// 	$('.paper').children().last().remove();
    	// }

    	// switch back to the specimen view if you delete the last word
    	// if ($('.word').last().length == 1 && $('.paper').children().length == 1) {
    	// if ($('#type-cursor').prev($('.word')).is(':empty') && $('.paper').children().length == 1) {
    	if ($('#type-cursor').siblings().length == 0 && $('.paper').children().length == 1) {
			$('*').addClass('no-transition');

			$('.specimen').css('opacity','1');
			$('.specimen').removeClass('back');
			$('.specimen').addClass('front');

		    $('.paper').removeClass('front');
		   	$('.paper').addClass('back');

		$('#type-cursor').removeClass('visible');
		$('#type-cursor').addClass('hidden');
    	}
	}
})  



// PLACE THE CURSOR

$('.letter').on("click", function(){
	console.log("placing cursor");
	// $(this).after('#type-cursor');
})

