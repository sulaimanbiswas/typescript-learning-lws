const country = "Bangladesh";
console.log(country);

const sum = (a: number, b: number) => {
  return a + b;
};
console.log(sum(2, 3));

let playerName = "Tamim";
let age = 32;

console.log(playerName);

age = 58;

console.log(playerName);

let isHungry;

isHungry = true;
isHungry = "Yes";

// Array

let fruits = ["apple", 34, "mango", true, null, undefined, {}];

fruits.push("orange");

fruits.push(23);

fruits.push(() => {});

console.log(fruits);

// Object

let person = {
  name: "Tamim",
  age: 32,
  isHungry: true,
  hobbies: ["cricket", "football"],
  address: {
    city: "Dhaka",
    country: "Bangladesh",
  },
  about: "I am a cricketer",
};

person.hobbies.push("coding");

console.log(person);

person.about = "I am a cricketer";

// Explicit types

let countryName: string;

countryName = "Bangladesh";

let playerAge: number;

playerAge = 32;

let isPlaying: boolean;

isPlaying = true;

let fruitsName: string[];

fruitsName = ["apple", "mango"];

let multipleTypes: (string | number)[];

multipleTypes = ["apple", 34, "mango"];

let personInfo: {
  name: string;
  age: number;
  isHungry: boolean;
};

personInfo = {
  name: "Tamim",
  age: 32,
  isHungry: true,
};
