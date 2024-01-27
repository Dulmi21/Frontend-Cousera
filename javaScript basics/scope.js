/*
SCOPE

GLOBAL- variables and functions defined here are available
everywhere

Function
aka lexical- Variables and functions defined here are
available only within this function

*/

//global 

var x=2;
A();

function A(){
    var x=5;
    B();
}

function B(){
    console.log(x);

}
//This will print output as 2
//Becouse B is defined within the global scope
/*So that the outr reference of B is global scope
It is physically defined in the global scope
SSo it uses variable in the global scope as 1st reference */