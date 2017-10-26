$(document).ready(function() {
    
    var coinSound = document.createElement('audio');
        coinSound.setAttribute('src', 'assets/audio/coinFlip.mp3');
        $.get();
        coinSound.addEventListener("load", function() {
          song.play();
        }, true);

$('.coin').click(function(){
    
    $('.coinH').removeClass('hide');
    $('.coinT').removeClass('hide');
    
    $('.coin').removeClass('bgT');
    $('.coin').removeClass('bgH');
    
    $('.coin').addClass('coinAni');
    $('.coinH').addClass('coinHAni');
    $('.coinT').addClass('coinTAni');
    
    coinSound.play();
        
    setTimeout(function () {
        
    var x = Math.floor(Math.random() * 2) + 1;
    
    if (x == 1) {$('.coin').addClass('bgT');}
    
    if (x == 2) {$('.coin').addClass('bgH');}
    
    $('.coinH').addClass('hide');
    $('.coinT').addClass('hide');
    
    $('.coin').removeClass('coinAni');
    $('.coinH').removeClass('coinHAni');
    $('.coinT').removeClass('coinTAni');
    
    }, 1500);

});

});
