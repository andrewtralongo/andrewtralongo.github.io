$(document).ready(function() {

    
    $('.title').hover(function(event) {
        $('.imgContainer').toggleClass('hide');
        $('.descContainer').toggleClass('show');
        $('.nav').toggleClass('tHov');
    });

    $('.nav_all').click(function(event) {
      $('.item').removeClass('hide');
      $('.item').addClass('show');
        
      $('.item').removeClass('colFilter');
    });

    $('.nav_animal').click(function(event) {
      $('.item').removeClass('show');
      $('.item').addClass('hide');

      $('.item.animal').removeClass('hide');
      $('.item.animal').addClass('show');
        
      $('.item').addClass('colFilter');
    });

    $('.nav_promo').click(function(event) {
      $('.item').removeClass('show');
      $('.item').addClass('hide');

      $('.item.promo').removeClass('hide');
      $('.item.promo').addClass('show');
        
      $('.item').addClass('colFilter');
    });


    $('.nav_deter').click(function(event) {
      $('.item').removeClass('show');
      $('.item').addClass('hide');

      $('.item.deter').removeClass('hide');
      $('.item.deter').addClass('show');
        
      $('.item').addClass('colFilter');
    });

    $('.nav_capt').click(function(event) {
      $('.item').removeClass('show');
      $('.item').addClass('hide');

      $('.item.capt').removeClass('hide');
      $('.item.capt').addClass('show');
        
      $('.item').addClass('colFilter');
    });
    
    $('.nav_anal').click(function(event) {
      $('.item').removeClass('show');
      $('.item').addClass('hide');

      $('.item.anal').removeClass('hide');
      $('.item.anal').addClass('show');
        
      $('.item').addClass('colFilter');
    });

    $('.nav_layer').click(function(event) {
      $('.item').removeClass('show');
      $('.item').addClass('hide');

      $('.item.layer').removeClass('hide');
      $('.item.layer').addClass('show');
        
      $('.item').addClass('colFilter');
    });

    $('.nav_act').click(function(event) {
      $('.item').removeClass('show');
      $('.item').addClass('hide');

      $('.item.act').removeClass('hide');
      $('.item.act').addClass('show');
        
      $('.item').addClass('colFilter');
    });

    $('.nav_nature').click(function(event) {
      $('.item').removeClass('show');
      $('.item').addClass('hide');

      $('.item.nature').removeClass('hide');
      $('.item.nature').addClass('show');
        
      $('.item').addClass('colFilter');
    });

    $('.nav_help').click(function(event) {
      $('.item').removeClass('show');
      $('.item').addClass('hide');

      $('.item.help').removeClass('hide');
      $('.item.help').addClass('show');
        
      $('.item').addClass('colFilter');
    });

    $('.nav_impair').click(function(event) {
      $('.item').removeClass('show');
      $('.item').addClass('hide');

      $('.item.impair').removeClass('hide');
      $('.item.impair').addClass('show');
        
      $('.item').addClass('colFilter');
    });
    
  });

/*
--Tags--
Animal-animal
Promotion-promo
Deterrent-deter
Capture-capt
Analogue-anal
Layered-layer
Activity-act
Nature-nature
Helpless-help
Impairment-impair
*/
