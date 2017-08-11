$(document).ready(function() {


    setTimeout(function () {
      $('.box.one').addClass('boxborder');
        
        setTimeout(function () {
      $('.box.one').removeClass('boxborder');
      $('.box.two').addClass('boxborder');
            
            setTimeout(function () {
      $('.box.two').removeClass('boxborder');
      $('.box.three').addClass('boxborder');  
                
                setTimeout(function () {
      $('.box.three').removeClass('boxborder');
      $('.box.four').addClass('boxborder');    
                    
                    setTimeout(function () {
      $('.box.four').removeClass('boxborder');
      $('.box.five').addClass('boxborder'); 
                        
                        setTimeout(function () {
      $('.box.five').removeClass('boxborder');
      $('.box.six').addClass('boxborder');   
                            
                            setTimeout(function () {
      $('.box.six').removeClass('boxborder');
      $('.box.seven').addClass('boxborder');
                                
                                setTimeout(function () {
      $('.box.seven').removeClass('boxborder');
    }, 2000);
                                
    }, 2000);
                            
    }, 2000);
                        
    }, 2000);
                    
    }, 2000);
                
    }, 2000);
            
    }, 2000);
        
    }, 2000);

    
    setTimeout(function () {
      $('.header-title').addClass('header-title-transout');
        
        
        setTimeout(function () {
            $('.header-title').text("Kesselskramer");
      $('.header-title').removeClass('header-title-transout');
    }, 3000);
        
    }, 1000);
    
    setTimeout(function () {
      $('.header-column').addClass('header-column-transin');
    }, 4000);


  });
