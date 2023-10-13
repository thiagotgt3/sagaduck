gdjs.GameOverCode = {};
gdjs.GameOverCode.GDScore2Objects1= [];
gdjs.GameOverCode.GDScore2Objects2= [];
gdjs.GameOverCode.GDPlayerNameInputObjects1= [];
gdjs.GameOverCode.GDPlayerNameInputObjects2= [];
gdjs.GameOverCode.GDYellowButtonObjects1= [];
gdjs.GameOverCode.GDYellowButtonObjects2= [];
gdjs.GameOverCode.GDYellowButton2Objects1= [];
gdjs.GameOverCode.GDYellowButton2Objects2= [];
gdjs.GameOverCode.GDGreenButtonObjects1= [];
gdjs.GameOverCode.GDGreenButtonObjects2= [];
gdjs.GameOverCode.GDNewSpriteObjects1= [];
gdjs.GameOverCode.GDNewSpriteObjects2= [];


gdjs.GameOverCode.asyncCallback14702660 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("YellowButton"), gdjs.GameOverCode.GDYellowButtonObjects2);
{for(var i = 0, len = gdjs.GameOverCode.GDYellowButtonObjects2.length ;i < len;++i) {
    gdjs.GameOverCode.GDYellowButtonObjects2[i].deleteFromScene(runtimeScene);
}
}}
gdjs.GameOverCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.GameOverCode.asyncCallback14702660(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GameOverCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Score2"), gdjs.GameOverCode.GDScore2Objects1);
{for(var i = 0, len = gdjs.GameOverCode.GDScore2Objects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDScore2Objects1[i].setString("Score   " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("YellowButton"), gdjs.GameOverCode.GDYellowButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameOverCode.GDYellowButtonObjects1.length;i<l;++i) {
    if ( gdjs.GameOverCode.GDYellowButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameOverCode.GDYellowButtonObjects1[k] = gdjs.GameOverCode.GDYellowButtonObjects1[i];
        ++k;
    }
}
gdjs.GameOverCode.GDYellowButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14702428);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerNameInput"), gdjs.GameOverCode.GDPlayerNameInputObjects1);
{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, "e3b83746-a6c1-41d3-8a9f-ca1f8885e58b", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)), (( gdjs.GameOverCode.GDPlayerNameInputObjects1.length === 0 ) ? "" :gdjs.GameOverCode.GDPlayerNameInputObjects1[0].getString()));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("YellowButton2"), gdjs.GameOverCode.GDYellowButton2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameOverCode.GDYellowButton2Objects1.length;i<l;++i) {
    if ( gdjs.GameOverCode.GDYellowButton2Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameOverCode.GDYellowButton2Objects1[k] = gdjs.GameOverCode.GDYellowButton2Objects1[i];
        ++k;
    }
}
gdjs.GameOverCode.GDYellowButton2Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14703420);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "e3b83746-a6c1-41d3-8a9f-ca1f8885e58b", false);
}
{ //Subevents
gdjs.GameOverCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreenButton"), gdjs.GameOverCode.GDGreenButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameOverCode.GDGreenButtonObjects1.length;i<l;++i) {
    if ( gdjs.GameOverCode.GDGreenButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameOverCode.GDGreenButtonObjects1[k] = gdjs.GameOverCode.GDGreenButtonObjects1[i];
        ++k;
    }
}
gdjs.GameOverCode.GDGreenButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14704636);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


};

gdjs.GameOverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameOverCode.GDScore2Objects1.length = 0;
gdjs.GameOverCode.GDScore2Objects2.length = 0;
gdjs.GameOverCode.GDPlayerNameInputObjects1.length = 0;
gdjs.GameOverCode.GDPlayerNameInputObjects2.length = 0;
gdjs.GameOverCode.GDYellowButtonObjects1.length = 0;
gdjs.GameOverCode.GDYellowButtonObjects2.length = 0;
gdjs.GameOverCode.GDYellowButton2Objects1.length = 0;
gdjs.GameOverCode.GDYellowButton2Objects2.length = 0;
gdjs.GameOverCode.GDGreenButtonObjects1.length = 0;
gdjs.GameOverCode.GDGreenButtonObjects2.length = 0;
gdjs.GameOverCode.GDNewSpriteObjects1.length = 0;
gdjs.GameOverCode.GDNewSpriteObjects2.length = 0;

gdjs.GameOverCode.eventsList1(runtimeScene);

return;

}

gdjs['GameOverCode'] = gdjs.GameOverCode;
