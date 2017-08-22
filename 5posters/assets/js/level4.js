$(document).ready(function() {

        
//    -- PAGE LOAD DEMO --
    
    setTimeout(function () {
            $('.ball-two').addClass('rowone');
    }, 2000);
    setTimeout(function () {
            $('.ball-two').removeClass('rowone');
    }, 2000);
    
    
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

$('.ball-one').click(function() {
  $('.ball-one').toggleClass('rowone');
});
    
$('.ball-two').click(function() {
  $('.ball-two').toggleClass('rowone');
});
    
$('.ball-three').click(function() {
  $('.ball-three').toggleClass('rowone');
});
    
$('.ball-four').click(function() {
  $('.ball-four').toggleClass('rowone');
});
    
$('.ball-five').click(function() {
  $('.ball-five').toggleClass('rowone');
});
    
    /*-- ROW 2 --*/
    
$('.ball-six').click(function() {
  $('.ball-six').toggleClass('rowtwo');
});
    
$('.ball-seven').click(function() {
  $('.ball-seven').toggleClass('rowtwo');
});
    
$('.ball-eight').click(function() {
  $('.ball-eight').toggleClass('rowtwo');
});
    
$('.ball-nine').click(function() {
  $('.ball-nine').toggleClass('rowtwo');
});
    
$('.ball-ten').click(function() {
  $('.ball-ten').toggleClass('rowtwo');
});
    
    /*-- ROW 3 --*/
    
$('.ball-eleven').click(function() {
  $('.ball-eleven').toggleClass('rowthree');
});
  
$('.ball-twelve').click(function() {
  $('.ball-twelve').toggleClass('rowthree');
});
    
$('.ball-thirteen').click(function() {
  $('.ball-thirteen').toggleClass('rowthree');
});

$('.ball-fourteen').click(function() {
  $('.ball-fourteen').toggleClass('rowthree');
});

$('.ball-fifteen').click(function() {
  $('.ball-fifteen').toggleClass('rowthree');
});

    /*-- ROW 4 --*/
    
$('.ball-sixteen').click(function() {
  $('.ball-sixteen').toggleClass('rowfour');
});

$('.ball-seventeen').click(function() {
  $('.ball-seventeen').toggleClass('rowfour');
});

$('.ball-eighteen').click(function() {
  $('.ball-eighteen').toggleClass('rowfour');
});

$('.ball-nineteen').click(function() {
  $('.ball-nineteen').toggleClass('rowfour');
});

$('.ball-twenty').click(function() {
  $('.ball-twenty').toggleClass('rowfour');
});

    /*-- ROW 5 --*/
    
$('.ball-twentyone').click(function() {
  $('.ball-twentyone').toggleClass('rowfive');
});

$('.ball-twentytwo').click(function() {
  $('.ball-twentytwo').toggleClass('rowfive');
});
    
$('.ball-twentythree').click(function() {
  $('.ball-twentythree').toggleClass('rowfive');
});
    
$('.ball-twentyfour').click(function() {
  $('.ball-twentyfour').toggleClass('rowfive');
});
    
$('.ball-twentyfive').click(function() {
  $('.ball-twentyfive').toggleClass('rowfive');
});
  });
