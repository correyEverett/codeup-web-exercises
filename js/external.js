'use strict';

console.log("Hello from external JavaScript");

// 1.   Use the alert function to show a message that says 'Welcome to my Website!'.

        alert('Welcome to my Website!');
//
// 2.   Use a prompt to ask for the user's favorite color. Use the user's response to alert a message that says that the color entered is your favorite color too.
//      For example, if the user enters "blue", your code should alert a message that says:
//      Great, blue is my favorite color too!"

        var favoriteColor = prompt('What is your favorite color?');
        console.log(alert("Great, " + favoriteColor + " is my favorite color too!"));
//
// 3.   Complete exercise 3 from the previous lesson, but write your code in the external.js file instead of in the console.
//
//      When the exercise asks you to use a number, instead use a prompt to ask the user for that number.
//      Use an alert to show the results of each problem.

//      Write some JavaScript code, that is, variables and operators, to describe the following scenarios.
//      Do not worry about the real operations to get the values, the goal of these exercises is to understand
//      how real world conditions can be represented with code.
//
//     1. You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it),
//     and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?

        var movieCostPerDay = Number(prompt('What is the daily price per movie rental?'));
        var littleMermaid = Number(prompt('How many days will you be renting The Little Mermaid?'));
        var brotherBear = Number(prompt('How many days will you be renting Brother Bear'));
        var hercules = Number(prompt('How many days will you be renting Hercules?'));
        var total = (littleMermaid + brotherBear + hercules) * movieCostPerDay;
        alert('Your movie rental cost is $' + total.toFixed(2));

//     2. Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different
//     rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this
//     week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

       var googleRate = Number(prompt('What\'s your hourly rate at Google?'));
       var amazonRate = Number(prompt('What\'s your hourly rate at Amazon?'));
       var facebookRate = Number(prompt('What\'s your hourly rate at Facebook?'));

       var googleHours = Number(prompt('How many hours did you work for Google this pay period?'));
       var amazonHours = Number(prompt('How many hours did you work for Amazon this pay period?'));
       var facebookHours = Number(prompt('How many hours did you work for Facebook this pay period?'));

       var googlePay = (googleRate * googleHours);
       var amazonPay = (amazonRate * amazonHours);
       var facebookPay = (facebookRate * facebookHours);

       alert('Expect to be paid $' + googlePay + ' from Google');
       alert('Expect to be paid $' + amazonPay + ' from Amazon');
       alert('Expect to be paid $' + facebookPay + ' from Facebook');

       alert('From each of the companies combined, you\'ve earned $' + (googlePay + amazonPay + facebookPay));

//     3. A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with
//     her current schedule.

       var classIsNotFull = confirm('The class is not full?');
       var noScheduleConflict = confirm('There are no scheduling conflicts');
       var studentEnrolled = classIsNotFull && noScheduleConflict;

       alert('Student will be enrolled: ' + studentEnrolled);


//     4. A product offer can be applied only if a person buys more than 2 items, and the offer has not expired.
//     Premium members do not need to buy a specific amount of products.

        var numberOfItems = alert('You have ' + Math.floor(Math.random() * 5) + ' items in your basket');
        var offerNotExpired = confirm('Is the offer valid?');
        var isPremiumMember = confirm('Are you a premium member?');

        var discountApplied = offerNotExpired && (isPremiumMember || numberOfItems > 2);
        alert("Product discount: " + discountApplied);









