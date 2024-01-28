//string concatanation

var str1= "University ";

var str2="of ";

var str3="Moratuwa";

str3+=" Sri lanka"

console.log(str1+str2+str3);



//math operators

console.log(5+4);
console.log(undefined/5);
 

function division(a){
    console.log(a/10);
}
/*NAN - not a number error */

division(90);


//Automatically converting types

var first=4, second=4;

if(first==second){
    console.log("First one is same as second one");
}

var first="4";

if(first==second){
    console.log("Still First one is same as second one");
}

/* To avoid this we can use STRICT equality  ===

if(first===second){
    console.log("Still First one is NOT same as second one");
}
*/



///////////////////////// AND OR

if( false|| null||undefined||0){

}

if(true && "hello" && 1 && "false"){//false is given as a string, not boolean

}


//Where should we put curly braces

function a()
{
    return  //here it returns nothing and gives undefined as result
    {
        name:"Dulmi"
    };
}


function b(){
    return{  //returns an object with name value pairs
        name:"Dulmi"

    };
}


//For loops

for (var i=0; i<10; i++){
    console.log(i);
}



//handeling default values

function order(sideDish="fish"){  //deafoult valu for sideDish
    console.log("Chicken with "+ sideDish);
}

order("Rice");

order();

/* sideDish= sideDish || "whatever" */