const kelvin = 20; //this value will stay constant

const celsius = kelvin - 273 // celcius less than kelvin 273 degrees

let fahrenheit = celsius * (9 / 5) + 32;
//this is fahrenheit calculate formule 

fahrenheit = Math.floor(fahrenheit);
//this statement for convert decimal to integer

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.And this is as a celsius ${celsius}.`);

let newton = celsius * (33 / 100);

newton = Math.floor(newton);

console.log(`bu da Newton abimizin teorisi ${newton}`);