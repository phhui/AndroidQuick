package com.tencent.tmgp.wxhl.wdtmlr;
import android.app.Activity;
import android.content.Intent;
import android.content.pm.ActivityInfo;
import android.content.pm.PackageManager;
import android.os.Bundle;
import android.util.Log;
import android.view.KeyEvent;
import android.view.Window;
import android.view.WindowManager;
import android.webkit.JavascriptInterface;
import android.widget.FrameLayout;
import android.widget.Toast;
import com.google.gson.JsonObject;
import com.quicksdk.entity.UserInfo;
public class MainActivity extends Activity {
    private FrameLayout view;
    private PqWebview wv=null;
    private boolean isInit=false;
    private boolean isLogin=false;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        QuickUtil.create(MainActivity.this,iquickListener);
        view=(FrameLayout)this.getWindow().getDecorView();

        requestWindowFeature(Window.FEATURE_NO_TITLE);//隐藏标题
        getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN,WindowManager.LayoutParams.FLAG_FULLSCREEN);//设置全屏
    }
    @Override
    public void onResume() {
        if(getRequestedOrientation()== ActivityInfo.SCREEN_ORIENTATION_LANDSCAPE){
            setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_PORTRAIT);
        }
        super.onResume();
        com.quicksdk.Sdk.getInstance().onResume(this);
    }
    @Override
    public boolean onKeyDown(int keyCode, KeyEvent event) {
        if (keyCode == KeyEvent.KEYCODE_BACK) {
            if(!isLogin){
                signIn("");
                return true;
            }
            Intent home = new Intent(Intent.ACTION_MAIN);
            home.setFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP);
            home.addCategory(Intent.CATEGORY_HOME);
            startActivity(home);
            return true;
        }
        return super.onKeyDown(keyCode, event);
    }
    public void changeStatus(int statu){
        wv.callJs("javascript:appPlugin.pause('"+statu+"')");
    }
    @JavascriptInterface
    public void signIn(String msg) {
        showLog("登录");
        QuickUtil.signIn();
    }
    @JavascriptInterface
    public void signOut(){
        showLog("登出");
        QuickUtil.signOut();
    }
    @JavascriptInterface
    public void reportCreateRole(String jsonStr){
        showLog("创角上报："+jsonStr);
        QuickUtil.reportUserinfo(jsonStr,true);
    }
    @JavascriptInterface
    public void reportUserInfo(String jsonStr){
        showLog("升级上报："+jsonStr);
        QuickUtil.reportUserinfo(jsonStr,false);
    }
    @JavascriptInterface
    public void toPay(String jsonStr){
        showLog("支付："+jsonStr);
        QuickUtil.toPay(jsonStr);
    }
    public void loginResult(JsonObject jobj){
        String res=jobj.toString();
        showLog("登录结果："+res);
        callJs("appPlugin.loginResult('"+res+"')");
    }
    public void payResult(JsonObject jobj){
        showLog("支付结果："+jobj.toString());
        callJs("appPlugin.payResult('"+jobj.toString()+"')");
    }
    public void callJs(String msg){
        wv.callJs(msg);
    }
    @JavascriptInterface
    public void showLog(String msg){
        Log.d("log>>> ",msg);
    }
    @JavascriptInterface
    public void showTip(String msg){
        Toast.makeText(MainActivity.this, msg, Toast.LENGTH_SHORT).show();
        showLog(msg);
    }
    @Override
    public void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults) {
        if (grantResults[0] == PackageManager.PERMISSION_GRANTED) {
            showLog("申请权限成功！");
            QuickUtil.init("permissions after");
            createWebview();
        }else {
            QuickUtil.requestPermissions();
        }
    }
    @Override
    protected void onStart() {
        super.onStart();
        com.quicksdk.Sdk.getInstance().onStart(this);
    }
    @Override
    protected void onRestart() {
        super.onRestart();
        com.quicksdk.Sdk.getInstance().onRestart(this);
    }
    @Override
    protected void onStop() {
        super.onStop();
        com.quicksdk.Sdk.getInstance().onStop(this);
    }
    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        com.quicksdk.Sdk.getInstance().onActivityResult(this, requestCode, resultCode, data);
    }
    private IQuickListener iquickListener=new IQuickListener() {
        @Override
        public void inited() {
            createWebview();
        }

        @Override
        public void loginSuccess(UserInfo info){
            JsonObject jobj=new JsonObject();
            try {
                jobj.addProperty("code",1);
                jobj.addProperty("msg","success");
                jobj.addProperty("uid", info.getUID().toString());
                jobj.addProperty("token",info.getToken());
            }catch(Exception err){
                showLog("loginResult coverTo json error"+err.getMessage());
            }
            loginResult(jobj);
        }
        @Override
        public void loginFailed(String message, String trace) {
            showTip("登录失败("+trace+")");
        }

        @Override
        public void paySuccess(String sdkOrderID, String cpOrderID, String extrasParams) {
            JsonObject jobj=new JsonObject();
            jobj.addProperty("code",1);
            jobj.addProperty("pOderId",sdkOrderID);
            jobj.addProperty("orderId",cpOrderID);
            jobj.addProperty("msg","success");
            payResult(jobj);
        }

        @Override
        public void payFailed(String cpOrderID, String message, String trace) {
            showLog(">>>"+message+","+trace);
            JsonObject jobj=new JsonObject();
            jobj.addProperty("code",3);
            jobj.addProperty("orderId",cpOrderID);
            jobj.addProperty("msg",trace);
            payResult(jobj);
        }

        @Override
        public void reportFailed(String msg) {
            showLog("上报结果："+msg);
        }
    };
    private void createWebview() {
        if(wv!=null){
            view.addView(wv);
            return;
        }
        wv = new PqWebview(MainActivity.this);
        wv.registerFunc(MainActivity.this,"pq");
        wv.init(new IPqWebviewListener() {
            @Override
            public void onPageFinished(String url) {
                Log.d("log>>>","game is loaded");
                wv.callJs("initApp('ok')");
            }
            @Override
            public void onReceiveJsValue(String value) {

            }
        });
        wv.loadUrl("file:///android_asset/apps/WFQ/www/index.html");
        view.addView(wv);
    }
}
