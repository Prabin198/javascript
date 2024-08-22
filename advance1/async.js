const promiseSix = new Promise(function(resolve,reject){
    let error = true;
    if(!error){
    setTimeout(function(){
        resolve({
            username:'luffy07',
            email:'freefire@gmail.com'
        });
    },1000)}
    else{
        reject('Error:Something went wrong');
    }
})
async function consumeData(){
     try {
        const response=await promiseSix;
        console.log(response.username);
     } catch (error) {
        console.log(error)
     }
}

consumeData();
const prom= new Promise(function(resolve,reject){
    let error=true;
    if(!error){
        setTimeout (function(){
      resolve({
        username:'ram',
        email:'ram@.com.ai'
      })
        },1000)
        
    }
    else{
        reject(`The error occured`);
    }
})
async function user() {
    try{
    const resolve=await prom ;
    console.log(`The user is ${resolve.username} and email is ${resolve.email}`)
    }
    catch(error){
        console.log(error)
    }
}
user();