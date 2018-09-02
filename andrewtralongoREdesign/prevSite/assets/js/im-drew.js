$(document).ready(function() {

var makeItWitChu = document.createElement('audio');
        makeItWitChu.setAttribute('src', 'assets/audio/im-drew/makeItWitChu.mp3');
        $.get();
        makeItWitChu.addEventListener("load", function() {
          song.play();
        }, true);
    
$('.txt').click(function() {
    $('.bg').addClass('show');
    $('.txt').removeClass('small');
    $('.txt').text('12-10');
    
    makeItWitChu.play();
});



});