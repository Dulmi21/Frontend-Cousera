// passing (or copying) By Value

var a;
b=a;

//after copying things in a to be,
//If we change values in B , it does not affect values 
// of a


/*In js
primitives are passed by value

objects are passed by reference
 */

//primitives

var a=0;
var b=a;


//objects

var a= {x:7};
var b=a;

//here same memory location is used for both
// objects. Both are pointing to the same location


//Copy the reference ve by value

var a=7;
var b=a;
console.log("a: " +a);
console.log("b: " +b);

b=5;
console.log("after b update");
console.log("a: " +a);
console.log("b: " +b);

//objects

//changing attributes make changes in other objects

var c={x:7};
var d=c;


console.log(c);
console.log(d);


d.x=100;
console.log(c);
console.log(d);

