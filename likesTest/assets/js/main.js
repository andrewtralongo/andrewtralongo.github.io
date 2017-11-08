$(document).ready(function() {
    
    
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
});