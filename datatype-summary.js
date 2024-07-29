/*Primitive(call by value)
string,number ,boolean,symbol,null, undefined,bigint


non-primitive(reference)
array,object,function
 */
// const schoolId=Symbol('2');
// const collegeId=Symbol('2');
// console.log(schoolId==collegeId);//it is false because of symbol datatype
// const bigNum=244444444n;
// console.log(typeof bigNum);//since it is big so it's type is bigint


// let UserName=["prabin","nitesh","anurag","prashant","sanjiv"];//array
// console.log(UserName);
// console.log(typeof UserName);//type is object 
// let details={
//       name:"prabin karki",
//       age:20,
//       education:"Bachelor in csit."
        
//     }//object is always written in curly braces 
// console.log(details);
// console.log(typeof details);

const func =function(){
    console.log("hello world");
}
console.log(typeof func);
