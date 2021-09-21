var config ={
    deps: [
        'Magento_Theme/js/theme' ,
] ,
    map: {
        "*": {
            slick: 'js/plugins/slick.min',
            select: 'js/plugins/select2.full',
            elogicSlider: 'js/slider',
            elogicFootercollapsible: 'js/footer-collapsible',
            elogicSelect: 'js/select'
        }
    },

    shim: {
        slick: {
            deps: ['jquery'],
        },
        select: {
            deps: ['jquery'],
        },
    },
    config: {
        mixins: {
            'Mirasvit_Giftr/js/item': {
                'js/overrideDefaultItem': true
            }
        }
    }
}
