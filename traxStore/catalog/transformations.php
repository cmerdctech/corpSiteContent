

$transformations['fancyName']=function($itemRec, $referenceDataTagList){
	$out=isset($itemRec['name'])?'**'.$itemRec['name']."**({$referenceDataTagList['categoryInfo:name']})":"!isset(\$itemRec['name'])"; 
	return $out;
};