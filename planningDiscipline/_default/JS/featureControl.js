(function($) {

	var scroller = $('#scroll1Container'),
		isSlick = false,
		hideForSmall = $('.hideForSmall'),
		featureTopic = $('.featureTopic'),
		featurePanel = $('.featurePanel');

	var initSlick = function() {
		if (isSlick) {
			return;
		}
		featureTopic.removeClass('featureTopicTiny');
		featurePanel.removeClass('featurePanelResponsiveTiny');
		hideForSmall.show();
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
		hideForSmall.hide();
		featureTopic.addClass('featureTopicTiny');
		featurePanel.addClass('featurePanelResponsiveTiny');
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
		if (newSize.width < 800) {
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
	
		$('.indicator').html("h: "+$(window).height()+", w: "+$(window).width());

})(jQuery)
