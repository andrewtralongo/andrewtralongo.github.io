$(document).ready(function() {

        
//    -- PAGE LOAD DEMO --
    
    setTimeout(function () {
            $('.ball-one').addClass('rOne-trans');
        
        setTimeout(function () {
            $('.ball-one').removeClass('rOne-trans');
    }, 1500);
        
    }, 1500);
    
    
    
//    -- NAVIGATION --
    
    $('.navp1-circle1').hover(function() {
        $('.navp1-circle1').toggleClass('navp1-circle1Hov', 'navp1-circle2Hov', 'navp1-circle3Hov', 'navp1-circle4Hov');
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

$('.ball-one').click(function() {
  $(this).toggleClass('rOne-trans');
});
    
$('.ball-two').click(function() {
  $(this).toggleClass('rOne-trans');
});
    
$('.ball-three').click(function() {
  $(this).toggleClass('rOne-trans');
});
    
$('.ball-four').click(function() {
  $(this).toggleClass('rOne-trans');
});
    
$('.ball-five').click(function() {
  $(this).toggleClass('rOne-trans');
});
    
    /*-- ROW 2 --*/
    
$('.ball-six').click(function() {
  $(this).toggleClass('rTwo-trans');
});
    
$('.ball-seven').click(function() {
  $(this).toggleClass('rTwo-trans');
});
    
$('.ball-eight').click(function() {
  $(this).toggleClass('rTwo-trans');
});
    
$('.ball-nine').click(function() {
  $(this).toggleClass('rTwo-trans');
});
    
$('.ball-ten').click(function() {
  $(this).toggleClass('rTwo-trans');
});
    
    /*-- ROW 3 --*/
    
$('.ball-eleven').click(function() {
  $(this).toggleClass('rThree-trans');
});
  
$('.ball-twelve').click(function() {
  $(this).toggleClass('rThree-trans');
});
    
$('.ball-thirteen').click(function() {
  $(this).toggleClass('rThree-trans');
});

$('.ball-fourteen').click(function() {
  $(this).toggleClass('rThree-trans');
});

$('.ball-fifteen').click(function() {
  $(this).toggleClass('rThree-trans');
});

    /*-- ROW 4 --*/
    
$('.ball-sixteen').click(function() {
  $(this).toggleClass('rFour-trans');
});

$('.ball-seventeen').click(function() {
  $(this).toggleClass('rFour-trans');
});

$('.ball-eighteen').click(function() {
  $(this).toggleClass('rFour-trans');
});

$('.ball-nineteen').click(function() {
  $(this).toggleClass('rFour-trans');
});

$('.ball-twenty').click(function() {
  $(this).toggleClass('rFour-trans');
});

    /*-- ROW 5 --*/
    
$('.ball-twentyone').click(function() {
  $(this).toggleClass('rFive-trans');
});

$('.ball-twentytwo').click(function() {
  $(this).toggleClass('rFive-trans');
});
    
$('.ball-twentythree').click(function() {
  $(this).toggleClass('rFive-trans');
});
    
$('.ball-twentyfour').click(function() {
  $(this).toggleClass('rFive-trans');
});
    
$('.ball-twentyfive').click(function() {
  $(this).toggleClass('rFive-trans');
});
  });
