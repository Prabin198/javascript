// const add=function (){
//     const username="prabin"
//     console.log(this.username);//we cannot define this function like this.
// }

// // add()//we get undefined 
//  const hi=() =>
//  {
//     username="prabin"
//     console.log(this.username);
//  }
//  hi();//it will return undefined since there is no any global variable to return ;

const hello=(num1,num2)=>{
return num1+num2;
}
console.log(hello(4,5));//writing arrow function
const konichuwa=(a,b)=>(a+b)
console.log(konichuwa(4,5))//we can write write like this too.
const username=()=>({user:"prabin"})
console.log(username())