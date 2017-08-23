$(document).ready(function() {

    var desc = $('.main-R');
    desc.data('oldText', desc.text());

    $('.levelone').hover(function() {
            $('.navp1-container').toggleClass('linkicn-hover');
            $('.navp2-container, .navp3-container, .navp4-container, .navp5-container').removeClass('linkicn-hover');
        
            desc.html('Create a poster incorporating the selected manifesto using:<br>HTML<br>CSS');
    },
                         function(){
        desc.text(desc.data('oldText'));
        $('.navp1-container').toggleClass('linkicn-hover');
    }
);
    
    $('.leveltwo').hover(function() {
            $('.navp2-container').toggleClass('linkicn-hover');
            $('.navp1-container, .navp3-container, .navp4-container, .navp5-container').removeClass('linkicn-hover');
        
            desc.html('Create a poster incorporating the selected manifesto using:<br>HTML<br>CSS<br>CSS animations');
    },
                         function(){
        desc.text(desc.data('oldText'));
        $('.navp2-container').toggleClass('linkicn-hover');
    }
);
    
    $('.levelthree').hover(function() {
            $('.navp3-container').toggleClass('linkicn-hover');
            $('.navp1-container, .navp2-container, .navp4-container, .navp5-container').removeClass('linkicn-hover');
        
            desc.html('Create a poster incorporating the selected manifesto using:<br>HTML<br>CSS<br>CSS animations<br>jQuery Timeout');
    },
                         function(){
        desc.text(desc.data('oldText'));
        $('.navp3-container').toggleClass('linkicn-hover');
    }
);

    $('.levelfour').hover(function() {
        $('.navp4-container').toggleClass('linkicn-hover');
       $('.navp1-container, .navp2-container, .navp3-container, .navp5-container').removeClass('linkicn-hover');
        
            desc.html('Create a poster incorporating the selected manifesto using:<br>HTML<br>CSS<br>CSS animations<br>jQuery Timeout<br>jQuery Click');
    },
                         function(){
        desc.text(desc.data('oldText'));
        $('.navp4-container').toggleClass('linkicn-hover');
    }
);
    
    $('.levelfive').hover(function() {
        $('.navp5-container').toggleClass('linkicn-hover');
        $('.navp1-container, .navp2-container, .navp3-container, .navp4-container').removeClass('linkicn-hover');
        
            desc.html('Create a poster incorporating the selected manifesto using:<br>HTML<br>CSS<br>CSS animations<br>jQuery Timeout<br>jQuery Click<br>jQuery Sound');
    },
                         function(){
        desc.text(desc.data('oldText'));
        $('.navp5-container').toggleClass('linkicn-hover');
    }
);
    
  });
