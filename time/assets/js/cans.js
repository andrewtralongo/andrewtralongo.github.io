$(document).ready(function() {

// -- AUDIO --
    
var canCrusher = document.createElement('audio');
        canCrusher.setAttribute('src', 'assets/audio/cans/canCrusher.mp3');
        $.get();
        canCrusher.addEventListener("load", function() {
          song.play();
        }, true);

var crushingAluminumCan = document.createElement('audio');
        crushingAluminumCan.setAttribute('src', 'assets/audio/cans/crushingAluminumCan.mp3');
        $.get();
        crushingAluminumCan.addEventListener("load", function() {
          song.play();
        }, true);
    
var powerfulCrush = document.createElement('audio');
        powerfulCrush.setAttribute('src', 'assets/audio/cans/powerfulCrush.mp3');
        $.get();
        powerfulCrush.addEventListener("load", function() {
          song.play();
        }, true);

// -- CAN CLICK --

$('.can').click(function(){
    
    var s = Math.floor(Math.random() * 3) + 1;
    
    if (s == 1) {canCrusher.play();}
    
    if (s == 2) {crushingAluminumCan.play();}
    
    if (s == 3) {powerfulCrush.play();}  
    
    var delayTime = Math.floor(Math.random() * (5000 - 750) + 750);
    
$(this).addClass('crushed').delay(delayTime).queue(function( next ){
    $(this).removeClass('crushed'); 
    next();
});
});

});
