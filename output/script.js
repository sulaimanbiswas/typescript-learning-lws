"use strict";
const country = "Bangladesh";
console.log(country);
const sum = (a, b) => {
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
fruits.push(() => { });
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
let countryName;
countryName = "Bangladesh";
let playerAge;
playerAge = 32;
let isPlaying;
isPlaying = true;
let fruitsName;
fruitsName = ["apple", "mango"];
let personInfo;
personInfo = {
    name: "Tamim",
    age: 32,
    isHungry: true,
};
// union types
let unionTypes;
unionTypes = "apple";
unionTypes = 34;
let multipleTypes;
multipleTypes = ["apple", 34, "mango"];
// dynamic types (any)
let dynamicTypes;
dynamicTypes = "apple";
dynamicTypes = 34;
dynamicTypes = true;
dynamicTypes = {};
dynamicTypes = [];
dynamicTypes = () => { };
let dynamicTypeArray;
dynamicTypeArray = ["apple"];
let dynamicTypeObject;
dynamicTypeObject = {
    age: 45,
    name: "25",
};
// function
let myFunc;
myFunc = () => {
    console.log("Hello");
};
myFunc();
const yourFunc = (a, b) => {
    console.log(`Hello ${a} & ${b}`);
};
yourFunc("a", "b");
// optional
const optionalFunc = (a, b) => {
    console.log(`Hello ${a} & ${b}`);
};
optionalFunc("hello");
// void and undifind
const numFunc = (a, b) => {
    return a + b;
};
numFunc(5, 3);
// Aliase Type
const userDetails = (id, user) => {
    console.log(`user id is ${id}, name is ${user.name} and age is ${user.age}`);
};
const sayHello = (user) => {
    console.log(`hello ${user.age > 50 ? "Sir" : "Mr"} ${user.name}`);
};
