"use strict";

function isPalindrome(str) {

    var n = str.length;
    if ( n <= 1 ) {
        return true;
    }
    if ( str[0]==str[n-1]) {
        return () => isPalindrome(str.slice(1, n-1));
    } else {
        return false;
    }
}


// console.log( isPalindrome("") === true );
// console.log( isPalindrome("a") === true );
// console.log( isPalindrome("aa") === true );
// console.log( isPalindrome("aba") === true );
// console.log( isPalindrome("abba") === true );
// console.log( isPalindrome("abccba") === true );

// console.log( isPalindrome("ab") === false );
// console.log( isPalindrome("abc") === false );
// console.log( isPalindrome("abca") === false );


var i =0;
var f = isPalindrome("abcba");
while (typeof f  === 'function' ) {

    console.log(i++)
    f = f();

}
console.log("isPalindrome: "+ f);

f = isPalindrome("bcdba");
while (typeof f  === 'function' ) {

    console.log(i++)
    f = f();

}
console.log("isPalindrome: "+ f)