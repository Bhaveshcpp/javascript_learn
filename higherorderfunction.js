//Those function which takes another function as input to itself or return a function from iteself is called as a HOF//
//whreas the function which is passes to the HOF or as an input to another function is called callback function//

//Example//
let x=function(){
    console.log("I am a callback function")
}
let y=function(x){
    x();
    console.log("I am a HOF")
}
y(x);

           //Here y is HOF and x is callback function//


          //example//
let radius= new Array(3,4,1,2)
function area(radius) {
    return Math.PI * radius * radius;
}
function circumference(radius){
    return Math.PI*2*radius;
}
function diameter(radius){
    return radius*2
}

let calculate=function(radius,task){
output=[]
for(let i=0; i<radius.length; i++){
output.push(task(radius[i]));
}
return output
}
console.log(calculate(radius,area))
console.log(calculate(radius,circumference))
         //Here the calculate is the Higher order function with area ,circumference na ddiameter as as callback function which is called whenever required//

      //Heree we can also use function with map //
     //example 
console.log(radius.map(area))
console.log(radius.map(circumference))
