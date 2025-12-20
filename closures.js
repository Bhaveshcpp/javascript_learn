let info=()=>{
    let name="BHAVESH";
     age();
    function age(){
        let age =21;
        console.log(name+" is "+ age +" years old");
    }
}
info();
//SO WITH CLOSURES AN INNER FUNCTION CAN ACCESS VARIBALES AND FUNCTIONS OR OTHER THINGS OF OUTER FUNCTION//

//Here with help of closure i implemented set interval function using a var variable// 
// function print(){
// for(var i=0;i<5;i++){
//     function run(x){
// setTimeout(()=>{
// console.log(x);
// },1000*x)
// }
// run(i);
// }
// }
// print();





