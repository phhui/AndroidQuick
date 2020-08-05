var quickPlugin={};
(function(quickPlugin){
    quickPlugin.CB_LOGIN="app_plugin_signIn_callback";//登录结果{code:1登录成功0登录失败,msg:登录提示,uid:平台用户ID,token:平台登录token}
    quickPlugin.CB_PAY="app_plugin_pay_callback";//支付结果{code:1支付成功0未支付2支付取消3支付失败,msg:支付结果信息success/failed,pOderId:平台订单号,order:游戏订单号}
    quickPlugin.CB_PAUSE="app_plugin_pause_callback";//是否进入后台，回调带参数true/false
    quickPlugin.cbList={};
    quickPlugin.app=null;
    quickPlugin.signType={};
    quickPlugin.isInit=false;
    quickPlugin.delayList=[];
    quickPlugin.reportParam=[];
    quickPlugin.shareService=null;
    quickPlugin.init=function(){
        quickPlugin.app = pq;
        quickPlugin.isInit=true;
        while(quickPlugin.delayList.length>0)EventHelper.call(quickPlugin.delayList.shift());
        console.log=quickPlugin.appLog;
    }
    quickPlugin.regCallback=function(key,func,target){
        quickPlugin.cbList[key]={cb:func,target:target};
    }
    quickPlugin.signIn=function(){
        console.log(">>> signIn <<<");
        if(!quickPlugin.isInit)quickPlugin.delayList.push(e);
        else quickPlugin.app.signIn();
    }
    quickPlugin.signOut=function(){
        console.log(">>> signOut <<<");
        if(!quickPlugin.isInit)quickPlugin.delayList.push(event);
        else quickPlugin.app.signOut();
    }
    quickPlugin.loginResult=function(msg){
        console.log(">>> signResult:"+msg.toString());
        quickPlugin.callback(quickPlugin.CB_LOGIN,val);
    }
    quickPlugin.toPay=function(jsonStr){
        if(!quickPlugin.isInit)return;
        console.log("appPay："+event+" >> "+jsonStr);
        quickPlugin.app.toPay(jsonStr);
    }
    quickPlugin.payResult=function(res){
        console.log("payResult:"+res);
        quickPlugin.callback(quickPlugin.CB_PAY,val);
    }
    quickPlugin.dot=function(type,param){
        if(!quickPlugin.isInit)return;
        quickPlugin.app.dot(type,param);
    }
    quickPlugin.report=function(jsonStr,isCreate){
        if(!quickPlugin.isInit)return;
        console.log("report:"+jsonStr+"--"+isCreate);
        quickPlugin.reportParam=jsonStr;
        try{
            quickPlugin.app.report(jsonStr,isCreate);
        }catch(err){
            quickPlugin.checkErr(err);
            console.log("上报异常："+err);
        }
    }
    quickPlugin.checkErr=function(msg){
        if(err=="java exception was raised during method invocation")alert("调用上报接口异常(请检查JAVA方法是否操作了UI或者有其它异常)");
    }
    quickPlugin.reportResult=function(msg){
        if(msg==1)quickPlugin.app.showLog("report success");
        else {
            quickPlugin.app.showLog("report failed");
            quickPlugin.app.report.apply(quickPlugin.app,quickPlugin.reportParam);
        }
    }
    quickPlugin.pause=function(val){
        console.log("payResult:"+res);
        quickPlugin.callback(quickPlugin.CB_PAUSE,val);
    }
    quickPlugin.callback=function(key,param){
        let obj=quickPlugin.cbList[key];
        if(obj)obj.cb.apply(obj.target,[param]);
    }
    quickPlugin.appLog=function(msg){
        if(!quickPlugin.isInit)return;
        quickPlugin.app.showLog(msg);
    }
}(quickPlugin));