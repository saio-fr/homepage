$( document ).ready(function() {

	//variables
	var forfait = 'basic';
	var val = 9;

	var calcAuto;
	var ratioAuto;
	var conversationRange;

	var calcLive;
	var agents;
	var ratioLive = 2;

	//slider var
	var valueBubble = '<output class="rangeslider__value-bubble" />',
    tempPosition, 
    position;

	//pricing selection
	$(".button").click(function() {
		if (!$(this).parent().hasClass("selected")) {

			$(".offers").children().removeClass("selected");
			$(this).parent().addClass("selected");

			if ($(this).parent().hasClass("basic")) {
				forfait = 'basic';
				updatePrice();
				calcLive = calcLive / ratioLive;
			}
			if ($(this).parent().hasClass("pro")) {
				forfait = 'pro';
				updatePrice();
				calcLive = calcLive / ratioLive;
			}
			else {
				return true;
			}	

		}
		else {
			return true;
		}
	});

	//update price
	function updatePrice() {
    	if (val < 10) {
			if (forfait === 'basic') {
				calcAuto = 69 + val * 10;
			}
			if (forfait === 'pro') {
				calcAuto = 79 + val * 20;
			}
			$(".price").html(calcAuto + "€ /mois");
		}
		if (val > 18) {
			if (forfait === 'basic') {
				calcAuto = 519 + (val - 18) * 160;
			}
			if (forfait === 'pro') {
				calcAuto = 599 + (val - 18) * 240;
			}
			$(".price").html(calcAuto + "€ /mois");
		}
		if ((9 < val) && (val < 19)) {
			if (forfait === 'basic') {
				calcAuto = 159 + (val - 9) * 40;
			}
			if (forfait === 'pro') {
				calcAuto = 239 + (val - 9) * 40;
			}
			$(".price").html(calcAuto + "€ /mois");
		}
		if (val === 28) {
			$(".price").html("Sur Devis");
		}
	}

	//slider

    //auto chat
	$(".auto-chat").find('input[type="range"]').rangeslider({
	  polyfill: false,
	  onInit: function() {
	      this.$range.append($(valueBubble));
	      this.update();
	  },
	  onSlide: function(pos, value) {
	  	val = value;
	    var $valueBubble = $('.rangeslider__value-bubble', this.$range);
	    tempPosition = pos + this.grabX;
	    position = (tempPosition <= this.handleWidth) ? this.handleWidth : (tempPosition >= this.maxHandleX) ? this.maxHandleX : tempPosition;

	    if ($valueBubble.length) {
	    	$valueBubble[0].style.left = Math.ceil(position) + 'px';
			if (val < 10) {
				$valueBubble[0].innerHTML = (value + 1) * 100 +"<br>conversations";
				if (forfait === 'basic') {
					calcAuto = 69 + val * 10;
				}
				if (forfait === 'pro') {
					calcAuto = 79 + val * 20;
				}
				$(".price").html(calcAuto + "€ /mois");
			}
			if (val > 18) {
				$valueBubble[0].innerHTML = (value - 17) * 10000 +"<br>conversations";
				if (forfait === 'basic') {
					calcAuto = 519 + (value - 18) * 160;
				}
				if (forfait === 'pro') {
					calcAuto = 599 + (value - 18) * 240;
				}
				$(".price").html(calcAuto + "€ /mois");
			}
			if ((9 < val) && (val < 19)) {
				$valueBubble[0].innerHTML = (val - 8) * 1000 +"<br>conversations";
				if (forfait === 'basic') {
					calcAuto = 159 + (val - 9) * 40;
				}
				if (forfait === 'pro') {
					calcAuto = 239 + (val - 9) * 40;
				}
				$(".price").html(calcAuto + "€ /mois");
			}
			if (value === 28) {
				$valueBubble[0].innerHTML = "+100000 conversations";
				$(".price").html("Sur Devis");
			}
	    }
	  }
	});

    //live chat
	$(".live-chat").find('input[type="range"]').rangeslider({
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
	      $valueBubble[0].innerHTML = value + "<br>agents";

	      if (forfait === 'basic') {
			calcLive = value * 0.2 ;	      	
	      };
	      if (forfait === 'pro') {
			calcLive = value * 0.4 ;	      	
	      };
	      $(".price").html(calcLive + "€ /mois");
	    }
	  }
	});


});