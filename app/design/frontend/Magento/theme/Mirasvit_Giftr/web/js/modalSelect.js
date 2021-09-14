define([
    'jquery',
    'jquery/ui',
    'domReady!'

], function($){
    'use strict';

    $.widget('elogic.modal', {
        options: {
            registries_container: '',
            registry_list: '',
            initialSelect: ''
        },

        _create: function(){
            const registries_container = this.options.registries_container;
            const registry_list = this.options.registry_list;
            const initialSelect = this.options.initialSelect;

            $(document).on('click', initialSelect, function(){
                $(registries_container).toggleClass('active');

                $(initialSelect).toggleClass('rotateArrow');
            });

            $(document).on('click', `${registries_container} > label${registry_list}`, function(e){
                $(initialSelect).html(e.currentTarget.lastElementChild.textContent);
                $(registries_container).removeClass('active');
            });

        }
    });

    return $.elogic.modal;
});
