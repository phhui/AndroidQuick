# AndroidQuick

#### 介绍
自己写的H5打包壳,接quickSDK

#### 使用说明

1.  参考DEMO,MainActivity中97行改成自己的游戏地址
2.  调用登录：js中直接调用qk.signIn();
3.  调用上报：js中调用qk.report(jsonStr);//jsonStr为支付参数对象的json字符串，如'{"orderId":"xxx","info":"xxx","price":"99"}'
4.  调用支付：js中调用qk.toPay(jsonStr);//jsonStr为支付参数对象的json字符串，如'{"orderId":"xxx","info":"xxx","price":"99"}'
5.  (调用支付前必需先调用上报，封装的工具会保存上报信息，支付时自动带上)
6.  登录结果：JS中定义loginSuccess方法，登录成功后会回调该方法，并传uid和token参数。loginSuccess(uid,token);
7.  支付结果：js中定义paySuccess方法，支付成功后会回调该方法并传参数cpOrderId和sdkOrderId（paySuccess(cpOrderId,sdkOrderId)）

#### 参与贡献

1.  Fork 本仓库
2.  新建 Feat_xxx 分支
3.  提交代码
4.  新建 Pull Request
