showInstructionPanel=function(e){

console.log(e.target);

var id=e.target.id,
	targetId=id+'_info',
	targetObj=$('#'+targetId),
	modal=targetObj.parent();
	modal=$(modal[0]);

console.log("id="+id);


	modal.css({display:'flex'});
	if (modal.css('display')!='flex'){
	modal.css({display:'-webkit-flex'});
	}
	//	display:-webkit-flex;
	
	
	targetObj.show();

	modal.one('click', function(event){
		event.stopPropagation();
		targetObj.hide();
		modal.hide();
	});
	
	
	
e.stopPropagation();
return false;
}