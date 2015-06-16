$('.contactButton').click(function(event){	
	$('body').fidgets_control_contact_form({
		event:event,
		parameterFileName:'contactForms.ini',
		clickTarget:this
	});
});