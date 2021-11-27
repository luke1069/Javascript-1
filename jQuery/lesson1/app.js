$(function(){
  $('.box1').slideDown(2000,function(){
    $('.box1').css({
      'background-color':'#0000FF',
      'width':'200px',
      'height':'200px'
    }).slideUp(1000);
  });

  $('.box2').slideUp(2000,function(){
    $('.box2').slideDown(1000,function(){
      $('.box2').hide();
    });
  });

});
