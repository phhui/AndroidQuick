package com.tencent.tmgp.wxhl.wdtmlr;

import com.quicksdk.QuickSdkApplication;

import android.app.Activity;
import android.app.Application;
import android.os.Bundle;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

public class MainApplication extends QuickSdkApplication implements Application.ActivityLifecycleCallbacks {
    private boolean isBackRun =false;
    @Override
    public void onCreate() {
        super.onCreate();
        registerActivityLifecycleCallbacks(this);
    }
    @Override
    public void onActivityCreated(@NonNull Activity activity, @Nullable Bundle bundle) {

    }

    @Override
    public void onActivityStarted(@NonNull Activity activity) {

    }

    @Override
    public void onActivityResumed(@NonNull Activity activity) {
        if(!isBackRun)return;
        try {
            isBackRun =false;
            if (activity instanceof MainActivity) {
                ((MainActivity)activity).changeStatus(1);
            }
        }catch(Exception E){

        }
    }

    @Override
    public void onActivityPaused(@NonNull Activity activity) {

    }

    @Override
    public void onActivityStopped(@NonNull Activity activity) {
        if(isBackRun)return;
        //比如我的应用主页面是ActMain   ActMain进入后台就认定应用进入后台
        if (activity instanceof MainActivity){
            //在这里处理后台的操作
            isBackRun =true;
            ((MainActivity)activity).changeStatus(0);
        }
    }

    @Override
    public void onActivitySaveInstanceState(@NonNull Activity activity, @NonNull Bundle bundle) {

    }

    @Override
    public void onActivityDestroyed(@NonNull Activity activity) {

    }
}
