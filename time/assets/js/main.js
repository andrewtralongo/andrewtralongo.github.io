$(document).ready(function() {


    $.ajax({ url: fileNameTotal, success: function(result) { $('.result').html(result); } });    
    

});
