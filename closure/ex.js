"use strict";

function strBuilder(greeting) {

	return	(function b(x) {
			
		 function g(y) {
			 if ( y == undefined) {
				 return x;
			 } else {
				 return b(x+y);
			 }
		 }

		return g
	})(greeting)
}


var hello = strBuilder("Hello, ");
var kyle = hello("Kyle");
var susan = hello("Susan");
var question = kyle("?")();
var greeting = susan("!")();

console.log(strBuilder("Hello, ")("")("Kyle")(".")("")() === "Hello, Kyle.");
console.log(hello());
console.log(hello() === "Hello, ");
console.log(kyle() === "Hello, Kyle");
console.log(kyle());
console.log(susan() === "Hello, Susan");
console.log(susan());
console.log(question === "Hello, Kyle?");
console.log(greeting === "Hello, Susan!");
