
#paste spreadsheet data into these files
#
#spreadsheetData/productSpecs.txt all/productSpecs
#spreadsheetData/pageCopySpecs.txt
#spreadsheetData/categoryTemplateData.txt

===============================================
GENERATE PRODUCT PARAMETER FILES

cd /Volumes/qubuntuFileServer/cmerdc/corporateMultisite/content/traxStore

rm -r /Volumes/qubuntuFileServer/cmerdc/corporateMultisite/content/traxStore/all/productSpecs/*

generateFilesFromData.js --forReal --verbose spreadsheetData/productSpecs.txt all/productSpecs ini


#generateFilesFromData.js --verbose spreadsheetData/productSpecs.txt all/productSpecs ini



#===============================================
#COPY PRODUCT PARAMETER FILES TO ADDITIONAL DEPARTMENTS

cd /Volumes/qubuntuFileServer/cmerdc/corporateMultisite/content/traxStore

copyFiles.js -verbose --forReal spreadsheetData/pageCopySpecs.txt all/productSpecs tmp ini

rm -r /Volumes/qubuntuFileServer/cmerdc/corporateMultisite/content/traxStore/behavior/productSpecs/*
rm -r /Volumes/qubuntuFileServer/cmerdc/corporateMultisite/content/traxStore/transition/productSpecs/*

mv tmp/BehaviorProducts/* behavior/productSpecs/
mv tmp/TransitionProducts/* transition/productSpecs/

### rm -r /Volumes/qubuntuFileServer/cmerdc/corporateMultisite/content/traxStore/promotion/productSpecs/*
### mv tmp/Promotion/* promotion/productSpecs/


#copyFiles.js -verbose spreadsheetData/pageCopySpecs.txt all/productSpecs tmp ini


#===============================================
#GIT CONTROL

cd /Volumes/qubuntuFileServer/cmerdc/corporateMultisite/content/

git status

git add --all .

git commit -am"changed products in store"



===============================================
GENERATE CATEGORY TEMPLATES

cd /Volumes/qubuntuFileServer/cmerdc/corporateMultisite/content/traxStore

generateFilesFromData.js --forReal --verbose --template all/categoryTemplatesDefaultFiles/categorySubstitutionTemplate.html spreadsheetData/categoryTemplateData.txt all/categoryTemplates html
generateFilesFromData.js --forReal --verbose --template all/categoryTemplatesDefaultFiles/categorySubstitutionTemplate.html spreadsheetData/categoryTemplateData.txt behavior/categoryTemplates html
generateFilesFromData.js --forReal --verbose --template all/categoryTemplatesDefaultFiles/categorySubstitutionTemplate.html spreadsheetData/categoryTemplateData.txt transition/categoryTemplates html


//generateFilesFromData.js --verbose --template all/categoryTemplatesDefaultFiles/categorySubstitutionTemplate.html spreadsheetData/categoryTemplateData.txt all/categoryTemplates html


===============================================
GIT CONTROL

cd /Volumes/qubuntuFileServer/cmerdc/corporateMultisite/content/

git status

git commit -am"changed products in store"


===============================================

cd /Volumes/qubuntuFileServer/cmerdc/corporateMultisite/content/

rm  traxStore/behavior/catalogDisplayTemplates/*
rm  traxStore/transition/catalogDisplayTemplates/*

cp  traxStore/all/catalogDisplayTemplates/* traxStore/behavior/catalogDisplayTemplates/
cp  traxStore/all/catalogDisplayTemplates/* traxStore/transition/catalogDisplayTemplates/ 

echo "REMEMBER TO CHANGE TITLES IN BEHAVIOR AND TRANSTION. THIS MADE IT SAY 'ALL'"


===============================================

cd /Volumes/qubuntuFileServer/cmerdc/corporateMultisite/content/

rm  traxStore/behavior/categoryTemplatesDefaultFiles/*
rm  traxStore/transition/categoryTemplatesDefaultFiles/*

cp  traxStore/all/categoryTemplatesDefaultFiles/* traxStore/behavior/categoryTemplatesDefaultFiles/
cp  traxStore/all/categoryTemplatesDefaultFiles/* traxStore/transition/categoryTemplatesDefaultFiles/ 
