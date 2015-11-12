$( document ).ready(function(){
   var fixedTable = $("#fixed-table");
   var navHomeY = fixedTable.offset().top;
   console.log(navHomeY);
   var isFixed = false;
   var $w = $(window);

   $w.scroll(function(){
       var scrollTop = $w.scrollTop();
       var shouldBeFixed = scrollTop > navHomeY;
       if (shouldBeFixed && !isFixed){
           fixedTable.css({
               position: "fixed",
               top: 0,
               left: fixedTable.offset().left,
               width: fixedTable.width(),
               'z-index':'1000'
           });
           isFixed = true;
       }
       else if (!shouldBeFixed && isFixed){
           fixedTable.css({
               position: "static"
           });
           isFixed = false;
       }
   });

});

// Easing
  $(window).load(function(){

    $('.main-nav li a').bind('click',function(event){
      var $anchor = $(this);

      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 102
      }, 1500,'easeInOutExpo');
      /*
      if you don't want to use the easing effects:
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
      }, 1000);
      */
      event.preventDefault();
    });

    $('.banner a').bind('click',function(event){
      var $anchor = $(this);

      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
      }, 1500,'easeInOutExpo');
      /*
      if you don't want to use the easing effects:
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
      }, 1000);
      */
      event.preventDefault();
    });

        $('.featured-box div a').bind('click',function(event){
      var $anchor = $(this);

      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
      }, 1500,'easeInOutExpo');
      /*
      if you don't want to use the easing effects:
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
      }, 1000);
      */
      event.preventDefault();
    });
  })
