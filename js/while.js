//TODO  1. Create a file named while.js in the js directory.

//TODO  2. Create a while loop that uses console.log() to create the output shown below.

// var i = 2;
//
// while(i <= 65536){
//     console.log(i);
//     i *= 2 ;
// }

/****** DO WHILE LOOP ******/


//TODO
// An ice cream seller can't go home until she sells all of her cones. First write enough code that generates a random number between 50 and 100 representing the amount of cones to sell before you start your loop. Inside of the loop your code should generate another random number between 1 and 5, simulating the amount of cones being bought by her clients. Use a do-while loop to log to the console the amount of cones sold to each person. This is a way get the random numbers for this exercise.

var allCones = Math.floor(Math.random() * 50) + 50;
console.log('You have ' + allCones + ' cone(s) left to sell before you can go home for the day.');

do{

    var individualPurchases = Math.floor(Math.random() * 5) + 1;
    console.log('You just sold ' + individualPurchases + ' Cone(s)!');
    allCones -= individualPurchases;
    console.log('You have ' + allCones + ' left' );


    if(allCones === 0){
        console.log('Yay! I sold them all!');
    } else if(individualPurchases > allCones) {
        console.log('I can\'t sell you ' + individualPurchases + ' cones, I only have ' + allCones + ' left!');
        continue;
    }

}while(allCones > 0);


// function caseTest(input){
//     return input === input.toUpperCase() || input === input.toLowerCase();
// }
//
// console.log(caseTest('rock'));