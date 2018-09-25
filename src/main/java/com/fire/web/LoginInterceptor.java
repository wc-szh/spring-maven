package com.fire.web;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.clarks.pojo.Config;
import com.clarks.pojo.User;
import com.jeecms.common.utils.UnicodeUtil;
import com.jeecms.common.web.Constants;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;
import com.clarks.back.service.ConfigService;


/**
 * 前端上下文登录检测
 * @author wdy
 * @version ：2016年2月29日 下午6:22:56
 */
public class LoginInterceptor extends HandlerInterceptorAdapter {
	
	@Override
	public boolean preHandle(HttpServletRequest request,
			HttpServletResponse response, Object handler) throws Exception {
		String uri = request.getRequestURI().replace(request.getContextPath(), "");
		if (exclude(uri)) {
			return true;
		}
        request.setCharacterEncoding("UTF-8");  
        response.setCharacterEncoding("UTF-8");  
        response.setContentType("text/html;charset=UTF-8");  
        User user = (User) request.getSession().getAttribute(Constants.USER_KEY);;
        if (null == user) {  
        	String requestType = request.getHeader("X-Requested-With");
    		if (requestType != null && requestType.equals("XMLHttpRequest")) {
                response.setCharacterEncoding("UTF-8");
                response.setContentType("application/json; charset=utf-8");
                response.getOutputStream().print("{\"status\":2, \"code\":\"login\", \"info\":\"" + UnicodeUtil.toEncodedUnicode( "登录超时，请重新登录", false) + "\", \"data\":null}" );
                return false;  
            } 
            List<Config> list = configService.findAll();
            Config config = list.get(0);
            String path = config.getContextPath();
            String reLogin = "/autho.cc";
            if(StringUtils.isNotBlank(path) && path.length() > 1) {
            	reLogin = path + reLogin;
            }
            response.sendRedirect(reLogin);
            return false;  
        } 
        return super.preHandle(request, response, handler);  
	}


	private boolean exclude(String uri) {
		if (excludeUrls != null) {
			for (String exc : excludeUrls) {
				if (exc.equals(uri)) {
					return true;
				}
			}
		}
		return false;
	}
	
	private String[] excludeUrls;
	private ConfigService configService;

	@Autowired
	public void setConfigService(ConfigService configService) {
		this.configService = configService;
	}

	public void setExcludeUrls(String[] excludeUrls) {
		this.excludeUrls = excludeUrls;
	}
}