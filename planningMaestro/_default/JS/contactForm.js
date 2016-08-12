// $('.contactFormButton').click(function(event){	
// 	$('body').widgets_features_contact_form({
// 		event:event,
// 		parameterFileName:'contactForms.ini'
// 	});
// });

$('.infusionsoftButtonIdClass').click(function(event){

var infusionWindow=window.open('', 'infusionWindow', "height=516,width=486,modal=yes,alwaysRaised=yes");
infusionWindow.screenX=window.screenX+100;
infusionWindow.screenY=window.screenY+200;
var formName=$(this).attr('formName');

infusionWindow.document.write(('<div><xxx type="text/javascript" src="https://qa202.infusionsoft.com/app/form/iframe/'+formName+'"></xxx></div>').replace(/xxx/g, 'script')); //needs the parents so .replace() works

var popup=$('#contactPopup');
if (!popup.length){
$('body').append(" <div id='contactPopup' class='shadow1' style='background:white;border:2pt solid #666;position:absolute;top:30vh;left:30vw;width:40vw;height:40vh;padding:5%;font-size:150%;'> The contact form appears in a pop up browser window. If it doesn't appear immediately, you might need to tell your browser to allow it to show. </div> ");
}
else{
popup.show();
}

$('#contactPopup').fadeOut(15000);


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