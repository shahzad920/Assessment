outputName="MobileTestingScreen-$(date +"%d-%m-%Y@%T")"
Path="$(pwd)/build/$(date +'%d-%m-%Y@%T')"
mkdir "$Path" 

echo "Path created:$Path" 


# echoAndSay "🤷‍♂️ Changing Constant To QA-" 
#  cp ../src/constant/constant.qa.ts  ../src/constant/constant.ts

echo "🤷‍♂️ Changing Constant To LIVE-" 
 cp ../src/constant/constant.live.ts  ../src/constant/constant.ts

# echo "🍎 Starting IOS Build" 
# fastlane ios beta outputPath:"$Path" outputName:"$outputName" buildType:"Release"
# echo "🍎 IOS Build Complete" 

echo "🤖 Starting Android Build" 
fastlane android beta  outputPath:"$Path" outputName:"$outputName" buildType:"Release"
echo "🤖 Android Build Complete" 

echoAndSay "👨‍💻 Changing Constant To Dev-" 
cp ../src/constant/constant.dev.ts  ../src/constant/constant.ts