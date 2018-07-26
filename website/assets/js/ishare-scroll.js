$(document).ready(function() {

   $("html, body").animate({ scrollTop: $(document).height() }, 120000);
    setTimeout(function() {
       $('html, body').animate({scrollTop:0}, 240000); 
    },240000, "linear");
  var scrolltopbottom =  setInterval(function(){
         // 10000 - it will take 10 secound in total from the top of the page to the bottom
    $("html, body").animate({ scrollTop: $(document).height() }, 120000);
    setTimeout(function() {
       $('html, body').animate({scrollTop:0}, 240000); 
    },240000, "linear");

    },480000); 
   
});
