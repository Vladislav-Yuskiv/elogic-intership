
// removed unnecessary dependencies and variables
// added login call variable + created mixin (13,14)
// removed not used functions throughout whole documents
// created showAddToGift, redirectUser functions (61, 65)
define([
    'jquery',
    'Magento_Customer/js/customer-data',
    'mage/url',
    'Magento_Ui/js/modal/modal'
], function($, customerData, url, modal) {
    'use strict';

    const loginCall = url.build('customer/account/login'), // ajax call for login url
        mixin = {

            initialize: function () {
                this._super();
                this.initRegistries();
            },

            initRegistries: function() {
                let customerRegistries = customerData.get('gift-registry')();

                this.isLoggedIn(customerRegistries.is_logged_in || false);
                this.registries(customerRegistries.registries || []);
                this.selected(customerRegistries.selected || []);
                this.hasRegistries(this.registries().length > 0);
            },

            getData: function() {
                let data = $('#product_addtocart_form').serializeArray();
                if (_.size(this.selected()) > 0) {
                    data.push({name: 'registries', value: _.map(this.selected(), function(value) { return value; })});
                }

                return data;
            },

            addProduct: function() {
                if (!$('#product_addtocart_form').valid()) {
                    return false;
                }

                $.ajax({
                    url: this.url,
                    method: 'POST',
                    data: this.getData(),
                    dataType: 'json',
                    showLoader: true,
                    success: function (response) {
                        $('.giftr-list').modal('closeModal');
                        if (response.status === this.login) {
                            setLocation(response.message);
                        }

                    }

                });


            },


            redirectUser: function () {
                    window.location.href = loginCall;
            },

            showAddToGift: function (){
                const buttonRedirect  = $('.togiftr.redirect-button') ;
                const buttonAddToGift  = $('.togiftr.add-button') ;
                if (this.isLoggedIn()) {
                    buttonRedirect.css({display : 'none'}) ;
                }
                else if (this.registries().length === 1){
                    this.addProduct();
                }
                else{
                    buttonAddToGift.css({display : 'none'});
                }
            },
        };
    return function (target) {
        return target.extend(mixin);
    };

});
