define([
    'jquery',
    'jquery/ui',
    'domReady!',

], function ($) {
    'use strict';

    $(window).scroll(function() {

        if($(this).scrollTop() > $('.header.content').outerHeight() && $(this).width() >= 768 ){
            $('.header.content').addClass('fixed') ;
        }

        if($(this).scrollTop() === 0){
            $('.header.content').removeClass('fixed') ;
        }


        if ($(this).scrollTop()) {
            $('.back-top').fadeIn();
        } else {
            $('.back-top').fadeOut();
        }
    });

    $(".back-top").click(function() {
        $("html, body").animate({scrollTop: 0}, 1000);
    });

});
