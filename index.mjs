import { add, subtract, multiply, divide } from "./components/math.mjs";
import { usdToEur, eurToUsd } from "./components/currency.mjs";
import { reverse, capitalize } from "./components/strings.mjs";

import dotenv from "dotenv";
dotenv.config();

const addResult = add(10, 10);
console.log(addResult);