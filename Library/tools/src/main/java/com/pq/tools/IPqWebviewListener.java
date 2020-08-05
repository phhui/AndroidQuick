package com.pq.tools;

public interface IPqWebviewListener {
    void onPageFinished(String url);
    void onReceiveJsValue(String value);
}
