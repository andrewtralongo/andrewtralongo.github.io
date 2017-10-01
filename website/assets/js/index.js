$(document).ready(function() {

    setTimeout(function () {
        
        var x = Math.floor(Math.random() * 4) + 1;
        
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
            $('.tRight').text("Different");
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
        $('.folio.title').text("// 5 Posters");
    });
    $('.aesop').hover(function() {
        $('.folio.title').text("// Aesop");
    });
    $('.cinqueTerre').hover(function() {
        $('.folio.title').text("// Cinque Terre");
    });
    $('.diaDeLosMuertos').hover(function() {
        $('.folio.title').text("// Dia De Los Muertos");
    });
    $('.hardWogLife').hover(function() {
        $('.folio.title').text("// It's a Hard Wog Life");
    });
    $('.herschelListen').hover(function() {
        $('.folio.title').text("// Herschel Listen");
    });
    $('.interventionOfSpace').hover(function() {
        $('.folio.title').text("// Intervention of Space");
    });
    $('.portamiVia').hover(function() {
        $('.folio.title').text("// Portami Via");
    });
    $('.stressedOut').hover(function() {
        $('.folio.title').text("// Stressed Out");
    });
    $('.topOfEurope').hover(function() {
        $('.folio.title').text("// Top of Europe");
    });
    $('.touchDesignerInClass').hover(function() {
        $('.folio.title').text("// Touch Designer In Class");
    });
    $('.ugh').hover(function() {
        $('.folio.title').text("// UGH!");
    });
    $('.visualiserCircle').hover(function() {
        $('.folio.title').text("// Visualiser");
    });

  });
