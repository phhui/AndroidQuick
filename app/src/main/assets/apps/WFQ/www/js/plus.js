document.addEventListener("plusready", onPlusReady, false );
var appIsReady=false;
var auths={};
var app;
var shareSer;
var isApp=false;
var delayEvent=[];
var reportParam=[];
function login(event){
    if(!appIsReady){
        delayEvent.push(event);
        return;
    }
    Log.log("login:"+event+"   "+(event==AppCmd.LOGIN_BY_GOOGLE));
    if(app&&app.signIn)app.signIn((event==AppCmd.LOGIN_BY_GOOGLE)?"google":"facebook");
    else alert("login api not found！");
}
function signOut(){
    app.signOut();
}
function loginResult(msg){
    Log.log("loginResult:"+msg);
    EventHelper.call(AppCmd.LOGIN_RESULT,msg.toString());
}
function appPay(e,money,goods,goods_desc,game_order_sn,game_api_url,game_server_id,game_zone,role_id,role_name,ext){
    Log.log("pay");
//    alert("发起支付："+money+","+goods+","+goods_desc+","+game_order_sn+","+game_api_url+","+game_server_id+","+game_zone+","+role_id+","+role_name+","+ext);
    if(app&&app.appPay)app.appPay(money.toString(),goods,goods_desc,game_order_sn,game_api_url,game_server_id,game_zone,role_id,role_name,ext||'');
    else alert("pay api not found！");
}
function googlePay(e,gid){
    Log.log("googlePay:"+gid);
//    alert(gid);
    if(app&&app.googlePay)app.googlePay(gid);
    else alert("google play api not found!");
}
function payResult(msg){
//    alert("支付结果："+msg);
    EventHelper.call(AppCmd.PAY_RESULT,msg);
}
function reportInfo(server_name, server_id, role_name, role_id, level, create_time){
    reportParam=[server_name, server_id, role_name, role_id, level, create_time];
    if(app&&app.reportUserInfo)app.reportUserInfo(server_name, server_id, role_name, role_id, level, create_time);
}
function reportInfoResult(msg){
    if(msg==1)app.showLog("report success");
    else {
        app.showLog("report failed");
        app.reportUserInfo(reportParam[0], reportParam[1], reportParam[2], reportParam[3], reportParam[4], reportParam[5]);
    }
}
function pause(val){
    EventHelper.call(parseInt(val)==1?AppCmd.ONRESUME:AppCmd.PAUSE);
}
function appLog(msg){
//    alert(msg);
    app.showLog(msg);
}
function onPlusReady() {
	isApp=true;
	initApp();
    appIsReady=true;
//    getShareSers();
	hideStatuAndMenu();
	plus.screen.lockOrientation("portrait");
	window.localStorage.setItem("UUID",plus.device.uuid||plus.device.imei||plus.device.imsi);
	Log.appLogFunc=appLog;
	Log.enabled=true;
	Log.log("ok");
    while(delayEvent.length>0){
        EventHelper.call(delayEvent.shift());
    }
}
function regAppListener(){
    EventHelper.addListener(AppCmd.LOGIN_BY_CJ,this.login,this);
    EventHelper.addListener(AppCmd.LOGIN_BY_GOOGLE,this.login,this);
    EventHelper.addListener(AppCmd.LOGIN_BY_FACEBOOK,this.login,this);
    EventHelper.addListener(AppCmd.LOGIN_OUT,this.signOut,this);
    EventHelper.addListener(AppCmd.PAY_CJ,this.appPay,this);
    EventHelper.addListener(AppCmd.PAY_GOOGLE,this.googlePay,this);
    EventHelper.addListener(AppCmd.REPORT_USERINFO,this.reportInfo,this);
    Log.log("regEvent");
}
function hideStatuAndMenu(){
	plus.navigator.hideSystemNavigation();
	plus.ui.setFullscreen(true);
	setTimeout(hideStatuAndMenu,2000);
}
function initApp(){
    app = plus.android.runtimeMainActivity();
    var Intent = plus.android.importClass("android.content.Intent");
    var intent = new Intent();
    intent.setClassName(app, "com.tmlr.yx.qd.NPandoraEntryActivity");
    if(!app)alert("APP init failed");
    else Log.log("app inited");
}
//function getShareSers(){
//    plus.share.getServices(function(ss){
//        for(var i in ss){
//            var s=ss[i];
//            if(s.id=="weixin"){
//                shareSer=s;
//                break;
//            }
//        }
//    },function(err){
//        alert("get wxshare failed："+e.message);
//    });
//}
//function shareMessage(){
//    var s=shareSer;
//    var msg={content:"我的甜蜜恋人",extra:{scene:null},pictures:""};
//    s.send( msg, function(){
//        alert( "分享到\""+s.description+"\"成功！ " );
//    }, function(e){
//        alert( "分享到\""+s.description+"\"失败: "+e.code+" - "+e.message );
//    } );
//}