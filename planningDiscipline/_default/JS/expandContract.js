var windowWidth=$(window).width();
if (windowWidth <750){

var features=$('.featurePanel');
var infos=$('.infoPanel');

var featureFunction=function(event){
var content=$(this).find('.explanationContainer');
$('.explanationContainer').hide();
$('.infoContainer').hide();
content.toggle(1000);
}

var infoFunction=function(event){
var content=$(this).find('.infoContainer');
$('.explanationContainer').hide();
$('.infoContainer').hide();
content.toggle(1000);
}

features.click(featureFunction).append("<div class='more' style='position:absolute;bottom:0vw;right:0vw;color:gray;font-size:8pt;'>MORE/LESS</div>").css('cursor', 'pointer');
infos.click(infoFunction).append("<div class='more' style='position:absolute;bottom:0vw;right:0vw;color:gray;font-size:8pt;'>MORE/LESS</div>").css('cursor', 'pointer');

}