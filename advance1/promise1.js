const promiseFour =new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:'prabin198',email:'karkiprabin198@gmail.com'});
    },1000)
})
promiseFour.then(function(e){
          console.log(e.username)
})
const promiseFive = new Promise(function(resolve,reject){
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
promiseFive
.then(function(user){
    console.log(user);
    return user.username;
})
.then(function(username){
    console.log(username);
})
.catch(function(error){
    console.log(error)
})//chaining...
.finally(()=> console.log('The promise is either resolved or rejected.')
)
