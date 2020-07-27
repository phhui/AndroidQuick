package com.tencent.tmgp.wxhl.wdtmlr;

public interface IPqWebviewListener {
    void onPageFinished(String url);
    void onReceiveJsValue(String value);
}
