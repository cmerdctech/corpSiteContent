// $('.contactFormButton').click(function(event){	
// 	$('body').widgets_features_contact_form({
// 		event:event,
// 		parameterFileName:'contactForms.ini'
// 	});
// });

console.log('helllo');
$('.infusionsoftButtonIdClass').click(function(event){

var infusionWindow=window.open('', 'infusionWindow', "height=516,width=486,modal=yes,alwaysRaised=yes");
infusionWindow.screenX=window.screenX+100;
infusionWindow.screenY=window.screenY+200;

infusionWindow.document.write('<div><xxx type="text/javascript" src="https://qa202.infusionsoft.com/app/form/iframe/9eb9cdd785d00fdffe5813128d432bcc"></xxx></div>'.replace(/xxx/g, 'script'));

// 	var indicatorFunction = function() {
// 
// 	try{
// 		var indicatorDiv = infusionWindow.document.getElementById("mainContent");
// 		}
// 		catch(e){}
// 
// 		if (!indicatorDiv) {
// 			setTimeout(indicatorFunction, 100);
// 		} else {
// 		$('body').prepend('closing window');
// 			infusionWindow.close();
// 		}
// 
// 	}
// 
// 	setTimeout(indicatorFunction, 100);

});