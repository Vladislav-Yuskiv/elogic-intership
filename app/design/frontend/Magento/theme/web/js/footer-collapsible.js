define([
    'jquery',
    'matchMedia',
    'collapsible',
    'jquery/ui',
    'domReady!'

], function ($ , mediaCheck) {
    'use strict';

    $.widget('elogic.footercollapsible', {
        options: {
            element: '',
            collapsibleOptions: {
                active: [0],
                collapsible: true,
                openedState: "active",
                multipleCollapsible: true,
                animate: {
                    easing: "easeOutCubic",
                    duration: "300",
                },
            },
        },


        _create: function () {

            $(this.options.element).collapsible(this.options.collapsibleOptions);

            mediaCheck({
                media: '(min-width: 767px)',
                entry: function () {
                    $(this.options.element).collapsible( "destroy" );
                }.bind(this),
                exit: function () {
                    $(this.options.element).collapsible(this.options.collapsibleOptions);
                }.bind(this)
            })
        },
    }) ;
    return $.elogic.footercollapsible;
});
