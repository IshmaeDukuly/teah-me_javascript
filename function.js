
"use strict";

function greet() {
    let text = " 'Javascript' is one of the best programming languages";
    console.log(text);
}

greet();
greet();
greet();

function add(num1, num2) {
    console.log("The sum of two digits is = ",num1+num2);
}
add(10, 20);
add(100, 100);
add(50,50);

function mul(n1, n2) {
    let product = n1*n2;
    console.log("The product is = ",product);
}

mul(5, 5);
mul(4, 4);
mul(10, 2);

let days = "Saturday";

function GreetMe(Name) {
    if (days === "Monday" || days === "Tuesday") {
        console.log("good morning,", Name);
    }else if (days === "Saturday" || days === "Sunday") {
        console.log("shalom,", Name);
    }else {
        console.log("Not our workng days,", Name);
    }
}

GreetMe("James");
GreetMe("John");
GreetMe("Augustus");