

$transformations['fancyName']=function($itemRec, $referenceDataTagList){
	$fieldName='categoryInfo:name'; if (!isset($referenceDataTagList[$fieldName])){return "!isset(\$referenceDataTagList[$fieldName]";}

	$out=isset($itemRec['name'])?'**'.$itemRec['name']."**({$referenceDataTagList['categoryInfo:name']})":"!isset(\$itemRec['name'])"; 
	return $out;
};
$transformations['redemptionUrl']=function($itemRec, $referenceDataTagList){
	$fieldName='redemption:demoUrl'; if (!isset($referenceDataTagList[$fieldName])){return "!isset(\$referenceDataTagList[$fieldName]";}
	$fieldName='redemption:productionUrl'; if (!isset($referenceDataTagList[$fieldName])){return "!isset(\$referenceDataTagList[$fieldName]";}
	$fieldName='provisionServer'; if (!isset($referenceDataTagList[$fieldName])){return "!isset(\$referenceDataTagList[$fieldName]";}


	if ($referenceDataTagList['provisionServer']=='demo'){
		return $referenceDataTagList['redemption:demoUrl'];
	}
	else{
		return $referenceDataTagList['redemption:productionUrl'];
	}

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