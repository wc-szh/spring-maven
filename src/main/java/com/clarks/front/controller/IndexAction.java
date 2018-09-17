package com.clarks.front.controller;

import com.clarks.back.service.*;
import com.clarks.bean.Config;
import com.clarks.bean.GameStatus;
import com.clarks.bean.User;
import com.clarks.front.service.GameStatusService;
import com.clarks.front.service.UserService;
import com.clarks.front.utils.FrontUtils;
import com.jeecms.core.Constants;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

@Controller
public class IndexAction extends BaseAction {

	@Autowired
	private UserService userService;
	@Autowired
	private ConfigService configService;
	@Autowired
	private StatisticService statisticService;
	@Autowired
	private GameStatusService gameStatusService;
	@Autowired
	private PrizeService prizeService;
	@Autowired
	private PrizeRecordService prizeRecordService;
	@Autowired
	private LoginService loginService;
	@Autowired
	private DailyCountService dailyCountService;

	public static final String FRONT_PATH = "/WEB-INF/front";
	public static final String INDEX = "/index";

	/**
	 * 首页
	 * @author yjy
	 * Created on 2018年5月30日 下午1:54:06
	 * @param request
	 * @param response
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "/index.cc")
	public String index(HttpServletRequest request, HttpServletResponse response, ModelMap model) {
		List<Config> list = configService.findAll();
		Config config = null;
		if(list != null){
			config = list.get(0);
		}
		
		User user = (User) request.getSession().getAttribute(Constants.USER_KEY);
		if(user != null) {
			GameStatus gs = gameStatusService.checkGameStatus(user.getId());
			model.addAttribute("gameStatus", gs);
			model.addAttribute("userId", user.getId());
			model.addAttribute("secretPass", config.getSecretPass());
			return FrontUtils.returnPage(config, "index", "index", request, model);
		}else {
			return "redirect:autho.cc";
		}
	}
	
	/**
	 * 去登入页面
	 * @author yjy
	 * Created on 2018年5月30日 下午1:52:39
	 * @param request
	 * @param response
	 * @param model
	 * @return
	 */
//	@RequestMapping(value = "/toLogin.cc", method=RequestMethod.GET)
//	public String toLogin(String msg, HttpServletRequest request, HttpServletResponse response, ModelMap model) {
//		Config config = configService.findThisConfig();
//		User user = (User) request.getSession().getAttribute(Constants.USER_KEY);
//		if(user == null) {
//			String url = "http://szh.test.com/clarks/autho.cc";
//			return "redirect:"+url;
//		}
//		if (msg != null) {
//			model.addAttribute("msg", msg);
//		}
//		return FrontUtils.returnPage(config, "index", "index", request, model);
//	}
//	
	
	
	
	
	/**
	 * 用户登入
	 * @author yjy
	 * Created on 2018年5月30日 下午2:31:19
	 * @param username
	 * @param password
	 * @param request
	 * @param response
	 * @param model
	 * @return
	 */
//	@RequestMapping(value = "/login.cc", method=RequestMethod.POST)
//	public String login(String username, String password, String pageUrl,HttpServletRequest request, HttpServletResponse response, ModelMap model) {
//		String msg;
//		try {
//			boolean success = userService.login(username, password, request);
//			if (success) {
//				String ip = RequestUtils.getIpAddr(request);
//				StringBuffer requestURL = request.getRequestURL();
//				if(StringUtils.isEmpty(requestURL)) {
//					return "redirect:/index.cc";
//				}
////				DailyCount dailyCount = new DailyCount();  
////				dailyCount.setUserIp(ip);
////				dailyCount.setLoginTime(new Date());
////				dailyCount.setPageURL(requestURL.toString());
////				dailyCount.setUserName(username);
////				dailyCountService.saveDailyCount(dailyCount);
//				return "redirect:/index.cc";		
//			} else {
//				msg = "用户名或密码错误";
//			}
//		} catch (Exception e) {
//			e.printStackTrace();
//			log.error("登入出错了");
//			msg = "登入出错";
//		}
//		return toLogin(msg, request, response, model);
//	}
	
	/**
	 * 去注册页面
	 * @author yjy
	 * Created on 2018年5月30日 下午2:32:57
	 * @param request
	 * @param response
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "/toRegister.cc")
	public String toRegister(HttpServletRequest request, HttpServletResponse response, ModelMap model) {
		List<Config> list = configService.findAll();
		Config config = null;
		if(list != null){
			config = list.get(0);
		}
		return FrontUtils.returnPage(config, "index", "register", request, model);
	}

	/**
	 * 用户注册
	 * @author yjy
	 * Created on 2018年5月30日 下午2:37:18
	 * @param username
	 * @param password
	 * @param nickName
	 * @param sex
	 * @param request
	 * @param response
	 * @param model
	 */
	@RequestMapping(value = "/register.cc", method = RequestMethod.POST)
	public void register(String username, String password, String nickName, Integer sex,
			HttpServletRequest request, HttpServletResponse response, ModelMap model) {
		String msg;
		try {
			boolean success = userService.register(username, password, nickName, sex);
			if (success) {
				ajaxSuccessToJson(response, null);
				return;
			} else {
				msg = "注册失败";
			}
		} catch (Exception e) {
			e.printStackTrace();
			
			log.error("注册出错了", e);
			msg = "注册出错了";
		}
		ajaxErrorToJson(response, null, msg);
	}

}
