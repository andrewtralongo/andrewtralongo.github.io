$(document).ready(function() {

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
    
    $('.navp3-container').hover(function(){
        $('.navp3-box2').toggleClass('navp3-boxHov');
        $('.navp3-box3').toggleClass('navp3-boxHov');
        $('.navp3-box4').toggleClass('navp3-boxHov');
    });
    
    $('.navp5-container').hover(function(){
        $('.navp5-L').toggleClass('navp5-boxHov');
        $('.navp5-L').toggleClass('navp5-Ltrans');
        $('.navp5-R').toggleClass('navp5-boxHov');
        $('.navp5-R').toggleClass('navp5-Rtrans');
    });
    
//    -- POSTER --
    
    setTimeout(function () {
      $('.box.one').addClass('boxborder');
        
        setTimeout(function () {
      $('.box.one').removeClass('boxborder');
      $('.box.two').addClass('boxborder');
            
            setTimeout(function () {
      $('.box.two').removeClass('boxborder');
      $('.box.three').addClass('boxborder');  
                
                setTimeout(function () {
      $('.box.three').removeClass('boxborder');
      $('.box.four').addClass('boxborder');    
                    
                    setTimeout(function () {
      $('.box.four').removeClass('boxborder');
      $('.box.five').addClass('boxborder'); 
                        
                        setTimeout(function () {
      $('.box.five').removeClass('boxborder');
      $('.box.six').addClass('boxborder');   
                            
                            setTimeout(function () {
      $('.box.six').removeClass('boxborder');
      $('.box.seven').addClass('boxborder');
                                
                                setTimeout(function () {
      $('.box.seven').removeClass('boxborder');
    }, 2000);
                                
    }, 2000);
                            
    }, 2000);
                        
    }, 2000);
                    
    }, 2000);
                
    }, 2000);
            
    }, 2000);
        
    }, 2000);

    
    setTimeout(function () {
      $('.header-title').addClass('header-title-transout');
        
        
        setTimeout(function () {
            $('.header-title').text("kesselskramer");
      $('.header-title').removeClass('header-title-transout');
    }, 3000);
        
    }, 1000);
    
    setTimeout(function () {
      $('.header-column').addClass('header-column-transin');
    }, 4000);


  });
