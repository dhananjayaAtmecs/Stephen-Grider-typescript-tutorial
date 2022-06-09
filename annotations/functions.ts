const add =(a: number, b: number): number=>{
   return a+b;
}

//the below code is same as above one 
//  return number type will be automatically
// type inferenced by typescript 
const add1 =(a: number, b: number)=>{
   return a+b;
}

const substract = (a:number, b: number): number=>{
   return a-b;
}

function divide(a:number, b:number): number {
   return a/b;
}

const multiply = function(a:number, b:number):number {
    return a*b
}

const logger = (message: string): void=>{
   console.log(message)
//    this function can return only undefined and null
//    return null
}

const throwError = (message: string): never=>{
    throw new Error(message);
}



const foreCast = {
    date: new Date(),
    weather: 'sunny'
}
const logWeather = ({date, weather}: {date:Date, weather:string}):void =>{
    console.log(date, weather)
}
logWeather(foreCast);