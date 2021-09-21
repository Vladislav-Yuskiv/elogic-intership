var config ={
    deps: [
        'Magento_Theme/js/theme' ,
] ,
    paths: {
        slick: 'js/plugins/slick.min',
        select: 'js/plugins/select2.full',
        elogicSlider: 'js/slider',
        elogicFootercollapsible: 'js/footer-collapsible',
        elogicSelect: 'js/select',
    },

    shim: {
        slick: {
            deps: ['jquery'],
        },
        select: {
            deps: ['jquery'],
        },
    },

}
