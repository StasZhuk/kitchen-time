'use strict';

module.exports = function() {
  $.gulp.task('pug', function() {
    return $.gulp.src(['./source/template/**/*.pug', '!./source/template/**/_*.pug'])
      .pipe($.gp.pug({ 
        locals : {
           nav: JSON.parse($.fs.readFileSync('./data/navigation.json', 'utf-8')),
           indexSlider: JSON.parse($.fs.readFileSync('./data/index/slider.json', 'utf-8')),
           productPrev: JSON.parse($.fs.readFileSync('./data/modules/product-prev.json', 'utf-8')),
           content: JSON.parse($.fs.readFileSync('./data/content.json', 'utf-8')),
           popular: JSON.parse($.fs.readFileSync('./data/index/popular.json', 'utf-8')),
           promo: JSON.parse($.fs.readFileSync('./data/promo-news/promo.json', 'utf-8')),
           news: JSON.parse($.fs.readFileSync('./data/promo-news/news.json', 'utf-8')),
           dontMiss: JSON.parse($.fs.readFileSync('./data/modules/dont-miss.json', 'utf-8'))
          },
        pretty: true 
      }))
      .on('error', $.gp.notify.onError(function(error) {
        return {
          title: 'Pug',
          message:  error.message
        }
       }))
      .pipe($.gulp.dest($.config.root));
  });
};
