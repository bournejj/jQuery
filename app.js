// $('img').on('click', function () {
//     // $(this).fadeOut();
//     $(this).animate({
//         // opacity: 0,
//         width: '50px'

//     }, 3000, function () {
//         $(this).remove();

//     })
// });
$(function () {
    console.log("Let's get ready to party with jQuery!");

    $('article img').addClass('image-center');

    $('p').eq(5).remove();

    $('h1').css('font-size', Math.floor(Math.random() * 100));

    $('ol').append('<li>I like donuts</li>');

    $("aside").empty().append('<p>Sorry for the list</p>')



});

$('img').on('click', function (e) {

    $(e.target).remove()

});