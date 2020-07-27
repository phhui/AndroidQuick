var isApp=true;
appPlugin.init();
function regAppListener(){
    if(!EventHelper){
        setTimeout(regAppListener,500);
        return
    }
    try{
        EventHelper.addListener(AppCmd.LOGIN,appPlugin.signIn,appPlugin);
        EventHelper.addListener(AppCmd.LOGIN_BY_GOOGLE,appPlugin.signIn,appPlugin);
        EventHelper.addListener(AppCmd.LOGIN_BY_FACEBOOK,appPlugin.signIn,appPlugin);
        EventHelper.addListener(AppCmd.LOGIN_OUT,appPlugin.signOut,appPlugin);
        EventHelper.addListener(AppCmd.PAY,appPlugin.toPay,appPlugin);
        EventHelper.addListener(AppCmd.PAY_QUICKSDK,appPlugin.toPay,appPlugin);
        EventHelper.addListener(AppCmd.PAY_GOOGLE,appPlugin.toPay,appPlugin);
        EventHelper.addListener(AppCmd.REPORT_USERINFO,appPlugin.reportInfo,appPlugin);
        EventHelper.addListener(AppCmd.REPORT_CREATE_ROLE_QUICK,appPlugin.reportCreateRole,appPlugin);
        EventHelper.addListener(AppCmd.REPORT_USERINFO_QUICK,appPlugin.reportInfo,appPlugin);
        HttpHelper.debug=true;
        Log.appLogFunc=appPlugin.appLog;
    }catch(err){
        console.log(err);
    }
}
function initApp(msg){
    console.log("app call js >>"+msg);
}
regAppListener();