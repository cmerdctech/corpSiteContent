var windowWidth=$(window).width();
if (windowWidth <750){

var features=$('.featurePanel');
var infos=$('.infoPanel');

var featureFunction=function(event){
var content=$(this).find('.explanationContainer');
$('.explanationContainer').hide();
$('.infoContainer').hide();
content.toggle().css('cursor', 'pointer');
}

var infoFunction=function(event){
var content=$(this).find('.infoContainer');
$('.explanationContainer').hide();
$('.infoContainer').hide();
content.toggle().css('cursor', 'pointer');
}

features.click(featureFunction);
infos.click(infoFunction);

}