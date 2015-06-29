$( document ).ready(function() {

	//variables
	var forfait = 'basic';
	var val = 9;
	var valLive = 5;

	var calcAuto;
	var ratioAuto;
	var conversationRange;

	var calcLive;
	var agents;
	var ratioLive = 2;

	var calcOptions = 0;

	//slider var
	var valueBubble = '<output class="rangeslider__value-bubble" />',
    tempPosition, 
    position;

	//pricing selection
	$(".button").click(function() {
		if (!$(this).parent().hasClass("selected")) {

			$(".offers").children().removeClass("selected");
			$(this).parent().addClass("selected");

			if ($(this).parent().parent().hasClass("auto-chat")) {
				if ($(this).parent().hasClass("basic")) {
					forfait = 'basic';
					updatePrice();
				}
				if ($(this).parent().hasClass("pro")) {
					forfait = 'pro';
					updatePrice();
				}
				else {
					return true;
				}					
			}
			if ($(this).parent().parent().hasClass("live-chat")) {
				if ($(this).parent().hasClass("basic")) {
					forfait = 'basic';
					calcLive = valLive * 39 ;
					$(".price").html(calcLive + "€ /mois");	
				}
				if ($(this).parent().hasClass("pro")) {
					forfait = 'pro';
					calcLive = valLive * 49 ;
					$(".price").html(calcLive + "€ /mois");
				}
				else { 
					return true;
				}					
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
				calcAuto = Math.round((69 + val * 10) * (10/7));
			}
			if (forfait === 'pro') {
				calcAuto = Math.round((79 + val * 20) * (10/7));
			}
			$(".price").html(calcAuto + "€ /mois");
		}
		if (val > 18) {
			if (forfait === 'basic') {
				calcAuto = Math.round((519 + (val - 18) * 160) * (10/7));
			}
			if (forfait === 'pro') {
				calcAuto = Math.round((599 + (val - 18) * 240) * (10/7));
			}
			$(".price").html(calcAuto + "€ /mois");
		}
		if ((9 < val) && (val < 19)) {
			if (forfait === 'basic') {
				calcAuto = Math.round((159 + (val - 9) * 40) * (10/7));
			}
			if (forfait === 'pro') {
				calcAuto = Math.round((239 + (val - 9) * 40) * (10/7));
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
				$valueBubble[0].innerHTML = (value + 1) * 1000 +"<br>pages vues";
				if (forfait === 'basic') {
					calcAuto = Math.round((69 + val * 10)* (10/7));
				}
				if (forfait === 'pro') {
					calcAuto = Math.round((79 + val * 20) * (10/7));
				}
				$(".price").html(calcAuto + "€ /mois");
			}
			if (val > 18) {
				$valueBubble[0].innerHTML = (value - 17) * 100000 +"<br>pages vues";
				if (forfait === 'basic') {
					calcAuto = Math.round((519 + (value - 18) * 160) * (10/7));
				}
				if (forfait === 'pro') {
					calcAuto = Math.round((599 + (value - 18) * 240) * (10/7));
				}
				$(".price").html(calcAuto + "€ /mois");
			}
			if ((9 < val) && (val < 19)) {
				$valueBubble[0].innerHTML = (val - 8) * 10000 +"<br>pages vues";
				if (forfait === 'basic') {
					calcAuto = Math.round((159 + (val - 9) * 40) * (10/7));
				}
				if (forfait === 'pro') {
					calcAuto = Math.round((239 + (val - 9) * 40) * (10/7));
				}
				$(".price").html(calcAuto + "€ /mois");
			}
			if (value === 28) {
				$valueBubble[0].innerHTML = "+1000000 pages vues";
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
	  	valLive = value;
	    var $valueBubble = $('.rangeslider__value-bubble', this.$range);
	    tempPosition = pos + this.grabX;
	    position = (tempPosition <= this.handleWidth) ? this.handleWidth : (tempPosition >= this.maxHandleX) ? this.maxHandleX : tempPosition;
	    
	    if ($valueBubble.length) {
	      $valueBubble[0].style.left = Math.ceil(position) + 'px';
	      $valueBubble[0].innerHTML = value + "<br>agents";

	      if (forfait === 'basic') {
			calcLive = Math.round(valLive * 39 * (10/7));	      	
	      };
	      if (forfait === 'pro') {
			calcLive = Math.round(valLive * 49 * (10/7));	      	
	      };
	      $(".price").html(calcLive + "€ /mois");
	    }
	  }
	});

    //options
	$(".checkbox").click(function() {
		if ($(this).hasClass("checked")) {
			$(this).removeClass("checked");	
			calcOptions = calcOptions - parseFloat($(this).attr("value"));
		}
		else {
			$(this).addClass("checked");
			calcOptions = calcOptions + parseFloat($(this).attr("value"));
		}
		if (calcOptions != 0) {
			$(".options").html("+ " + calcOptions + "€ d'options");			
		};
		if (calcOptions === 0) {
			$(".options").html("");
		}
	});


});