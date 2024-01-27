
// VARIABLES    FUNCTIONS    SCOPE

/*javascript is a single threaded environment, not a
multi threaded environment*/

/*
Where we can write javascript codes

inside head tag
inside body tag
inside script tag
*/

var x="Hello world";

var message="hi";
/*
No types are declared

JS is dynamically typed language
So, the same variabe can hold different tyepes during the 
life of the execution
*/


//Defining functions
//2 ways

function functionOne(){

}

var functionOne= function(){}
//remember that, functionOne is the name of the function
//Retuen value of the function is not assigned to this


//invole a function:

functionOne();

function compare(x,y){
    return x>y;
}

compare(9,0);

compare(); //this is valid even without arguments


/////////////////////////////////////////


