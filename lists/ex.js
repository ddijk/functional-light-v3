"use strict";

// Put your code here! :)

const f2 = () => 2;
const f3 = () => 3;

const cb = (x) => () => x;

const add = (x, y) => x + y;

console.log(add(f2(), f3()));

const add2 = (f, g) => add(f(), g());

console.log(add2(f2, f3));
console.log(add2(cb(4), cb(5)));

function addn_for(...fn) {

    var res = 0;
    for (let f of fn) {

        res += f();
    }

    return res;
}

console.log('result of addn_for=' + addn_for(cb(2), cb(3), cb(7)));
function addn_while(...fn) {

    var res = 0;
    let  f  = fn.pop()
    while ( f   ) {

        res += f();
        f = fn.pop();
    }

    return res;
}

console.log('result of addn_while=' + addn_while(cb(2), cb(3), cb(7)));
function addn_recur(...fn) {

    if (fn.length==0) {
        return 0;
    }
    return fn[0]() + addn_recur(...fn.slice(1));
}
console.log('result of addn_recur= ' + addn_recur(cb(2), cb(3), cb(7)));

function addn_reduce(...fn) {

    return fn.reduce( (acc, elem) => acc+elem(), 0);
}
console.log('result of addn_reduce= ' + addn_reduce(cb(2), cb(3), cb(7)));

// function addn_reduce2(...fn) {

//     fn.reduce( (acc, elem) => acc+elem(), 0);
// }
// console.log('result of addn_reduce2= ' + addn_reduce2(cb(2), cb(3), cb(7)));


var numbers = [1, 1, 2, 2, 3, 4, 5, 6, 6, 7, 7];
console.log('input: '+ numbers);

const unique_reducer = (acc, val) => { if ( !acc.includes(val)) acc.push(val); return acc}
const even_reducer = (acc, val) => { if ( val % 2 ==0) acc.push(val); return acc}
var unique_numbers =numbers.reduce(unique_reducer, []);
console.log('unique numbers '+unique_numbers);

const f_even = x => x % 2 ==0;
const f_even_arr = x => x.reduce(even_reducer, []);
var even = numbers.filter(f_even);
console.log('even numbers '+even);
var even_with_reduce = numbers.reduce(even_reducer, []);
console.log('even with reduce numbers '+even_with_reduce);

//const compose_even_unique = [f_even_arr, unique_reducer].reduce((acc, fie)=> fie(acc), x=>x);
const compose_array_functions = function(f, g ) {
     return function(arr) {
         return arr.reduce(f, []).reduce(g, []);
     }
}
const compose_array_functions2 = function(f, g ) {
    return function(arr) {
        return arr.reduce(f, []).reduce(g, []);
    }
}
console.log('even and unique numbers '+compose_array_functions(unique_reducer, even_reducer)(numbers));
console.log('even and unique numbers reversed '+compose_array_functions(even_reducer, unique_reducer )(numbers));

console.log('with map: '+ addn_for(...numbers.map(v=>cb(v))));
console.log('with map: '+ addn_reduce(...even.map(v=>cb(v))));
