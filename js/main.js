$(document).ready(function () {

    $('.slider').bxSlider({
        touchEnabled : (navigator.maxTouchPoints > 0)
    })
});

$(function(){
    $('#toggle').on('click', function(){
      $('#main-menu .menu-list').slideToggle();
    });
  
  })  // end$()