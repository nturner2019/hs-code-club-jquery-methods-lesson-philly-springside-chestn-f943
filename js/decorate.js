$(document).ready(function(){

  $('#chair').click(function(){
      $('.blue-chair').append("<img src='images/blue-chair.png'>");
  });

  $('#couch').click(function(){
      $('.couch').append("<img src='images/couch.png'>");
  });

  $('#chandelier').click(function(){
    $('.chandelier').append("<img src='images/chandelier.png'>");
  });

  $('#frame-art').click(function(){
    $('#art').addClass('frame-art');
  })

  $('#eat-pizza').click(function(){
    $('#pizza').toggle();
  });

  $('#add-tv').click(function(){
    $('.tv').append("<img src='images/off-tv.png'>");
  });

  $('#watch-tv').click(function(){
    $('.tv img').replaceWith("<img src='images/tv.png'>");
  });



});