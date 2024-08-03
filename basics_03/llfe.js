//IIFE:immediately invoked function expression
(function (name){
    console.log(`This is my repo,${name}`);
})("prabin");//this is IIFE it is used when global scope is polluted or to make global scope clean use use iife
//writing ; is compulsory in this function to stop the function
(()=>{
    const name="prabin"
    console.log(`hello,everyone,${name}`)
})()