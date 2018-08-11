$(document).ready(function() {
    
    function fnLogoBlack() {
        $('.logoWhite').addClass('hide');
        $('.logoLine').addClass('colBlack');
    }
    
    function fnTitleBlack() {
        $('.herotxt').addClass('txtColBlack');
    }
            
    function fnLogoWhite() {
        $('.logoBlack').addClass('hide');
        $('.logoLine').addClass('colWhite');
    }
    
    function fnTitleWhite() {
        $('.herotxt').addClass('txtColWhite');
    }


    setTimeout(function () {
        
//        -- Mobile Backgrounds --
        if ($(window).width() <= 320) {
            
           if (x == 1){
            $('.headerBg').addClass("mobileHero1");
            fnLogoWhite();
            fnTitleWhite();
        }
        
        if (x == 2){
            $('.headerBg').addClass("mobileHero2");
            fnLogoWhite();
            fnTitleWhite();
        }
        
        if (x == 3){
            $('.headerBg').addClass("mobileHero3");
            fnLogoWhite();
            fnTitleWhite();
        } 
            
        }
        
        var x = Math.floor(Math.random() * 11) + 1;
        
//      Desktop Backgrounds
        
        if ($(window).width() > 320) {
        
        if (x == 1){
            $('.headerBg').addClass("desktopHero1");
            fnLogoWhite();
            fnTitleWhite();
        }
        
        if (x == 2){
            $('.headerBg').addClass("desktopHero2");
            fnLogoWhite();
            fnTitleWhite();
        }
        
        if (x == 3){
            $('.headerBg').addClass("desktopHero3");
            fnLogoWhite();
            fnTitleWhite();
        }
        
        if (x == 4){
            $('.headerBg').addClass("desktopHero4");
            fnLogoWhite();
            fnTitleWhite();
        }
        
        if (x == 5){
            $('.headerBg').addClass("desktopHero5");
            fnLogoBlack();
            fnTitleWhite();
        }
        
        if (x == 6){
            $('.headerBg').addClass("desktopHero6");
            fnLogoBlack();
            fnTitleWhite();
        }
        
        if (x == 7){
            $('.headerBg').addClass("desktopHero7");
            fnLogoWhite();
            fnTitleWhite();
        }
        
        if (x == 8){
            $('.headerBg').addClass("desktopHero8");
            fnLogoWhite();
            fnTitleWhite();
        }
        
        if (x == 9){
            $('.headerBg').addClass("desktopHero9");
            fnLogoWhite();
            fnTitleWhite();
        }
        
        if (x == 10){
            $('.headerBg').addClass("desktopHero10");
            fnLogoWhite();
            fnTitleWhite();
        }
        
        if (x == 11){
            $('.headerBg').addClass("desktopHero11");
            fnLogoWhite();
            fnTitleWhite();
        }
            
        }
        
    }, 0);
    
});