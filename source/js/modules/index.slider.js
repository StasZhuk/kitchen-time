module.exports = function() {
        const slickSlider = require('slick-carousel');
        const $ = require('jquery');
        
        $(document).ready(function(){
            $('.js-index-slider').slick();
        });
}