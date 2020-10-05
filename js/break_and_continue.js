// TODO  1. Create a file named break_and_continue.js in the js directory.

// TODO  2. Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.



function  isEven(input){
    return input % 2 === 0;
}



//
// for (var i = 1, usersNumber = (prompt('Please enter an ODD number between 1-50.')); i < 51, usersNumber === isEven(); i++){
//
//     if (isEven(i)) {
//         continue;
//     }
//     if(usersNumber == i){
//         console.log('Yikes! Skipping number:' + i);
//     } else if(i > 49){
//         break;
//     }
//     console.log('Here is an ODD number:' + i);
// }

do{

    var usersNumber = Number( (prompt('Please enter an ODD number between 1-50.')));

    if(usersNumber < 1 || usersNumber > 50 || isEven(usersNumber)){
        alert('Number is invalid. Please try again!')
    } else if(isNaN(usersNumber)){
        alert(usersNumber + ' is not a number. Try again please.')
    } else {
        alert('That\'s a good number, we\'ll continue')
        console.log('Here is an ODD number:' + usersNumber);
        break;
    }


}while(usersNumber < 51);



// TODO  3.  Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.

// for (var i = 1, usersNumber = (prompt('Please enter an ODD number between 1-50.')); i < 51; i++){
//     if (isEven(i)) {
//         continue;
//     }
//     if(usersNumber == i){
//         console.log('');
//         continue;
//     }
//     console.log('Here is an ODD number:' + i);
// }