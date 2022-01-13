$(document).ready(function(){
  $('.box1').slideDown(1000, function(){
    $('.box1').css({
      'background-color':'#0000FF',
      'width':'200px',
      'height':'200px'
    }).slideUp(2000);
  });
});