$(document).ready(function() {

    var desc = $('.main-R');
    desc.data('oldText', desc.text());

    $('.levelone').hover(function() {
            $('.navp1-container').toggleClass('linkicn-hover');
            $('.navp2-container, .navp3-container, .navp4-container, .navp5-container').removeClass('linkicn-hover');
        
            desc.html("You should use all of your knowledge of CSS, but you should focus on experimentation, iteration and translation. You must re-create 1 poster. The poster can come from any archive, but should be mostly typographic or shape based. You can not use any illustrations or any custom fonts.<br>Just like translating a language you must make choices. Don't aim for accuracy of image, aim for accuracy of intent of the designer. Example of a good graphic poster. You can't recreate the aids symbol, but you could do Bold Arial on a white to blue gradient.");
    },
                         function(){
        desc.text(desc.data('oldText'));
        $('.navp1-container').toggleClass('linkicn-hover');
    }
);
    
    $('.leveltwo').hover(function() {
            $('.navp2-container').toggleClass('linkicn-hover');
            $('.navp1-container, .navp3-container, .navp4-container, .navp5-container').removeClass('linkicn-hover');
        
            desc.html("You should use all of your knowledge of CSS, but you should focus on experimentation, iteration and translation. You must re-create 1 poster. The poster can come from any archive, but should be mostly typographic or shape based. You can not use any illustrations or any custom fonts.<br>Just like translating a language you must make choices. Don't aim for accuracy of image, aim for accuracy of intent of the designer. Example of a good graphic poster. You can't recreate the aids symbol, but you could do Bold Arial on a white to blue gradient. <br>Same as before, recreate 1 poster. But this time use CSS animation.");
    },
                         function(){
        desc.text(desc.data('oldText'));
        $('.navp2-container').toggleClass('linkicn-hover');
    }
);
    
    $('.levelthree').hover(function() {
            $('.navp3-container').toggleClass('linkicn-hover');
            $('.navp1-container, .navp2-container, .navp4-container, .navp5-container').removeClass('linkicn-hover');
        
            desc.html("You should use all of your knowledge of CSS, but you should focus on experimentation, iteration and translation. You must re-create 1 poster. The poster can come from any archive, but should be mostly typographic or shape based. You can not use any illustrations or any custom fonts.<br>Just like translating a language you must make choices. Don't aim for accuracy of image, aim for accuracy of intent of the designer. Example of a good graphic poster. You can't recreate the aids symbol, but you could do Bold Arial on a white to blue gradient. <br>Same as before, but this time also use jQuery timeout and addClass.");
    },
                         function(){
        desc.text(desc.data('oldText'));
        $('.navp3-container').toggleClass('linkicn-hover');
    }
);

    $('.levelfour').hover(function() {
        $('.navp4-container').toggleClass('linkicn-hover');
       $('.navp1-container, .navp2-container, .navp3-container, .navp5-container').removeClass('linkicn-hover');
        
            desc.html("You should use all of your knowledge of CSS, but you should focus on experimentation, iteration and translation. You must re-create 1 poster. The poster can come from any archive, but should be mostly typographic or shape based. You can not use any illustrations or any custom fonts.<br>Just like translating a language you must make choices. Don't aim for accuracy of image, aim for accuracy of intent of the designer. Example of a good graphic poster. You can't recreate the aids symbol, but you could do Bold Arial on a white to blue gradient. <br>Same as before, but this time additionally use jQuery Click and addClass.");
    },
                         function(){
        desc.text(desc.data('oldText'));
        $('.navp4-container').toggleClass('linkicn-hover');
    }
);
    
    $('.levelfive').hover(function() {
        $('.navp5-container').toggleClass('linkicn-hover');
        $('.navp1-container, .navp2-container, .navp3-container, .navp4-container').removeClass('linkicn-hover');
        
            desc.html("You should use all of your knowledge of CSS, but you should focus on experimentation, iteration and translation. You must re-create 1 poster. The poster can come from any archive, but should be mostly typographic or shape based. You can not use any illustrations or any custom fonts.<br>Just like translating a language you must make choices. Don't aim for accuracy of image, aim for accuracy of intent of the designer. Example of a good graphic poster. You can't recreate the aids symbol, but you could do Bold Arial on a white to blue gradient. <br>Recreate 1 last poster, and this time use multiple audioElements.");
    },
                         function(){
        desc.text(desc.data('oldText'));
        $('.navp5-container').toggleClass('linkicn-hover');
    }
);
    
  });
