$(document).ready(function() {

    setTimeout(function () {
        
        var x = Math.floor(Math.random() * 5) + 1;
//        Nice Different Unusual
//        Yea Nah Yea
//        Good Good Not Bad
//        Same Same But Different
//        Nothing is Something
        
        if (x == 1){
            $('.tLeft').text("Nice");
            $('.tCenter').text("Different");
            $('.tRight').text("Unusual");
        }
        
        if (x == 2){
            $('.tLeft').text("Yea");
            $('.tCenter').text("Nah");
            $('.tRight').text("Yea");
        }
        
        if (x == 3){
            $('.tLeft').text("Good");
            $('.tCenter').text("Good");
            $('.tRight').text("Not Bad");
        }
        
        if (x == 4){
            $('.tLeft').text("Same");
            $('.tCenter').text("Same");
            $('.tRight').text("But Different");
        }
        
        if (x == 5){
            $('.tLeft').text("Nothing");
            $('.tCenter').text("Is");
            $('.tRight').text("Something");
        }
        
    }, 0);

// -- TLEFT --
    
    function tLeft() {
        
        setTimeout(function () {
        $('.tLeft.y').addClass('yTrans');
        $('.tLeft.m').addClass('mTrans');
        $('.tLeft.c').addClass('cTrans');
        
            setTimeout(function () {
            $('.tLeft.y').removeClass('yTrans');
            $('.tLeft.m').removeClass('mTrans');
            $('.tLeft.c').removeClass('cTrans');

            }, 100);    
        
        }, 0);
    }

    function tLeftInit() {
        var myFunction = function() {
            tLeft();
            var rand = Math.round(Math.random() * (5000 - 500)) + 500; // generate new time (between 5sec and 500"s)
            setTimeout(myFunction, rand);
        }
        myFunction();
    }

    $(function() {
        tLeftInit();
    });
    
// -- TCENTER --
    
    function tCenter() {
        
        setTimeout(function () {
        $('.tCenter.y').addClass('yTrans');
        $('.tCenter.m').addClass('mTrans');
        $('.tCenter.c').addClass('cTrans');
        
            setTimeout(function () {
            $('.tCenter.y').removeClass('yTrans');
            $('.tCenter.m').removeClass('mTrans');
            $('.tCenter.c').removeClass('cTrans');

            }, 100);    
        
        }, 0);
    }

    function tCenterInit() {
        var myFunction = function() {
            tCenter();
            var rand = Math.round(Math.random() * (5000 - 500)) + 500; // generate new time (between 5sec and 500"s)
            setTimeout(myFunction, rand);
        }
        myFunction();
    }

    $(function() {
        tCenterInit();
    });

// -- TRIGHT --
    
    function tRight() {
        
        setTimeout(function () {
        $('.tRight.y').addClass('yTrans');
        $('.tRight.m').addClass('mTrans');
        $('.tRight.c').addClass('cTrans');
        
            setTimeout(function () {
            $('.tRight.y').removeClass('yTrans');
            $('.tRight.m').removeClass('mTrans');
            $('.tRight.c').removeClass('cTrans');

            }, 100);    
        
        }, 0);
    }

    function tRightInit() {
        var myFunction = function() {
            tRight();
            var rand = Math.round(Math.random() * (5000 - 500)) + 500; // generate new time (between 5sec and 500"s)
            setTimeout(myFunction, rand);
        }
        myFunction();
    }

    $(function() {
        tRightInit();
    });

    
//    5posters
//    adornment  
//    aesop
//    diaDeLosMuertos
//    herschelListen
//    hardWogLife
//    interventionOfSpace
//    iShare
//    portamiVia
//    stressedOut
//    topOfEurope
//    touchDesignerInClass
//    ugh
//    visualiserCircle
    
    
    
    $('.5posters').hover(function() {
        $('.title').html("<h1>5 Posters</h1>");
        $('.tags').html("<h2>// Web</h2>");
    });
    
    $('.adornment').hover(function() {
        $('.title').html("<h1>Adornment</h1>");
        $('.tags').html("<h2>// Print<br>// Photography</h2>");
    });
    
    $('.aesop').hover(function() {
        $('.title').html("<h1>Aesop</h1>");
        $('.tags').html("<h2>// UX<br>// Theory</h2>");
    });
    
    $('.diaDeLosMuertos').hover(function() {
        $('.title').html("<h1>Día De Los Muertos</h1>");
        $('.tags').html("<h2>// Print</h2>");
    });
    
    $('.hardWogLife').hover(function() {
        $('.title').html("<h1>It's a Hard Wog Life</h1>");
        $('.tags').html("<h2>// Print<br>// Photography</h2>");
    });
    
    $('.herschelListen').hover(function() {
        $('.title').html("<h1>Herschel Listen</h1>");
        $('.tags').html("<h2>// UX</h2>");
    });
    $('.interventionOfSpace').hover(function() {
        $('.title').html("<h1>Intervention of Space</h1>");
        $('.tags').html("<h2>// Web</h2>");
    });
    
    $('.iShare').hover(function() {
        $('.title').html("<h1>I share therefore I am</h1>");
        $('.tags').html("<h2>// Web<br>// Theory</h2>");
    });
    
    $('.portamiVia').hover(function() {
        $('.title').html("<h1>Portami Via</h1>");
        $('.tags').html("<h2>// UX</h2>");
    });
    
    $('.stressedOut').hover(function() {
        $('.title').html("<h1>Stressed Out</h1>");
        $('.tags').html("<h2>// Photography</h2>");
    });
    
    $('.topOfEurope').hover(function() {
        $('.title').html("<h1>Top of Europe</h1>");
        $('.tags').html("<h2>// UX</h2>");
    });
    
    $('.touchDesignerInClass').hover(function() {
        $('.title').html("<h1>TouchDesigner In Class</h1>");
        $('.tags').html("<h2>// Video</h2>");
    });
    
    $('.ugh').hover(function() {
        $('.title').html("<h1>UGH!</h1>");
        $('.tags').html("<h2>// Print</h2>");
    });
    
    $('.visualiserCircle').hover(function() {
        $('.title').html("<h1>Visualiser</h1>");
        $('.tags').html("<h2>// UX</h2>");
    });

  });
