//functions part 1
// function addtwonumbers(number1,number2){
//     console.log(number1+number2);
// }
// let result=addtwonumbers(7,5);
// console.log("result",result);//we did nt return anything so result value is undefined

// function addnumbers(num1,num2){
//     return num1+num2;
// }
// let result=addnumbers(5,5);
// console.log(result);
// console.log("Result",result);

// function loginuser(username){
//     return `${username} just logged in`
// }
// console.log(loginuser("hiteshva"));
// function loginuser(username){
//     return`${username} just loggin`
// }
// console.log(loginuser());
// function loginuser(username="amit"){
// return `${username} just logged in`
// }
// console.log(loginuser());

// function loginuser(username){
//     if(!username)
//     console.log("please enter the username");
// return `${username} just loggede in`
// }
// console.log(loginuser());
function cakemaker(darkfantasy){
    if(darkfantasy===undefined){
    console.log("please enter the flavour of chocolates");
    }
return `${darkfantasy} istheflavourtomakecake`
}
console.log(cakemaker("darkchocolate"));