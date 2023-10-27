import { add, subtract, multiply, divide } from "./components/math.mjs";
import { usdToEur, eurToUsd } from "./components/currency.mjs";
import { reverse, capitalize } from "./components/strings.mjs";

import dotenv from "dotenv";
dotenv.config();

/* Math functions */
const addResult = add(8, 9);
console.log(addResult);

const subtractResult = subtract(10, 5);
console.log(subtractResult);

const multiplyResult = multiply(5, 5);
console.log(multiplyResult);

try {
const divideResult = divide(20, 2);
console.log("result", divideResult);
} catch (error) {
    console.error("error");
}


/* Currency functions */
const usdAmount = 100;
const eurAmount = usdToEur(usdAmount);
console.log(`${usdAmount} USD is ${eurAmount} EUR`);

const newUsdAmount = eurToUsd(eurAmount);
console.log(`${eurAmount} EUR is ${newUsdAmount} USD`);


/* String functions */
const reverseResult = reverse("dlroW ,olleH");
console.log(reverseResult);

const capitalizeResult = capitalize("js is fun");
console.log(capitalizeResult);
