type Person = {
    name : string;
    age : number;
    country : string;
}

const person: Person =  {
    name : "Praise",
    age : 20,
    country : "Nigeria"
}

console.log(person.name, person.age, person.country);

// annotations used to specifiy the data type of a varaible, parameter, function return and other type of values

// Annotation for string
let myName : string = "Praise Georgewill";
console.log(myName);

// Annotation for number
// let myNumber : number = value

let favNumber, num : number ;
favNumber = 10;
num = 3
console.log(favNumber, num);

// Annotation for boolean
let tsHard: boolean = false;
console.log(tsHard);


//type inference ? this gives the variable a type base on the value that is being passing into the variable

//inferring
let tech = 'TypeScript';
console.log(typeof tech);

let num1 = 5;

//Any Type ? it can be used to represent any type for a variable
// let varaName : any = any value;
let color: any = 'crisom';
color = 20;
color = true;
console.log(color);


//function Paramenters Annoations it is used to specify the expected (data type)types of a parameter that a functon takes in.

function addOn(num:number) {
    return num + 1;
}

const result = addOn(5);
console.log(result);


//arrow functions
const double = (x : number, y : number) => x * y;
const res= double(3, 4);

console.log(res);
// if your augrements are more that the parametr in the functio, typeScript will give you an error


//Default Params value
function greet(person:string = "Praise") {
    return `Hello ${person}`;
}

console.log(greet());


//regular function
function mult(v:number) : number {
    return v * v;
}       

const square = mult(6);
console.log(square);


//arrow func
const double2 = (x :number) :number => x * x;
console.log(double2(8));


//void in typeSCript, it is the absence of any value
function printMessage(printMessage:string) : void {
    console.log(`this is my ${printMessage}`);
    
}
printMessage("praise");

//never it meas that he function will never return anything
// it is used for functions that will throw erroes
// it is used for functions that infinte looping
function throwError(msg:string) : never {
    throw new Error(msg);
}
