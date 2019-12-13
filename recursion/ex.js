"use strict";

function isPalindrome(str) {

    var n = str.length;
    if ( n <= 1 ) {
        return true;
    }
    if ( str[0]==str[n-1]) {
        return isPalindrome(str.slice(1, n-1));
    } else {
        return false;
    }
}


console.log( isPalindrome("") === true );
console.log( isPalindrome("a") === true );
console.log( isPalindrome("aa") === true );
console.log( isPalindrome("aba") === true );
console.log( isPalindrome("abba") === true );
console.log( isPalindrome("abccba") === true );

console.log( isPalindrome("ab") === false );
console.log( isPalindrome("abc") === false );
console.log( isPalindrome("abca") === false );
console.log( isPalindrome("abcdba") === false );

function makeRecord(x, [a, b]) {
    return { ...x, [a]: b};
}

function reduce(reducer, initial, arr) {
    var res = initial;
    for ( let elem of arr) {

        res = reducer(res, elem);
    }
    return res;
}

var data = [["name", "dick"], ["age", 39]];

var r =reduce(makeRecord, {}, data);
console.log('result', r);

console.log('from std reduce',data.reduce(makeRecord, {}));

