//? javascript switch case ------------------------------------------------------------------->

// let's go to learn javascript switch case:

// syntax of javascript switch

/**
 * switch (key) {
 *     case value:
 * 
 *          break;
 * 
 *     default:
 *         
 *          break;
 * }
*/

// let's declare a variables:
const monthNumber = 2;

switch (monthNumber) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10: 
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Month number is not match any month");
};
// output: "February";

// note: if you are not use break in the every case javascript will print all case;

const fruit = "Apple";

switch (fruit) {
    case "Apple":
        console.log("Apple");
        break;
    case "Banana":
        console.log("Banana");
        break;
    case "Mango":
        console.log("Mango");
        break;
    default:
        console.log("No fruit match");
};
// output: "fruit";