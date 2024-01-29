//types of loops in js
//maps is known for its unique values and order and no duplicates.
// const map= new Map();
// map.set('in',"india")
// map.set('usa',"united states of america")
// map.set('fr',"france")
// map.set('in',"india")
//for of loop will not work on objects
//for in loop
// const myobj={
//     'js': 'jscript',
//     'cpp': 'c++',
//     'rb': 'ruby',
//     'swift':"swift by apple"
// }
// for(const key in myobj){
//     console.log(`key is ${key}  and value is ${myobj[key]}`);
// }
//for each loop
const coding=["js","rust","ruby","c++","java"];
// coding.forEach(function (item){
// console.log(item);
// });
// coding.forEach((val)=>{
//     console.log(val);
// });
 function printme(item){
    console.log(item);
 }
 coding.forEach(printme)
// coding.forEach((item,index,arr)=>{//taking item index and array in for each
//     console.log(item,index,arr);
// });
//array ke ander ke object ko access kerna used in db
// const mycoding=[
//     {
//         languagename:"javascript",
//         languagefilename:"js"
//     },
//     {
//         languagename:"java",
//         languagefilename:"java"
//     },
//     {
//         languagename:"c++",
//         languagefilename:"cpp"
//     }
// ]
// mycoding.forEach((item)=>{
//     console.log(item.languagename);
// });