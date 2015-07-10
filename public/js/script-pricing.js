$( document ).ready(function() {

	//variables
	var val = 9,
	calcAuto,

	reducInit = 1,
	reduc = reducInit,

	calcOptions = 0,
	forfaitOptions = 0,
	optionsPrice = "",
	devisTrue = ""; 

	//slider var
	var valueBubble = '<output class="rangeslider__value-bubble" />',
    tempPosition, 
    position;

    //numbers with spaces
	function numberWithSpaces(x) {
	    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
	}

	//pricing selection
	$(".button").click(function() {

		if (!$(this).parent().hasClass("selected")) {

			$(".offers").children().removeClass("selected");
			$(this).parent().addClass("selected");

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
		else {
			return true;
		}

	});

	//update price
	function updatePrice() {

		if (val < 11) {
			calcAuto = Math.round((406 + (val - 1) * 56) * reduc);
		}
		if (val > 10) {
			calcAuto = Math.round((1084 + (val - 11) * 168) * reduc);
		}
		if (val > 19) {
			calcAuto = Math.round((3436 + (val - 21) * 1008) * reduc);
		}

		$(".price").html("<strong>" + numberWithSpaces(calcAuto + forfaitOptions) + "€</strong> /mois");
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

			if (val < 11) {
				$valueBubble[0].innerHTML = numberWithSpaces(value * 10000) +"<br>pages vues";
				calcAuto = Math.round((406 + (value - 1) * 56) * reduc);
			}
			if (val > 10) {
				$valueBubble[0].innerHTML = numberWithSpaces((value - 9) * 100000) +"<br>pages vues";
				calcAuto = Math.round((1084 + (value - 11) * 168) * reduc);
			}
			if (value > 19) {
				$valueBubble[0].innerHTML = numberWithSpaces((value - 19) * 1000000) +"<br>pages vues";
				calcAuto = Math.round((3436 + (value - 21) * 1008) * reduc);
			}

			$(".price").html("<strong>" + numberWithSpaces(calcAuto + forfaitOptions) + "€</strong> /mois");
	    }
	  }
	});

	//engagement
	$(".radio").click(function() {

		if ($(this).hasClass("selected")) {
			return true;
		}
		else {
			$(this).parent().parent().parent().find(".radio").removeClass("selected");
			$(this).addClass("selected");
			reduc = reducInit - parseFloat($(this).attr("engage"))/100;
			updatePrice();
		}

	});

    //options
	$(".checkbox").click(function() {

		if ($(this).hasClass("checked")) {
			$(this).removeClass("checked");	
			$(this).parent().css({'font-weight':'300'});
			calcOptions -= parseFloat($(this).attr("value"));
			if (($(this).attr("forfait")) != null) {
				forfaitOptions -= parseFloat($(this).attr("forfait"));
				updatePrice();
				console.log(forfaitOptions);
			}
		}
		else {
			$(this).addClass("checked");
			$(this).parent().css({'font-weight':'400'});
			calcOptions += parseFloat($(this).attr("value"));
			if (($(this).attr("forfait")) != null) {
				forfaitOptions += parseFloat($(this).attr("forfait"));
				updatePrice();
				console.log(forfaitOptions);
			}
		}

		if (parseFloat($(this).attr("value")) != 0) {
			optionsPrice = "<strong>+ " + numberWithSpaces(calcOptions) + "€</strong> d'options";
		}
		else if (parseFloat($(this).attr("devis")) === 0 && devisTrue === "") {
			devisTrue = " + devis";
		}
		else if (parseFloat($(this).attr("devis")) === 0 && devisTrue != "") {
			devisTrue = "";
		}
		else if (calcOptions === 0) {
			optionsPrice = "";
		}
		else {
			return true;
		}

		$(".options").html(optionsPrice + devisTrue);
	});


});