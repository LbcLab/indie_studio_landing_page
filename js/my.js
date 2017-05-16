$('#navbarExample li a').on('click', function(){
  $('#navbarExample li a.selected').removeClass('selected');
  $(this).addClass('selected').parent().siblings().children().removeClass('current');
});
