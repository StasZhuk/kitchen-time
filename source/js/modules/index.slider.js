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
                vertical: true,
                prevArrow: ".index-slider__arrow-prev",
                nextArrow: ".index-slider__arrow-next"
            });

            // RECOMMENDED SlIDER
            $('.js-recommended-slider').slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                dots: true,
                appendDots: '.recommended-slider__dots',
                customPaging : function() {
                    return '<a class="recommended-slider__dot"></a>';
                },
                prevArrow: ".recommended-slider__arrow-prev",
                nextArrow: ".recommended-slider__arrow-next"
            });

            // DONT-MISS SlIDER
            $('.js-dont-miss-slider').slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                dots: true,
                appendDots: '.dont-miss-slider__dots',
                customPaging : function() {
                    return '<a class="dont-miss-slider__dot"></a>';
                },
                prevArrow: ".dont-miss-slider__arrow-prev",
                nextArrow: ".dont-miss-slider__arrow-next"
            });

            // DOTS SLIDER POSITIONER
            function indexSliderPosElem(elem, pos) {
                var windowWidth = $(window).width();
                var containerWidth = $('.container').width();
                var leftPosDots = (windowWidth - containerWidth) / 2;

                $('.index-slider ' + elem).css(pos, leftPosDots);
            }
            // Positioner dots slider in index page
            indexSliderPosElem('.slick-dots', 'left');

            // Positioner arrow slider in index page
            indexSliderPosElem('.index-slider__controls', 'right');
            
            // change size on browser window resize
            $(window).resize(function(){
                indexSliderPosElem('.slick-dots', 'left');
                indexSliderPosElem('.index-slider__controls', 'right');           
            });
        });

        //video-review
        
        $('.video-start').click(function() {
            let videoId = $(this).parent().parent().data('video-id'),
                videoPlayer = $('this').parent().parent().attr('id');

            player = new YT.Player(videoPlayer, {
                videoId: videoId
            });
        })
}