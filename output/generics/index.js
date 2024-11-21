"use strict";
const addId = (obj) => {
    const id = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { id });
};
const user = addId({
    name: "sulaiman",
    age: 25,
    country: "Bangladesh",
});
user.country;
