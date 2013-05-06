$('.mainContentContainer').widgets_simple_store_main('showViewCartButtonIfNeeded', '.viewCartButton');

$('.addToCartButton').click(function(eventObj){
		$('.mainContentContainer').widgets_simple_store_main('addEventObjToCart', eventObj);
		$(eventObj.target).parent().css({opacity:0.25}).animate({opacity: 1.0}, 500);
		$('.viewCartButton').show();
		}
	);

$('.viewCartButton').click(
	function(){
		$('.mainContentContainer').widgets_simple_store_main('display', {catalogUrl:''});
	}
);