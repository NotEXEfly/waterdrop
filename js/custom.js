$(document).ready(function(){
  console.log('Window on load: ' + $(window).outerWidth());
  //menu + adaptive 
  //close menu on click
  $('nav li').on('click', function() {
    if ($(window).outerWidth() <= 768) {
      $('#hamburger-icon').toggleClass('active');
      $('.nav-wrap').fadeOut('slow');
    }
  });

  if ($(window).outerWidth() <= 768) $('.nav-wrap').hide();
  else $('.nav-wrap').show();
 
  $(window).resize(function() {
    if (($(window).outerWidth() <= 768) && !$('#hamburger-icon').hasClass('active')) $('.nav-wrap').hide();
    else $('.nav-wrap').show();
  });

  $('#hamburger-icon').click(function() {
     $(this).toggleClass('active');
     if($(this).hasClass('active')) $('.nav-wrap').fadeIn('slow');
     else $('.nav-wrap').fadeOut('slow');  
     return false;
  });

  //Проверка карты на наличие
  if($('#map').html() == '') $('#map').hide();
  //Прилипание навигаци
   $(window).scroll(function() {
   if(($(this).scrollTop() >= $('header').height()) && $(window).width() > 768) 
    $('nav').addClass('stickytop');
   else 
    $('nav').removeClass('stickytop');
   });
  //Модалка
	$(".modal").each( function(){
    $(this).wrap('<div class="overlay"></div>')
  });

  $(".open-modal").on('click', function(e){
    //получаю описание
    SECONDARY_INFO = $(this).attr('data-info');


    e.preventDefault();
    e.stopImmediatePropagation;
    
    var $this = $(this),
        modal = $($this).data("modal");
    
    $(modal).parents(".overlay").addClass("open");
    setTimeout( function(){
      $(modal).addClass("open");
    }, 350);
  
    $(document).on('click', function(e){
      var target = $(e.target);
      
      if ($(target).hasClass("overlay")){
        $(target).find(".modal").each( function(){
          $(this).removeClass("open");
        });
        setTimeout( function(){
          $(target).removeClass("open");
        }, 350);
      } 
    });
    
  });

  $(".close-modal").on('click', function(e){
    e.preventDefault();
    e.stopImmediatePropagation;
    
    var $this = $(this),
        modal = $($this).data("modal");
    
    $(modal).removeClass("open");
    setTimeout( function(){ 
      $(modal).parents(".overlay").removeClass("open");
    }, 350);
    
  });

	//Движение выподающего списка
	smoothList();
  $(window).resize(function(){smoothList()});
  $("#toggle-list").click(function(){smoothList()});

  function smoothList(){
    var pos = $("#toggle-list").offset();
    var endPos = pos.left - 10;
    var elem = $(".sail-options").css("left", endPos);
  }

	//Плавно выпадающий список
  $(function(){
    $('#toggle-list').on('click', function() {
       $('.sail-options').slideToggle(300, function(){
          if($(this).css('display') === "none"){
            $(this).removeAttr('style');
          }
       });
    });
	});

});
 // --- плавная прокрутка к якорям ---
function slowScroll (id) {
  var offset = 60;
  //проверка нажат ли гамбургер
  if($('#hamburger-icon').hasClass('active')) offset = 0;
	 //шапка если есть
	$('html,body').animate({
		scrollTop: $(id).offset ().top - offset
	}, 1000);
	return false;
}