function compose(...fn) {

    return function(v) {
        return fn.reduceRight(function(acc, curFunc) {
            return curFunc(acc);
        }, v);
    }
}


const inc = x => x+1;
const double = x => 2*x;
const square = x => x*x;

const f = compose(inc, double, square);

console.log('f(2)='+ f(2));  // 9
console.log('f(3)='+ f(3));  // 19

 var x = [1,2,3,4,5].map( double );
 console.log(x);
// [2,4,6,8,10]

var y = [1,2,3,4,5].reduce(
    (list,v) => {
        list.push( double( v ) );
        return list;
    }, []
);
// [2,4,6,8,10]
console.log(y);

var a = ["aap", "noot", "mies"];
for ( let e of a) {
    console.log(e);
}
a.forEach(v=>console.log(v));

var p = {name: "dick", age: 39, land: "NL"}
for ( let e in p) {
    console.log(e +' mapped to '+p[e]);
}