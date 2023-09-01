console.log("Hello World");

let age: number = 24;
let fees: number = 38_000;
let course: string = "Full-Stack developer";
let username: string = "mwamuziscodev";
let isDeveloper: boolean = true;
let sports: any;

if (fees < 50_000) {
  console.log("You are a student");
  fees += 10_000;
}

console.log(
  "----------------------------------------------------------------------------------"
);

// dont not use any, only use when really needed
let idrett: any;
idrett = "fotball";
idrett = 1;
idrett = true;
console.log(
  `Hello ${username}, you are ${age} years old, you are a ${course} student, your fees is ${fees}`
);

("----------------------------------------------------------------------------------");

// another bad example of not using any
// Parameter 'document' implicitly has an 'any' type.ts(7006)
// function render(document) {
//     console.log(document);
// }

function render(document: any) {
  console.log(document);
}

("----------------------------------------------------------------------------------");
// arrays in typescript
let stipentPenger: number[] = [
  10_000, 223_334, 334_546, 42_323, 43_423, 62_244, 71_213, 85_774, 2129,
];

// access stipentPenger
let x: number = stipentPenger[0];
console.log(x);

// filter stipentPenger
let masterDegreed: number[] = stipentPenger.filter(
  (stipentPenger) => stipentPenger > 50_000
);
console.log(masterDegreed);

// map array to new array with double the value
let doubleStipentPenger: number[] = stipentPenger.map(
  (stipentPenger) => stipentPenger * 2
);
// make a fun sentences with all info
const studentInfo = `${username} is a ${age}-year-old ${course}. He earns €${fees}. He want to loan ${doubleStipentPenger[4]}`;
console.log(studentInfo);

// loop through array
for (let i = 0; i < stipentPenger.length; i++) {
  console.log(stipentPenger[i]);
}

// loop through array with for of in typescript

("----------------------------------------------------------------------------------");

// objects in typescript
let student: { name: string; age: number; course: string; fees: number } = {
  name: "mwamuziscodev",
  age: 24,
  course: "Full-Stack developer",
  fees: 38_000,
};

// access student with function
function getStudent(student: any): void {
  console.log(student);
}

getStudent({ name: "mwamuziscodeveloper" });
getStudent(student);
console.log(student);

("----------------------------------------------------------------------------------");

// tuples in typescript
let membershipuser: [string, string, number, string, number] = [
  "1",
  "mwamuziscodev",
  24,
  "Full-Stack developer",
  38_000,
];
console.log(typeof membershipuser);
const [name1, email] = ["<NAME>", "<EMAIL>"]; // destructuring assignment
console.log(name1, email);

// challenge
let person: [string, number, boolean] = ["mwamuziscodev", 24, true];
console.log(person);

("----------------------------------------------------------------------------------");

// enums in typescript
enum Color {
  Red = "red farger",
  Green = "green farger",
  Blue = "blue farger",
}

let myColor: Color = Color.Red;
console.log(myColor);

// challenge
enum Month {
  January = "januar",
  February = "februar",
  March = "mars",
  April = "april",
  May = "mai",
  June = "juni",
  July = "juli",
  August = "august",
  September = "september",
  October = "oktober",
  November = "november",
  December = "desember",
}

let myMonth: Month = Month.January;
console.log(myMonth);

("----------------------------------------------------------------------------------");

function calculateTax(income: number): number {
  const taxPerc: number = 0.21;
  const taxAmount: number = income * taxPerc;
  return taxAmount;
}
calculateTax(5679);

/**
 * Calculate tax based on the provided income, year, and month.
 *
 * @param {number} income - The income of the user.
 * @param {number} year - The assessment year for tax calculation.
 * @param {string} _month - The assessment month for tax calculation (currently unused).
 * @returns {number} - The calculated tax amount.
 */
function Taxcalculate(income: number, year: number, month?: string): number {
  const BASE_TAX: number = 50_000;

  if (income < BASE_TAX && year < 2023 && month === myMonth[0]) {
    return income * 1.1;
  }

  return (income * BASE_TAX) / year;
}

// Sample usage and log
const taxAmount = Taxcalculate(5_679, 2_021, "January");
console.log(`Calculated tax: ${taxAmount}`);

// challenge Object

let person1: { name: string; age: number; course: string; fees: number } = {
  name: "mwamuziscodev",
  age: 24,
  course: "Full-Stack developer",
  fees: 38_000,
};
person1["name"] = "mwamuzis"; // dot notation
person1.age = 25; // bracket notation
console.log(person1);

let employee: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "mwamuziscodev",
  retire: function (date: Date) {
    console.log(`${this.name} is retiring on ${date.toDateString()}`);
  },
};

employee.retire(new Date("2021-12-31"));

// number or string in function
function add(a: number | string, b: number | string): number | string {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }

  return `${a} ${b}`;
}
add("Hello", "World");
add(1, 2);
add("Hello", 2);
add(1, "World");

// log
console.log(add("Hello", "World"));
console.log(add(1, 2));
console.log(add("Hello", 2));

// literal (exactly, specif )
type Quantity = 50 | 100;
let q: Quantity = 50;
q = 100;
// q = 200 // error
// log
console.log(q);

// null
function greet(name: string | null | undefined) {
  if (name) console.log(`Hello ${name.toUpperCase()}`);
  else console.log("Hello there");
}

greet("mwamuziscodev");
greet(null);
greet(undefined);

type Customer = {
  birthday: Date;
};
// Optional Chaining
function getCustomer(id: number): Customer | null | undefined{
  return id === 0 ? null : { birthday: new Date() };
}

let kunder = getCustomer(0);
// if (kunder !== null  && kunder !== undefined) 
console.log(`Kunder bursdag er på ${kunder?.birthday?.getFullYear()}`);
