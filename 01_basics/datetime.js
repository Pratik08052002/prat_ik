//date in javascript
let myDate=new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toJSON());
console.log(myDate.toISOString());
console.log(myDate.toLocaleString());
//declaration of new date
// let mycreatedDate=new Date(2023,0,23)
// console.log(mycreatedDate.toDateString());
// let mycreatedDate=new Date(2023,1,4,5,4)
// console.log(mycreatedDate.toLocaleString());
// let datini=new Date("2024-1-13");//when we use yy-mm-dd then month starts frm 1 othrwise 0
// console.log(datini.toLocaleString());

//exact time stamp
// let mytimestamp=Date.now()
// console.log(mytimestamp);//will come in milliseconds
// let mydate=new Date("01-14-2024")
// console.log(mydate.getTime());//helps t compare the date in projects like room booking
//
//when to convert in seconds
console.log(Date.now()/1000);/// by 100 will give inb seconds but to avoid decimal we add math . floor value
console.log(Math.floor(Date.now()/1000));
