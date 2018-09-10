gdjs.GameMenuCode = {};
gdjs.GameMenuCode.GDQuit_95TXTObjects1= [];
gdjs.GameMenuCode.GDQuit_95TXTObjects2= [];
gdjs.GameMenuCode.GDPlay_95TXTObjects1= [];
gdjs.GameMenuCode.GDPlay_95TXTObjects2= [];
gdjs.GameMenuCode.GDBackgroundObjects1= [];
gdjs.GameMenuCode.GDBackgroundObjects2= [];

gdjs.GameMenuCode.conditionTrue_0 = {val:false};
gdjs.GameMenuCode.condition0IsTrue_0 = {val:false};
gdjs.GameMenuCode.condition1IsTrue_0 = {val:false};
gdjs.GameMenuCode.condition2IsTrue_0 = {val:false};


gdjs.GameMenuCode.mapOfGDgdjs_46GameMenuCode_46GDPlay_9595TXTObjects1Objects = Hashtable.newFrom({"Play_TXT": gdjs.GameMenuCode.GDPlay_95TXTObjects1});gdjs.GameMenuCode.mapOfGDgdjs_46GameMenuCode_46GDQuit_9595TXTObjects1Objects = Hashtable.newFrom({"Quit_TXT": gdjs.GameMenuCode.GDQuit_95TXTObjects1});gdjs.GameMenuCode.eventsList0xafd70 = function(runtimeScene, context) {

{


gdjs.GameMenuCode.condition0IsTrue_0.val = false;
{
gdjs.GameMenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "MenuMusic.mp3", true, 8, 1);
}}

}


{

gdjs.GameMenuCode.GDPlay_95TXTObjects1.createFrom(runtimeScene.getObjects("Play_TXT"));

gdjs.GameMenuCode.condition0IsTrue_0.val = false;
gdjs.GameMenuCode.condition1IsTrue_0.val = false;
{
gdjs.GameMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameMenuCode.mapOfGDgdjs_46GameMenuCode_46GDPlay_9595TXTObjects1Objects, runtimeScene, true, false);
}if ( gdjs.GameMenuCode.condition0IsTrue_0.val ) {
{
gdjs.GameMenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.GameMenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameScene", false);
}}

}


{

gdjs.GameMenuCode.GDQuit_95TXTObjects1.createFrom(runtimeScene.getObjects("Quit_TXT"));

gdjs.GameMenuCode.condition0IsTrue_0.val = false;
gdjs.GameMenuCode.condition1IsTrue_0.val = false;
{
gdjs.GameMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameMenuCode.mapOfGDgdjs_46GameMenuCode_46GDQuit_9595TXTObjects1Objects, runtimeScene, true, false);
}if ( gdjs.GameMenuCode.condition0IsTrue_0.val ) {
{
gdjs.GameMenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.GameMenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


}; //End of gdjs.GameMenuCode.eventsList0xafd70


gdjs.GameMenuCode.func = function(runtimeScene, context) {
context.startNewFrame();
gdjs.GameMenuCode.GDQuit_95TXTObjects1.length = 0;
gdjs.GameMenuCode.GDQuit_95TXTObjects2.length = 0;
gdjs.GameMenuCode.GDPlay_95TXTObjects1.length = 0;
gdjs.GameMenuCode.GDPlay_95TXTObjects2.length = 0;
gdjs.GameMenuCode.GDBackgroundObjects1.length = 0;
gdjs.GameMenuCode.GDBackgroundObjects2.length = 0;

gdjs.GameMenuCode.eventsList0xafd70(runtimeScene, context);return;
}
gdjs['GameMenuCode']= gdjs.GameMenuCode;
