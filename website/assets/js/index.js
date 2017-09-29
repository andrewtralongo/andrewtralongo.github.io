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


  });
