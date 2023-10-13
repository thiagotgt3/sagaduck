gdjs.MenuCode = {};
gdjs.MenuCode.GDNewSpriteObjects1= [];
gdjs.MenuCode.GDNewSpriteObjects2= [];
gdjs.MenuCode.GDNewSprite2Objects1= [];
gdjs.MenuCode.GDNewSprite2Objects2= [];
gdjs.MenuCode.GDNewSprite3Objects1= [];
gdjs.MenuCode.GDNewSprite3Objects2= [];
gdjs.MenuCode.GDNewSprite4Objects1= [];
gdjs.MenuCode.GDNewSprite4Objects2= [];
gdjs.MenuCode.GDNewSprite5Objects1= [];
gdjs.MenuCode.GDNewSprite5Objects2= [];
gdjs.MenuCode.GDNewSprite6Objects1= [];
gdjs.MenuCode.GDNewSprite6Objects2= [];
gdjs.MenuCode.GDNewSprite7Objects1= [];
gdjs.MenuCode.GDNewSprite7Objects2= [];
gdjs.MenuCode.GDNewSprite8Objects1= [];
gdjs.MenuCode.GDNewSprite8Objects2= [];
gdjs.MenuCode.GDNewSprite9Objects1= [];
gdjs.MenuCode.GDNewSprite9Objects2= [];
gdjs.MenuCode.GDNewSprite10Objects1= [];
gdjs.MenuCode.GDNewSprite10Objects2= [];
gdjs.MenuCode.GDNewSprite11Objects1= [];
gdjs.MenuCode.GDNewSprite11Objects2= [];
gdjs.MenuCode.GDNewSprite12Objects1= [];
gdjs.MenuCode.GDNewSprite12Objects2= [];


gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDNewSprite12Objects1Objects = Hashtable.newFrom({"NewSprite12": gdjs.MenuCode.GDNewSprite12Objects1});
gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDNewSprite12Objects1Objects = Hashtable.newFrom({"NewSprite12": gdjs.MenuCode.GDNewSprite12Objects1});
gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.MenuCode.GDNewSprite2Objects1});
gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDNewSprite3Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs.MenuCode.GDNewSprite3Objects1});
gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDNewSprite6Objects1Objects = Hashtable.newFrom({"NewSprite6": gdjs.MenuCode.GDNewSprite6Objects1});
gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDNewSprite7Objects1Objects = Hashtable.newFrom({"NewSprite7": gdjs.MenuCode.GDNewSprite7Objects1});
gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDNewSprite8Objects1Objects = Hashtable.newFrom({"NewSprite8": gdjs.MenuCode.GDNewSprite8Objects1});
gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDNewSprite11Objects1Objects = Hashtable.newFrom({"NewSprite11": gdjs.MenuCode.GDNewSprite11Objects1});
gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDNewSprite10Objects1Objects = Hashtable.newFrom({"NewSprite10": gdjs.MenuCode.GDNewSprite10Objects1});
gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite12"), gdjs.MenuCode.GDNewSprite12Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDNewSprite12Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14404892);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite12"), gdjs.MenuCode.GDNewSprite12Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDNewSprite12Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(8007244);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, false, true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.MenuCode.GDNewSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDNewSprite2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14485964);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game2", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.MenuCode.GDNewSprite3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDNewSprite3Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14486852);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs.MenuCode.GDNewSprite6Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDNewSprite6Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14488388);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://www.facebook.com/sharer/sharer.php?u=https://www.thiago3dgames.site/", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite7"), gdjs.MenuCode.GDNewSprite7Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDNewSprite7Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14489644);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://wa.me/?text=Confira Thiago3D Games https://www.thiago3dgames.site/", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite8"), gdjs.MenuCode.GDNewSprite8Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDNewSprite8Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14490556);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://www.linkedin.com/sharing/share-offsite/?url=https://www.thiago3dgames.site/", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite11"), gdjs.MenuCode.GDNewSprite11Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDNewSprite11Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14491604);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://play.google.com/store/apps/dev?id=7116791576701423724", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite10"), gdjs.MenuCode.GDNewSprite10Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDNewSprite10Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14492540);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://youtube.com/rollbrasil", runtimeScene);
}}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDNewSpriteObjects1.length = 0;
gdjs.MenuCode.GDNewSpriteObjects2.length = 0;
gdjs.MenuCode.GDNewSprite2Objects1.length = 0;
gdjs.MenuCode.GDNewSprite2Objects2.length = 0;
gdjs.MenuCode.GDNewSprite3Objects1.length = 0;
gdjs.MenuCode.GDNewSprite3Objects2.length = 0;
gdjs.MenuCode.GDNewSprite4Objects1.length = 0;
gdjs.MenuCode.GDNewSprite4Objects2.length = 0;
gdjs.MenuCode.GDNewSprite5Objects1.length = 0;
gdjs.MenuCode.GDNewSprite5Objects2.length = 0;
gdjs.MenuCode.GDNewSprite6Objects1.length = 0;
gdjs.MenuCode.GDNewSprite6Objects2.length = 0;
gdjs.MenuCode.GDNewSprite7Objects1.length = 0;
gdjs.MenuCode.GDNewSprite7Objects2.length = 0;
gdjs.MenuCode.GDNewSprite8Objects1.length = 0;
gdjs.MenuCode.GDNewSprite8Objects2.length = 0;
gdjs.MenuCode.GDNewSprite9Objects1.length = 0;
gdjs.MenuCode.GDNewSprite9Objects2.length = 0;
gdjs.MenuCode.GDNewSprite10Objects1.length = 0;
gdjs.MenuCode.GDNewSprite10Objects2.length = 0;
gdjs.MenuCode.GDNewSprite11Objects1.length = 0;
gdjs.MenuCode.GDNewSprite11Objects2.length = 0;
gdjs.MenuCode.GDNewSprite12Objects1.length = 0;
gdjs.MenuCode.GDNewSprite12Objects2.length = 0;

gdjs.MenuCode.eventsList0(runtimeScene);

return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
