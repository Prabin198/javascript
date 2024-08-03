const user={
      name:'prabin',
      age:20,
      loggedInmessage:function (){
                      console.log(`${this.name},welcome to my page.`);
                    //   console.log(this);here we got output as all the details in user.
      }
    
} 
user.loggedInmessage();//output is prabin
user.name="ram";
user.loggedInmessage();//output is ram;
//using this function means we can display value in current context.
//the value we put right now is displayed using this function.
console.log(this)//here we got output as {} because right now there is nothing in global scope.