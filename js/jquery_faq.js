


$(document).ready(function () {

let $hideButton = $('#hide-button');
let $invisible = $('.invisible');
let $heavenlyBody = $('dt');

$hideButton.on('click', () => {
   $invisible.toggleClass('invisible');
});

$heavenlyBody.on('mouseover', () => {
    $invisible.toggleClass('invisible');
});


// // MAKES THE LAST LIST ITEM IN EACH LIST HAVE A YELLOW BACKGROUND ON BUTTON CLICK
// $('.btn').on('click', () => {
//     $('ul').each(function (index, element) {
//         $(element).children().last().toggleClass('yellow-background');
//     });
// });
//
// //THE LIST TURNS BOLD WHEN THE HEADING IS CLICKED
// $('h3').on('click', (event) => {
//     $(event.currentTarget).next().toggleClass('bolded');
// });
//
// //WHEN ANY LIST ITEM IS CLICKED THE FIRST ITEM IN THAT PARTICULAR LIST TURNS BLUE
// $('li').on('click', (event) => {
//     $(event.currentTarget).parent().children().first().toggleClass('blue-font');
// });

// EXERCISE 1
$('span').on('click', (e) => {
    $(e.currentTarget).parent().hide();
});

// EXERCISE 2
$('h3').on('click', (e) => {
   $(e.currentTarget).next().slideToggle();
});

// EXERCISE 3
let $h2Fade = function () {
 $('h2').fadeIn();
}
setTimeout($h2Fade, 8000);




});