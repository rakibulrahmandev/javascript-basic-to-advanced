//? Javascript operation ------------------------------------------------------------------->

// let's talk about what is operation in programming: operation like (2 + 4), ("str" + "str") or others.

// let's see the string operation:

// string to string adding:
let str1 = "Rakibul Rahman";
let str2 = " Ensiya Rahman";

let str3 = str1 + str2;

// string to number adding:
let str = "One";
let num = 1;

// let's check the output:
console.log(str3); // output: "Rakibul Rahman Ensiya Rahman";
console.log(str + num); // output: "One1";


// let's see the number operation:
let num1 = 1;
let num2 = 2;

let num1AddNum2 = num1 + num2;

// let's check the output:
console.log(num1AddNum2); // output: 3;


// let's see the boolean operation:
let truth = true;
let falsy = false;

let truthAddFalsy = truth + falsy;

// let's check the output: 
console.log(truthAddFalsy); // output: 1; (because true means 1 and false means 0 so when we adding 1 + 0 = 1);


// let's see all operation:
let numberOneAddToNumberFive = 1 + 5; // addition operation;
let numberThreeSubtractToNumberSix = 3 - 6; // subtraction operation;
let numberFourMultipleToNumberFive = 4 * 5; // multiplication operation;
let numberTenDivideToNumberTwo = 10 / 2; // division operation;
let numberEightRemainderToNumberFour = 8 % 4; // remainder or modules operation;
let numberFiveExponentialToNumberTwo = 5**2; // exponential operation;

// let's check the output:
console.log(numberOneAddToNumberFive); // output: 6;
console.log(numberThreeSubtractToNumberSix); // output: -3;
console.log(numberFourMultipleToNumberFive); // output: 20;
console.log(numberTenDivideToNumberTwo); // output: 5;
console.log(numberEightRemainderToNumberFour); // output: 0;
console.log(numberFiveExponentialToNumberTwo); // output: 25;


// let's see the increment operation:
let numIncrement = 10;
numIncrement++; // this is postfix increment;
++numIncrement; // this is suffix increment;

// let's check the output:
console.log(numIncrement); // output: 11;


// let's see the decrement operation:
let numDecrement = 5;
numDecrement--; // this is postfix decrement;
--numDecrement; // this is suffix decrement;

// let's check the output:
console.log(numDecrement); // output: 3;