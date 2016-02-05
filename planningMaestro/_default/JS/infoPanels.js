(function($) {

/*
NOTE: fidgets_control_vertical_structure is instantiated in featureControl because it 
needs to be coordinated to not do bookmarks before the carousel panel is set up
*/

// 	var animate = function(eventObj) {
// 		var target = $(eventObj.target);
// 		target.find('.mobile').addClass('animated slideInRight')
// 	}
// 
// 	var mobile = $('.mobile'),
// 		waitingForAction = false,
// 		animationClasses='animated flipInX';
// 
// 	var addAnimation = function(eventObj) {
// 		eventObj.stopPropagation();
// 		var target = $(eventObj.target);
// 
// 				target.data('alreadyAnimated', true).addClass('opaque').addClass(animationClasses)
// 				.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', removeAnimation)
// 	};
// 
// 	var removeAnimation = function(eventObj) {
// 		eventObj.stopPropagation();
// 		var target = $(eventObj.target);
// 		target.removeClass(animationClasses)
// 	};
// 
// 		mobile
// 			.bind('enterviewport', addAnimation)
// //			.bind('leaveviewport', removeAnimation)
// 			.bullseye();

})(jQuery);

//target.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', removeAnimation);