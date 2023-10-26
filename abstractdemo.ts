abstract class car{
    constructor(color:string,maxspeed:number,no_of_seats:number){}

    abstract  run():void
}

class swift extends car{
    constructor(color:string,maxspeed:number,seats:number){
        super(color,maxspeed,seats)
    }
    run()
    {
        console.log("Car is running")
    }
}
const mySwift = new swift("Red", 200, 4);
mySwift.run();
export{}