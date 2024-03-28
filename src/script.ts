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
};

person.hobbies.push("coding");

console.log(person);
