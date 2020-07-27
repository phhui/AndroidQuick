package com.tencent.tmgp.wxhl.wdtmlr;

import android.Manifest;
import android.app.Activity;
import android.app.AlertDialog;
import android.content.DialogInterface;
import android.content.pm.PackageManager;
import android.util.Log;

import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;

import com.google.gson.JsonObject;
import com.quicksdk.BaseCallBack;
import com.quicksdk.Extend;
import com.quicksdk.FuncType;
import com.quicksdk.Payment;
import com.quicksdk.QuickSDK;
import com.quicksdk.Sdk;
import com.quicksdk.User;
import com.quicksdk.entity.GameRoleInfo;
import com.quicksdk.entity.OrderInfo;
import com.quicksdk.entity.ShareInfo;
import com.quicksdk.entity.UserInfo;
import com.quicksdk.notifier.ExitNotifier;
import com.quicksdk.notifier.LoginNotifier;
import com.quicksdk.notifier.LogoutNotifier;
import com.quicksdk.notifier.PayNotifier;
import com.quicksdk.notifier.SwitchAccountNotifier;
public class QuickUtil {
    private static String productCode="18197424520563423737014184078839";
    private static String productKey="74959194";
    private static String callback_Key="49012436174289374443382022513568";
    private static String md5_Key="sgykakqm1szqoxzeq4xktqn84mhrruhj";
    private static boolean autoLogin=true;//默认登录失败后自动重新登录一次
    private static Activity act;
    private static IQuickListener iql;
    private static GameRoleInfo rinfo;
    private static boolean isReport=false;
    private static boolean isInit=false;
    public static void create(Activity _act, IQuickListener _iql){
        act=_act;
        iql=_iql;
        QuickSDK.getInstance().setIsLandScape(false);
        try {
            if (checkPermissions()) {
                init("onCreate after");
            } else {
                requestPermissions();
            }
        } catch (Exception e) {
            requestPermissions();
        }
        com.quicksdk.Sdk.getInstance().onCreate(act);
    }
    public static void requestPermissions(){
        ActivityCompat.requestPermissions(act, new String[] { Manifest.permission.READ_PHONE_STATE,Manifest.permission.WRITE_EXTERNAL_STORAGE }, 1);
    }
    public static boolean checkPermissions(){
        if ((ContextCompat.checkSelfPermission(act, Manifest.permission.READ_PHONE_STATE) != PackageManager.PERMISSION_GRANTED)
                || (ContextCompat.checkSelfPermission(act, Manifest.permission.WRITE_EXTERNAL_STORAGE) != PackageManager.PERMISSION_GRANTED))return false;
        return true;
    }
    public static void init(String msg){
        if(isInit)return;
        isInit=true;
        log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>init from  "+msg);
        setNotifier();
        Sdk.getInstance().init(act, productCode, productKey);
        iql.inited();
    }
    public static void signIn(){
        User.getInstance().login(act);
    }
    public static void signOut(){
        User.getInstance().logout(act);
    }
    public static void exit(){
        //通过isShowExitDialog判断渠道sdk是否有退出框
        if(QuickSDK.getInstance().isShowExitDialog()){
            Sdk.getInstance().exit(act);
        }else{
            // 游戏调用自身的退出对话框，点击确定后，调用quick的exit接口
            new AlertDialog.Builder(act).setTitle("退出").setMessage("是否退出游戏?").setPositiveButton("确定", new DialogInterface.OnClickListener() {
                @Override
                public void onClick(DialogInterface arg0, int arg1) {
                    Sdk.getInstance().exit(act);
                }
            }).setNegativeButton("取消", null).show();
        }
    }
    public static int getChannelType(){
        return Extend.getInstance().getChannelType();
    }
    public static String getDeviceId(){
        return Extend.getInstance().getDeviceID(act);
    }
    public static void uploadEvent(String event,String value){
        Extend.getInstance().uploadNode(act,event,value);
    }
    public static String getConfig(){
        return Extend.getInstance().getExtrasConfig("key");
    }
    public static boolean getFunc(){
        return Extend.getInstance().isFunctionSupported(FuncType.HIDE_TOOLBAR); //是否支持隐藏悬浮框功能
    }
    public static void runFunc(){
        Extend.getInstance().callFunction(act, FuncType.HIDE_TOOLBAR); //调用隐藏悬浮框的方法
    }
    /**调用客服插件(付费功能)*/
    public static void callCustomService(){
        Extend.getInstance().callPlugin(act, FuncType.CUSTOM, "1000","嘻嘻哈哈","zzzz","1");//后四个参数请依次传入 角色id，角色名，区服名，vip等级
    }
    /**调用渠道分享*/
    public static void share(ShareInfo si){
        Extend.getInstance().callFunctionWithParams(act, FuncType.SHARE,si);
    }
    /**实名认证**/
    public static void verifyRealName() {
        final Activity activity = act;
        activity.runOnUiThread(new Runnable() {
            @Override
            public void run() {
                // 判断渠道是否支持实名认证功能
                if (Extend.getInstance().isFunctionSupported(FuncType.REAL_NAME_REGISTER)) {
                    Extend.getInstance().callFunctionWithParamsCallBack(activity, FuncType.REAL_NAME_REGISTER, new BaseCallBack() {
                        @Override
                        public void onSuccess(Object... arg0) {
                            if (arg0 != null && arg0.length > 0) {
                                JsonObject jsonObject = (JsonObject) arg0[0];
                                Log.d("json", "==========" + jsonObject.toString());
                                // 用户id
                                String uid = jsonObject.get("uid").getAsString();
                                // 年龄, 如果渠道没返回默认为-1
                                int age = jsonObject.get("age").getAsInt();
                                // 是否已实名 true表示已实名
                                // false表示未实名,如果渠道没返回默认为false
                                boolean realName = jsonObject.get("realName").getAsBoolean();
                                // oppo实名认证失败之后是否可以继续游戏 true表示可以
                                // false表示不可以,如果渠道没返回默认为true
                                boolean resumeGame = jsonObject.get("resumeGame").getAsBoolean();
                                // 预留字段,如果渠道没返回默认为""的字符串
                                String other = jsonObject.get("other").getAsString();
                                // 游戏根据返回信息做对应的逻辑处理

                            }
                        }

                        @Override
                        public void onFailed(Object... arg0) {

                        }
                    });
                }
            }
        });
    }
    public static void reportUserinfo(String jsonStr,boolean newRole){
        try{
            rinfo= QuickParam.getRoleInfo(jsonStr);
            User.getInstance().setGameRoleInfo(act, rinfo, newRole);
            isReport=true;
        }catch(Exception err){
            iql.reportFailed("参数错误:"+err.getMessage());
        }
    }
    public static void toPay(String jsonStr){
        try{
            if(!isReport)reportUserinfo(jsonStr,false);
            OrderInfo oinfo= QuickParam.getOrderInfo(jsonStr);
            Payment.getInstance().pay(act,oinfo,rinfo);
        }catch(Exception err){
            iql.payFailed("","参数错误",err.getMessage());
        }
    }
    public static void setNotifier(){
        QuickSDK.getInstance().setLoginNotifier(new LoginNotifier() {
            @Override
            public void onSuccess(UserInfo userInfo) {
                iql.loginSuccess(userInfo);
            }
            @Override
            public void onCancel() {
            }
            @Override
            public void onFailed(final String message, String trace) {
                if(autoLogin){
                    autoLogin=false;
                    signIn();
                }else iql.loginFailed(message,trace);
            }
        });
        QuickSDK.getInstance().setLogoutNotifier(new LogoutNotifier() {
            @Override
            public void onSuccess() {
                //注销成功
            }
            @Override
            public void onFailed(String message, String trace) {
                //注销失败，不做处理
            }
        });
        QuickSDK.getInstance().setSwitchAccountNotifier(new SwitchAccountNotifier() {
            @Override
            public void onSuccess(UserInfo userInfo) { //切换账号成功的回调，返回新账号的userInfo

            }

            @Override
            public void onCancel() {
                //切换账号取消
            }
            @Override
            public void onFailed(String message, String trace) {
                //切换账号失败
            }
        });
        QuickSDK.getInstance().setPayNotifier(new PayNotifier() {
            @Override
            public void onSuccess(String sdkOrderID, String cpOrderID,String extrasParams) {
                iql.paySuccess(sdkOrderID,cpOrderID,extrasParams);
                //sdkOrderID:quick订单号 cpOrderID：游戏订单号
            }
            @Override
            public void onCancel(String cpOrderID) {
                //支付取消
            }
            @Override
            public void onFailed(String cpOrderID, String message, String trace) {
                iql.payFailed(cpOrderID,message,trace);
            }
        });
        QuickSDK.getInstance().setExitNotifier(new ExitNotifier() {
            @Override
            public void onSuccess() {
                //退出成功，游戏在此做自身的退出逻辑处理
            }
            @Override
            public void onFailed(String message, String trace) {
                //退出失败，不做处理
            }
        });
    }
    public static void log(String msg){
        Log.d("log>>>",msg);
    }
}
