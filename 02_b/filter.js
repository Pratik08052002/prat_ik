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
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
// let user = books.filter( (bk) => bk.genre==='History')
// console.log(user);
let userbooks = books.filter( (bk) => bk.genre === 'History')
console.log(userbooks);