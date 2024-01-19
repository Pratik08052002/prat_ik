//Arrays in js
// shallow copy shares the same reference while deep copy dont
// const arr=new Array(1,2,3,4,5);
// console.log(arr[1]);
//Array Methods
const myarr=[0,1,2,3,4,5,6]
// myarr.push(76);
// console.log(myarr);
// myarr.pop();
// console.log(myarr);
// myarr.unshift(10);
// console.log(myarr);
// myarr.shift();
// console.log(myarr);
// console.log(myarr.includes(9));
// const newarr= myarr.join()
// console.log(newarr);
// console.log(typeof newarr);

//slice or splice splice original array ko manipulate kerta hai
console.log("A",myarr);
const n1=myarr.slice(1,3);
console.log("B",myarr);
console.log(n1);
const n2= myarr.splice(1,3)
console.log("C",myarr);
console.log(n2);

