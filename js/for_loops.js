//1. Create a file named for_loops.js inside the js directory and link it to your loops.html file.

//TODO 2. Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)

function showMultiplicationTable(number) {

    for(let i = 1; i <= 10; i++) {

        let result = i * number;

        console.log(`${number} * ${i} = ${result}`)
    }
}

showMultiplicationTable(5);

//TODO 3. Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example:

for(let i = 1, n = Math.floor(Math.random() * 180 +20);  i <= 10; i++) {

    if(n % 2 === 0) {
        console.log(n + ' is even.');
    } else {
        console.log(n + ' is odd.');
    }
}

//TODO 4. Create a for loop that uses console.log to create the output shown below.

// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999

// for(let i = 1; i <= 9; i++) {
//
//     console.log(i //not quite done but on the right path.);
// }

//TODO 5. Create a for loop that uses console.log to create the output shown below.

// 100
// 95
// 90
// 85
// 80
// 75
// 70
// 65
// 60
// 55
// 50
// 45
// 40
// 35
// 30
// 25
// 20
// 15
// 10
// 5

for(let i = 100; i >=5; i -= 5) {

    console.log(i);
}