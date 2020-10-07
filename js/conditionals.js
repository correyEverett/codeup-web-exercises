"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that is related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */


// function analyzeColor(color) {
//     if(color === 'blue') {
//         return 'Cool, BLUE is my favorite color!';
//     } else if(color === 'red') {
//         return 'RED is my next go-to color after blue.';
//     } else if(color === 'cyan') {
//         return 'my printer is the only person I know who uses CYAN.';
//     } else {
//         return 'You have entered an invalid color';
//     }
// }

// console.log(analyzeColor('blue'));


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */

// console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */



// function analyzeColor(message) {
//     var message;
//
//     switch (color) {
//         case 'blue':
//             message = 'Cool, BLUE is my favorite color!';
//             break;
//         case 'red':
//             message = 'RED is my next go-to color after blue.';
//             break;
//         case 'cyan':
//             message = 'my printer is the only person I know who uses CYAN.';
//             break;
//         default:
//             message = 'You have entered an invalid color';
//             break;
//     }
//
//
// }



/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

// var inputColor = prompt('Choose one of the following colors: blue, red or cyan.');
//
// function analyzeColor(inputColor) {
//     if(inputColor === 'blue') {
//         alert('Cool, BLUE is my favorite color!');
//     } else if(inputColor === 'red') {
//         alert('RED is my next go-to color after blue.');
//     } else if(inputColor === 'cyan') {
//         alert('My printer is the only person I know who uses CYAN.');
//     } else {
//         alert('You have entered an invalid color');
//     }
// }
//
// alert(analyzeColor(inputColor));

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal(luckyNum, totalAmount) {
    var discountedPrice = 0;
    if (luckyNum === 0) {
        discountedPrice = totalAmount;
    } else if (luckyNum === 1) {
        discountedPrice = totalAmount - (totalAmount * .1);
    } else if (luckyNum === 2) {
        discountedPrice = totalAmount - (totalAmount * .25);
    } else if (luckyNum === 3) {
        discountedPrice = totalAmount - (totalAmount * .35);
    } else if (luckyNum === 4) {
        discountedPrice = totalAmount - (totalAmount * .50);
    } else if (luckyNum === 5) {
        discountedPrice = totalAmount - (totalAmount * 0);
    } else {

    }
}




/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);
//
// var userBill = parseFloat(prompt('How much was your bill?'));
//
// var totalAfterDiscount = calculateTotal(luckyNumber, userBill);
// alert('Hey ther user. Your lucky number was ' + luckyNumber);
// alert('Befor the discount you price was ' + userBill);
// alert('Your price once the discount is applied will be ' + totalAfterDiscount);

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

function isEven(submittedNumber) {
    if(submittedNumber % 2 === 0) {
        return 'Congratulations,you have selected an EVEN number!'
    } else {
        return 'Congratulations, you have selected an ODD number!'
    }
}

function isPositive(submittedNumber) {
    if(submittedNumber > 0) {
        return 'Congratulations, you have selected a POSITIVE number!'
    } else {
        return 'Congratulations, you have selected a NEGATIVE number!'
    }
}

function isANumber(submittedNumber) {
    if(submittedNumber !== typeof 'number') {
        return 'What you have entered is not actually a number!';
    }
}

function add100(submittedNumber) {
    submittedNumber + 100;
}


var wouldLikeNumber = confirm('Would you like to enter a number?');

if(wouldLikeNumber === false) {
    alert('Maybe next time!');



} else {
    var submittedNumber = Number(prompt('Please enter the number you would like.'));
    if (submittedNumber === 'NaN') {
        alert('What you\'ve entered is not a number.');
    } else {

        if(submittedNumber % 2 === 0) {
            alert('Congratulation, you have selected an EVEN number!');
        } else {
            alert('Congratulations, you have selected an ODD number!');
        }
        if(submittedNumber === true) {
            alert(submittedNumber + 100);
        }
        if(submittedNumber > 0) {
            alert('Congratulations, you have selected a POSITIVE number!');
        } else if(submittedNumber < 0) {
            alert('Congratulations, you have selected a NEGATIVE number!');
        } else {
            alert('For some strange reason you have selected 0');
        }
    }

}
