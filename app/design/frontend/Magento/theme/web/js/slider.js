
define([
    'jquery',
    'jquery/ui',
    'slick',
    'domReady!'
], function ($) {
    'use strict';

    $.widget('elogic.slider', {
        options: {
            selector:"",
            sliderOptions:{
                infinite: true,
                prevArrow: '<div class="button-prev button-arrow">Prev</div>',
                nextArrow: '<div class="button-next button-arrow ">Next</div>'
            }
        },

        _create: function () {

            $(this.options.selector).slick(this.options.sliderOptions);


        },
    });

    return $.elogic.slider;
});
