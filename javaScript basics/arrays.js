//Arrays in javascript

var array=new Array();

//arrays are zero indexed

array[0]="Dulmi";

array[1]=1234;

function newFunction(){
    var a=2000;
    return a 

}

array[2]=newFunction();

//set array[3] a function
array[3]=function(name){
    console.log("hello" + name);
}

console.log(array);

var secondArray= new Array();

secondArray=[1,2,3,4];
console.log(secondArray);


//call a function that is an elemnt of te array

array[3](array[0]);
console.log(array[3].course);


thirdArray=["Dulmi","Pabasara","Yapa"];

for(var i=0 ; i<thirdArray.length; i++){
    console.log(thirdArray[i]);
}


thirdArray[100]="Misty";
//middle elemnts are not defined.
//SO WHEN 
for(var i=0 ; i<thirdArray.length; i++){
    console.log(thirdArray[i]);
}

