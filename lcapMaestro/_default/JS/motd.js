var windowWidth=$(window).width();
if (windowWidth >749){

$('body').append("<div id='motd' style='display:none;position:absolute;top:0vh;left:20vw;height:40vh;width:40vw;font-size:2rem;color:gray;text-align:center;'>Click to Start/Stop Slide Animation</div>");

var showFunction=function(){
	$('#motd').fadeIn(2000, function(){
		$('#motd').fadeOut(2000)
	
	});
}
setTimeout(showFunction, 10000);

}

