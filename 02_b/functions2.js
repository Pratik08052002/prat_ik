//functions part 2
// function calculatecartprice(...num1){
//     return num1;
// }
// console.log(calculatecartprice(num1));
//  function calculatecartprice(val1,val2,...num1){//using rest operator to take all the values rest/spread
//     return num1;
//  }
//  console.log(calculatecartprice(200,456,900,199,100));
// const user={
//     username:"sam",
//     price:"400"
// }
function handleobject(anyobject){
    return `username is ${anyobject.username} price is ${anyobject.price} her age is ${anyobject.age}`
}
// console.log(handleobject(user));
// console.log(handleobject({//direct calling m object pass krsakte hai alag se define not required
//     username:"akshita",
//     price:"888",
//     age:"21"
// }))
// const myarray=[200,400,500];
// function returnsecondvalue(array){
//     return array[2];
// }
// console.log(returnsecondvalue(myarray));
function returnsecondvalue(myarray){
    return myarray[1];
}
console.log(returnsecondvalue([200,4400,50]));
