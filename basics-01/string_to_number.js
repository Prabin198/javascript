let a="5" , b=5, c=6;
// console.log(a+b); since a is string so output will be 55 here a has high precedence 
// console.log(b+a); here b has more precedence because it is first so,output is 55
// console.log(a+b+c); here output is 556 because a is string so it override all variable as string.
// console.log(b+c+a); here output is 115 because b is number so it is added with c and then only written with string
// console.log(+true); it's output is 1 because true in number is 1
// console.log(+""); this is 0 becasue of same above cause
let count =100;
count++;//it is postfix increment ++count is prefix increment similarly we have prefix and postfix decrement too count--; and --count;
console.log(count);

// let as =5;
// const bs =++as;
// console.log(as,bs) output is as =6 and bs=6 here using prefix means it returns output after incrementing so we get bs=6
// let as=5;
// const bs =as++;
// console.log(as,bs); as is 6 and bs is 5 here using postfix means it returns output before incrementing so we get bs =5 