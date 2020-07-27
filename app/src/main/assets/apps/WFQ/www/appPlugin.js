var appPlugin={};
(function(appPlugin){
    appPlugin.app=null;
    appPlugin.signType={};
    appPlugin.isInit=false;
    appPlugin.delayList=[];
    appPlugin.reportParam=[];
    appPlugin.shareService=null;
    appPlugin.init=function(){
        try{
            appPlugin.app = pq;
            if(!appPlugin.app)console.log(">>>APP init failed");
            appPlugin.isInit=true;
            while(appPlugin.delayList.length>0)EventHelper.call(appPlugin.delayList.shift());
            console.log("plugin inited");
            Log.log=appPlugin.appLog;
        }catch(err){
            console.log("log>>> "+err);
        }
    }
    appPlugin.signIn=function(e){
        appPlugin.signType[AppCmd.LOGIN_BY_CJ]="cj";
        appPlugin.signType[AppCmd.LOGIN_BY_GOOGLE]="google";
        appPlugin.signType[AppCmd.LOGIN_BY_FACEBOOK]="facebook";
        console.log(">login<");
        if(!appPlugin.isInit)appPlugin.delayList.push(e);
        else{
            console.log("plus.login:"+e);
            appPlugin.app.signIn(appPlugin.signType[e]);
        }
    }
    appPlugin.signOut=function(){
        if(!appPlugin.isInit){
            appPlugin.delayList.push(event);
            return;
        }
        appPlugin.app.signOut();
    }
    appPlugin.loginResult=function(msg){
        console.log("loginResult:"+msg.toString());
        EventHelper.call(AppCmd.LOGIN_RESULT,msg.toString());
    }
    appPlugin.toPay=function(...args){
        if(!appPlugin.isInit)return;
        args.shift();
        console.log("appPay："+args);
        appPlugin.app.toPay.apply(appPlugin.app,args);
    }
    appPlugin.payResult=function(res,oid){
        console.log("payResult:"+res+"-"+oid);
        EventHelper.call(AppCmd.PAY_RESULT,[res,oid]);
    }
    appPlugin.logger=function(e,type,param){
        if(!appPlugin.isInit)return;
        console.log(param);
        if(appPlugin.app.reportEvent)appPlugin.app.reportEvent(type,param);
    }
    appPlugin.reportInfo=function(...args){
        if(!appPlugin.isInit)return;
        if(!appPlugin.app.reportUserInfo)return;
        args.shift();
        console.log("userinfoReport:"+args);
        for(var i=0;i<args.length;i++){
            args[i]=args[i].toString();
        }
        appPlugin.reportParam=args;
//        if(appPlugin.app&&appPlugin.app.reportUserInfo)appPlugin.app.reportUserInfo.apply(appPlugin.app,args);
    }
    appPlugin.reportInfoResult=function(msg){
        if(msg==1)appPlugin.app.showLog("report success");
        else {
            appPlugin.app.showLog("report failed");
            appPlugin.app.reportUserInfo.apply(appPlugin.app,appPlugin.reportParam);
        }
    }
    appPlugin.pause=function(val){
        EventHelper.call(parseInt(val)==1?AppCmd.ONRESUME:AppCmd.PAUSE);
    }
    appPlugin.appLog=function(msg){
        if(!appPlugin.isInit)return;
        appPlugin.app.showLog(msg);
    }
    appPlugin.initShare=function(){
        if(!appPlugin.isInit)return;
    }
    appPlugin.share=function(){
        if(!appPlugin.isInit)return;
        var s=shareService;
        var msg={content:"我的甜蜜恋人",extra:{scene:null},pictures:""};
        s.send( msg, function(){
            //alert( "分享到\""+s.description+"\"成功！ " );
        }, function(e){
            //alert( "分享到\""+s.description+"\"失败: "+e.code+" - "+e.message );
        } );
    }
}(appPlugin));
