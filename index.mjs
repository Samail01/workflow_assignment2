import { add, subtract, multiply, divide } from "./components/math.mjs";
import { usdToEur, eurToUsd } from "./components/currency.mjs";
import { reverse, capitalize } from "./components/strings.mjs";

import dotenv from "dotenv";
dotenv.config();

const addResult = add(33, 33);
console.log(addResult);

const multiplyResult = multiply(10, 10);
console.log(multiplyResult);


const usdAmount = 500;
const eurAmount = usdToEur(usdAmount);
console.log(`${usdAmount} USD is ${eurAmount} EUR`);

