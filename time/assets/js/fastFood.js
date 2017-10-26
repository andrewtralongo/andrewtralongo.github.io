$(document).ready(function() {

    // -- SOUNDS --
    
    var swooshS1 = document.createElement('audio');
        swooshS1.setAttribute('src', 'assets/audio/fastFood/swoosh1.mp3');
        $.get();
        swooshS1.addEventListener("load", function() {
          song.play();
        }, true);
    
    var swooshS2 = document.createElement('audio');
        swooshS2.setAttribute('src', 'assets/audio/fastFood/swoosh2.mp3');
        $.get();
        swooshS2.addEventListener("load", function() {
          song.play();
        }, true);
    
    // -- RONALD --
    
    function ronaldRun(){
        
        var s = Math.floor(Math.random() * 3) + 1;
    
        if (s == 1) {swooshS1.play();}
    
        if (s == 2) {swooshS2.play();}
        
        $('.ronald').addClass('runAni');
    
    setTimeout(function() {
       
         $('.ronald').removeClass('runAni');

    }, 1000);
    }
    
    function ronaldRunInit() {
        var myFunction = function() {
            ronaldRun();
            var ronaldRLength = 1000 + Math.floor(Math.random() * 10000);
            setTimeout(myFunction, ronaldRLength);
        }
        myFunction();
    }

    $(function() {
        ronaldRunInit();
    });
    
    // -- GRIMACE --
    
    function grimaceRun(){
        
        var s = Math.floor(Math.random() * 3) + 1;
    
        if (s == 1) {swooshS1.play();}
    
        if (s == 2) {swooshS2.play();}
        
        $('.grimace').addClass('runAni');
    
    setTimeout(function() {
       
         $('.grimace').removeClass('runAni');

    }, 1000);
    }
    
    function grimaceRunInit() {
        var myFunction = function() {
            grimaceRun();
            var grimaceRLength = 1000 + Math.floor(Math.random() * 10000);
            setTimeout(myFunction, grimaceRLength);
        }
        myFunction();
    }

    $(function() {
        grimaceRunInit();
    });
    
    // -- BIRDIE --
    
    function birdieRun(){
        
        var s = Math.floor(Math.random() * 3) + 1;
    
        if (s == 1) {swooshS1.play();}
    
        if (s == 2) {swooshS2.play();}
        
        $('.birdie').addClass('runAni');
    
    setTimeout(function() {
       
         $('.birdie').removeClass('runAni');

    }, 1000);
    }
    
    function birdieRunInit() {
        var myFunction = function() {
            birdieRun();
            var birdieRLength = 1000 + Math.floor(Math.random() * 10000);
            setTimeout(myFunction, birdieRLength);
        }
        myFunction();
    }

    $(function() {
        birdieRunInit();
    });
    
    // -- HAMBURGLAR --
    
    function hamburglarRun(){
        
        var s = Math.floor(Math.random() * 3) + 1;
    
        if (s == 1) {swooshS1.play();}
    
        if (s == 2) {swooshS2.play();}
        
        $('.hamburglar').addClass('runAni');
    
    setTimeout(function() {
       
         $('.hamburglar').removeClass('runAni');

    }, 1000);
    }
    
    function hamburglarRunInit() {
        var myFunction = function() {
            hamburglarRun();
            var hamburglarRLength = 1000 + Math.floor(Math.random() * 10000);
            setTimeout(myFunction, hamburglarRLength);
        }
        myFunction();
    }

    $(function() {
        hamburglarRunInit();
    });
    
  });