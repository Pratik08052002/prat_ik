// const tinderuser =newobject()
// console.log(tinderuser);
// const tinderuser={}
// tinderuser.name="ashima"
// tinderuser.id="123abc"
// tinderuser.age="34"
// tinderuser.isloggedIn=false
// console.log(tinderuser);
//access of nested objects
// const regularuser={
//     email:"cheenu@gmail.com",
//     fullname:{
//     userfullname:{
//           firstname:"cheenu",
//           lastname:"cheenii"
//     }
// }
// }
// console.log(regularuser.fullname);
// console.log(regularuser.fullname.userfullname.firstname);

//combining objects by using object.assign
// const obj1={1:"a",2:"b"}
// const obj2={3:"a",4:"b"}
// const obj4={5:"a",6:"b"}
// const obj3=Object.assign({},obj1,obj2,obj4)
// console.log(obj3);//this method is less use

//onather famous method spreadmethod
// const obj3={...obj1,...obj2,...obj4};
// console.log(obj3);
// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));//object ka data type aaray h issey ham mainupulate kr skte h loops m
// console.log(tinderuser.hasOwnProperty.apply('isloggedin'));
//

//object part 3 destructure
const course={
coursename:"js in hindi",
priceprice:"999",
courseinstructor:"hitesh"
}
const{courseinstructor:instructor}=course;
console.log(instructor);
const{priceprice:p}=course
console.log(p);