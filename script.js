document.addEventListener('DOMContentLoaded', function () {

    var yes_button = document.querySelector('#yes');
    yes_button.addEventListener('click', function () {
        alert('Thanks for your feedback 😀!');
    });
    var no_button = document.querySelector('#no');
    no_button.addEventListener('click', function () {
        alert('Sorry, we will keep improving!');
    });



})
