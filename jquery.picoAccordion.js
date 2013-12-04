/*!
 * picoAccordion
 * Author: Devon Campbell (@raddevon)
 * Licensed under the MIT license
 */

;(function ( $, window, document, undefined ) {

    var pluginName = "picoAccordion",
        defaults = {
            duration: "0.2s",
            // Determines whether accordion elements begin opened or closed
            open: false,
            // The maximum width at which the accordion will work. Set this
            // if you only want the accordion functionality on mobile.
            maxWidth: null
        };

    function Plugin( element, options ) {
        this.element = element;

        this.options = $.extend( {}, defaults, options) ;

        this._defaults = defaults;
        this._name = pluginName;

        this.init();
    }

    Plugin.prototype = {

        init: function() {
            $el = $(this.element);
            thisObject = this;

            $el.children('dt')
                // Binds the click on dt elements to toggle the adjacent element
                .on('click', function(e){
                    thisObject.widthTest(thisObject.accordionToggle, $(this).next(), thisObject.options);
                })
                // Sets the hand pointer on each of the dt elements
                .each(function() {
                    $(this).css('cursor', 'pointer')
                });
            thisObject.widthTest(thisObject.accordionSet, $('dl').find('dd'), thisObject.options);
        },

        // Checks if the window is less than options.maxWidth wide before running the passed function
        widthTest: function(func, $el, options) {
            if (options.maxWidth) {
                if ($(window).width() <= options.maxWidth) {
                    func($el, options);
                }
            } else {
                func($el, options);
            }
        },

        // Toggles the accordion element
        accordionToggle: function($el, options) {
            $el.animate({
                height: 'toggle'
            }, options.duration)
        },

        // Sets the default accordion element states based on the open option
        accordionSet: function($el, options) {
            if (options.open) {
                $el.show();
            } else {
                $el.hide();
            }
        }
    };

    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName,
                new Plugin( this, options ));
            }
        });
    };

})( jQuery, window, document );