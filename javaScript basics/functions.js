//functions in javascript are OBJECTS



function multiply(x,y){
    console.log(x*y);
    return x*y;
}

console.log("Hello world");
multiply(5,4);


//as functionas are objects, we can define properties

multiply.version=0.001;
console.log(multiply);   //print this function as an object

console.log(multiply.version);

//function factories

function makeMultiplier(multiplier){
    var newFunction=function (x) {
        return multiplier*x;

    };

    return newFunction;
}

var multiplyby3= makeMultiplier(3);

var function2=makeMultiplier(1000);  //a function to multiply
                                      //a given function by 1000



//wwe can pass functions as arguments

function function3(x, operation){
    return operation(x);
}

console.log(function3(3,function2)); //give a function as an argument

 //////////////////////////////////////

 function addition(x,y){
    total= x+y;

    return total
 }

 console.log(addition(3,3));


 //creating functions


 function createNew(value){
    var newFunction =function(x){
        return value*10
    }
    return newFunction
 }


 //Passing variables by values vs. by refernce
 

