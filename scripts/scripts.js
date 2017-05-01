$(function() {
   $('body').fadeIn(1500);
});

$("#top-btn").click(function() {
    $('html,body').animate({
        scrollTop: $("#top").offset().top},
        'slow');
});

$("#about-btn").click(function() {
    $('html,body').animate({
        scrollTop: $("#about").offset().top},
        'slow');
});

$("#work-btn").click(function() {
    $('html,body').animate({
        scrollTop: $("#work").offset().top},
        'slow');
});

$("#photography-btn").click(function() {
    $('html,body').animate({
        scrollTop: $("#photography").offset().top},
        'slow');
});

$("#music-btn").click(function() {
    $('html,body').animate({
        scrollTop: $("#music").offset().top},
        'slow');
});

$("#contact-btn").click(function() {
    $('html,body').animate({
        scrollTop: $("#contact").offset().top},
        'slow');
});

