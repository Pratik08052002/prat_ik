//arrays part 2
const marvel_heros=["thor","ironman","spiderman"]
const dc_heros=["superman","flash","batman"]
// console.log(marvel_heros.push(dc_heros))
// const all_heros=marvel_heros.concat(dc_heros);
// console.log(all_heros);
const all_heros=[...marvel_heros,...dc_heros];
console.log(all_heros);//known as spread operator
// let score1=100;
// let score2=200;
// let score3=300;
// console.log(Array.of(score1,score2,score3));
// console.log(Array.isArray("hitesh"));
// console.log(Array.from("hittesh"));//from array banata hai
console.log(Array.from({name:"hitesh"}));//intersting and imp need to mention key or value to convert in array
