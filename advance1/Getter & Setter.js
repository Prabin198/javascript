class User{
    constructor(username, email,password){
           this.username=username;
           this.email=email;
           this.password=password;
    }
     get email(){
        return `${this._email}.com`
     }
     set email(value){
          this._email=value;
     }
     get password(){
        return `${this._emai}.com`
     }
     set password(value){
          this._emai=value;
     }
}

const fetch =new User('prabin','prabinka@.ai','ABC');
console.log(fetch.email)
console.log(fetch.password)