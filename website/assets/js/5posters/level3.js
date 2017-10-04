$(document).ready(function() {

//$.getScript('nav.js', function(){});
    
    //    -- NAVIGATION --
    
    $('.navp1-circle1').hover(function() {
        $('.navp1-circle1').toggleClass('navp1-circle1Hov');
        $('.navp1-circle2').toggleClass('navp1-circle2Hov');
        $('.navp1-circle3').toggleClass('navp1-circle3Hov');
        $('.navp1-circle4').toggleClass('navp1-circle4Hov');
});
    
    $('.navp2-container').hover(function(){
        $('.navp2-circleL').toggleClass('navp2-circleLHov');
        $('.navp2-circleR').toggleClass('navp2-circleRHov');
    });
    
    $('.navp5-container').hover(function(){
        $('.navp5-L').toggleClass('navp5-boxHov');
        $('.navp5-L').toggleClass('navp5-Ltrans');
        $('.navp5-R').toggleClass('navp5-boxHov');
        $('.navp5-R').toggleClass('navp5-Rtrans');
    });
    
//    -- POSTER --
    
    setTimeout(function () {
      $('.mani-title').addClass('mani-title-transout');
        
        
        setTimeout(function () {
            $('.mani-title').text("Untitled");
      $('.mani-title').removeClass('mani-title-transout');
    }, 3000);
        
    }, 1000);
    
    setTimeout(function () {
      $('.mani-column').addClass('mani-column-transin');
    }, 4000);
    
    function pulse(){
    
    setTimeout(function() {
        $('.box.bg').addClass('boxbg');
        
        setTimeout(function () {
          $('.box.bg').removeClass('boxbg');
          $('.box.one').addClass('boxbg');

        setTimeout(function () {
          $('.box.one').removeClass('boxbg');
          $('.box.two').addClass('boxbg');

        setTimeout(function () {
          $('.box.two').removeClass('boxbg');
          $('.box.three').addClass('boxbg');  

        setTimeout(function () {
          $('.box.three').removeClass('boxbg');
          $('.box.four').addClass('boxbg');    

        setTimeout(function () {
          $('.box.four').removeClass('boxbg');
          $('.box.five').addClass('boxbg'); 

        setTimeout(function () {
          $('.box.five').removeClass('boxbg');
          $('.box.six').addClass('boxbg');   

        setTimeout(function () {
          $('.box.six').removeClass('boxbg');
          $('.box.seven').addClass('boxbg');

        setTimeout(function () {
          $('.box.seven').removeClass('boxbg');
          $('.box.eight').addClass('boxbg');
        setTimeout(function () {
          $('.box.eight').removeClass('boxbg');
          $('.box.nine').addClass('boxbg');
        setTimeout(function () {
          $('.box.nine').removeClass('boxbg');
    }, 250);
            
    }, 250);
            
    }, 250);
                                
    }, 250);
                            
    }, 250);
                        
    }, 250);
                    
    }, 250);
                
    }, 250);
            
    }, 250);
        
    }, 250);
    
    }, 250);
    }
    
    function pulseInit() {
        var myFunction = function() {
            pulse();
            var pulseLength = 2250;
            setTimeout(myFunction, pulseLength);
        }
        myFunction();
    }

    $(function() {
        pulseInit();
    });
  });

