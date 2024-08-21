class User {
    constructor(username, email ,password) {
        this.username=username;
        this.password=password;
        this.email=email;
    }
    encryptPassword(){
        return `${this.password}abc`;
    }
}
const Prabin=new User('prabin','prabin@gmail.com',1234);
console.log(Prabin.encryptPassword());

//inheritance
class Student {
    constructor(username){
        this.username=username;
    }
    logMe(){
        console.log(`The Student is :${this.username}`);
    }
}
class Teacher extends Student {
    constructor(username,email, password){
    super(username);
   
    this.email=email;
    this.password=password;
    
    }
    courseAddBy(){
        console.log(`Course added by ${this.username} `)
    }
}
// const std=new Student('prabin');
// console.log(std.logMe());
const teach=new Teacher('Frank', 'frank@gmail.com',123);
console.log(teach.courseAddBy());
const std=new Student('prabin')

console.log(std.logMe());