


===============================================

cd /Volumes/qubuntuFileServer/cmerdc/corporateMultisite/content/traxStore

rm -r /Volumes/qubuntuFileServer/cmerdc/corporateMultisite/content/traxStore/_default/productSpecs/*

generateFilesFromData.js --forReal --verbose spreadsheetData/productSpecs070814.txt _default/productSpecs ini


generateFilesFromData.js --verbose spreadsheetData/productSpecs070814.txt _default/productSpecs ini




===============================================

cd /Volumes/qubuntuFileServer/cmerdc/corporateMultisite/content/traxStore

rm -r /Volumes/qubuntuFileServer/cmerdc/corporateMultisite/content/traxStore/tmp/catalogDisplayTemplates/*

generateFilesFromData.js --forReal --verbose --template _default/categoryTemplatesDefaultFiles/categorySubstitutionTemplate.html spreadsheetData/categoryTemplateData.txt _default/categoryTemplates html


generateFilesFromData.js --verbose --template _default/categoryTemplatesDefaultFiles/categorySubstitutionTemplate.html spreadsheetData/categoryTemplateData.txt _default/categoryTemplates html


===============================================

copyFiles.js -verbose pageCopySpecs.txt _default/productSpecs tmp ini