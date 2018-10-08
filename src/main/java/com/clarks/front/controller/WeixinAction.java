package com.clarks.front.controller;

import com.clarks.back.service.ConfigService;
import com.clarks.front.service.UserService;
import com.clarks.pojo.Config;
import com.weixin.Configure;
import org.apache.commons.lang.StringUtils;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

@Controller
public class WeixinAction extends BaseAction{

	@Autowired
	private UserService userService;
	
	@Autowired
	private ConfigService configService;
	
	/**
	 * 微信用户同意授权，获取code
	 * @param req
	 * @param res
	 * @return
	 */
	@RequestMapping("autho.cc")
	public String autho(HttpServletRequest req,HttpServletResponse res) {
		String authURL = "https://open.weixin.qq.com/connect/oauth2/authorize"
				+ "?appid="+Configure.appid                //appid 
				+ "&redirect_uri="+Configure.redirect_uri  //回调地址
				+ "&response_type=code"                    //返回code
				+ "&scope=snsapi_userinfo"                 //snsapi_userinfo:弹出授权，获取用户信息; snsapi_base:不弹出，无法获取用户信息
				+ "&state=STATE#wechat_redirect";          
		return "redirect:"+authURL;
	}
	
	/**
	 * 微信返回code换取网页授权access_token
	 * @param code
	 * @param req
	 * @param res
	 * @param model
	 * @return
	 */
	@RequestMapping("code.cc")
	public String code(String code,HttpServletRequest req, HttpServletResponse res, ModelMap model) {
		List<Config> list = configService.findAll();
		Config config = null;
		if(list != null){
			config = list.get(0);
		}
		//code为空、空格、null跳转到error页面
		if(StringUtils.isBlank(code)) {
			model.addAttribute("msg", "授权失败");
			return "error";
		}
		try {
			String codeGetUrl = "https://api.weixin.qq.com/sns/oauth2/access_token?appid="+Configure.appid
					+ "&secret="+Configure.appsecret
					+ "&code="+code
					+ "&grant_type=authorization_code";
			String result = sendGet(codeGetUrl);			
			JSONObject jsonObject = new JSONObject(result);
			String accessToken = jsonObject.getString("access_token");
			String openId = jsonObject.getString("openid");
			//获取用户信息并保存数据
			userService.wxLogin(openId,accessToken,req);
		} catch (Exception e) {
			e.printStackTrace();
			log.error("微信用户授权出错！",e);
			return "redirect:autho.cc";
		}
		return "redirect:index.cc"  ;
	}
}
