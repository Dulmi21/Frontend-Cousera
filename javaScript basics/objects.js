console.log("Objects in javaScript");


//creating a new object
var company= new Object();


// create properties 

company.name="New Company";

company.place="COLOMBO";

console.log(company.name);

console.log(company); //prints all properties, name- value pairs

company.ceo= new Object();

//ceo is an object within company object
 

 company.ceo.name="Dulmi";

 company.ceo.age=22;

 console.log(company.ceo);


//TWO notations to get object properties

console.log(company.name);
 console.log(company["name"]); //to use invalid property names
 //ex:

 company["$stock value is"]="dollars";

 console.log(company["$stock value is"]);


 ////////////////////////////////////////////////////////


 

