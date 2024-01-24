//this current context ko refer kerta hai
// const user={
//     username:"hitesh",
//     price:"999",
//     welcomemessage:function(){
//         console.log(`${this.username} and price is ${this.price}`); 
//         console.log(this);
//     }
// }
// user.username="pratik";
// user.welcomemessage()
// console.log(this);//{}
//Arrow functions
const chai=()=>{
    username:"hitesh"
    console.log(this);//not work properly in functions {}
    console.log(this.username);//undefined
}
chai()
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//pure arrow functions
// const addtwo=(...num1)=>(num1)
// console.log(addtwo(100,120,150,200,250));
const addtwo=(num1)=>({//object ke sath ()jarur ata hai function me
    username:"hitesh",
    age:"21"
})
console.log(addtwo());