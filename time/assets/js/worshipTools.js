$(document).ready(function() {

    function toolS(){
    
    setTimeout(function() {
       
         $('.tool').addClass('crowbar');
        
        setTimeout(function () {
          $('.tool').removeClass('crowbar');
          $('.tool').addClass('drill');

        setTimeout(function () {
          $('.tool').removeClass('drill');
          $('.tool').addClass('hammer');

        setTimeout(function () {
          $('.tool').removeClass('hammer');
          $('.tool').addClass('saw');  

        setTimeout(function () {
          $('.tool').removeClass('saw');
          $('.tool').addClass('screwdriver');    

        setTimeout(function () {
          $('.tool').removeClass('screwdriver');
          $('.tool').addClass('spanner'); 

        setTimeout(function () {
          $('.tool').removeClass('spanner');
          $('.tool').addClass('spiritLevel');   

        setTimeout(function () {
          $('.tool').removeClass('spiritLevel');
          $('.tool').addClass('tapeMeasure');
            
        setTimeout(function () {
          $('.tool').removeClass('tapeMeasure');

    }, 7000);

    }, 7000);
            
    }, 7000);
            
    }, 7000);
                                
    }, 7000);
                            
    }, 7000);
                        
    }, 7000);
                    
    }, 5400);
                
    }, 0000);
    }
    
    function toolSInit() {
        var myFunction = function() {
            toolS();
            var toolSLength = 53400;
            setTimeout(myFunction, toolSLength);
        }
        myFunction();
    }

    $(function() {
        toolSInit();
    });
    
  });