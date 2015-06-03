$( document ).ready(function() {

  //variables
  var width = $(window).width();
  var produits_open=false;

  //open/close menu
  $(".solutions").click(function() {

    if (width > 1200) {
      if (produits_open==false) {
        $(".solutions-menu").animate({'top': '+=250px'}, 500);
        produits_open=true;
      }
      else {
        $(".solutions-menu").animate({'top': '-=250px'}, 500);
        produits_open=false;
      }
    }

    if (width < 1200) {
      if (produits_open==false) {
        $(".solutions-menu").animate({'top': '+=500px'}, 500);
        produits_open=true;
      }
      else {
        $(".solutions-menu").animate({'top': '-=500px'}, 500);
        produits_open=false;
      }    
    }

  });

  $("section").click(function() {

    if (width > 1200) {
      if (produits_open==true) {
        $(".solutions-menu").animate({'top': '-=250px'}, 500);
        produits_open=false;
      }
      else {
        return true;
      }
    }

    if (width < 1200) {
      if (produits_open==true) {
        $(".solutions-menu").animate({'top': '-=500px'}, 500);
        produits_open=false;
      }
      else {
        return true;
      }
    }

  });

  //echap sur menu open
  $(document).keyup(function(e) {

    if (e.keyCode == 27) {

      if (width > 1200) {
        $(".solutions-menu").animate({'top': '-=250px'}, 500);
        produits_open=false;
      }

      if (width < 1200) {
        $(".solutions-menu").animate({'top': '-=500px'}, 500);
        produits_open=false;
      }
    }

  });

  //open/close menu mobile
  $(".mobile-menu").click(function() {

    if (width > 700) {

      if (produits_open==false) {
        $(".solutions-menu").animate({'top': '+=500px'}, 500);
        produits_open=true;
      }
      else {
        $(".solutions-menu").animate({'top': '-=500px'}, 500);
        produits_open=false;
      }
    }

    if (width < 700) {

      if (produits_open==false) {
        $(".solutions-menu").animate({'top': '+=430px'}, 500);
        produits_open=true;
      }
      else {
        $(".solutions-menu").animate({'top': '-=430px'}, 500);
        produits_open=false;
      }
    }

  });

  //ajax
  $(".button.mail").click(function(e){

    e.preventDefault();

    var email = $('input[name="email"]').val(),
    lname = $('input[name="lname"]').val(),
    company = $('input[name="company"]').val(),
    subject = $('select[name="subject"]').val(),
    message = $('textarea[name="message"]').val(),
    test = $('input[name="test-header"]').val() ||
      $('input[name="test-footer"]').val();
    data = {
      email: email,
      lname: lname,
      company: company,
      subject: subject,
      message: message,
      test: test
    };

    console.log(data);

    $.ajax({
      url : 'http://saio.fr/mail',
      type : 'POST',
      data : data,
      success : function(resp, status){
        $(".button.mail").addClass("send");
        $(".button.mail").text("Envoyé");
        $(".button.mail").attr("disabled", "disabled");
        console.log('success');
      },          
      error : function(result, status, error){
        console.log('error');
      },
      complete : function(result, status){
      }
    });
  });


});