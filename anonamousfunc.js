//Difrrence between them is in hoisting the FS OR FD is hoisted but FE not//

//Function statement or Function declaration//
function nam(){
    console.log( "Your name is : FS");
} 
nam();

//Function Expression
let a =function(){
console.log( "Your name is : FE");
}
a();



//Anonamous function//
//When we pass function as a value or a paramter we use anonamous function//
// function (){
// }

//Named function expression//
let x=function y(){
console.log("Named function exp")
}
//This can be done as it return y is not defined y();
//so we can use
 x();

 //First class functions OR fIRST CLASS CITIZENS//
 //The ability of a function to be use as values is FCF//
 //Means function pass as arugemnt to another function//

 


