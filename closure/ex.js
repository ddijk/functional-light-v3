"use strict";

function strBuilder(greeting) {

	function b(x) {

		if (x == undefined) {
			return greeting;
		}


		// c
		return function(y) {
			if ( y == undefined) {
				return greeting+x;
			}

			return function(z) {
				if ( z == undefined) {
					return greeting+x+y;
				}
					return greeting+x+y;

			}
		}
	}
	return b;
}


var hello = strBuilder("Hello, ");
var kyle = hello("Kyle");
var susan = hello("Susan");
var question = kyle("?")();
var greeting = susan("!")();

// console.log(strBuilder("Hello, ")("")("Kyle")(".")("")() === "Hello, Kyle.");
console.log(hello());
console.log(hello() === "Hello, ");
console.log(kyle() === "Hello, Kyle");
console.log(kyle());
console.log(susan() === "Hello, Susan");
console.log(susan());
console.log(question === "Hello, Kyle?");
console.log(greeting === "Hello, Susan!");
