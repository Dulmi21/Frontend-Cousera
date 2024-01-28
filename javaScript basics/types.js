/*js has 7 primitive types

objects:
Object is a collection of name/value pairs


*/

//person object
/*
firstName:"Dulmi",
lastName:"Pabasara",
social:{ //this is another object within the person object
    linkedin:"abc",
    twitter:"xyz"
}*/


/*
Primitive type

represents a single immutable value

single value, not an object
Immutable means once it's set, it can't be changed

1.boolean
2.undefined-no value has ever been set
3.Null-signifies the lack of values
4.Number- the ONLY numeric type in js.
          Always represented as double-precision 64-bit floating point
5.string-sequence of charachters used to represent text
6.symbol
*/


var name="Dulmi Pabasara";

var number=200;

var z;

if (number==200){
    console.log("Number is 200");
}
if(z==undefined){
    console.log("Z is undefined");
}