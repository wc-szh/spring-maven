package com.clarks.back.controller;


import com.alibaba.fastjson.JSON;
import com.clarks.back.service.AdminUserService;
import com.clarks.back.service.ConfigService;
import com.clarks.back.service.LoginService;
import com.clarks.back.utils.BackUtils;
import com.clarks.front.controller.BaseAction;
import com.clarks.front.utils.MD5Utils;
import com.clarks.pojo.AdminUser;
import com.clarks.pojo.Config;
import com.gwold.web.WebErrors;
import com.jeecms.common.web.Constants;
import org.apache.commons.io.FilenameUtils;
import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.text.SimpleDateFormat;
import java.util.*;


@Controller
public class SystemAct extends BaseAction {
	public static final Logger log = LoggerFactory.getLogger(SystemAct.class);
	@Autowired
	private ConfigService configService;
	
	@Autowired
	private AdminUserService adminUserService;
	@Autowired
	private LoginService loginService;
	/**
	 * 后台初始地址
	 * @param userName
	 * @param password
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping(value="/index.do",method={RequestMethod.GET,RequestMethod.POST})
	public String index(String userName,String password,HttpServletRequest request,ModelMap model){
		List<Config> list = configService.findAll();
		Config config = null;
		if(list != null){
			config = list.get(0);
		}
		AdminUser user = null;
		String message = null;
		try {
			if (StringUtils.isNotBlank(userName)) {
				AdminUser au = new AdminUser();
				String md5 = MD5Utils.md5(password);
				au.setUserName(userName);
				List<AdminUser> adminUserList = adminUserService.findAdminUser(userName,md5);
				if (adminUserList != null && adminUserList.size() > 0) {
					user = adminUserList.get(0);
					if (md5.equalsIgnoreCase(user.getPassword())) {
						if (Integer.valueOf(0).equals(user.getStatus())) {
							try {
								request.getSession().setAttribute(
										Constants.ADMIN_KEY, user);
								loginService.loginLog(request, user.getId());
								return BackUtils.returnPage(config, "index",
										"index", request, model);
							} catch (Exception e) {
								log.error("管理员登入出错了！", e);
								message = "登入出错了！";
							}
						} else {
							message = "账号被禁用！";
						}
					} else {
						message = "密码错误！";
					}
				} else {
					message = "用户名不存在！";
				}
			}else{
				user = (AdminUser)request.getSession().getAttribute(Constants.ADMIN_KEY);
				if(user != null){
					return BackUtils.returnPage(config,"index", "index",request,model);
				}
			}
		} catch (Exception e) {
			log.error("进入首页出错了", e);
			message = "出错了";
		}
		model.addAttribute("message",message);
//		return BackUtils.returnPage(config,"index", "login",request,model);
		return "login";
	}
	
	/**
	 * 注销
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping(value="/loginOut.do")
	public String loginOut(HttpServletRequest request,ModelMap model){
		request.getSession().removeAttribute(Constants.ADMIN_KEY);
		return index(null,null,request,model);
	}
	
	@RequestMapping(value="/system_list.do")
	public String systemList(Integer pageNo,HttpServletRequest request,ModelMap model){
		List<Config> list = configService.findAll();
		Config config = null;
		if(list != null){
			config = list.get(0);
		}
		model.addAttribute("config", config);
		return BackUtils.returnPage(config,"system", "list", request, model);
	}
	
	@RequestMapping("/add.do")
	public String add(HttpServletRequest request,ModelMap model){
		List<Config> list = configService.findAll();
		Config config = null;
		if(list != null){
			config = list.get(0);
		}
		return BackUtils.returnPage(config,"system", "add",request,model);
	}
	
	@RequestMapping("/edit.do")
	public String edit(HttpServletRequest request,ModelMap model){
		List<Config> list = configService.findAll();
		Config config = null;
		if(list != null){
			config = list.get(0);
		}
		model.addAttribute("config", config);
		return BackUtils.returnPage(config,"system", "edit",request,model);
	}
	
	@RequestMapping("/update.do")
	public String update(Config config,HttpServletRequest request,ModelMap model){
		WebErrors errors = new WebErrors();
		List<Config> list = configService.findAll();
		Config config2 = null;
		if(null != list && list.size()>0){
			config2 = list.get(0);
		}
		if(null != config2){
			if(null != config){
				try {
					config2.setAppId(config.getAppId());
					config2.setProjectName(config.getProjectName());
					config2.setAppSecret(config.getAppSecret());
					config2.setAppSecret(config.getAppSecret());
					config2.setPartnerkey(config.getPartnerkey());
					config2.setPort(config.getPort());
					config2.setFileDomain(config.getFileDomain());
					config2.setRequestdomain(config.getRequestdomain());
					config2.setSecretPass(config.getSecretPass());
					config2.setFirstLimit(config.getFirstLimit());
					config2.setSecretGet(config.getSecretGet());
					configService.updateConfig(config2);
					return edit( request, model);
				} catch (Exception e) {
					errors.addError("更新配置信息失败");
					log.error("更新配置信息失败", e);
				}
			}
		}
		model.addAttribute("config", config);
		return BackUtils.returnPage(config2,"system", "edit",request,model);
	}
	
	@RequestMapping("/view.do")
	public String view(HttpServletRequest request,ModelMap model){
		List<Config> list = configService.findAll();
		Config config = list.get(0);
		model.addAttribute("config", config);
		return BackUtils.returnPage(config,"system", "view",request,model);
	}
	
	@RequestMapping(value="/show_error.do")
	public String showError(HttpServletRequest request,HttpServletResponse response,ModelMap model){
		List<Config> list = configService.findAll();
		Config config = null;
		if(list != null){
			config = list.get(0);
		}
		return BackUtils.returnErrorPage(config, request, "您没有权限执行该操作！", "", model);
	}
	
	/**
	 * 上传图片
	 * @param file
	 * @param request
	 * @param response
	 * @param model
	 */
	@RequestMapping(value="/upload_pic.do")
	public void uploadPics(@RequestParam(required=false) MultipartFile file, HttpServletRequest request, HttpServletResponse response, ModelMap model){
		String message = null;
		List<Config> list = configService.findAll();
		Config config = null;
		if(list != null){
			config = list.get(0);
		}
		String originalFilename = file.getOriginalFilename();
		String extension = FilenameUtils.getExtension(originalFilename);
		SimpleDateFormat format = new SimpleDateFormat("ddhhMMssSSS");
		Set<String> cDifferentRandoms = BackUtils.cDifferentRandoms(1, 6);
		String filename = format.format(new Date())+cDifferentRandoms+"." + extension;
		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy/MM");
		String date = dateFormat.format(new Date());
		String systemPath = System.getProperty("webapp.root1");
		String path = systemPath+"adminUpload/image/"+date;  
		File destFile = new File(path,filename);
		if(!destFile.exists()){
			destFile.mkdirs();
		}
		try {
			file.transferTo(destFile);
			String imgUrl =  path+"/"+filename;
			String project = config.getContextPath() != null?config.getContextPath():"";
			if(imgUrl.indexOf(systemPath) != -1){
				imgUrl = imgUrl.replace(systemPath,project+"/");
			}
			//System.out.println("保存的图片地址是："+imgUrl);
			Map<String, String> map = new HashMap<String, String>();
			map.put("imgUrl", imgUrl);
			ajaxSuccessToJson(response, JSON.toJSONString(map));
			return;
		} catch (Exception e) {
			message = "上传图片出错了！！";
			log.error(message,e);
		}  
		ajaxErrorToJson(response,null,message);
		return;
	}

	
}
