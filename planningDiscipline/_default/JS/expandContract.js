var windowWidth = $(window).width();
if (windowWidth < 750) {

	var features = $('.featurePanel');
	var infos = $('.infoPanel');
	
	var visibilityFunction=function(event, target, contentSelector) {
		var content = $(target).find(contentSelector);

		var isHidden = (content.css('display') == 'none');
		
		var closureIndicator=function (event){ 
		$(this).parent().bullseye({
						offsetTop: 20
					});
					
		indicatorFunction($(this).parent(), contentSelector)};
		
		if (isHidden) {
			$('.explanationContainer').hide(500);
			$('.infoContainer').hide(500);
			content.show(1000, closureIndicator);
		} else {
			content.hide(1000, closureIndicator);
		}
	}
	
	var indicatorFunction=function(targetContainer, contentSelector){
		var content = $(targetContainer).find(contentSelector);
		var isHidden = (content.css('display')=='none');

		if (!isHidden) {
			content.parent().find('.more').hide();
			content.parent().find('.less').show();
		} else {
			content.parent().find('.more').show();
			content.parent().find('.less').hide();
		}
	}

	var indicatorHtml="<div class='more' style='position:absolute;bottom:0vw;right:0vw;font-size:10pt;'>MORE</div><div class='less' style='position:absolute;bottom:0vw;right:0vw;font-size:10pt;'>LESS</div>";

	var featureFunction = function(event) {
		visibilityFunction(event, this, '.explanationContainer');
	}
	
	var infoFunction = function(event) {
		visibilityFunction(event, this, '.infoContainer');
	}
	
	var featureIndicator=function(index, targetContainer){
		indicatorFunction(targetContainer, '.explanationContainer')
	}
	
	var infoIndicator=function(index, targetContainer){
		indicatorFunction(targetContainer, '.infoContainer')
	}

	features.click(featureFunction)
		.append(indicatorHtml)
		.css('cursor', 'pointer')
		.each(featureIndicator);
	infos.click(infoFunction)
		.append(indicatorHtml)
		.css('cursor', 'pointer')
		.each(infoIndicator);

}
