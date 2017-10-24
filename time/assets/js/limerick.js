$(document).ready(function() {

var x = Math.floor(Math.random() * 5) + 1;
//        Nice Different Unusual
//        Yea Nah Yea
//        Good Good Not Bad
//        Same Same But Different
//        Nothing is Something
        
        if (x == 1){
            $('.limerick').html("There was an Old Man of Peru<br><br>Who watched his wife making a stew.<br><br>But once, by mistake,<br><br>In a stove she did bake<br><br>That unfortunate Man of Peru.");
        }
        
        if (x == 2){
            $('.limerick').html("Hickory dickory dock.<br><br>The mouse ran up the clock.<br><br>The clock struck one,<br><br>And down he run.<br><br>Hickory dickory dock.");
        }
        
        if (x == 3){
            $('.limerick').html("There once was a man from Nantucket<br><br>Who kept all his cash in a bucket.<br><br>But his daughter, named Nan,<br><br>Ran away with a man,<br><br>And as for the bucket, Nantucket.");
        }
        
        if (x == 4){
            $('.limerick').html("And let me the canakin clink, clink.<br><br>And let me the canakin clink.<br><br>A soldier’s a man.<br><br>A life’s but a span.<br><br>Why, then, let a soldier drink.");
        }
        
        if (x == 5){
            $('.limerick').html("A wonderful bird is the pelican,<br><br>His bill can hold more than his beli-can.<br><br>He can take in his beak<br><br>Food enough for a week<br><br>But I’m damned if I see how the heli-can.");
        }

});
