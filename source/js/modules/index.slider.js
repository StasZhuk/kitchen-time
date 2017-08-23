module.exports = function() {
        const slickSlider = require('slick-carousel');
        const $ = require('jquery');
        
        $(document).ready(function(){

            // INDEX SlIDER
            $('.js-index-slider').slick({
                dots: true,
                customPaging : function() {
                    return '<a class="index-slider__dots"></a>';
                },
                prevArrow: ".index-slider__arrow-prev",
                nextArrow: ".index-slider__arrow-next"
            });

            // DOTS SLIDER POSITIONER
            function indexSliderPosElem(elem, pos) {
                var windowWidth = $(window).width();
                var containerWidth = $('.container').width();
                var leftPosDots = (windowWidth - containerWidth) / 2;

                $('.index-slider ' + elem).css(pos, leftPosDots);
            }

            indexSliderPosElem('.slick-dots', 'left');
            indexSliderPosElem('.index-slider__controls', 'right');
            
            $(window).resize(function(){
                indexSliderPosElem('.slick-dots', 'left');
                indexSliderPosElem('.index-slider__controls', 'right');           
            });
        });
}