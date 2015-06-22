$( document ).ready(function() {

	//variables
	var forfait = 'basic';
	var calc;
	var ratio = 2;

	//pricing selection
	$(".button").click(function() {
		if (!$(this).parent().hasClass("selected")) {

			$(".offers").children().removeClass("selected");
			$(this).parent().addClass("selected");

			if ($(this).parent().hasClass("basic")) {
				forfait = 'basic';
				calc = calc / ratio;
				$(".price").html("Votre prix sera de " + calc + "€ /mois");
			}
			if ($(this).parent().hasClass("pro")) {
				forfait = 'pro';
				calc = calc * ratio;
				$(".price").html("Votre prix sera de " + calc + "€ /mois");
			}
			else {
				return true;
			}	

		}
		else {
			return true;
		}
	});

	//slider
	var valueBubble = '<output class="rangeslider__value-bubble" />',
    tempPosition, 
    position;

	$('input[type="range"]').rangeslider({
	  polyfill: false,
	  onInit: function() {
	      this.$range.append($(valueBubble));
	      this.update();
	  },
	  onSlide: function(pos, value) {
	    var $valueBubble = $('.rangeslider__value-bubble', this.$range);
	    tempPosition = pos + this.grabX;
	    position = (tempPosition <= this.handleWidth) ? this.handleWidth : (tempPosition >= this.maxHandleX) ? this.maxHandleX : tempPosition;
	    
	    if ($valueBubble.length) {
	      $valueBubble[0].style.left = Math.ceil(position) + 'px';
	      $valueBubble[0].innerHTML = value;

	      if (forfait === 'basic') {
			calc = value * 0.2 ;	      	
	      };
	      if (forfait === 'pro') {
			calc = value * 0.4 ;	      	
	      };
	      $(".price").html("Votre prix sera de " + calc + "€ /mois");
	    }
	  }
	});



});