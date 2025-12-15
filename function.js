
//Function//
function logged_in_user(username){
    if(!username){
        return `Enter a valid name`
    }
  return `${username},just logged in :)`
}
//console.log(logged_in_user(("Bhavesh")))
//Rest operator// 
// function shopping_cart(...z){
//     console.log(z);
//     let total=0
//     for(let i=0;i<z.length;i++){
//     total+=z[i]
// }
// console.log(total);
// }
// shopping_cart(100,200,300,400,500,600)
// function myFunction() {
//   carName = "Volvo";
// }
// myFunction()
// //

// (function car(name){
//   console.log(name)
// })("Volvo")

// (function user(name){
//   console.log(name)
// })("Bhavesh")
//**********THIS keyword and ARROW function***********//
let arr=10
console.log(this)
function cart_price(val){
}