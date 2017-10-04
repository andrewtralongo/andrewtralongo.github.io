$(document).ready(function() {
    
//    -- NAVIGATION --
    
    $('.navp1-circle1').hover(function() {
        $('.navp1-circle1').toggleClass('navp1-circle1Hov');
        $('.navp1-circle2').toggleClass('navp1-circle2Hov');
        $('.navp1-circle3').toggleClass('navp1-circle3Hov');
        $('.navp1-circle4').toggleClass('navp1-circle4Hov');
});
    
    $('.navp2-container').hover(function(){
        $('.navp2-circleL').toggleClass('navp2-circleLHov');
        $('.navp2-circleR').toggleClass('navp2-circleRHov');
    });
    
    $('.navp5-container').hover(function(){
        $('.navp5-L').toggleClass('navp5-boxHov');
        $('.navp5-L').toggleClass('navp5-Ltrans');
        $('.navp5-R').toggleClass('navp5-boxHov');
        $('.navp5-R').toggleClass('navp5-Rtrans');
    });
    
//    -- POSTER --
    
//    -- VARIABLES --
    
    var transLength = 2000;

//    -- AUDIO FILES --
    
    var Breezeblocks = document.createElement('audio');
        Breezeblocks.setAttribute('src', '../audio/5posters/Breezeblocks.mp3');
        $.get();
        Breezeblocks.addEventListener("load", function() {
          Breezeblocks.play();
        }, true);
    
    var DoIWannaKnow = document.createElement('audio');
        DoIWannaKnow.setAttribute('src', '../audio/5posters/DoIWannaKnow.mp3');
        $.get();
        DoIWannaKnow.addEventListener("load", function() {
          DoIWannaKnow.play();
        }, true);
    
//    -- NOTE --
//    When all files are used, website doesn't work, so left in in case of solution found. This is why further below lines of code are commented.
    
    var FeelsLikeWeOnlyGoBackwards = document.createElement('audio');
        FeelsLikeWeOnlyGoBackwards.setAttribute('src', '../audio/5posters/FeelsLikeWeOnlyGoBackwards.mp3');
        $.get();
        FeelsLikeWeOnlyGoBackwards.addEventListener("load", function() {
          FeelsLikeWeOnlyGoBackwards.play();
        }, true);
    
    var Ghosts = document.createElement('audio');
        Ghosts.setAttribute('src', '../audio/5posters/Ghosts.mp3');
        $.get();
        Ghosts.addEventListener("load", function() {
          Ghosts.play();
        }, true);
    
    var GotToGiveItUp = document.createElement('audio');
        GotToGiveItUp.setAttribute('src', '../audio/5posters/GotToGiveItUp.mp3');
        $.get();
        GotToGiveItUp.addEventListener("load", function() {
          GotToGiveItUp.play();
        }, true);
    
    var JokerAndTheThief = document.createElement('audio');
        JokerAndTheThief.setAttribute('src', '../audio/5posters/JokerAndTheThief.mp3');
        $.get();
        JokerAndTheThief.addEventListener("load", function() {
          JokerAndTheThief.play();
        }, true);
    
    var MeAndMrJones = document.createElement('audio');
        MeAndMrJones.setAttribute('src', '../audio/5posters/MeAndMrJones.mp3');
        $.get();
        MeAndMrJones.addEventListener("load", function() {
          MeAndMrJones.play();
        }, true);
    
    var TheBoysAreBackInTown = document.createElement('audio');
        TheBoysAreBackInTown.setAttribute('src', '../audio/5posters/TheBoysAreBackInTown.mp3');
        $.get();
        TheBoysAreBackInTown.addEventListener("load", function() {
          TheBoysAreBackInTown.play();
        }, true);
    
    var TheWolf = document.createElement('audio');
        TheWolf.setAttribute('src', '../audio/5posters/TheWolf.mp3');
        $.get();
        TheWolf.addEventListener("load", function() {
          TheWolf.play();
        }, true);
    
    var VCR = document.createElement('audio');
        VCR.setAttribute('src', '../audio/5posters/VCR.mp3');
        $.get();
        VCR.addEventListener("load", function() {
          VCR.play();
        }, true);
    
    var TouchIt_Technologic = document.createElement('audio');
        TouchIt_Technologic.setAttribute('src', '../audio/5posters/TouchIt_Technologic.mp3');
        $.get();
        TouchIt_Technologic.addEventListener("load", function() {
          TouchIt_Technologic.play();
        }, true);
    
//    -- RECTANGLES --
    
//    -- RECT1 - BREEZEBLOCKS --
    
   $('.rect1').hover(function() {
       
       $('.songTxt').html('<b>Breezeblocks</b><br>Alt-J<br><em>An Awesome Wave</em>');
       
   },
           function(){
             $('.songTxt').html('');  
           }
   );
    
    $('.rect1').click(function() {
        
        $(this).toggleClass('recttrans');
        $(this).toggleClass('rect1trans');
        
        $('.rect2').removeClass('recttrans');
        $('.rect3').removeClass('recttrans');
        $('.rect4').removeClass('recttrans');
        $('.rect5').removeClass('recttrans');
        $('.rect6').removeClass('recttrans');
        $('.rect7').removeClass('recttrans');
        $('.rect8').removeClass('recttrans');
        $('.rect9').removeClass('recttrans');
        $('.rect10').removeClass('recttrans');
        $('.rect11').removeClass('recttrans');
        
        $('.rect2').removeClass('rect2trans');
        $('.rect3').removeClass('rect3trans');
        $('.rect4').removeClass('rect4trans');
        $('.rect5').removeClass('rect5trans');
        $('.rect6').removeClass('rect6trans');
        $('.rect7').removeClass('rect7trans');
        $('.rect8').removeClass('rect8trans');
        $('.rect9').removeClass('rect9trans');
        $('.rect10').removeClass('rect10trans');
        $('.rect11').removeClass('rect11trans');
        
//        -- PAUSES EVERYTHING --
        
        DoIWannaKnow.pause();
        FeelsLikeWeOnlyGoBackwards.pause();
        Ghosts.pause();
        GotToGiveItUp.pause();
        JokerAndTheThief.pause();
        MeAndMrJones.pause();
        TheBoysAreBackInTown.pause();
        TheWolf.pause();
        TouchIt_Technologic.pause();
        VCR.pause();
        
//        -- WAITS 1 SECOND TO BEGIN AUDIO --
        setTimeout(function () {
            
            if (Breezeblocks.paused == false) {
            Breezeblocks.pause();
        } else {
            Breezeblocks.play();
        }    
        }, transLength);
        
    });
    
//    -- RECT2 - DO I WANNA KNOW --
    
    $('.rect2').hover(function() {
       
       $('.songTxt').html('<b>Do I Wanna Know</b><br>Arctic Monkeys<br><em>AM</em>');
       
   },
           function(){
             $('.songTxt').html('');  
           }
   );
    
    $('.rect2').click(function() {
       
        $(this).toggleClass('recttrans');
        $(this).toggleClass('rect2trans');
        
        $('.rect1').removeClass('recttrans');
        $('.rect3').removeClass('recttrans');
        $('.rect4').removeClass('recttrans');
        $('.rect5').removeClass('recttrans');
        $('.rect6').removeClass('recttrans');
        $('.rect7').removeClass('recttrans');
        $('.rect8').removeClass('recttrans');
        $('.rect9').removeClass('recttrans');
        $('.rect10').removeClass('recttrans');
        $('.rect11').removeClass('recttrans');
        
        $('.rect1').removeClass('rect1trans');
        $('.rect3').removeClass('rect3trans');
        $('.rect4').removeClass('rect4trans');
        $('.rect5').removeClass('rect5trans');
        $('.rect6').removeClass('rect6trans');
        $('.rect7').removeClass('rect7trans');
        $('.rect8').removeClass('rect8trans');
        $('.rect9').removeClass('rect9trans');
        $('.rect10').removeClass('rect10trans');
        $('.rect11').removeClass('rect11trans');
        
//        -- PAUSES EVERYTHING --
        
        Breezeblocks.pause();
        FeelsLikeWeOnlyGoBackwards.pause();
        Ghosts.pause();
        GotToGiveItUp.pause();
        JokerAndTheThief.pause();
        MeAndMrJones.pause();
        TheBoysAreBackInTown.pause();
        TheWolf.pause();
        VCR.pause();
        TouchIt_Technologic.pause();
        
//        -- WAITS 1 SECOND TO BEGIN AUDIO --
        setTimeout(function () {
            
            if (DoIWannaKnow.paused == false) {
            DoIWannaKnow.pause();
        } else {
            DoIWannaKnow.play();
        }    
        }, transLength);
        
    });
    
//  -- RECT3 - FEELS LIKE WE ONLY GO BACKWARDS --
    
    $('.rect3').hover(function() {
       
       $('.songTxt').html('<b>Feels Like We Only Go Backwards</b><br>Tame Impala<br><em>Lonerism</em>');
       
   },
           function(){
             $('.songTxt').html('');  
           }
   );
    
    $('.rect3').click(function() {
        
        $(this).toggleClass('recttrans');
        $(this).toggleClass('rect3trans');
        
        $('.rect1').removeClass('recttrans');
        $('.rect2').removeClass('recttrans');
        $('.rect4').removeClass('recttrans');
        $('.rect5').removeClass('recttrans');
        $('.rect6').removeClass('recttrans');
        $('.rect7').removeClass('recttrans');
        $('.rect8').removeClass('recttrans');
        $('.rect9').removeClass('recttrans');
        $('.rect10').removeClass('recttrans');
        $('.rect11').removeClass('recttrans');
        
        $('.rect1').removeClass('rect1trans');
        $('.rect2').removeClass('rect2trans');
        $('.rect4').removeClass('rect4trans');
        $('.rect5').removeClass('rect5trans');
        $('.rect7').removeClass('rect7trans');
        $('.rect8').removeClass('rect8trans');
        $('.rect9').removeClass('rect9trans');
        $('.rect10').removeClass('rect10trans');
        $('.rect11').removeClass('rect11trans');
        
//        -- PAUSES EVERYTHING --
        
        Breezeblocks.pause();
        DoIWannaKnow.pause();
        Ghosts.pause();
        GotToGiveItUp.pause();
        JokerAndTheThief.pause();
        MeAndMrJones.pause();
        TheBoysAreBackInTown.pause();
        TheWolf.pause();
        VCR.pause();
        TouchIt_Technologic.pause();
        
//        -- WAITS 1 SECOND TO BEGIN AUDIO --
        setTimeout(function () {
            
            if (FeelsLikeWeOnlyGoBackwards.paused == false) {
            FeelsLikeWeOnlyGoBackwards.pause();
        } else {
            FeelsLikeWeOnlyGoBackwards.play();
        }
//        FeelsLikeWeOnlyGoBackwards.play();            
        }, transLength);
        
    });
    
//    -- RECT4 - GHOSTS --
    
    $('.rect4').hover(function() {
       
       $('.songTxt').html('<b>Ghosts</b><br>Ibeyi<br><em>Ibeyi</em>');
       
   },
           function(){
             $('.songTxt').html('');  
           }
   );
    
    $('.rect4').click(function() {
       
        $(this).toggleClass('recttrans');
        $(this).toggleClass('rect4trans');
        
        $('.rect1').removeClass('recttrans');
        $('.rect2').removeClass('recttrans');
        $('.rect3').removeClass('recttrans');
        $('.rect5').removeClass('recttrans');
        $('.rect6').removeClass('recttrans');
        $('.rect7').removeClass('recttrans');
        $('.rect8').removeClass('recttrans');
        $('.rect9').removeClass('recttrans');
        $('.rect10').removeClass('recttrans');
        $('.rect11').removeClass('recttrans');
        
        $('.rect1').removeClass('rect1trans');
        $('.rect2').removeClass('rect2trans');
        $('.rect3').removeClass('rect3trans');
        $('.rect5').removeClass('rect5trans');
        $('.rect7').removeClass('rect7trans');
        $('.rect8').removeClass('rect8trans');
        $('.rect9').removeClass('rect9trans');
        $('.rect10').removeClass('rect10trans');
        $('.rect11').removeClass('rect11trans');
        
//        -- PAUSES EVERYTHING --
        
        Breezeblocks.pause();
        DoIWannaKnow.pause();
        FeelsLikeWeOnlyGoBackwards.pause();
        GotToGiveItUp.pause();
        JokerAndTheThief.pause();
        MeAndMrJones.pause();
        TheBoysAreBackInTown.pause();
        TheWolf.pause();
        VCR.pause();
        TouchIt_Technologic.pause();
        
//        -- WAITS 1 SECOND TO BEGIN AUDIO --
        setTimeout(function () {
            
            if (Ghosts.paused == false) {
            Ghosts.paused();
        } else {
            Ghosts.play();
        }
//        Ghosts.play();
        }, transLength);
        
    });
    
//    -- RECT5 - GOT TO GIVE IT UP --
    
    $('.rect5').hover(function() {
       
       $('.songTxt').html('<b>Got To Give It Up (Part 1)</b><br>Marvin Gaye<br><em>Live at the London Palladium</em>');
       
   },
           function(){
             $('.songTxt').html('');  
           }
   );
    
    $('.rect5').click(function() {
       
        $(this).toggleClass('recttrans');
        $(this).toggleClass('rect5trans');
        
        $('.rect1').removeClass('recttrans');
        $('.rect2').removeClass('recttrans');
        $('.rect3').removeClass('recttrans');
        $('.rect4').removeClass('recttrans');
        $('.rect6').removeClass('recttrans');
        $('.rect7').removeClass('recttrans');
        $('.rect8').removeClass('recttrans');
        $('.rect9').removeClass('recttrans');
        $('.rect10').removeClass('recttrans');
        $('.rect11').removeClass('recttrans');
        
        $('.rect1').removeClass('rect1trans');
        $('.rect2').removeClass('rect2trans');
        $('.rect3').removeClass('rect3trans');
        $('.rect4').removeClass('rect4trans');
        $('.rect7').removeClass('rect7trans');
        $('.rect8').removeClass('rect8trans');
        $('.rect9').removeClass('rect9trans');
        $('.rect10').removeClass('rect10trans');
        $('.rect11').removeClass('rect11trans');
        
//        -- PAUSES EVERYTHING --
        
        Breezeblocks.pause();
        DoIWannaKnow.pause();
        FeelsLikeWeOnlyGoBackwards.pause();
        Ghosts.pause();
        JokerAndTheThief.pause();
        MeAndMrJones.pause();
        TheBoysAreBackInTown.pause();
        TheWolf.pause();
        VCR.pause();
        TouchIt_Technologic.pause();
        
//        -- WAITS 1 SECOND TO BEGIN AUDIO --
        setTimeout(function () {
            
            if (GotToGiveItUp.paused == false) {
            GotToGiveItUp.pause();
        } else {
            GotToGiveItUp.play();
        }
//        GotToGiveItUp.play();            
        }, transLength);
        
    });
    
//    -- RECT6 - JOKER AND THE THIEF --
    
    $('.rect6').hover(function() {
       
       $('.songTxt').html('<b>Joker And The Thief</b><br>Wolfmother<br><em>Wolfmother</em>');
       
   },
           function(){
             $('.songTxt').html('');  
           }
   );
    
    $('.rect6').click(function() {
       
        $(this).toggleClass('recttrans');
        
        $('.rect1').removeClass('recttrans');
        $('.rect2').removeClass('recttrans');
        $('.rect3').removeClass('recttrans');
        $('.rect4').removeClass('recttrans');
        $('.rect5').removeClass('recttrans');
        $('.rect7').removeClass('recttrans');
        $('.rect8').removeClass('recttrans');
        $('.rect9').removeClass('recttrans');
        $('.rect10').removeClass('recttrans');
        $('.rect11').removeClass('recttrans');
        
        $('.rect1').removeClass('rect1trans');
        $('.rect2').removeClass('rect2trans');
        $('.rect3').removeClass('rect3trans');
        $('.rect4').removeClass('rect4trans');
        $('.rect5').removeClass('rect5trans');
        $('.rect7').removeClass('rect7trans');
        $('.rect8').removeClass('rect8trans');
        $('.rect9').removeClass('rect9trans');
        $('.rect10').removeClass('rect10trans');
        $('.rect11').removeClass('rect11trans');
        
//        -- PAUSES EVERYTHING --
        
        Breezeblocks.pause();
        DoIWannaKnow.pause();
        FeelsLikeWeOnlyGoBackwards.pause();
        Ghosts.pause();
        GotToGiveItUp.pause();
        MeAndMrJones.pause();
        TheBoysAreBackInTown.pause();
        TheWolf.pause();
        VCR.pause();
        TouchIt_Technologic.pause();
        
//        -- WAITS 1 SECOND TO BEGIN AUDIO --
        setTimeout(function () {
            
            if (JokerAndTheThief.paused == false) {
            JokerAndTheThief.pause();
        } else {
            JokerAndTheThief.play();
        }
//        JokerAndTheThief.play();    
        }, transLength);
        
    });
    
//    -- RECT7 - ME & MR JONES --
    
    $('.rect7').hover(function() {
       
       $('.songTxt').html('<b>Me & Mr Jones</b><br>Amy Winehouse<br><em>Back to Black</em>');
       
   },
           function(){
             $('.songTxt').html('');  
           }
   );
    
    $('.rect7').click(function() {
       
        $(this).toggleClass('recttrans');
        $(this).toggleClass('rect7trans');
        
        $('.rect1').removeClass('recttrans');
        $('.rect2').removeClass('recttrans');
        $('.rect3').removeClass('recttrans');
        $('.rect4').removeClass('recttrans');
        $('.rect5').removeClass('recttrans');
        $('.rect6').removeClass('recttrans');
        $('.rect8').removeClass('recttrans');
        $('.rect9').removeClass('recttrans');
        $('.rect10').removeClass('recttrans');
        $('.rect11').removeClass('recttrans');
        
        $('.rect1').removeClass('rect1trans');
        $('.rect2').removeClass('rect2trans');
        $('.rect3').removeClass('rect3trans');
        $('.rect4').removeClass('rect4trans');
        $('.rect5').removeClass('rect5trans');
        $('.rect8').removeClass('rect8trans');
        $('.rect9').removeClass('rect9trans');
        $('.rect10').removeClass('rect10trans');
        $('.rect11').removeClass('rect11trans');
        
//        -- PAUSES EVERYTHING --
        
        Breezeblocks.pause();
        DoIWannaKnow.pause();
        FeelsLikeWeOnlyGoBackwards.pause();
        Ghosts.pause();
        GotToGiveItUp.pause();
        JokerAndTheThief.pause();
        TheBoysAreBackInTown.pause();
        TheWolf.pause();
        VCR.pause();
        TouchIt_Technologic.pause();
        
//        -- WAITS 1 SECOND TO BEGIN AUDIO --
        setTimeout(function () {
            
            if (MeAndMrJones.paused == false) {
            MeAndMrJones.pause();
        } else {
            MeAndMrJones.play();
        }
//        MeAndMrJones.play();      
        }, transLength);
        
    });
    
//    -- RECT8 - THE BOYS ARE BACK IN TOWN --
    
    $('.rect8').hover(function() {
       
       $('.songTxt').html('<b>The Boys Are Back In Town</b><br>Thin Lizzy<br><em>Jailbreak</em>');
       
   },
           function(){
             $('.songTxt').html('');  
           }
   );
    
    $('.rect8').click(function() {
       
        $(this).toggleClass('recttrans');
        $(this).toggleClass('rect8trans');
        
        $('.rect1').removeClass('recttrans');
        $('.rect2').removeClass('recttrans');
        $('.rect3').removeClass('recttrans');
        $('.rect4').removeClass('recttrans');
        $('.rect5').removeClass('recttrans');
        $('.rect6').removeClass('recttrans');
        $('.rect7').removeClass('recttrans');
        $('.rect9').removeClass('recttrans');
        $('.rect10').removeClass('recttrans');
        $('.rect11').removeClass('recttrans');
        
        $('.rect1').removeClass('rect1trans');
        $('.rect2').removeClass('rect2trans');
        $('.rect3').removeClass('rect3trans');
        $('.rect4').removeClass('rect4trans');
        $('.rect5').removeClass('rect5trans');
        $('.rect7').removeClass('rect7trans');
        $('.rect9').removeClass('rect9trans');
        $('.rect10').removeClass('rect10trans');
        $('.rect11').removeClass('rect11trans');
        
//        -- PAUSES EVERYTHING --
        
        Breezeblocks.pause();
        DoIWannaKnow.pause();
        FeelsLikeWeOnlyGoBackwards.pause();
        Ghosts.pause();
        GotToGiveItUp.pause();
        JokerAndTheThief.pause();
        MeAndMrJones.pause();
        TheWolf.pause();
        VCR.pause();
        TouchIt_Technologic.pause();
        
//        -- WAITS 1 SECOND TO BEGIN AUDIO --
        setTimeout(function () {
            
            if (TheBoysAreBackInTown.paused == false) {
            TheBoysAreBackInTown.pause();
        } else {
            TheBoysAreBackInTown.play();
        }
//        TheBoysAreBackInTown.play();    
        }, transLength);
        
    });
    
//    -- RECT9 - THE WOLF --
    
    $('.rect9').hover(function() {
       
       $('.songTxt').html('<b>The Wolf</b><br>Mumford and Sons<br><em>Wilder Minds</em>');
       
   },
           function(){
             $('.songTxt').html('');  
           }
   );
    
    $('.rect9').click(function() {
       
        $(this).toggleClass('recttrans');
        $(this).toggleClass('rect9trans');
        
        $('.rect1').removeClass('recttrans');
        $('.rect2').removeClass('recttrans');
        $('.rect3').removeClass('recttrans');
        $('.rect4').removeClass('recttrans');
        $('.rect5').removeClass('recttrans');
        $('.rect6').removeClass('recttrans');
        $('.rect7').removeClass('recttrans');
        $('.rect8').removeClass('recttrans');
        $('.rect10').removeClass('recttrans');
        $('.rect11').removeClass('recttrans');
        
        $('.rect1').removeClass('rect1trans');
        $('.rect2').removeClass('rect2trans');
        $('.rect3').removeClass('rect3trans');
        $('.rect4').removeClass('rect4trans');
        $('.rect5').removeClass('rect5trans');
        $('.rect7').removeClass('rect7trans');
        $('.rect8').removeClass('rect8trans');
        $('.rect10').removeClass('rect10trans');
        $('.rect11').removeClass('rect11trans');
        
//        -- PAUSES EVERYTHING --
        
        Breezeblocks.pause();
        DoIWannaKnow.pause();
        FeelsLikeWeOnlyGoBackwards.pause();
        Ghosts.pause();
        GotToGiveItUp.pause();
        JokerAndTheThief.pause();
        MeAndMrJones.pause();
        TheBoysAreBackInTown.pause();
        VCR.pause();
        TouchIt_Technologic.pause();
        
//        -- WAITS 1 SECOND TO BEGIN AUDIO --
        setTimeout(function () {
            
            if (TheWolf.paused == false) {
            TheWolf.pause();
        } else {
            TheWolf.play();
        }
//        TheWolf.play();  
        }, transLength);
        
    });
    
//    -- RECT10 - TOUCH IT / TECHNOLOGIC --
    
    $('.rect10').hover(function() {
       
       $('.songTxt').html('<b>VCR</b><br>The xx<br><em>xx</em>');
       
   },
           function(){
             $('.songTxt').html('');  
           }
   );
    
    $('.rect10').click(function() {
       
        $(this).toggleClass('recttrans');
        $(this).toggleClass('rect10trans');
        
        $('.rect1').removeClass('recttrans');
        $('.rect2').removeClass('recttrans');
        $('.rect3').removeClass('recttrans');
        $('.rect4').removeClass('recttrans');
        $('.rect5').removeClass('recttrans');
        $('.rect6').removeClass('recttrans');
        $('.rect7').removeClass('recttrans');
        $('.rect8').removeClass('recttrans');
        $('.rect9').removeClass('recttrans');
        $('.rect11').removeClass('recttrans');
        
        $('.rect1').removeClass('rect1trans');
        $('.rect2').removeClass('rect2trans');
        $('.rect3').removeClass('rect3trans');
        $('.rect4').removeClass('rect4trans');
        $('.rect5').removeClass('rect5trans');
        $('.rect7').removeClass('rect7trans');
        $('.rect8').removeClass('rect8trans');
        $('.rect9').removeClass('rect9trans');
        $('.rect11').removeClass('rect11trans');
        
//        -- PAUSES EVERYTHING --
        
        Breezeblocks.pause();
        DoIWannaKnow.pause();
        FeelsLikeWeOnlyGoBackwards.pause();
        Ghosts.pause();
        GotToGiveItUp.pause();
        JokerAndTheThief.pause();
        MeAndMrJones.pause();
        TheBoysAreBackInTown.pause();
        TheWolf.pause();
        TouchIt_Technologic.pause();
        
//        -- WAITS 1 SECOND TO BEGIN AUDIO --
        setTimeout(function () {
            
            if (VCR.paused == false) {
            VCR.pause();
        } else {
            VCR.play();
        }
//        VCR.play();    
        }, transLength);
        
    });
    
    $('.rect11').hover(function() {
       
       $('.songTxt').html('<b>Touch It/Technologic</b><br>Daft Punk<br><em>Alive 2007</em>');
       
   },
           function(){
             $('.songTxt').html('');  
           }
   );
    
    $('.rect11').click(function() {
       
        $(this).toggleClass('recttrans');
        $(this).toggleClass('rect11trans');
        
        $('.rect1').removeClass('recttrans');
        $('.rect2').removeClass('recttrans');
        $('.rect3').removeClass('recttrans');
        $('.rect4').removeClass('recttrans');
        $('.rect5').removeClass('recttrans');
        $('.rect6').removeClass('recttrans');
        $('.rect7').removeClass('recttrans');
        $('.rect8').removeClass('recttrans');
        $('.rect9').removeClass('recttrans');
        $('.rect10').removeClass('recttrans');
        
        $('.rect1').removeClass('rect1trans');
        $('.rect2').removeClass('rect2trans');
        $('.rect3').removeClass('rect3trans');
        $('.rect4').removeClass('rect4trans');
        $('.rect5').removeClass('rect5trans');
        $('.rect7').removeClass('rect7trans');
        $('.rect8').removeClass('rect8trans');
        $('.rect9').removeClass('rect9trans');
        $('.rect10').removeClass('rect10trans');
        
//        -- PAUSES EVERYTHING --
        
        Breezeblocks.pause();
        DoIWannaKnow.pause();
        FeelsLikeWeOnlyGoBackwards.pause();
        Ghosts.pause();
        GotToGiveItUp.pause();
        JokerAndTheThief.pause();
        MeAndMrJones.pause();
        TheBoysAreBackInTown.pause();
        TheWolf.pause();
        VCR.pause();
        
//        -- WAITS 1 SECOND TO BEGIN AUDIO --
        setTimeout(function () {
            
            if (TouchIt_Technologic.paused == false) {
            TouchIt_Technologic.pause();
        } else {
            TouchIt_Technologic.play();
        }
//        TouchIt_Technologic.play();    
        }, transLength);
        
    });

    
});