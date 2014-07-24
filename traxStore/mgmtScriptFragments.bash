


===============================================

cd /Volumes/qubuntuFileServer/cmerdc/corporateMultisite/content/traxStore

rm -r /Volumes/qubuntuFileServer/cmerdc/corporateMultisite/content/traxStore/all/productSpecs/*

generateFilesFromData.js --forReal --verbose spreadsheetData/productSpecs.txt all/productSpecs ini


//generateFilesFromData.js --verbose spreadsheetData/productSpecs.txt all/productSpecs ini




===============================================

cd /Volumes/qubuntuFileServer/cmerdc/corporateMultisite/content/traxStore

generateFilesFromData.js --forReal --verbose --template all/categoryTemplatesDefaultFiles/categorySubstitutionTemplate.html spreadsheetData/categoryTemplateData.txt all/categoryTemplates html


//generateFilesFromData.js --verbose --template all/categoryTemplatesDefaultFiles/categorySubstitutionTemplate.html spreadsheetData/categoryTemplateData.txt all/categoryTemplates html


===============================================

cd /Volumes/qubuntuFileServer/cmerdc/corporateMultisite/content/traxStore

copyFiles.js -verbose --forReal spreadsheetData/pageCopySpecs.txt all/productSpecs tmp ini

rm -r /Volumes/qubuntuFileServer/cmerdc/corporateMultisite/content/traxStore/behavior/productSpecs/*
rm -r /Volumes/qubuntuFileServer/cmerdc/corporateMultisite/content/traxStore/transition/productSpecs/*

mv tmp/TransitionProducts/* behavior/productSpecs/
mv tmp/BehaviorProducts/* transition/productSpecs/


//copyFiles.js -verbose spreadsheetData/pageCopySpecs.txt all/productSpecs tmp ini