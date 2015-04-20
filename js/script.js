$( document ).ready(function() {

  //Variables
  var produits_open=false;

	//Animations nav
	$(window).scroll(function() {
    var height = $(window).scrollTop();
    if(height > 30 && width > 900) {
      $("nav").css({'position':'fixed'});    			
      $("nav").css({'top':'0'});
      $("nav").css({'width':'100%'});
      $("nav").css({'margin':'0 auto 0 auto'});
    }
  });

  $(window).scroll(function() {
    var height = $(window).scrollTop();
    if(height < 30 && width > 900) {
      $("nav").css({'position':''});
      $("nav").css({'top':''});
      $("nav").css({'width':''});
      $("nav").css({'margin':''});
    }
  });

  //Confirmation email
  

  //Alerte
  $("#ref-references").find("img").on('click', function() {
     alert(max_count+"\nsize_extend="+size_extend+"\nsize_small="+size_small+"\nsize_tablet="+size_tablet+"\nsize_smartphone="+size_smartphone);
  });


});