"use strict";

const output = console.log;

// input: test  output: function str->void
const cond = f_out => test => str => {
		if ( test(str) ) {
			f_out(str);
	    }
	  }
const printIf = cond(output);




function isShortEnough(str) {
	return str.length <= 5;
}

function not(f) {
	return function(args) {
		return !f(args);
	}
}
const isLongEnough = not(isShortEnough);

var msg1 = "Hello";
var msg2 = msg1 + " World";

printIf(isShortEnough)(msg1);		// Hello
printIf(isShortEnough)(msg2);
printIf(isLongEnough)(msg1);
printIf(isLongEnough)(msg2);		// Hello World
