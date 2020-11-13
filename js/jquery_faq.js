


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








});