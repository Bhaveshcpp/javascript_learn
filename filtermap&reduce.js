const arr=[3,4,2,3,7]

//REDUCE-to find the sum or maximum like things in an array we use this //
//here we iterate through the array and return the answer//
//example
function issum(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i];
    }
    return sum;
}
console.log(issum(arr));
//with help of reduce//
const output=arr.reduce(function(x,curr){
x=x+curr;
return x;
},0);
console.log(output);

//to find greatest in the array//
const max=arr.reduce(function(acc,curr){
 if(curr>acc){
    acc=curr;
 }
 return acc;
},0)
console.log(max);


//What are the diffrent people with age<30 //
const user = [
        { firstname: "Mohammad", lastname: "Noushad", age: 22 },
        { firstname: "Aniket", lastname: "Bhalla", age: 45 },
        { firstname: "Bidhi", lastname: "Chand", age: 21 },
        { firstname: "Saif", lastname: "Siddiqi", age: 67 },
      ];

      const value = user.reduce((acc, current) => {
        if(current.age < 30){
            acc.push(current.firstname);
        }
        return acc;
     }, []);
      console.log(value);

      //Also to perform chaining we can use maps and filtr both //
      //like for an example we need to find names whose age<30 which can be done using chaining//

      let ans=user.filter( (x)=>x.age<30).map((x)=> x.firstname)
      console.log(ans);