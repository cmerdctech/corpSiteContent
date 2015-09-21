var waitForAnimationEnd=false;

var startExpandFunction = function() {


	var features = $('.featurePanel');
	var infos = $('.infoPanel');

	var scrollTopFunction = function(targetObj) {
		var targetId = targetObj.attr('id');
		var opaque = {
			zoom: '1',
			filter: 'alpha(opacity=100)',
			opacity: '1',
			scrollTop: targetObj.offset().top - 50
		};

		$("html, body")
			.animate(opaque, 1000, function() {});
	};

	var visibilityFunction = function(event, target, contentSelector, hashPrefix) {
		if (waitForAnimationEnd){
			return;
		}
		waitForAnimationEnd=true; //don't run again until animations are finished
		
		var targetObj = $(target);
		var targetId = targetObj.attr('id');
		var content = targetObj.find(contentSelector);

		var isHidden = (content.css('display') == 'none');

		var afterAnimationFunction = function(event) {

			scrollTopFunction(targetObj);

			indicatorFunction($(this).parent(), contentSelector)
			
			waitForAnimationEnd=false; //accept clicks again
		};

		if (isHidden) {
			$('.explanationContainer').hide(500);
			$('.infoContainer').hide(500);
			content.show(1000, afterAnimationFunction);

			window.location.hash = hashPrefix + targetId;
		} else {
			content.hide(1000, afterAnimationFunction);
		}
	};

	var indicatorFunction = function(targetContainer, contentSelector) {
		var content = $(targetContainer).find(contentSelector);
		var isHidden = (content.css('display') == 'none');

		if (!isHidden) {
			content.parent().find('.more').hide();
			content.parent().find('.less').show();
		} else {
			content.parent().find('.more').show();
			content.parent().find('.less').hide();
		}
	};

	var indicatorHtml = "<div class='more' style='position:absolute;bottom:0vw;right:0vw;font-size:10pt;'>MORE</div><div class='less' style='position:absolute;bottom:0vw;right:0vw;font-size:10pt;'>LESS</div>";

	var featureFunction = function(event) {
		visibilityFunction(event, this, '.explanationContainer', "?id=");
	};

	var infoFunction = function(event) {
		visibilityFunction(event, this, '.infoContainer', "#id=");
	};

	var featureIndicator = function(index, targetContainer) {
		indicatorFunction(targetContainer, '.explanationContainer')
	};

	var infoIndicator = function(index, targetContainer) {
		indicatorFunction(targetContainer, '.infoContainer')
	};

	features.click(featureFunction)
		.append(indicatorHtml)
		.css('cursor', 'pointer')
		.each(featureIndicator);
	infos.click(infoFunction)
		.append(indicatorHtml)
		.css('cursor', 'pointer')
		.each(infoIndicator);


};
var endExpandFunction = function() {
	var features = $('.featurePanel');
	var infos = $('.infoPanel');
	$('.more').remove();
	$('.less').remove();
	features.css('cursor', 'auto').unbind('click');
	infos.css('cursor', 'auto').unbind('click');

};

var expandCollapse = function() {
	var windowWidth = $(window).width();
	if (windowWidth < 1000) {
		startExpandFunction();
	} else {
		endExpandFunction();
	}
};
