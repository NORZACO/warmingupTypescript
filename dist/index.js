"use strict";
var _a;
console.log("Hello World");
let age = 24;
let fees = 38000;
let course = "Full-Stack developer";
let username = "mwamuziscodev";
let isDeveloper = true;
let sports;
if (fees < 50000) {
    console.log("You are a student");
    fees += 10000;
}
console.log("----------------------------------------------------------------------------------");
let idrett;
idrett = "fotball";
idrett = 1;
idrett = true;
console.log(`Hello ${username}, you are ${age} years old, you are a ${course} student, your fees is ${fees}`);
("----------------------------------------------------------------------------------");
function render(document) {
    console.log(document);
}
("----------------------------------------------------------------------------------");
let stipentPenger = [
    10000, 223334, 334546, 42323, 43423, 62244, 71213, 85774, 2129,
];
let x = stipentPenger[0];
console.log(x);
let masterDegreed = stipentPenger.filter((stipentPenger) => stipentPenger > 50000);
console.log(masterDegreed);
let doubleStipentPenger = stipentPenger.map((stipentPenger) => stipentPenger * 2);
const studentInfo = `${username} is a ${age}-year-old ${course}. He earns €${fees}. He want to loan ${doubleStipentPenger[4]}`;
console.log(studentInfo);
for (let i = 0; i < stipentPenger.length; i++) {
    console.log(stipentPenger[i]);
}
("----------------------------------------------------------------------------------");
let student = {
    name: "mwamuziscodev",
    age: 24,
    course: "Full-Stack developer",
    fees: 38000,
};
function getStudent(student) {
    console.log(student);
}
getStudent({ name: "mwamuziscodeveloper" });
getStudent(student);
console.log(student);
("----------------------------------------------------------------------------------");
let membershipuser = [
    "1",
    "mwamuziscodev",
    24,
    "Full-Stack developer",
    38000,
];
console.log(typeof membershipuser);
const [name1, email] = ["<NAME>", "<EMAIL>"];
console.log(name1, email);
let person = ["mwamuziscodev", 24, true];
console.log(person);
("----------------------------------------------------------------------------------");
var Color;
(function (Color) {
    Color["Red"] = "red farger";
    Color["Green"] = "green farger";
    Color["Blue"] = "blue farger";
})(Color || (Color = {}));
let myColor = Color.Red;
console.log(myColor);
var Month;
(function (Month) {
    Month["January"] = "januar";
    Month["February"] = "februar";
    Month["March"] = "mars";
    Month["April"] = "april";
    Month["May"] = "mai";
    Month["June"] = "juni";
    Month["July"] = "juli";
    Month["August"] = "august";
    Month["September"] = "september";
    Month["October"] = "oktober";
    Month["November"] = "november";
    Month["December"] = "desember";
})(Month || (Month = {}));
let myMonth = Month.January;
console.log(myMonth);
("----------------------------------------------------------------------------------");
function calculateTax(income) {
    const taxPerc = 0.21;
    const taxAmount = income * taxPerc;
    return taxAmount;
}
calculateTax(5679);
function Taxcalculate(income, year, month) {
    const BASE_TAX = 50000;
    if (income < BASE_TAX && year < 2023 && month === myMonth[0]) {
        return income * 1.1;
    }
    return (income * BASE_TAX) / year;
}
const taxAmount = Taxcalculate(5679, 2021, "January");
console.log(`Calculated tax: ${taxAmount}`);
let person1 = {
    name: "mwamuziscodev",
    age: 24,
    course: "Full-Stack developer",
    fees: 38000,
};
person1["name"] = "mwamuzis";
person1.age = 25;
console.log(person1);
let employee = {
    id: 1,
    name: "mwamuziscodev",
    retire: function (date) {
        console.log(`${this.name} is retiring on ${date.toDateString()}`);
    },
};
employee.retire(new Date("2021-12-31"));
function add(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    return `${a} ${b}`;
}
add("Hello", "World");
add(1, 2);
add("Hello", 2);
add(1, "World");
console.log(add("Hello", "World"));
console.log(add(1, 2));
console.log(add("Hello", 2));
let q = 50;
q = 100;
console.log(q);
function greet(name) {
    if (name)
        console.log(`Hello ${name.toUpperCase()}`);
    else
        console.log("Hello there");
}
greet("mwamuziscodev");
greet(null);
greet(undefined);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let kunder = getCustomer(0);
console.log(`Kunder bursdag er på ${(_a = kunder === null || kunder === void 0 ? void 0 : kunder.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear()}`);
//# sourceMappingURL=index.js.map