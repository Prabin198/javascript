const userDetails={name:'prabin',age:20,email:'karkiprabin@gmail.com'};
const {email}=userDetails;
console.log(email);//if we have to use the key repeatedly we can take it outside using const {email}=userDetails; also its long method is (userDetails.email).
const Obj={name:{
    facebook:{
        first:'prabin',
        second:"prabina"
    }
}};
const{second}=Obj.name.facebook
console.log(second);

const arr=[12,function()
{
console.log('hello world');
},24,12];
const [first,secc,,fourth]=arr;//destructuring tya comma ,, garda skip hunxa bich ko index.
console.log(secc());
console.log(fourth)
