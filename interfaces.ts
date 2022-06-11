const oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true,
    summary(): string{
        return `Name: ${this.name}`;
    }
};

// const printVehicle =( vehicle: {
//     name:string; 
//     year: number; 
//     broken: boolean}): void=>{
//   console.log(`name: ${vehicle.name}`)
//   console.log(`year: ${vehicle.year}`)
//   console.log(`broken: ${vehicle.broken}`)
// }

// printVehicle(oldCivic);

// or 

interface VehicleProps {
    name:string; 
    year: number; 
    broken: boolean;
    summary(): string;
}

interface Reportable {
    summary():string
}

const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `My drink has ${this.sugar} grams of sugar`;
    }
}


const printSummary =( item: Reportable ): void=>{
//   console.log(`name: ${vehicle.name}`)
//   console.log(`year: ${vehicle.year}`)
//   console.log(`broken: ${vehicle.broken}`)
  console.log(item.summary());
}

printSummary(oldCivic);
printSummary(drink);