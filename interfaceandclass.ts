interface student{
    name:string
    age:number
    studentId:number
}
class schoolstudent implements student{
constructor(public name:string,public age: number,public studentId: number){}

}