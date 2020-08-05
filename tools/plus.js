var isApp=true;
quickPlugin.init();
quickPlugin.regCallback(quickPlugin.CB_LOGIN,loginResult,this);
quickPlugin.regCallback(quickPlugin.CB_PAY,payResult,this);
quickPlugin.regCallback(quickPlugin.CB_PAUSE,onPause,this);
function loginResult(msg){
}
function payResult(msg){
}
function onPause(bl){
}