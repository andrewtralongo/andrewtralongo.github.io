$(document).ready(function() {

    setTimeout(function () {
        
        var x = Math.floor(Math.random() * 2) + 1;
        
        if (x == 1){
            $('.headerBg').addClass("hero1");
            $('.logoBlack').addClass('hide');
            $('.logoLine').addClass('colWhite');
            $('.herotxt').addClass('txtColWhite');
        }
        
        if (x == 2){
            $('.headerBg').addClass("hero2");
            $('.logoWhite').addClass('hide');
            $('.logoLine').addClass('colBlack');
            $('.herotxt').addClass('txtColBlack');
        }
        
    }, 0);
    
  });
