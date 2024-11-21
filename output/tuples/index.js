"use strict";
let a = [3, "hello", { p: 6 }];
a[0] = "Hello";
// a[1] = false; // Type 'boolean' is not assignable to type 'string | number | { p: number; }
let b = [1, "hello", { a: 1 }];
// push method is unnasseary
// use case: csv import
