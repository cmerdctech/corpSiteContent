$('.contactButton').click(function(event){	
	$('body').fidgets_control_contact_form({
		event:event,
		parameterFileName:'contactForms.ini',
		clickTarget:this
	});
});

// $('.joyride-list li').each(function(inx, item, all){
// 
// 
// var id=$(item).attr('data-id');
// 
// var panel=$('#'+id);
//   
//   panel.append("<div style='color:#aaa;font-size: 250%;left: 50%;position: absolute;top: -0.7em;'>⟱</div>");
//   
// });

