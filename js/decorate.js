$(document).ready(function(){

  $('#chair').click(function(){
      //code solution to put the blue chair in index.html
    $('.blue-chair').append("<img src='images/blue-chair.png'>");
  });

  $('#couch').click(function(){
    $('.couch').append("<img src='images/couch.png'>");

    //code solution here to put the couch in index.html
  });

  $('#chandelier').click(function(){
     $('.chandelier').append("<img src='images/chandelier.png'>");


  //code solution here to put the chandelier in index.html
  });

  $('#frame-art').click(function(){
    $('#art').addClass('frame-art');

  //code solution here to frame the art on the wall
  });

  $('#eat-pizza').click(function(){
    $('#pizza').toggle();
    //code solution here to make the pizza disappear and reappear
  });

  $('#add-tv').click(function(){
     $('.tv').append("<img src='images/off-tv.png'>");


    //code solution here to add the tv to index.html
  });

  $('#watch-tv').click(function(){
$('.tv img').replaceWith("<img src='images/tv.png'>");

    //code solution here to turn the tv on
  });



});