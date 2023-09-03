"use strict";
const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (array) {
  let sum = 0;
  for (let num of array) {
    sum += num;
  }
  return sum;
};

const multiply = function (array) {
  let result = 1;
  for (let num of array) {
    result *= num;
  }
  return result;
};

const power = function (num, pow) {
  return num ** pow;
};

const factorial = function (num) {
  let result = 1;
  while (num > 0) {
    result *= num--;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
