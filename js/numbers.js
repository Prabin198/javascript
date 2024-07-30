// const number=new Number(400);
// console.log(number);
// console.log(number.toString().charAt(2));


const num=123.22334;
console.log(num);
console.log(num.toFixed(2));//to gives the precision after the decimal **.how much you want
 
const number=1123.4999
console.log(number.toPrecision(4));//it automatically round off the float number also number in precision is the length of decimal in defination

console.log(number.toLocaleString('en-NP'));//it gives the numbering in form like 1,00,000 
const integer =12;
console.log(integer.toExponential());