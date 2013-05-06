

$transformations['fancyName']=function($itemRec, $referenceDataTagList){
	$out=isset($itemRec['name'])?'**'.$itemRec['name']."**({$referenceDataTagList['categoryInfo:name']})":"!isset(\$itemRec['name'])"; 
	return $out;
};
$transformations['redemptionUrl']=function($itemRec, $referenceDataTagList){

	if (!isset($referenceDataTagList['cardData:cardNumber'])){return "!isset(\$referenceDataTagList['cardData:cardNumber']";}
	if (!isset($referenceDataTagList['redemption:demoUrl'])){return "!isset(\$referenceDataTagList['redemption:demoUrl']";}
	if (!isset($referenceDataTagList['redemption:productionUrl'])){return "!isset(\$referenceDataTagList['redemption:productionUrl']";}

	if (str_replace('8882', '', $referenceDataTagList['cardData:cardNumber'])){
		return $referenceDataTagList['redemption:demoUrl'];
	}
	else{
		return $referenceDataTagList['redemption:productionUrl'];
	}

};