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
// 
// $('.mainContentContainer').widgets_simple_store_main('display', {catalogUrl:''});
// $('body').prepend("<div style='float:right;margin:20px 40px;background:white;padding:10px;color:red;font-size:14pt;'>Jammed straight to checkout for TQ's convenience</div>")