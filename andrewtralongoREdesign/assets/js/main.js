$(document).ready(function() {
    
    (function( $ ){
        $.fn.fnLogoWhite = function() {
        $('.logoBlack').addClass('hide');
        $('.logoLine').addClass('colWhite');
        $('.herotxt').addClass('txtColWhite');
      return this;
   }; 
})( jQuery );
    
    (function( $ ){
        $.fn.fnLogoBlack = function() {
        $('.logoWhite').addClass('hide');
        $('.logoLine').addClass('colBlack');
        $('.herotxt').addClass('txtColBlack');
      return this;
   }; 
})( jQuery );


    setTimeout(function () {
        
        var x = Math.floor(Math.random() * 2) + 1;
        
        if (x == 1){
            $('.headerBg').addClass("hero1");
            $('#my_div').fnLogoBlack();
        }
        
        if (x == 2){
            $('.headerBg').addClass("hero2");
            $('#my_div').fnLogoWhite;
        }
        
    }, 0);
    
  });
