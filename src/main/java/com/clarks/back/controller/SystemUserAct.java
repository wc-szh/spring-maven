package com.clarks.back.controller;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.alibaba.fastjson.serializer.SerializerFeature;
import com.alibaba.fastjson.serializer.SimplePropertyPreFilter;
import com.clarks.back.service.AdminUserService;
import com.clarks.back.service.ConfigService;
import com.clarks.back.utils.BackUtils;

import com.clarks.front.controller.BaseAction;
import com.clarks.front.utils.MD5Utils;
import com.clarks.pojo.AdminUser;
import com.clarks.pojo.Config;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.gwold.page.SimplePage;
import com.jeecms.common.web.Constants;
import com.jeecms.common.web.CookieUtils;
import com.jeecms.common.web.ResponseUtils;
import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Date;
import java.util.List;


/**
 * 后台系统用户
 * @author wsc
 * @version 2016年3月24日
 */
@Controller
@RequestMapping("/manager/admin/useradmin")
public class SystemUserAct extends BaseAction {
	public static final Logger log = LoggerFactory.getLogger(SystemAct.class);
	
	@Autowired
	private AdminUserService adminUserService;
	@Autowired
	private ConfigService configService;
	
	/**
	 * 修改管理员状态（禁用/启用）
	 * @param id
	 * @param status
	 * @param request
	 * @param response
	 */
	@RequestMapping(value="/change_status.do")
	public void changeStatus(Integer id,Integer status,HttpServletRequest request,HttpServletResponse response){
		String message = "";
		try {
			if(id != null && status != null){
				AdminUser user = adminUserService.findAdminUser(id);
				if(user != null && !Integer.valueOf(0).equals(user.getLevel())){
					user.setStatus(status);
					 adminUserService.updateAdminUser(user);
					SimplePropertyPreFilter filter = new SimplePropertyPreFilter(AdminUser.class,"id","status");
					ajaxSuccessToJson(response,JSON.toJSONString(user,filter,SerializerFeature.BrowserCompatible));
					return;
				}else{
					message = "该用户为超级管理员，或用户不存在，不能修改其状态！";
				}
			}else{
				message = "提交信息不完整，请刷新页面后重试！";
			}
		} catch (Exception e) {
			log.error("修改管理员状态出错了！",e );
			message = "出错了！";
		}
		ajaxErrorToJson(response, null,message);
		return;
	}
	
	
	@RequestMapping("/list.do")
	public String list(Integer pageNo,String keyWords,HttpServletRequest request,ModelMap model){
		List<Config> list = configService.findAll();
		Config config = null;
		if(list != null){
			config = list.get(0);
		}

		PageHelper.startPage(SimplePage.cpn(pageNo), CookieUtils.getPageSize(request));
		List<AdminUser> listAdminUser = adminUserService.selectLikeAdminUser(keyWords);
		PageInfo<AdminUser> p = new PageInfo<AdminUser>(listAdminUser);
		model.addAttribute("pagination", p);
		model.addAttribute("keyWords", keyWords);
		
		return BackUtils.returnPage(config,"system/user", "list",request,model);
	}
	
	@RequestMapping("/add.do")
	public String add(HttpServletRequest request,ModelMap model){
		List<Config> list = configService.findAll();
		Config config = null;
		if(list != null){
			config = list.get(0);
		}
		return BackUtils.returnPage(config,"system/user", "add",request,model);
	}
	
	@RequestMapping("/save.do")
	public String save(AdminUser adminUser,HttpServletRequest request,ModelMap model){
		List<Config> list = configService.findAll();
		Config config = null;
		if(list != null){
			config = list.get(0);
		}
		String message = null;
		if(null != adminUser){
			try {
				String password = adminUser.getPassword().trim();
				String md5Encode = MD5Utils.md5(password);
				adminUser.setRegisterTime(new Date());
				adminUser.setLastLoginTime(new Date());
				adminUser.setStatus(Integer.valueOf(0));
				adminUser.setPassword(md5Encode);
				adminUserService.insertAdminUser(adminUser);
				return this.list(null, null,request, model);
			} catch (Exception e) {
				message = "添加用户信息失败";
				log.error(message, e);
			}
		}
		
		model.addAttribute("message", message);
		model.addAttribute("adminUser", adminUser);
		return BackUtils.returnPage(config,"system/user", "add",request,model);
	}
	
	@RequestMapping("/edit.do")
	public String edit(Integer id,HttpServletRequest request,ModelMap model){
		List<Config> list = configService.findAll();
		Config config = null;
		if(list != null){
			config = list.get(0);
		}
		String message = null;
		if(null == id){
			message = "用户不存在";
		}
		AdminUser adminUser = adminUserService.findAdminUser(id);
		
		model.addAttribute("message", message);
		model.addAttribute("adminUser", adminUser);
		return BackUtils.returnPage(config,"system/user", "edit",request,model);
	}
	
	@RequestMapping("/update.do")
	public String update(AdminUser adminUser,HttpServletRequest request,ModelMap model){
		List<Config> list = configService.findAll();
		Config config = null;
		if(list != null){
			config = list.get(0);
		};
		String message = null;
		Integer id = adminUser.getId();
		AdminUser adminUser2 = null;
		if(null != id){
			adminUser2 = adminUserService.findAdminUser(id);
		}else{
			message = "用户不存在";
		}
		if(null != adminUser){
			try {
//				adminUser2.setUserName(adminUser.getUserName());
				String password = adminUser.getPassword().trim();
				if(null != password && "" != password){
					String md5Encode = MD5Utils.md5(password);
					adminUser2.setPassword(md5Encode);
				}
				adminUser2.setQq(adminUser.getQq());
				adminUser2.setMobile(adminUser.getMobile());
				adminUser2.setLevel(adminUser.getLevel());
				if(Integer.valueOf(1).equals(adminUser.getStatus())){
					adminUser2.setStatus(Integer.valueOf(1));
				}else{
					adminUser2.setStatus(Integer.valueOf(0));
				}
//				adminUserService.update(adminUser2);
				adminUserService.updateAdminUser(adminUser2);
				return this.list(null,null, request, model);
			} catch (Exception e) {
				message = "更新用户失败";
				log.error(message, e);
			}
		}
		model.addAttribute("message", message);
		model.addAttribute("adminUser", adminUser);
		return BackUtils.returnPage(config,"system/user", "edit",request,model);
	}


	/**
	 * 修改密码
	 * @param id
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping("/changePassword.do")
	public String changePassword(Integer id,HttpServletRequest request,ModelMap model){
		List<Config> list = configService.findAll();
		Config config = null;
		if(list != null){
			config = list.get(0);
		}
		String message = null;
		if(null == id){
			message = "出错了！请返回重试！";
		}
		AdminUser adminUser = adminUserService.findAdminUser(id);
		model.addAttribute("message", message);
		model.addAttribute("adminUser", adminUser);
		return BackUtils.returnPage(config,"system/user", "change_password",request,model);
	}
	
	
	
	/**
	 * 修个个人密码
	 * @param adminUser
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping("/updateAdmin.do")
	public String updateChange(AdminUser adminUser,HttpServletRequest request,ModelMap model){
		List<Config> list = configService.findAll();
		Config config = null;
		if(list != null){
			config = list.get(0);
		}
		String message = null;
		Integer id = adminUser.getId();
		AdminUser adminUser2 = null;
		if(null != id){
			adminUser2 = adminUserService.findAdminUser(id);
		}else{
			message = "用户不存在";
		}
		if(null != adminUser){
			try {
//				adminUser2.setUserName(adminUser.getUserName());
				String password = adminUser.getPassword().trim();
				if(null != password && "" != password){
					String md5Encode = MD5Utils.md5(password);
					adminUser2.setPassword(md5Encode);
				}
				adminUser2.setQq(adminUser.getQq());
				adminUser2.setMobile(adminUser.getMobile());
				adminUser2.setLevel(adminUser.getLevel());
				if(Integer.valueOf(1).equals(adminUser.getStatus())){
					adminUser2.setStatus(Integer.valueOf(1));
				}else{
					adminUser2.setStatus(Integer.valueOf(0));
				}
//				adminUserService.update(adminUser2);
				adminUserService.updateAdminUser(adminUser2);
				return this.list(null,null, request, model);
			} catch (Exception e) {
				message = "更新用户失败";
				log.error(message, e);
			}
		}
		model.addAttribute("message", message);
		model.addAttribute("adminUser", adminUser);
		return BackUtils.returnPage(config,"system/user", "edit",request,model);
	}
	
	/**
	 * 管理员修改个人信息
	 * @param adminUser
	 * @param newPassword
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping(value="/updateInfo.do",method=RequestMethod.POST)
	public String updateInfo(AdminUser adminUser,String newPassword,HttpServletRequest request,ModelMap model){
		List<Config> list = configService.findAll();
		Config config = null;
		if(list != null){
			config = list.get(0);
		}
		String message = null;
		AdminUser user = (AdminUser) request.getSession().getAttribute(Constants.ADMIN_KEY);
		try {
			if(user == null || !Integer.valueOf(0).equals(user.getStatus())){
				message = "未登入或账号被禁用！";
			}else{
//				user = adminUserService.findById();
				user = adminUserService.findAdminUser(user.getId());
				String password = adminUser.getPassword();
				String psw = MD5Utils.md5(password);
				if(user == null ){
					message = "用户不存在";
				}else if(!psw.equalsIgnoreCase(user.getPassword())){
					message = "密码错误！";
				}else{
					if(StringUtils.isNotBlank(newPassword)){
						user.setPassword(MD5Utils.md5(newPassword));
					}
					user.setMobile(adminUser.getMobile());
					user.setQq(adminUser.getQq());
//					user = (AdminUser) adminUserService.update(user);
					adminUserService.updateAdminUser(user);
					message = "修改成功！";
				}
			}
		} catch (Exception e) {
			log.error("管理员修改个人信息出错了！",e);
			message = "出错了！";
		}
		model.addAttribute("message",message);
		model.addAttribute("adminUser", user);
		request.getSession().setAttribute(Constants.ADMIN_KEY, user);
		return BackUtils.returnPage(config,"system/user", "change_password",request,model);
	}
	
	
	@RequestMapping("/checkUserName.do")
	public void checkUserName(String userName,HttpServletRequest request,HttpServletResponse response){
		boolean data = true;
		AdminUser adminUser = new AdminUser();
//		adminUser.setUserName(userName);
//		List<AdminUser> list = adminUserService.findByEgList(adminUser);
		List<AdminUser> list = adminUserService.countByAdminUser(userName);
		if(null != list && list.size()>0){
			data = false;
		}
		JSONObject jsonObject = new JSONObject();
		@SuppressWarnings("static-access")
		String jsonString = jsonObject.toJSONString(data);
		ResponseUtils.renderText(response, jsonString);
	}
	@RequestMapping("/checkPassword.do")
	public void checkPassword(String userName,String oldPassword,HttpServletRequest request,HttpServletResponse response){
		if(StringUtils.isBlank(userName)){
			return ;
		}
		if(StringUtils.isBlank(oldPassword)){
			return ;
		}
		boolean data = true;
		AdminUser adminUser = new AdminUser();
		adminUser.setUserName(userName);
		adminUser.setPassword(oldPassword);
//		List<AdminUser> list = adminUserService.findByEgList(adminUser);
		List<AdminUser> list = adminUserService.findAdminUser(userName, oldPassword);
		if(null != list && list.size()>0){
			data = false;
		}
		JSONObject jsonObject = new JSONObject();
		@SuppressWarnings("static-access")
		String jsonString = jsonObject.toJSONString(data);
		ResponseUtils.renderText(response, jsonString);
	}
}
