const student = {
    _email:'pk@gmail.com',
    _name:'prabin',
    get email(){
        return this._email.toUpperCase();
    },
    set email(value){
      this._email=value;
    }
}
const Details=Object.create(student);
console.log(Details.email)