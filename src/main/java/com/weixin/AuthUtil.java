package com.weixin;


import java.io.IOException;

import com.alibaba.fastjson.JSONObject;
import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.util.EntityUtils;


public class AuthUtil {
	
	public static JSONObject doGetJson(String url) throws ClientProtocolException, IOException {
		JSONObject jsonObject = null;
//		DefaultHttpClient client = new DefaultHttpClient();
		HttpClient client = HttpClientBuilder.create().build();
		//请求方式为get
		HttpGet httpGet = new HttpGet(url);
		//执行请求
		HttpResponse response = client.execute(httpGet);
		//获取返回结果
		HttpEntity entity = response.getEntity();
		if(entity != null) {
			//结果类型转换
			String result = EntityUtils.toString(entity,"UTF-8");
			//转换成Json
			jsonObject =JSONObject.parseObject(result);
		}
		//释放链接
		httpGet.releaseConnection();
		return jsonObject;
		
	}

}
