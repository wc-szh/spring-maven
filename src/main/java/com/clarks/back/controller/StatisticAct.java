package com.clarks.back.controller;

import com.clarks.back.service.ConfigService;
import com.clarks.back.service.DailyCountService;
import com.clarks.back.service.PrizeRecordService;
import com.clarks.back.service.StatisticService;
import com.clarks.back.utils.BackUtils;
import com.clarks.bean.Config;
import com.clarks.bean.Statistic;
import com.clarks.bean.User;
import com.clarks.front.service.UserService;
import com.clarks.front.utils.RequestUtils;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.gwold.common.page.SimplePage;
import com.jeecms.common.page.Pagination;
import com.jeecms.common.web.CookieUtils;
import com.jeecms.core.BaseAction;
import com.jeecms.core.Constants;
import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@RequestMapping(value="/statistic")
@Controller
public class StatisticAct extends BaseAction{
	private static Logger logger = LoggerFactory.getLogger(StatisticAct.class);
	@Autowired
	private StatisticService statisticService;
	@Autowired
	private ConfigService configService;
	@Autowired
	private UserService userService;
	@Autowired
	private PrizeRecordService prizeRecordService;
	@Autowired
	private DailyCountService dailyCountService;
	/**
	 * 统计用户信息
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping(value="stat_user.do")
	public String statisticUser(HttpServletRequest request,ModelMap model){
		List<Config> list = configService.findAll();
		Config config = null;
		if(list != null){
			config = list.get(0);
		}
		User user = userService.statUser();
		model.addAttribute("users",user);
		return BackUtils.returnPage(config, "statistic", "status", request, model);
	}
	
	/**
	 * 保存页面访问记录
	 * @param pageUrl
	 * @param username
	 * @param request
	 */
	@RequestMapping(value="/{pageUrl}")
	public void save(@PathVariable("pageUrl") String pageUrl, HttpServletRequest request){
		String ipAddr = RequestUtils.getIpAddr(request);
		StringBuffer requestURL = request.getRequestURL();
		//String sessionId = RequestUtils.getRequestedSessionId(request);
		String username = "";
		User user = (User)request.getSession().getAttribute(Constants.USER_KEY);
		if (user != null) {
			username = user.getUsername();
		}
		if(StringUtils.isEmpty(pageUrl)){
			return ;
		}
		Statistic statistic = new Statistic();
		statistic.setAddTime(new Date());
		statistic.setIp(ipAddr);
		statistic.setPageUrl(pageUrl);
		statistic.setRequestUrl(requestURL.toString());
		statistic.setSessionId(username);
		statistic.setUsername(username);
		try {
			statisticService.insertStatistic(statistic);
		} catch (Exception e) {
			logger.warn("保存统计信息失败！",e);
		}
	}
	
	/**
	 * 统计页面
	 * @param pageNo
	 * @param pageUrl
	 * @param dayDate
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping(value="/dayList.do")
	public String dayList(Integer pageNo,HttpServletRequest request,ModelMap model){
		List<Config> list = configService.findAll();
		Config config = null;
		if(list != null){
			config = list.get(0);
		}
		Pagination pagination = null;
		try {
			//今天日期
			SimpleDateFormat sim=new SimpleDateFormat("yyyy-MM-dd");
			String d = sim.format(new Date());
			Date date = sim.parse(d);
			//当前时间
			SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
			String n = sdf.format(new Date());
			Date nowTime = sdf.parse(n);
			
			//获取当天24点到当前时间的注册记录数
			Integer count = userService.findCount(date,nowTime);
			//获取当天抽奖记录数
			Integer drawCount = prizeRecordService.findDayCount(date,nowTime);
			//获取当天总登录人数(独立访客)
			Integer userCount = dailyCountService.findUserCount(date,nowTime);
			//获取当天总登录次数(访问量)
			Integer loginCount = dailyCountService.findLoginCount(date,nowTime);
			//获取当天的统计数据第一条
			Statistic stat =statisticService.findRegSum();
			//更新到当天当前时间的统计数据
			statisticService.saveDayStatistic(stat,count,drawCount,userCount,loginCount);
			
			//查询最新的统计数据表
			Statistic statistic = new Statistic();
			PageHelper.startPage(SimplePage.cpn(pageNo), CookieUtils.getPageSize(request));
			PageHelper.orderBy("statistic_date desc");
			List<Statistic> listStatistic = statisticService.selectStatistic();
			PageInfo<Statistic> p = new PageInfo<Statistic>(listStatistic);
			model.addAttribute("pagination", p );
			model.addAttribute("pageNo", pageNo);
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("获取统计信息失败", e);
		}
		return BackUtils.returnPage(config,"statistic", "detail", request, model);
	}
}
