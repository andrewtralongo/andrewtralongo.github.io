$(document).ready(function() {

    
    $('.nav_aWholeNewWorld').click(function(){
        $("html, body").animate({ scrollTop: $('#aWholeNewWorld').offset().top - 225}, 1000);
    });
    
    $('.nav_aloneTogether').click(function(){
        $("html, body").animate({ scrollTop: $('#aloneTogether').offset().top - 225}, 1000);
    });
    
    $('.nav_disconnected').click(function(){
        $("html, body").animate({ scrollTop: $('#disconnected').offset().top - 225}, 1000);
    });
    
    $('.nav_140char').click(function(){
        $("html, body").animate({ scrollTop: $('#140char').offset().top - 225}, 1000);
    });
    
    $('.nav_projectedID').click(function(){
        $("html, body").animate({ scrollTop: $('#projectedID').offset().top - 225}, 1000);
    });
    
    

    $('.fLike').click(function() {
        $(this).toggleClass('active');
    });
    $('.fComment').click(function() {
        $(this).toggleClass('active');
    });
    
    $('.fLike').each(function() {
    var number = 1 + Math.floor(Math.random() * 999);
    var $this = $(this);
    var addMinusLike = 0;
    
    $this.html('<h2><i class="material-icons">thumb_up</i> &#160;' + number + ' Likes</h2>');
        
    $this.click(function(event) {
        
        addMinusLike = addMinusLike + 1;
        
        if (addMinusLike % 2 == 0){
            number = number - 1;
        }
        else {
            number = number + 1;
        }
        
        $this.html('<h2><i class="material-icons">thumb_up</i> &#160;' + number + ' Likes</h2>');
    });

    });
    
    $('.fComment.intro').click(function() {
        $('.comments.intro').toggleClass('hide');
    });
    
    $('.fComment.newWorldp1').click(function() {
        $('.comments.newWorldp1').toggleClass('hide');
    });
    
    $('.fComment.newWorldp2').click(function() {
        $('.comments.newWorldp2').toggleClass('hide');
    });
    
    $('.fComment.rateMe').click(function() {
        $('.comments.rateMe').toggleClass('hide');
    });
    
    $('.fComment.newWorldp3').click(function() {
        $('.comments.newWorldp3').toggleClass('hide');
    });
    
    $('.fComment.socialRoulette').click(function() {
        $('.comments.socialRoulette').toggleClass('hide');
    });
    
    $('.fComment.twoLivesQ').click(function() {
        $('.comments.twoLivesQ').toggleClass('hide');
    });
    
    $('.fComment.aloneTogetherp1').click(function() {
        $('.comments.aloneTogetherp1').toggleClass('hide');
    });
    
    $('.fComment.siri').click(function() {
        $('.comments.siri').toggleClass('hide');
    });
    
    $('.fComment.aloneTogetherp2').click(function() {
        $('.comments.aloneTogetherp2').toggleClass('hide');
    });
    
    $('.fComment.conversationQ').click(function() {
        $('.comments.conversationQ').toggleClass('hide');
    });
    
    $('.fComment.disconnectedp1').click(function() {
        $('.comments.disconnectedp1').toggleClass('hide');
    });
    
    $('.fComment.disconnectedp2').click(function() {
        $('.comments.disconnectedp2').toggleClass('hide');
    });
    
    $('.fComment.unpluggingJoyQ').click(function() {
        $('.comments.unpluggingJoyQ').toggleClass('hide');
    });
    
    $('.fComment.facebook').click(function() {
        $('.comments.facebook').toggleClass('hide');
    });
    
    $('.fComment.140charp1').click(function() {
        $('.comments.140charp1').toggleClass('hide');
    });
    
    $('.fComment.smartestRoomQ').click(function() {
        $('.comments.smartestRoomQ').toggleClass('hide');
    });
    
    $('.fComment.140charp2').click(function() {
        $('.comments.140charp2').toggleClass('hide');
    });
    
    $('.fComment.trumpQ').click(function() {
        $('.comments.trumpQ').toggleClass('hide');
    });
    
    $('.fComment.projectedIDp1').click(function() {
        $('.comments.projectedIDp1').toggleClass('hide');
    });
    
    $('.fComment.renderedIDQ').click(function() {
        $('.comments.renderedIDQ').toggleClass('hide');
    });
    
    $('.fComment.projectedIDp2').click(function() {
        $('.comments.projectedIDp2').toggleClass('hide');
    });
    
    $('.fComment.girlsVid').click(function() {
        $('.comments.girlsVid').toggleClass('hide');
    });
    
    $('.fComment.projectedIDp3').click(function() {
        $('.comments.projectedIDp3').toggleClass('hide');
    });
    
    $('.fComment.projectedIDp4').click(function() {
        $('.comments.projectedIDp4').toggleClass('hide');
    });
    
    $('.fComment.projectedIDp5').click(function() {
        $('.comments.projectedIDp5').toggleClass('hide');
    });
    
    $('.fComment.the1975insta1').click(function() {
        $('.comments.the1975insta1').toggleClass('hide');
    });
    
    $('.fComment.projectedIDp6').click(function() {
        $('.comments.projectedIDp6').toggleClass('hide');
    });
    
    $('.fComment.the1975insta2').click(function() {
        $('.comments.the1975insta2').toggleClass('hide');
    });
    
    $('.fComment.conc').click(function() {
        $('.comments.conc').toggleClass('hide');
    });

});
