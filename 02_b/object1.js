//object declaration two ways literal and constructor-contains singleton\
//using symbol as a key
const mysym=Symbol("key1")//using symbol as key
jsuser={
    name:"pratik",
    [mysym]:"mykey1",
    age:"21",
    email:"ps3134668google.com",
} 
// console.log(jsuser[mysym]);
// console.log(jsuser.name);
jsuser.email="hitesh@chpt.com";//changing keys values
// console.log(jsuser.email)

// Object.freeze(jsuser)//makes it unchangable
jsuser.greetings=function(){
    console.log("hyy js user");
}
console.log(jsuser.greetings());
jsuser.greetingstwo=function(){
    console.log(`hellio js user ${this.name}`);
}
console.log(jsuser.greetingstwo());