//TODO  1. Create a file named break_and_continue.js in the js directory.

//TODO  2. Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.



// function  isEven(input){
//     return input % 2 === 0;
// }
//
//     var usersNumber = Number(prompt('Please enter an ODD number between 1-50.'));
//
//     for (var i = 1; i < 51; i++){
//         if (isEven(i)) {
//                 continue;
//         }
//         if(usersNumber === i){
//             console.log('Yikes! Skipping number:' + i);
//         } else {
//             console.log('Here is an ODD number:' + i);
//         }
//         if(i > 49){
//             break;
//         }
//         if(typeof usersNumber !== 'number'){
//             var usersNumber = Number(prompt('Please enter an ODD number between 1-50.'));
//         }
//     }



//TODO  3.  Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.

// for (var i = 1; i < 51; i++){
//     if (isEven(i)) {
//         continue;
//     }
//     if(usersNumber === i){
//         console.log('');
//         continue;
//     }
//     console.log('Here is an ODD number:' + i);
// }