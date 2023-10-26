class student
{
    studentId:string
    name:string
    private age:number
    protected email:string
    constructor(sid,name,age,email)
    {
        this.studentId=sid
        this.name=name
        this.age=age
        this.email=email
    }
    public get getage() : number {
        return this.age
    }

    public set setage(age : number) {
        if (Eligibility(age))
        {
            this.age = age;
        }
    }  
}
//demonstrate use of protected
class modifymail extends student{
    changemail(emailid:string) {
        this.email=emailid
    }
    
}

const Gagan=new student("12si2112","Gagan",22,"Gagan@gmail.com")
console.log(Gagan)
//demonstrate use of private
if (Eligibility(Gagan.getage)){
    console.log("Eligible to vote")
}

function Eligibility(age:number)
{
    if (age>18){
        return true
    }
    else
    {
        return false
    }
}
//demonstrate use of protected
const newmail= new modifymail("12si2112","Gagan",22,"Gagan@gmail.com");
newmail.changemail("gagan@intimetec.com")
console.log(newmail)
export {}