// let obj=new Object()
// obj.name="Bhavesh"
// obj.semester=4
// obj.degree="b-Tech"
// console.log(obj)
// let sym=Symbol("B20781")
let sym =Symbol("key")
let obj1={
name : "Bhavesh",
semester : 4,
degree : 'Btech',
nptel : false,
[sym]: "b20791",
greeting : function(){
    return (`Hello,${this.name} whats up`)
}
}
let obj2={
name : "Bhavesh",
semester : 4,
degree : 'Btech',
nptel : true,
[sym]: "b20791",
greeting : function(){
    return (`Hello,${this.name} whats up`)
}
}
let {name:n} =obj2
console.log(n.toUpperCase())

// console.log(Object.keys(obj1))
// console.log(Object.values(obj2))
// console.log(Object.entries(obj2))



// let obj3={...obj1,...obj2};
// let obj3=Object.assign({},obj1,obj2)
// console.log(obj3)

// console.log(obj)
// console.log(obj.greeting())
//console.log(obj.hasOwnProperty('greeting'))
// console.log(obj["name"])
// console.log(obj["semester"])
// console.log(typeof obj.sym)
// console.log(obj[sym])
//Object.freeze(obj)
//obj.semester=5//to change value property//


// console.log(obj)
// function Person(name,age,mob,colour){
// this.Name=name
// this.Age=age
// this.Mob_no=mob
// this.Colour=colour
// }
// const myFather=new Person("Gopal",55,9828083449,"Black")
// const myMother = new Person("Sally",48,34834832984,"green");
// // myFather.nationality = "English";
// Person.prototype.profile=function(name,age){
//    return ("My name is " +(this.Name)+ " and my age is " +(this.Age))  
// }

// //console.log(myFather.nationality)
// console.log(myMother.profile("sally",48))
// console.log(myMother)
// const mySister = new Person("Anna", "Rally", 18, "green");

// const mySelf = new Person("Johnny", "Rally", 22, "green");
