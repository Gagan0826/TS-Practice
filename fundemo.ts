const heros=["Gagan","Thor","Captain",1]

heros.map(hero=>{
    return `Hero is ${hero}`
})

function consoleError(err:string):void{
    console.log(err)
}
function handleError(err:string):never{
    throw new Error(err)
}
export {}