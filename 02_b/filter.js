//filter map and reduce
//for each value return nahi kerta bas undefined return kerta hai.
//filter function ek calback leta hai condition neccesory then if true then returns value
// const number=[1,2,3,4,5,6,7,8,9,10]
// const nums=number.filter((num)=>{
//     return   num>2
//  })
// console.log(nums);
// //or
// my=[]
// number.forEach((num)=>{
//     if(num>4)
//     my.push(num)
// })
// console.log(my);
// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
//   ];
// let user = books.filter( (bk) => bk.genre==='History')
// console.log(user);
// let userbooks = books.filter( (bk) => bk.genre === 'History')
// console.log(userbooks);

//maps in js
// const mynumbers=[1,2,3,4,5,6,7,8,9,10]
// const newnumbers=mynumbers.map((num)=>num+10)
// console.log(newnumbers);
//same using for each loop
// const newnum=[]
//  mynumbers.forEach((num)=>{
//   num=num+10;
//   newnum.push(num)
// })
// console.log(newnum);

//chaining*************************************************
// const mynumbers=[1,2,3,4,5,6,7,8,9,10]
// const newnum=mynumbers
// .map((num)=>num*10)
// .map((num)=>num+1)//map ke ander map ke ander filter
// .filter((num)=>num>40)
// console.log(newnum);
//reduce*****************************************************
// const myNums=[1,2,3]
// const mytotal=myNums.reduce(function(acc,currval){
//   console.log(`accumulator:${acc}and currentvalue:${currval}`);
//   return acc+currval;
// },0)
// const mytotal=myNums.reduce((acc,currval)=>(acc+currval),0)
// console.log(mytotal);//    accumulator ki initial value  ddeclare karni padti h
const myarr=[
  {
    course:"js",
    price:2500
  },
  {
    course:"android dev",
    price:7500
  },
  {
    course:"web",
    price:5000
  },
]
const totalprice=myarr.reduce((acc,item)=>(acc+item.price),0)
console.log(totalprice);