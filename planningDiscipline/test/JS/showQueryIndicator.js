if (window.location.href.match(/local/)){
$('body').append("<div class='indicatorPlus'></div><div class='indicatorMinus'></div>");
}

if (window.location.href.match(/test/)){
$('body').append("<div style='position:fixed;top:1%;left:1%;background:yellow;color:black;font-weight:bold;width:200px;text-align:center;'>TEST PAGE</div>");
}

