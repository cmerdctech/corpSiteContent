

$transformations['fancyName']=function($itemRec, $referenceDataTagList){
	$fieldName='categoryInfo:name'; if (!isset($referenceDataTagList[$fieldName])){return "!isset(\$referenceDataTagList[$fieldName]";}

	$out=isset($itemRec['name'])?'**'.$itemRec['name']."**({$referenceDataTagList['categoryInfo:name']})":"!isset(\$itemRec['name'])"; 
	return $out;
};
		
$transformations['formattedGrandTotal']=function($itemRec, $referenceDataTagList){
	$fieldName='priceSummary:grandTotal'; if (!isset($referenceDataTagList[$fieldName])){return "!isset(\$referenceDataTagList[$fieldName]";}
	return number_format($referenceDataTagList['priceSummary:grandTotal'], 2);
};

$transformations['formattedTax']=function($itemRec, $referenceDataTagList){
	$fieldName='priceSummary:tax'; if (!isset($referenceDataTagList[$fieldName])){return "!isset(\$referenceDataTagList[$fieldName]";}
	return number_format($referenceDataTagList['priceSummary:tax'], 2);
};

$transformations['formattedSubtotal']=function($itemRec, $referenceDataTagList){
	$fieldName='priceSummary:subTotal'; if (!isset($referenceDataTagList[$fieldName])){return "!isset(\$referenceDataTagList[$fieldName]";}
	return number_format($referenceDataTagList['priceSummary:subTotal'], 2);
};



$transformations['redemptionUrlNew']=function($itemRec, $referenceDataTagList){
	$fieldName='redemption:demoUrlNew'; if (!isset($referenceDataTagList[$fieldName])){return "!isset(\$referenceDataTagList[$fieldName]";}
	$fieldName='redemption:productionUrlNew'; if (!isset($referenceDataTagList[$fieldName])){return "!isset(\$referenceDataTagList[$fieldName]";}
	$fieldName='provisionServer'; if (!isset($referenceDataTagList[$fieldName])){return "!isset(\$referenceDataTagList[$fieldName]";}


	if ($referenceDataTagList['provisionServer']=='demo'){
		return $referenceDataTagList['redemption:demoUrlNew'];
	}
	else{
		return $referenceDataTagList['redemption:productionUrlNew'];
	}

};

$transformations['redemptionUrlExisting']=function($itemRec, $referenceDataTagList){
	$fieldName='redemption:demoUrlExisting'; if (!isset($referenceDataTagList[$fieldName])){return "!isset(\$referenceDataTagList[$fieldName]";}
	$fieldName='redemption:productionUrlExisting'; if (!isset($referenceDataTagList[$fieldName])){return "!isset(\$referenceDataTagList[$fieldName]";}
	$fieldName='provisionServer'; if (!isset($referenceDataTagList[$fieldName])){return "!isset(\$referenceDataTagList[$fieldName]";}


	if ($referenceDataTagList['provisionServer']=='demo'){
		return $referenceDataTagList['redemption:demoUrlExisting'];
	}
	else{
		return $referenceDataTagList['redemption:productionUrlExisting'];
	}

};