// function addTwoNumber(a,b){
//        console.log(a+b);
// }
//   const res=addTwoNumber(2,3);
//   console.log(res);//we get result undefined because  return gardaina value sirf print garxa so res mah value audaina.
 
 function addTwoNum (n1,n2){
   // let result=n1+n2;//directly return garda hunxa
    return  n1+n2;
}
const result=addTwoNum(5,7);
console.log("Result:",result)

function loginUserMessage(username){
    return `${username} just logged in`;
}
console.log(loginUserMessage("Michale"));//correct output


                            
function loginUsermessage(username){
    //                     ^ yo chai parameter ho function baira loginUsermessage(argument).
    if(username==undefined){//if condition
        console.log("Please enter a username");
        return;
    }
    else{
    return `${username} just logged in`;//yo run hudaina mathi return vayesi function yei terminate hunxa.
    }
}
console.log(loginUsermessage("nitesh"));//undefined logged in output


//example 
function Funct(name/*="ram"*/){
      if(!name){
        return`name not found.`
      }
      else{
        return`${name} just logged in.`
      }
}
const user=Funct();
console.log(user);