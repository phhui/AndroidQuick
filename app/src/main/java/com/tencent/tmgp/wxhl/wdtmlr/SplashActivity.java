package com.tencent.tmgp.wxhl.wdtmlr;
import android.content.Intent;
import android.graphics.Color;
import com.quicksdk.QuickSdkSplashActivity;
public class SplashActivity extends QuickSdkSplashActivity {
    @Override
    public int getBackgroundColor() {
        return Color.WHITE;
    }

    @Override
    public void onSplashStop() {
        Intent intent = new Intent(this, MainActivity.class);
        startActivity(intent);
        this.finish();
    }
}
