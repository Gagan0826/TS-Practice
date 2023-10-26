//union
let age:number|string
age=22
console.log(typeof(age))
age="32"
console.log(typeof(age))
//ENUM
const enum gender{
            male= "Male guy",
            female="Female girl",
            others=0
            }
const gen=gender.male
console.log(gen)
console.log(typeof(gen))

//tuple
let user:[string,number,boolean]
//user=[23,"Gagan",true]
user=["Gagan",23,true]
let rgb:[number,number,number]=[225,21,33]
rgb[2]=121
console.log(rgb)
export {}