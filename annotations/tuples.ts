const drink1 = {
    color: 'brown',
    carbonated: true,
    sugar: 40
}

// const pepsi: [string, boolean, number] = ['brown', true, 40];
// pepsi[0]= 40 

// or 

type Drink = [string, boolean, number];
const pepsi: Drink = ['brown', true, 40];
const tea: Drink = ['brown', false, 0];