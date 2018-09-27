package com.clarks.back.utils;

import com.clarks.front.utils.RequestUtils;
import com.clarks.pojo.AdminUser;
import com.clarks.pojo.Config;
import com.gwold.web.WebErrors;
import com.jeecms.common.web.Constants;
import org.springframework.ui.ModelMap;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.util.HashSet;
import java.util.Map;
import java.util.Random;
import java.util.Set;


public class BackUtils{
	
	private static final String BACK_PATH = "/WEB-INF/jsp/back/";
	private static final String SUFFIX = ".jsp";
	
	public static final String AUDIO_FROM = "/usr/ffpmeg/";
	public static final String AUDIO_TO = "/usr/ffpmeg/output/";
	
	public static String returnPage(Config config, String dir, String page, HttpServletRequest request, ModelMap model){
		backData(config, request, model);
		return BACK_PATH + dir + "/" +page + SUFFIX;
	}
	
	public static String returnErrorPage(Config config,HttpServletRequest request,String msg,String url,ModelMap model){
		model.addAttribute("msg",msg);
		model.addAttribute("url",url);
		backData(config, request, model);
		return BACK_PATH + "error.jsp";
	}
	
	public static String returnSuccessPage(Config config,HttpServletRequest request,String msg,String url,ModelMap model){
		model.addAttribute("url",url);
		model.addAttribute("msg",msg);
		backData( config,request, model);
		return BACK_PATH + "success.jsp";
	}
	/**
	 * 为前台模板设置公用数据
	 * 
	 * @param request
	 * @param config
	 */
	public static void backData(Config config,HttpServletRequest request,Map<String, Object> map) {
		if(request == null){
			return;
		}
		AdminUser user =  (AdminUser) request.getSession().getAttribute(Constants.ADMIN_KEY);
		String location = RequestUtils.getLocation(request);
		frontData(config,map, user, location);
	}
	
	public static void frontData(Config config,Map<String, Object> map, AdminUser user, String location) {
		if (user != null) {
			map.put("user", user);
		}
		String base = config.getContextPath() != null?config.getContextPath():"";
		String fileDomain = config.getFileDomain() != null?config.getFileDomain():"";
		String backBase = base + "/manager/admin";
		map.put("base", base);
		map.put("fileDomain", fileDomain);
		map.put("backBase", backBase);
		map.put("location", location);
	}

    public static Set<String> cDifferentRandoms(int n, int m) { // 产生n个只含有数字和字母长度为m（m<=52）的无重复随机字符串
        if (m > 52) {
            return null;
        } else {
            Set<String> set = new HashSet<String>();
            while (set.size() < n) {
                set.add(cRandom(m));
            }
            return set;
        }
    }
     
    public static String cRandom(int m) { // 产生1个长度为m只含有字母的随机字符串
        char[] chs = new char[m];
        for (int i = 0; i < m; i++) {
            chs[i] = cNumOrCharRandom();
        }
        return new String(chs);
    }
     
    public static char cNumOrCharRandom() { // 产生一个随机数字或字母
        String temp = "0123456789QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
        return (char) temp.charAt(iRandom(0, 61));
    }
     
    public static int iRandom(int m, int n) { // 产生一个[m,n)之间的随机整数
        Random random = new Random();
        int small = m > n ? n : m;
        int big = m <= n ? n : m;
        return small + random.nextInt(big - small);
    }
    
	/**
	 * 将音频文件转换成MP3格式
	 * @param fromPath 传入文件的完整路径，文件名默认不变，如果不指定转出格式，默认为MP3格式
	 * @param suffix  输出文件的格式，比如“MP3”
	 */
    public static String changeToMp3(String fromPath,String suffix,String toPath){
		WebErrors errors = new WebErrors();
		if(null == suffix){
			suffix = "mp3";
		}
		if(null != fromPath){
			int i = fromPath.lastIndexOf(".");
			int j = fromPath.lastIndexOf("/");
			String fileName = fromPath.substring(j+1, i);//获取文件名
			//System.out.println(fileName);
			File file = new File(toPath);
			if(!file.exists()){
				file.mkdirs();
			}
			if (!toPath.endsWith("/")) {
				toPath += "/";
			}
			toPath += fileName + "." + suffix;
			//System.out.println("保存地址为："+toPath);
			try {
				ToMp3Utils.changeToMp3(fromPath, toPath);
				return toPath;
			} catch (Exception e) {
				//System.out.println("error");
				errors.addErrorCode("转换失败!", e);
			}
		}
		return toPath;
	}
    /**
     * 将视频文件转换成MP4格式
     * @param fromPath 传入文件的完整路径，文件名默认不变，如果不指定转出格式，默认为MP4格式
     * @param suffix  输出文件的格式，比如“MP4”
     */
    public static String changeToMp4(String fromPath,String suffix,String toPath){
    	WebErrors errors = new WebErrors();
    	if(null == suffix){
    		suffix = "mp4";
    	}
    	
    	if(null != fromPath){
    		int i = fromPath.lastIndexOf(".");
    		int j = fromPath.lastIndexOf("/");
    		String fileName = fromPath.substring(j+1, i);//获取文件名
    		//System.out.println(fileName);
    		File file = new File(toPath);
    		if(!file.exists()){
    			file.mkdirs();
    		}
    		if (!toPath.endsWith("/")) {
    			toPath += "/";
    		}
    		toPath += fileName + "." + suffix;
    		//System.out.println("保存地址为："+toPath);
    		try {
    			ToMp3Utils.changeToMp4(fromPath, toPath);
    			return toPath;
    		} catch (Exception e) {
    			//System.out.println("error");
    			errors.addErrorCode("转换失败!", e);
    		}
    	}
    	return toPath;
    }
    /**
     * 获取当前登陆的用户
     * @param request
     * @return
     */
    public AdminUser getCurrentUser(HttpServletRequest request){
    	AdminUser user = (AdminUser)request.getSession().getAttribute(Constants.ADMIN_KEY);
    	return user;
    }
}