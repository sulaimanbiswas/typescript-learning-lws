export class User {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    getAge() {
        return this.age;
    }
    countUser() {
        console.log("There are 5 users");
    }
}
