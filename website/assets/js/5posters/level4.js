$(document).ready(function() {

        
//    -- PAGE LOAD DEMO --
    
    setTimeout(function () {
            $('.ball.1').addClass('rOne-trans');
        
        setTimeout(function () {
            $('.ball.1').removeClass('rOne-trans');
    }, 1500);
        
    }, 1500);
    
    
    
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
    
    /*-- ROW 1 --*/

$('.ball.1').click(function() {
  $(this).toggleClass('rOne-trans');
});
    
$('.ball.2').click(function() {
  $(this).toggleClass('rOne-trans');
});
    
$('.ball.3').click(function() {
  $(this).toggleClass('rOne-trans');
});
    
$('.ball.4').click(function() {
  $(this).toggleClass('rOne-trans');
});
    
$('.ball.5').click(function() {
  $(this).toggleClass('rOne-trans');
});
    
    /*-- ROW 2 --*/
    
$('.ball.6').click(function() {
  $(this).toggleClass('rTwo-trans');
});
    
$('.ball.7').click(function() {
  $(this).toggleClass('rTwo-trans');
});
    
$('.ball.8').click(function() {
  $(this).toggleClass('rTwo-trans');
});
    
$('.ball.9').click(function() {
  $(this).toggleClass('rTwo-trans');
});
    
$('.ball.10').click(function() {
  $(this).toggleClass('rTwo-trans');
});
    
    /*-- ROW 3 --*/
    
$('.ball.11').click(function() {
  $(this).toggleClass('rThree-trans');
});
  
$('.ball.12').click(function() {
  $(this).toggleClass('rThree-trans');
});
    
$('.ball.13').click(function() {
  $(this).toggleClass('rThree-trans');
});

$('.ball.14').click(function() {
  $(this).toggleClass('rThree-trans');
});

$('.ball.15').click(function() {
  $(this).toggleClass('rThree-trans');
});

    /*-- ROW 4 --*/
    
$('.ball.16').click(function() {
  $(this).toggleClass('rFour-trans');
});

$('.ball.17').click(function() {
  $(this).toggleClass('rFour-trans');
});

$('.ball.18').click(function() {
  $(this).toggleClass('rFour-trans');
});

$('.ball.19').click(function() {
  $(this).toggleClass('rFour-trans');
});

$('.ball.20').click(function() {
  $(this).toggleClass('rFour-trans');
});

    /*-- ROW 5 --*/
    
$('.ball.21').click(function() {
  $(this).toggleClass('rFive-trans');
});

$('.ball.22').click(function() {
  $(this).toggleClass('rFive-trans');
});
    
$('.ball.23').click(function() {
  $(this).toggleClass('rFive-trans');
});
    
$('.ball.24').click(function() {
  $(this).toggleClass('rFive-trans');
});
    
$('.ball.25').click(function() {
  $(this).toggleClass('rFive-trans');
});
  });
