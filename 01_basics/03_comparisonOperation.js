//? javascript comparison operation ------------------------------------------------------------------->

// let's see what is the comparison operation:

// let's play with 'number' data types:
let num = 18;
let strNum = "18";
let numWithChar = "18abc";
let charWithNum = "abc18";
let emptyValue;
let valueNull = null;

// let's convert those value of num: (when we convert any number to properly convert into number we always use this 'Number()' this is javascript build function);
let numToNumber = Number(num);
let strNumToNumber = Number(strNum);
let numWithCharToNumber = Number(numWithChar);
let charWithNumToNumber = Number(charWithNum);
let emptyValueToNumber = Number(emptyValue);
let valueNullToNumber = Number(valueNull);

// let's check the data type:
console.log(typeof numToNumber); // output: number;
console.log(typeof strNumToNumber); // output: number;
console.log(typeof numWithCharToNumber); // output: number;
console.log(typeof charWithNumToNumber); // output: number;
console.log(typeof emptyValueToNumber); // output: number;
console.log(typeof valueNullToNumber); // output: number;

// let's check the variable: (just print it in console without typeof keywords let's see what happened)
console.log(numWithCharToNumber); // output: NaN; (NaN: Not A Number)
console.log(charWithNumToNumber); // output: NaN; (NaN: Not A Number)
console.log(emptyValueToNumber); // output: NaN; (NaN: Not A Number)
console.log(valueNullToNumber); // output: 0; (it's convert null to number 0);
console.log(numToNumber); // output: 18 (number); (it's already number)
console.log(strNumToNumber); // output: 18 (number); (it's convert successfully from string to number)


/**
 * note what is the different from number conversion:
 * 1. "18" => 18;
 * 2. "abc18" => NaN;
 * 3. "18abc" => NaN;
 * 4. empty value => NaN;
 * 5. null = 0;
*/


// let's play with 'string' data types:
let number = 18;
let isLoggedIn = true;
let str = "Rakibul Rahman";
let empty;
let nullValue = null;

// let's convert those value of string: (when we convert any number to properly convert into string we always use this 'String()' this is javascript build function);
let numberToStr = String(number);
let isLoggedInToStr = String(isLoggedIn);
let strToString = String(str);
let emptyToStr = String(empty);
let nullValueToStr = String(nullValue);

// let's check the data type:
console.log(typeof numberToStr); // output: string;
console.log(typeof isLoggedInToStr); // output: string;
console.log(typeof strToString); // output: string;
console.log(typeof emptyToStr); // output: string;
console.log(typeof nullValueToStr); // output: string;

// let's check the variable: (just print it in console without typeof keywords let's see what happened)
console.log(numberToStr); // output: "18" (it's successfully number to string converted)
console.log(isLoggedInToStr); // output: "true" (it's successfully boolean to string converted)
console.log(strToString); // output: "Rakibul Rahman" (it's successfully string to string converted)
console.log(emptyToStr); // output: "undefined" (it's successfully undefined to string converted)
console.log(nullValueToStr); // output: "null" (it's successfully null to string converted)


/**
 * note what is the different from string conversion:
 * 1. 18 => "18";
 * 2. true => "true"; 
 * 3. "Rakibul Rahman" => "Rakibul Rahman";
 * 4. empty value => "undefined";
 * 5. null => "null";
*/


// let's play with 'boolean' data types:
let valueOfTrue = true;
let valueOfFalse = false;
let valueOfEmpty;
let valueOfStr = 'Rakibul Rahman';
let valueOfStrEmpty = ""
let valueOfNull = null;
let valueOfNumber0 = 0;
let valueOfNumber1 = 1;
let valueOfNumberStr = '1';

// let's convert those value of boolean: (when we convert any number to properly convert into boolean we always use this 'boolean()' this is javascript build function);
let valueOfTrueToBoolean = Boolean(valueOfTrue);
let valueOfFalseToBoolean = Boolean(valueOfFalse);
let valueOfEmptyToBoolean = Boolean(valueOfEmpty);
let valueOfStrToBoolean = Boolean(valueOfStr);
let valueOfStrEmptyToBoolean = Boolean(valueOfStrEmpty);
let valueOfNullToBoolean = Boolean(valueOfNull);
let valueOfNumber0ToBoolean = Boolean(valueOfNumber0);
let valueOfNumber1ToBoolean = Boolean(valueOfNumber1);
let valueOfNumberStrToBoolean = Boolean(valueOfNumberStr);

// let's check the data type:
console.log(typeof valueOfTrueToBoolean); // output: boolean;
console.log(typeof valueOfFalseToBoolean); // output: boolean;
console.log(typeof valueOfEmptyToBoolean); // output: boolean;
console.log(typeof valueOfStrToBoolean); // output: boolean;
console.log(typeof valueOfStrEmptyToBoolean); // output: boolean;
console.log(typeof valueOfNullToBoolean); // output: boolean;
console.log(typeof valueOfNumber0ToBoolean); // output: boolean;
console.log(typeof valueOfNumber1ToBoolean); // output: boolean;
console.log(typeof valueOfNumberStrToBoolean); // output: boolean;

// let's check the variable: (just print it in console without typeof keywords let's see what happened)
console.log(valueOfTrueToBoolean); // output: true; (it's successfully boolean to boolean converted)
console.log(valueOfFalseToBoolean); // output: false; (it's successfully boolean to boolean converted)
console.log(valueOfEmptyToBoolean); // output: false; (it's successfully undefined to boolean converted)
console.log(valueOfStrToBoolean); // output: true; (it's successfully string to boolean converted)
console.log(valueOfStrEmptyToBoolean); // output: false; (it's successfully empty string to boolean converted)
console.log(valueOfNullToBoolean); // output: false; (it's successfully null to boolean converted)
console.log(valueOfNumber0ToBoolean); // output: false; (it's successfully number 0 to boolean converted)
console.log(valueOfNumber1ToBoolean); // output: true; (it's successfully number 1 to boolean converted)
console.log(valueOfNumberStrToBoolean); // output: true; (it's successfully number string to boolean converted)


/**
 * note what is the different from string conversion:
 * 1. true => true;
 * 2. false => false;
 * 3. empty value => false;
 * 4. "Rakibul Rahman" => true;
 * 5. empty string => false;
 * 6. null => false;
 * 7. 0 => false;
 * 8. 1 => true;
 * 9. "1" => true;
*/