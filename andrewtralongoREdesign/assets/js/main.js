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
        
//        -- Mobile Backgrounds --
        if ($(window).width() <= 320) {
            
           if (x == 1){
            $('.headerBg').addClass("mobileHero1");
            $('#my_div').fnLogoBlack();
        }
        
        if (x == 2){
            $('.headerBg').addClass("mobileHero2");
            $('#my_div').fnLogoWhite;
        }
        
        if (x == 3){
            $('.headerBg').addClass("mobileHero3");
            $('#my_div').fnLogoWhite;
        } 
            
        }
        
        var x = Math.floor(Math.random() * 11) + 1;
        
//      Desktop Backgrounds
        
        if ($(window).width() > 320) {
        
        if (x == 1){
            $('.headerBg').addClass("desktopHero1");
            $('#my_div').fnLogoBlack();
        }
        
        if (x == 2){
            $('.headerBg').addClass("desktopHero2");
            $('#my_div').fnLogoWhite;
        }
        
        if (x == 3){
            $('.headerBg').addClass("desktopHero3");
            $('#my_div').fnLogoWhite;
        }
        
        if (x == 4){
            $('.headerBg').addClass("desktopHero4");
            $('#my_div').fnLogoWhite;
        }
        
        if (x == 5){
            $('.headerBg').addClass("desktopHero5");
            $('#my_div').fnLogoWhite;
        }
        
        if (x == 6){
            $('.headerBg').addClass("desktopHero6");
            $('#my_div').fnLogoWhite;
        }
        
        if (x == 7){
            $('.headerBg').addClass("desktopHero7");
            $('#my_div').fnLogoWhite;
        }
        
        if (x == 8){
            $('.headerBg').addClass("desktopHero8");
            $('#my_div').fnLogoWhite;
        }
        
        if (x == 9){
            $('.headerBg').addClass("desktopHero9");
            $('#my_div').fnLogoWhite;
        }
        
        if (x == 10){
            $('.headerBg').addClass("desktopHero10");
            $('#my_div').fnLogoWhite;
        }
        
        if (x == 11){
            $('.headerBg').addClass("desktopHero11");
            $('#my_div').fnLogoWhite;
        }
            
        }
        
    }, 0);
    
  });
