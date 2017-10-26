$(document).ready(function() {
    
// -- AUDIO --
    
    var pop1 = document.createElement('audio');
        pop1.setAttribute('src', 'assets/audio/popcorn/pop1.mp3');
        $.get();
        pop1.addEventListener("load", function() {
          song.play();
        }, true);
    var pop2 = document.createElement('audio');
        pop2.setAttribute('src', 'assets/audio/popcorn/pop2.mp3');
        $.get();
        pop2.addEventListener("load", function() {
          song.play();
        }, true);
    var pop3 = document.createElement('audio');
        pop3.setAttribute('src', 'assets/audio/popcorn/pop3.mp3');
        $.get();
        pop3.addEventListener("load", function() {
          song.play();
        }, true);
    var pop4 = document.createElement('audio');
        pop4.setAttribute('src', 'assets/audio/popcorn/pop4.mp3');
        $.get();
        pop4.addEventListener("load", function() {
          song.play();
        }, true);
    var pop5 = document.createElement('audio');
        pop5.setAttribute('src', 'assets/audio/popcorn/pop5.mp3');
        $.get();
        pop5.addEventListener("load", function() {
          song.play();
        }, true);
    var pop6 = document.createElement('audio');
        pop6.setAttribute('src', 'assets/audio/popcorn/pop6.mp3');
        $.get();
        pop6.addEventListener("load", function() {
          song.play();
        }, true);
    var pop7 = document.createElement('audio');
        pop7.setAttribute('src', 'assets/audio/popcorn/pop7.mp3');
        $.get();
        pop7.addEventListener("load", function() {
          song.play();
        }, true);
    
// -- POPCORN --
    
    $('.popcorn').each(function() {
    var number = 1000 + Math.floor(Math.random() * 20000);
    var $this = $(this);
    
    setTimeout(function(){
        
    var x = Math.floor(Math.random() * 7) + 1;
    
    if (x == 1) {
        pop1.play();
        $this.addClass('popped1');}
    
    if (x == 2) {
        pop2.play();
        $this.addClass('popped2');}
    
    if (x == 3) {
        pop3.play();
        $this.addClass('popped3');
    }
        
    if (x == 4) {
        pop4.play();
        $this.addClass('popped4');
    }
        
    if (x == 5) {
        pop5.play();
        $this.addClass('popped5');
    }
        
    if (x == 6) {
        pop6.play();
        $this.addClass('popped6');
    }
        
    if (x == 7) {
        pop7.play();
        $this.addClass('popped7');
    }
        
    }, number);;
    });
});