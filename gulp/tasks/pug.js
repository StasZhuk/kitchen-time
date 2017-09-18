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
