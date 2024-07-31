//using destructure help to access object without writing its name.
const course={
    CourseName:"javascript",
    Price:"499",
    CourseInstructor:"Prabin Karki"
}
console.log(course.CourseInstructor);//writing it is correct but to access courseInstructor we always have to write object.attributes so,using other syntax as
const {CourseInstructor:Teacher}=course;
console.log(Teacher);//using this make code small .

// const navbar =({company})=>{

// }
// navbar(company="Amazon"); this is code of react js but here we used destructure as({company}) inside parenthesis.

// {
//     CourseName :"physics",
//     name:"prabin",
//     price:"free"
// }JSON files object
  
// [
//     {},
//     {},
//     {}
// ]JSON Files in array