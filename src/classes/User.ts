import { IsUser } from "../interfaces/isUser.js";

export class User implements IsUser {
  constructor(
    public name: string,
    private age: number,
    readonly country: string
  ) {}

  getAge() {
    return this.age;
  }

  countUser() {
    console.log("There are 5 users");
  }
}
