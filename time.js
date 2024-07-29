const timestamp = Date.now;
console.log(timestamp());//it is in milisecond
console.log(Math.floor(timestamp()/1000)); //used to create poll //second
const myDate = new Date();
console.log(myDate.getMonth());
//`${myDate.getMonth()} ` 
console.log(myDate.toLocaleDateString('default',{
    calendar:"era",
    weekday:"long"
}))