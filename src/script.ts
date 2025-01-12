import { User } from "./classes/User.js";
import { IsUser } from "./interfaces/isUser.js";

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

// union types

let unionTypes: string | number;

unionTypes = "apple";

unionTypes = 34;

let multipleTypes: (string | number)[];

multipleTypes = ["apple", 34, "mango"];

// dynamic types (any)

let dynamicTypes: any;

dynamicTypes = "apple";

dynamicTypes = 34;

dynamicTypes = true;

dynamicTypes = {};

dynamicTypes = [];

dynamicTypes = () => {};

let dynamicTypeArray: any[];

dynamicTypeArray = ["apple"];

let dynamicTypeObject: {
  age: any;
  name: any;
};

dynamicTypeObject = {
  age: 45,
  name: "25",
};

// function

let myFunc: Function;

myFunc = () => {
  console.log("Hello");
};

myFunc();

const yourFunc = (a: string, b: string) => {
  console.log(`Hello ${a} & ${b}`);
};

yourFunc("a", "b");

// optional

const optionalFunc = (a: string, b?: string) => {
  console.log(`Hello ${a} & ${b}`);
};

optionalFunc("hello");

// void and undifind

const numFunc = (a: number, b: number): number => {
  return a + b;
};

numFunc(5, 3);

// Aliase Type

type stringOrNumber = string | number;
type userType = {
  name: string;
  age: number;
};

const userDetails = (id: stringOrNumber, user: userType) => {
  console.log(`user id is ${id}, name is ${user.name} and age is ${user.age}`);
};

const sayHello = (user: userType) => {
  console.log(`hello ${user.age > 50 ? "Sir" : "Mr"} ${user.name}`);
};

// Function Signatures

let signaturesFuncVoid: (a: string, b: string) => void;

let add: (x: number, y: number) => number;

add = (a: number, b: number) => {
  return a + b;
};

console.log(add(5, 2));

// Class

class Player {
  public name: string;
  private age: number;
  readonly country: string;

  constructor(n: string, a: number, c: string) {
    this.name = n;
    this.age = a;
    this.country = c;
  }

  play() {
    console.log(`${this.name} form ${this.country}`);
  }
}

const mahmudullah = new Player("Mahmudullah", 40, "Bangladesh");
const musfiq = new Player("Musfiq", 50, "Banglasesh");

console.log(musfiq.name);
console.log(musfiq.country);

// musfiq.country = ""

const players: Player[] = [];

players.push(mahmudullah);
players.push(musfiq);

console.log(players);

// Module System
const user1 = new User("sulaiman", 25, "Bangladesh");
let user2: IsUser;

user2 = new User("Rina", 25, "Bangladesh");

console.log("user1", user1);
