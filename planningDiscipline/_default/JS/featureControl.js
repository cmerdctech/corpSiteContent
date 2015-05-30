(function($) {

	var scroller = $('#scroll1Container'),
		isSlick = false;

	var initSlick = function() {
		if (isSlick) {
			return;
		}
		console.log('initing slick');
		scroller.slick({
			dots: true,
			infinite: true,
			speed: 300,
			adaptiveHeight: true,
			autoplay: false,
			arrows: true,
			appendArrows: $('#scroll1NavContainer'),
			fade: true
		});
		isSlick = true;
	}

	var killSlick = function() {
		if (!isSlick) {
			return;
		}
		scroller.slick('unslick');
		isSlick = false;
	}

	initSlick();

	//$('#myAlert').foundation({alert: {speed: 3000}});
	var resizeFunctionList = [];


	$(window).resize(function(event) {
		event.stopPropagation();
		
		var newSize = {
			height: $(window).height(),
			width: $(window).width()
		};
		for (var i = 0, len = resizeFunctionList.length; i < len; i++) {
			var element = resizeFunctionList[i];
			element(newSize);
		}

	});

	var updateSlick=function(newSize) {
		if (newSize.width < 750) {
			killSlick();
		} else {
			initSlick()
		}
	};
	resizeFunctionList.push(updateSlick);
	
	updateSlick({
			height: $(window).height(),
			width: $(window).width()
		});
	
})(jQuery)
