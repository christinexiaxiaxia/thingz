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



// $(document).mousemove(function(e){
// 	$('.cursor').css({'top': e.clientY + 10, 'left': e.clientX + 10})
// })


// BLURRING

$(document).click(function(){
	$('.showcase').toggleClass('blur');
	// $('.specimen').toggleClass('blur');
	$('.storage').toggleClass('blur');
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









// KEYCODE INPUT
$(document).on('keypress', function(e) {
    console.log(e.keyCode);
})

// START TYPING MAKES SPECIMEN DISAPPEAR

$(document).on('keypress', function() {
	$('.specimen').css('opacity','0');
	$('.specimen').addClass('back');
})

// KEYBOARD APPEARS ON MOBILE

// $(document).ready(function(){
//     prompt('Type something');
// })

$(document).click(function(){
    $('input').focus();
})




// TYPING LETTERS

$(document).on('keypress', function(e) {
    for (i = 0; i < 26; i++) {
    	if (event.keyCode == i+97) {
    		$(keyLower[i]).clone().appendTo('.paper').addClass('hello-letter').removeClass('bye-letter');
    	}
    	if (event.keyCode == i+65) {
    		$(keyUpper[i]).clone().appendTo('.paper').addClass('hello-letter').removeClass('bye-letter');
    	}
    }
});

// TYPING NUMBERS

$(document).on('keypress', function(e) {
    for (i = 0; i < 10; i++) {
    	if (event.keyCode == i+48) {
    		$(numberLining[i]).clone().appendTo('.paper').addClass('hello-letter').removeClass('bye-letter');
    	}
    }
});

// TYPING PUNCTUATION

$(document).on('keypress', function(e) {
    for (i = 0; i < 33; i++) {
    	if (event.keyCode == i+33) {
    		$(punctuationA[i]).clone().appendTo('.paper').addClass('hello-letter').removeClass('bye-letter');
    	}
    }
});

// TYPING SPACE

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

