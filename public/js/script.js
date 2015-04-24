$( document ).ready(function() {

  //variables
  var produits_open=false;

  //open/close menu
  $(".solutions").click(function() {
    if (produits_open==false) {
      $(".solutions-menu").animate({'top': '+=250px'}, 500);
      produits_open=true;
    }
    else {
      $(".solutions-menu").animate({'top': '-=250px'}, 500);
      produits_open=false;
    }
  });
  $("section").click(function() {
    if (produits_open==true) {
      $(".solutions-menu").animate({'top': '-=250px'}, 500);
      produits_open=false;
    }
    else {
      return true;
    }
  });

  //echap sur menu open
  $(document).keyup(function(e) {

    if (e.keyCode == 27) { 
      $(".solutions-menu").animate({'top': '-=250px'}, 500);
      produits_open=false;
    }

  });

  //ajax
  $(".button.mail").click(function(e){

    e.preventDefault();

    var email = $('input[name="email"]').val(),
    subject = $('select[name="subject"]').val(),
    message = $('textarea[name="message"]').val(),
    test = $('input[name="test-header"]').val() ||
      $('input[name="test-footer"]').val();
    data = {
      email: email,
      subject: subject,
      message: message,
      test: test
    };

    console.log(data);

    $.ajax({
      url : 'http://90.85.8.147:3000/mail',
      type : 'POST',
      data : data,
      success : function(resp, status){
        $(".button.mail").addClass("send");
        $(".button.mail").text("Envoyé");
        $(".button.mail").attr("disabled", "disabled");
      },          
      error : function(result, status, error){
      },
      complete : function(result, status){
      }
    });
  });


});