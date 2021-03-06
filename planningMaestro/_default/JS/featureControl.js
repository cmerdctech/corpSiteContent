(function($) {

	var scroller = $('#scroll1Container'),
		isSlick = false;

	var initFeatures = function() {
		scroller.on('init', function(event) {
			//'init' is a slick scroller event from feature panel
			setTimeout(function() {
				$('#info1Container').fidgets_control_vertical_structure({
					defaultPanelId: 'introduction'
				});
			}, 999); //for some reason, the init event fires about a second before the size of the panel is adjusted
		});
	}

	var initSlick = function() {
		if (isSlick) {
			return;
		}

		scroller.fidgets_control_slick_carousel({
			startup: [
				{
					selector: '.featureOverlay',
					pluginName: 'fidgets_control_feature_overlay',
					parameters: {}
				}, function(inx, panelItemList) {
					if (inx === 0) {
						$('.firstOne').fidgets_control_feature_overlay({
							delay: 1000,
							speed: 500
						});


					}
				}
			],
			onShow: [
				{
					selector: '.featureOverlay',
					pluginName: 'fidgets_control_feature_overlay',
					parameters: {
						delay: 1000,
						speed: 500
					}
				}
			],
			onHide: [
				{
					selector: '.featureOverlay',
					pluginName: 'fidgets_control_feature_overlay',
					parameters: {
						action: 'hide'
					}
				}
			],
			slickParms: {
				arrows: true,
				speed: 3000,
				autoplay: true,
				fade: false
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

	var displayBreakpoint=1000;
	var updateSlick = function(newSize) {
		if (newSize.width < displayBreakpoint+1) {
			isSlick && killSlick();
		} 
		else if (newSize.width > displayBreakpoint) {
			initSlick()
		}
	};
	
	var tuneUpDisplay=function(){
		if (newSize.width < displayBreakpoint+1) {
			$('.narrowWindowDeleteIdClass').css('display', 'none');
			$('.explanationContainer').prop('title', '');
		} 
		else if (newSize.width > displayBreakpoint) {
			var collapsableItems = $('.narrowWindowDeleteIdClass').css('display', '-webkit-flex');
			collapsableItems.css('display', '-webkit-flex');
			if (collapsableItems.css('display') != '-webkit-flex') {
				collapsableItems.css('display', 'flex');
			}
			$('.explanationContainer').prop('title', 'CLICK TO START/STOP SLIDE SHOW ANIMATION');

		}
	}



	
	//set up future responses
	var resizeFunctionList = [];
	resizeFunctionList.push(updateSlick);
	resizeFunctionList.push(expandCollapse);
	resizeFunctionList.push(tuneUpDisplay);
	
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

	//run the init processes
	initFeatures();
	initSlick();
	updateSlick({
		height: $(window).height(),
		width: $(window).width()
	});
	expandCollapse();

})(jQuery);



