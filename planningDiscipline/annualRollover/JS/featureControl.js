(function($) {


	var scroller = $('#scroll1Container'),
		isSlick = false;

	scroller.on('init', function(event) {
		//'init' is a slick scroller event from feature panel
		setTimeout(function() {
			$('#info1Container').fidgets_control_vertical_structure({
			defaultPanelId:'introduction'
			});
		}, 1000); //for some reason, the init event fires about a second before the size of the panel is adjusted
	});

	var initSlick = function() {
		if (isSlick) {
			return;
		}

		scroller.fidgets_control_slick_carousel({
			slickParms: {
				dots: true,
				infinite: true,
				speed: 300,
				autoplay: false,
				arrows: true,
				appendArrows: $('#introduction'),
				fade: true,
				mobileFirst: true
			}
		});

		isSlick = true;
	}

	var killSlick = function() {
		if (!isSlick) {
			return;
		}
		scroller.fidgets_control_slick_carousel('kill');
		isSlick = false;
	}

	initSlick();

	var resizeFunctionList = [];

	$(window).resize(function(event) {

		var newSize = {
			height: $(window).height(),
			width: $(window).width()
		};

		for (var i = 0, len = resizeFunctionList.length; i < len; i++) {
			var element = resizeFunctionList[i];
			element(newSize);
		}

	});

	var updateSlick = function(newSize) {
		if (newSize.width < 750 && isSlick) {
			killSlick();
		} else if (newSize.width > 749) {
			initSlick()
		}
	};
	resizeFunctionList.push(updateSlick);

	updateSlick({
		height: $(window).height(),
		width: $(window).width()
	});


})(jQuery);
