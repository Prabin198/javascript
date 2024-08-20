const promiseSix = new Promise(function(resolve,reject){
    let error = false;
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
        console.log(response);
     } catch (error) {
        console.log(error)
     }
}

consumeData();