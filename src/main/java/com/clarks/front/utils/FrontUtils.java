package com.clarks.front.utils;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import com.clarks.pojo.Config;
import com.clarks.pojo.User;
import com.jeecms.common.web.Constants;
import org.springframework.ui.ModelMap;




public class FrontUtils{
	
	private static final String FRONT_PATH = "/WEB-INF/jsp/front/";
	private static final String SUFFIX = ".jsp";
	
	public static String returnPage(Config config, String dir, String page, HttpServletRequest request, ModelMap model){
		frontData(config, request, model);
		return FRONT_PATH + dir + "/" +page + SUFFIX;
	}
	
	public static String returnErrorPage(Config config,HttpServletRequest request,String msg,String url,ModelMap model){
		model.addAttribute("msg",msg);
		model.addAttribute("url",url);
		frontData(config, request, model);
		return FRONT_PATH + "error.jsp";
	}
	
	public static String returnSuccessPage(Config config,HttpServletRequest request,String msg,String url,ModelMap model){
		model.addAttribute("url",url);
		model.addAttribute("msg",msg);
		frontData( config,request, model);
		return FRONT_PATH + "success.jsp";
	}
	/**
	 * 为前台模板设置公用数据
	 * 
	 * @param request
	 * @param config
	 */
	public static void frontData(Config config,HttpServletRequest request,Map<String, Object> map) {
		if(request == null){
			return;
		}
		User user = (User) request.getSession().getAttribute(Constants.USER_KEY);
		String location = RequestUtils.getLocation(request);
		frontData(config,map, user, location);
	}
	
	public static void frontData(Config config,Map<String, Object> map, User user, String location) {
		if (user != null) {
			map.put("user", user);
		}
		String base = config.getContextPath() != null?config.getContextPath():"";
		String fileDomain = config.getFileDomain() != null?config.getFileDomain():"";
		map.put("base", base);
		map.put("location", location);
		map.put("fileDomain", fileDomain);
	}

	
}