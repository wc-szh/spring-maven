package com.clarks.front.controller;

import com.jeecms.common.util.UnicodeUtil;
import com.jeecms.common.web.ErrorCode;
import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.net.URI;

@Controller
public class BaseAction {

	Logger log = LoggerFactory.getLogger(BaseAction.class);

	
	/**
     * ajax 返回成功Json数据
     * @param response
     * @param jsonString json格式数据
     */
	protected void ajaxSuccessToJson(HttpServletResponse response, String jsonString) {
        ajaxToJson(response, jsonString, "", 1, null);
    }	
	
	protected void ajaxErrorToJson(HttpServletResponse response, String jsonString, String info ) {
        ajaxToJson(response, jsonString, info, 0, null);
    }
    
	 /**
     * ajax 返回 json 数据
     * @param response
     * @param jsonString 待返回的JSON数据
     * @param info 描述信息，一般为有错误时使用
     * @param status 返回数据的状态，1为成功，0为失败
     * @param code 错误代码
     */
    protected void ajaxToJson(HttpServletResponse response, String jsonString, String info, Integer status, ErrorCode code) {
        StringBuffer result = new StringBuffer("{\"status\":");
        result.append(status).append(",\"data\":")
                .append( jsonString ).append(",\"info\":\"")
                .append(info == null ? "" : UnicodeUtil.toEncodedUnicode(info.trim(), false)).append("\",\"code\":\"")
                .append(code).append("\"}");

        try {
            response.setHeader("Cache-Control","no-cache");
            response.setHeader("Pragma","no-cache");
            response.setDateHeader ("Expires",-1);
            //response.setCharacterEncoding("UTF-8");
            response.setContentType("application/json; charset=utf-8");
            response.getOutputStream().print(result.toString());
        } catch(IOException e) {
            if (log.isErrorEnabled()) {
                log.error("无法返回请求数据", e);
            }
        }

    }
    
    protected String errorPage(String msg,String url,ModelMap model){
    	model.addAttribute("msg",msg);
    	model.addAttribute("url",url);
    	return "/WEB-INF/page/front_error.jsp";
    }
    protected String successPage(String msg,String url,ModelMap model){
    	model.addAttribute("msg",msg);
    	model.addAttribute("url",url);
    	return "/WEB-INF/page/front_success.jsp";
    }
    
    /**
     * 
     * @param url
     * @return
     */
	public String sendGet( String url ) {
		String html = null;
		try {
			HttpGet httpGet = new HttpGet(new URI(url));
			CloseableHttpClient httpclient = HttpClients.createDefault();
			HttpResponse httpresponse = httpclient.execute(httpGet);
			HttpEntity entity = httpresponse.getEntity();
			html = EntityUtils.toString(entity, "UTF-8");
			httpGet = null;
		} catch (Exception e) {
			// TODO: handle exception
		}
		return html;
	}
}
