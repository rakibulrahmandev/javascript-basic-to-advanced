//? Javascript dates ------------------------------------------------------------------->

// let's go to learn javascript dates methods: Creating Dates, Get Date Values, Set Date Values, Formatting Dates, UTC Methods

/**
 * let's see creating dates:
 * 01. new Date(): Current date and time
 * 02. new Date("2025-06-26"): From date string
 * 03. new Date(2025, 5, 26): Year, month (0-based), day
 * 04. new Date(milliseconds): From timestamp
 * 05. Date.now(): Current timestamp in milliseconds
*/

// new Date():
console.log(new Date()); // output: 2025-06-27T05:38:06.657Z

// new Date("yy-mm-dd"):
console.log(new Date("2025-06-27")); // output: 2025-06-27T00:00:00.000Z
console.log(new Date(2025, 6, 27)); // output: 2025-07-26T18:00:00.000Z
console.log(new Date('2025/6/27')); // output: 2025-06-26T18:00:00.000Z
console.log(new Date(6/27/2025)); // output: 1970-01-01T00:00:00.000Z

// new Date(2025, 5, 26):
console.log(new Date(2025, 5, 28)); // output: 2025-06-27T18:00:00.000Z

// new Date(milliseconds):
console.log(Date.now()); // output: 1751003559223 (timestamp in milliseconds);
console.log(new Date(1751003559223)); // output: 2025-06-27T05:52:39.223Z
console.log(new Date("1751003559223")); // output: Invalid Date

// Date.now():
console.log(Date.now()); // output: 1751003734277 (timestamp)

// note: Date.now() create timestamp based on 1970-01-01;

/**
 * let's see get date values:
 * 01. getFullYear(): Year
 * 02. getMonth(): 	Month (0-11)
 * 03. getDate(): Day of the month (1–31)
 * 04. getDay(): Day of week (0–6, Sun–Sat)
 * 05. getHours(): Hour (0–23)
 * 06. getMinutes(): Minutes (0–59)
 * 07. getSeconds(): Seconds (0–59)
 * 08. getMilliseconds(): Milliseconds (0–999)
 * 09. getTime(): Timestamp in milliseconds
*/

// let's create a date variable:
const newDates = new Date();

// getFullYear():
console.log(newDates.getFullYear()); // output: 2025;

// getMonth():
console.log(newDates.getMonth()); // output: 5 

// note: javascript month count from 0;

// getDate():
console.log(newDates.getDate()); // output: 27

// getDay():
console.log(newDates.getDay()); // output: 5 (Friday);

// note: javascript day count from 0 to 6;

// getHours():
console.log(newDates.getHours()); // output: 12

// getMinutes():
console.log(newDates.getMinutes()); // output: 11

// getSeconds():
console.log(newDates.getSeconds()); // output: 9

// getMilliseconds():
console.log(newDates.getMilliseconds()); // output: 986

// getTime():
console.log(newDates.getTime()); // output: 1751004783008

// note: getTime() represent the timestamp;

/**
 * let's see set date value:
 * 01. setFullYear(year): Sets the year
 * 02. setMonth(month): Sets the month (0-11)
 * 03. setDate(day): Sets the day of the month
 * 04. setHours(hour): Sets the hour (0–23)
 * 05. setMinutes(min): Sets the minutes
 * 06. setSeconds(sec): Sets the seconds
 * 07. setMilliseconds(ms): Sets the ms
*/

// let's declare a date variable:
const myDate = new Date();

// setFullYear(year):
myDate.setFullYear(2025, 5, 27);
console.log(myDate); // output: 2025-06-27T12:14:12.172Z
console.log(myDate.toString()); // output: Fri Jun 27 2025 18:14:38 GMT+0600 (Bangladesh Standard Time)

// setMonth(month):
myDate.setMonth(8);
console.log(myDate); // output: 2025-09-27T12:30:27.372Z
console.log(myDate.toString()); // output: Sat Sep 27 2025 18:30:27 GMT+0600 (Bangladesh Standard Time)

// setDate(day):
myDate.setDate(25);
console.log(myDate); // output: 2025-09-25T12:32:36.952Z
console.log(myDate.toString()); // output: Thu Sep 25 2025 18:33:01 GMT+0600 (Bangladesh Standard Time)

// setHours(hour):
myDate.setHours(10);
console.log(myDate); // output: 2025-09-25T04:35:32.693Z
console.log(myDate.toString()); // output: Thu Sep 25 2025 10:35:55 GMT+0600 (Bangladesh Standard Time)

// setMinutes(min):
myDate.setMinutes(35);
console.log(myDate); // output: 2025-09-25T04:35:36.297Z
console.log(myDate.toString()); // output: Thu Sep 25 2025 10:35:53 GMT+0600 (Bangladesh Standard Time)

// setSeconds(sec):
myDate.setSeconds(50);
console.log(myDate); // output: 2025-09-25T04:35:50.289Z
console.log(myDate.toString()); // output: Thu Sep 25 2025 10:35:50 GMT+0600 (Bangladesh Standard Time)

// setMilliseconds(ms):
myDate.setMilliseconds(650);
console.log(myDate); // output: 2025-09-25T04:35:50.650Z
console.log(myDate.toString()); // output: Thu Sep 25 2025 10:35:50 GMT+0600 (Bangladesh Standard Time)

/**
 * let's see formatting dates:
 * 01. toString(): full string
 * 02. toDateString(): only date
 * 03. toTimeString(): only time
 * 04. toISOString(): iso format
 * 05. toLocaleDateString(): local format date
 * 06. toLocaleTimeString(): local format time
*/

// let's declare a variable:
const date = new Date();

// toString():
console.log(date.toString()); // output: Fri Jun 27 2025 18:51:58 GMT+0600 (Bangladesh Standard Time)

// toDateString():
console.log(date.toDateString()); // output: Fri Jun 27 2025

// toTimeString():
console.log(date.toTimeString()); // output: 18:52:59 GMT+0600 (Bangladesh Standard Time)

// toISOString():
console.log(date.toISOString()); // output: 2025-06-27T12:53:50.709Z

// toLocaleDateString():
console.log(date.toLocaleDateString()); // output: 6/27/2025

// toLocaleTimeString():
console.log(date.toLocaleTimeString()); // output: 6:54:49 PM

/**
 * let's see UTC methods:
 * 01. getUTCFullYear(): UTC year
 * 02. getUTCHours(): UTC hour
 * 03. getUTCMonth(): UTC month
*/

// let's declare a variable:
const dates = new Date();

// getUTCFullYear():
console.log(dates.getUTCFullYear()); // output: 2025 year

// getUTCHours():
console.log(dates.getUTCHours()); // output: 13 hours

// getUTCMonth():
console.log(dates.getUTCMonth()); // output: 5 month (because 0 to 12);