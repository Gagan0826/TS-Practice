interface student{
    readonly studentid:number,
    email:string,
    usn:string,
    getschool():string,
}

function getscl() {
    return "some school"
}
let Gagan:student={studentid:1221,email:"gagan@gmail.com",usn:"1sd1230",getschool:getscl}
console.log(Gagan.getschool())

export{}