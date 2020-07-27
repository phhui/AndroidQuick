package com.tencent.tmgp.wxhl.wdtmlr;
import android.util.Log;

import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.quicksdk.entity.GameRoleInfo;
import com.quicksdk.entity.OrderInfo;

import org.json.JSONException;
public class QuickParam {
    public static GameRoleInfo getRoleInfo(String jsonStr) throws JSONException {
        GameRoleInfo g=new GameRoleInfo();
        JsonObject obj= JsonParser.parseString(jsonStr).getAsJsonObject();
        Log.d("debug>>>",obj.get("serverID").getAsString());
        g.setServerID(obj.get("serverID").getAsString());//数字字符串，不能含有中文字符
        g.setServerName(obj.get("serverName").getAsString());
        g.setGameRoleName(obj.get("gameRoleName").getAsString());
        g.setGameRoleID(obj.get("gameRoleID").getAsString());
        g.setGameBalance(obj.get("gameBalance").getAsString());
        g.setVipLevel(obj.get("vipLevel").getAsString());//设置当前用户vip等级，必须为数字整型字符串,请勿传"vip1"等类似字符串
        g.setGameUserLevel(obj.get("gameUserLevel").getAsString());//设置游戏角色等级
        g.setPartyName(obj.get("partyName").getAsString());//设置帮派名称
        g.setRoleCreateTime(obj.get("roleCreateTime").getAsString()); //UC，当乐与1881，TT渠道必传，值为10位数时间戳
        g.setPartyId(obj.get("partyId").getAsString()); //360渠道参数，设置帮派id，必须为整型字符串
        g.setGameRoleGender(obj.get("gameRoleGender").getAsString());//360渠道参数
        g.setGameRolePower(obj.get("gameRolePower").getAsString()); //360,TT语音渠道参数，设置角色战力，必须为整型字符串
        g.setPartyRoleId(obj.get("partyRoleId").getAsString()); //360渠道参数，设置角色在帮派中的id
        g.setPartyRoleName(obj.get("partyRoleName").getAsString()); //360渠道参数，设置角色在帮派中的名称
        g.setProfessionId(obj.get("professionId").getAsString()); //360渠道参数，设置角色职业id，必须为整型字符串
        g.setProfession(obj.get("profession").getAsString()); //360渠道参数，设置角色职业名称
        g.setFriendlist(obj.get("friendlist").getAsString()); //360渠道参数，设置好友关系列表，格式请参考：http://open.quicksdk.net/help/detail/aid/190
        return g;
    }
    public static GameRoleInfo getPayRoleInfo(String jsonStr) throws JSONException {
        GameRoleInfo g=new GameRoleInfo();
        JsonObject jobj= JsonParser.parseString(jsonStr).getAsJsonObject();
        g.setServerID(jobj.get("serverID").getAsString());//数字字符串，不能含有中文字符
        g.setServerName(jobj.get("serverName").getAsString());
        g.setGameRoleName(jobj.get("gameRoleName").getAsString());
        g.setGameRoleID(jobj.get("gameRoleID").getAsString());
        g.setGameBalance(jobj.get("gameBalance").getAsString());
        g.setVipLevel(jobj.get("vipLevel").getAsString());//设置当前用户vip等级，必须为数字整型字符串,请勿传"vip1"等类似字符串
        g.setGameUserLevel(jobj.get("gameUserLevel").getAsString());//设置游戏角色等级
        g.setPartyName(jobj.get("partyName").getAsString());//设置帮派名称
        return g;
    }
    public static OrderInfo getOrderInfo(String jsonStr) throws  JSONException{
        OrderInfo o=new OrderInfo();
        JsonObject jobj= JsonParser.parseString(jsonStr).getAsJsonObject();
        o.setCpOrderID(jobj.get("cpOrderID").getAsString());
        o.setGoodsName(jobj.get("goodsName").getAsString());//商品名称，不带数量
        o.setCount(jobj.get("count").getAsInt());//游戏币数量
        o.setAmount(jobj.get("amount").getAsInt());
        o.setGoodsID(jobj.get("goodsID").getAsString());
        o.setGoodsDesc(jobj.get("goodsDesc").getAsString());
        o.setPrice(jobj.get("price").getAsDouble());
        o.setExtrasParams(jobj.get("extrasParams").getAsString());
        return o;
    }
}
