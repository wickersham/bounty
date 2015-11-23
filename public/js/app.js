$(document).ready(function(){
   var fixedTable = $("#fixed-table");
   var contentArea = $("#content-section-b");
   var navHomeY = fixedTable.offset().top;
   var isFixed = false;
   var $w = $(window);



   $w.scroll(function(){
       var scrollTop = $w.scrollTop();
       var shouldBeFixed = scrollTop >= navHomeY;
       if (shouldBeFixed && !isFixed){
           fixedTable.css({
               position: "fixed",
               top: 0,
               left: fixedTable.offset().left,
               width: fixedTable.width(),
           });
            $(".content-section-a").css({
              "margin-top": $(".banner").outerHeight()
            });

          //  contentArea.css({
          //    margin-top: '55px'
          //  });
           isFixed = true;
       }
       else if (!shouldBeFixed && isFixed){
           fixedTable.css({
               position: "static"
           });
           isFixed = false;
           $(".content-section-a").css({
             "margin-top": "0px"
           });
       }
   });

});

// Smooth Scroll jQuery -- Please don't fuck with this.
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
