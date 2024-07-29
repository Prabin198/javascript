let userOne="prabinkarki198@gmail.com"

let userTwo=userOne;
userTwo="nitesh.google.com"
console.log(userTwo);//we get nitesh...
console.log(userOne);//we get prabin...
//since all the primitive datatype are stored in stack so it get copy that's why email of userOne is not changed .
let userThree={
    email:"karkiprabin.com",
    name:"prabin karki",
    age:20
}
let userFour=userThree;
userFour.email="nitesh.gmail";
console.log(userFour);
console.log(userThree);//here nitesh.gmail replace prabin.. because it is nonprimitive datatype so data are stored in heap .we can see that changing in userFour changed in userThree because it get reference directly so it is changed.
