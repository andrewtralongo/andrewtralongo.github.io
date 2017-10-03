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
//    cinqueTerre
//    diaDeLosMuertos
//    herschelListen
//    hardWogLife
//    portamiVia
//    stressedOut
//    topOfEurope
//    touchDesignerInClass
//    ugh
//    visualiserCircle
    
    
    
    $('.5posters').hover(function() {
        $('.folio.titleD').text("// 5 Posters");
    });
    $('.adornment').hover(function() {
        $('.folio.titleD').text("// Adornment");
    });
    $('.aesop').hover(function() {
        $('.folio.titleD').text("// Aesop");
    });
    $('.cinqueTerre').hover(function() {
        $('.folio.titleD').text("// Cinque Terre");
    });
    $('.diaDeLosMuertos').hover(function() {
        $('.folio.titleD').text("// Dia De Los Muertos");
    });
    $('.hardWogLife').hover(function() {
        $('.folio.titleD').text("// It's a Hard Wog Life");
    });
    $('.herschelListen').hover(function() {
        $('.folio.titleD').text("// Herschel Listen");
    });
    $('.interventionOfSpace').hover(function() {
        $('.folio.titleD').text("// Intervention of Space");
    });
    $('.portamiVia').hover(function() {
        $('.folio.titleD').text("// Portami Via");
    });
    $('.stressedOut').hover(function() {
        $('.folio.titleD').text("// Stressed Out");
    });
    $('.topOfEurope').hover(function() {
        $('.folio.titleD').text("// Top of Europe");
    });
    $('.touchDesignerInClass').hover(function() {
        $('.folio.titleD').text("// Touch Designer In Class");
    });
    $('.ugh').hover(function() {
        $('.folio.titleD').text("// UGH!");
    });
    $('.visualiserCircle').hover(function() {
        $('.folio.titleD').text("// Visualiser");
    });

  });
