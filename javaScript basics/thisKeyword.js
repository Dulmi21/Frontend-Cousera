/*
Lecture 48

Function Constructors
Prototype
This keyword
*/

function test(){
    console.log("Hello");
    console.log(this); 

    this.name="Dulmi";
    //"this" points to the global window object
}

test();
console.log(window.name);



//function constructors

function Circles(radius){
    this.radius=radius;

    this.hetArea={
        function(){
            return Math.PI
        }
    }
    console.log(this);


}

var myCircle= new Circles(30);

console.log(myCircle);


Circles.prototype.getArea= function(){
    
}

