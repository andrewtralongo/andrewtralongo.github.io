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
//    portamiVia
//    stressedOut
//    topOfEurope
//    touchDesignerInClass
//    ugh
//    visualiserCircle
    
    
    
    $('.5posters').hover(function() {
        $('.folioTitleD').text("5 Posters");
        $('.folioTags').html("// Web");
    });
    
    $('.adornment').hover(function() {
        $('.folioTitleD').text("Adornment");
        $('.folioTags').html("// Print<br>// Photography");
    });
    
    $('.aesop').hover(function() {
        $('.folioTitleD').text("Aesop");
        $('.folioTags').html("// UX<br>// Theory");
    });
    
    $('.diaDeLosMuertos').hover(function() {
        $('.folioTitleD').text("Dia De Los Muertos");
        $('.folioTags').html("// Print<br>// Photograpy");
    });
    
    $('.hardWogLife').hover(function() {
        $('.folioTitleD').text("It's a Hard Wog Life");
        $('.folioTags').html("// Print<br>// Photography");
    });
    
    $('.herschelListen').hover(function() {
        $('.folioTitleD').text("Herschel Listen");
        $('.folioTags').html("// UX");
    });
    
    $('.interventionOfSpace').hover(function() {
        $('.folioTitleD').text("Intervention of Space");
        $('.folioTags').html("// Web");
    });
    
    $('.portamiVia').hover(function() {
        $('.folioTitleD').text("Portami Via");
        $('.folioTags').html("// UX");
    });
    
    $('.stressedOut').hover(function() {
        $('.folioTitleD').text("Stressed Out");
        $('.folioTags').html("// Photography");
    });
    
    $('.topOfEurope').hover(function() {
        $('.folioTitleD').text("Top of Europe");
        $('.folioTags').html("// UX");
    });
    
    $('.touchDesignerInClass').hover(function() {
        $('.folioTitleD').text("Touch Designer In Class");
        $('.folioTags').html("// Video");
    });
    
    $('.ugh').hover(function() {
        $('.folioTitleD').text("UGH!");
        $('.folioTags').html("// Print");
    });
    
    $('.visualiserCircle').hover(function() {
        $('.folioTitleD').text("Visualiser");
        $('.folioTags').html("// UX");
    });

  });
