if (window.location.href.match(/local/)){
$('body').append("<div class='indicatorPlus' style=' position:fixed; top:0%; right:50.1%; background:transparent; padding:3px; color:red; text-align:right; zoom: 1; filter: alpha(opacity=50); opacity: 0.5;'></div><div class='indicatorMinus' style=' position:fixed; top:0%; left:50.1%; background:transparent; padding:3px; color:red; text-align:left; zoom: 1; filter: alpha(opacity=50); opacity: 0.5;'></div>");
console.log('indicator');
}