package com.clarks.back.controller;


import com.clarks.back.service.ConfigService;
import com.clarks.back.service.LoginService;
import com.clarks.back.service.PrizeRecordService;
import com.clarks.back.service.PrizeService;
import com.clarks.back.utils.BackUtils;
import com.clarks.bean.*;
import com.clarks.front.service.GameStatusService;
import com.clarks.front.service.UserService;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.jeecms.common.page.Pagination;
import com.jeecms.common.web.CookieUtils;
import com.jeecms.core.BaseAction;
import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;
import java.util.List;


@Controller
@RequestMapping(value="/member")
public class MemberAct extends BaseAction{
	
	public static final Logger log = LoggerFactory.getLogger(MemberAct.class);
	@Autowired
	private UserService userService;
	@Autowired
	private ConfigService configService;
	@Autowired
	private LoginService loginService;
	@Autowired
	private PrizeRecordService prizeRecordService;
	@Autowired
	private PrizeService prizeService;
	@Autowired
	private GameStatusService gameStatusService;
	
	/**
	 * 用户列表
	 * @param pageNo
	 * @param username 用户名
	 * @param nickName  昵称
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping(value="/list.do")
	public String list(Integer pageNo,String username,String nickName,Integer sortType,HttpServletRequest request,ModelMap model){
		List<Config> list = configService.findAll();
		Config config = list.get(0);
		User user = new User();
		if(StringUtils.isNotBlank(username)){
			model.addAttribute("username",username);
		}
		if(StringUtils.isNotBlank(nickName)){
			model.addAttribute("nickName",nickName);
		}
		model.addAttribute("sortType",sortType);
		String order = null;
		if(sortType == null){
			order = "id desc";
		}else if(sortType.equals(Integer.valueOf(1))){
			order = "last_login_time desc";
		}else if(sortType.equals(Integer.valueOf(2))){
			order = "login_times desc";
		}else if(sortType.equals(Integer.valueOf(3))) {
			order = "register_time desc";
		}
//		Condition cond[] = {order};
//		p = userService.findByEg(user,cond, Pagination.cpn(pageNo),CookieUtils.getPageSize(request));
//		String order = "id desc, last_login_time desc, login_times desc, register_time desc";
//		String order = "id desc";
		PageHelper.startPage( Pagination.cpn(pageNo),CookieUtils.getPageSize(request),order);
		List<User> listUser = userService.selectUser(username,nickName);
		PageInfo<User> p = new PageInfo<User>(listUser);
		model.addAttribute("pagination",p);
 		return BackUtils.returnPage(config,"member", "list", request, model);
	}
	
	/**
	 * 查看某个用户的登入记录
	 * @param id
	 * @param pageNo
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping(value="/login_list.do")
	public String loginList(Integer id,Integer pageNo,HttpServletRequest request,ModelMap model){
		List<Config> list = configService.findAll();
		Config config = list.get(0);
		String message = "";
		if(id != null){
			PageHelper.startPage(Pagination.cpn(pageNo),CookieUtils.getPageSize(request));
			List<LoginRecord> listLogin = loginService.selectLoginRecord(id);
			PageInfo<LoginRecord> p = new PageInfo<LoginRecord>(listLogin);
			model.addAttribute("pagination",p);
			model.addAttribute("id",id);
			return BackUtils.returnPage(config, "member", "login_list", request, model);
		}else{
			message = "id == null!!";
		}
		model.addAttribute("message",message);
		return list(null,null,null,null, request, model);
	}
	
	/**
	 * 查看用户中奖记录
	 * @param pageNo
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping(value="/prize_record.do")
	public String prizeRecord(Integer prizeLevel,String nickName,Integer isGet,Integer pageNo,HttpServletRequest request,ModelMap model){
		List<Config> list = configService.findAll();
		Config config = list.get(0);
		PageHelper.startPage(Pagination.cpn(pageNo),CookieUtils.getPageSize(request));
		List<PrizeRecord> listPrizeRecord = prizeRecordService.selectPrizeRecord(prizeLevel, nickName, isGet);
		PageInfo<PrizeRecord> p = new PageInfo<PrizeRecord>(listPrizeRecord);
		model.addAttribute("pagination",p);
		model.addAttribute("prizeLevel",prizeLevel);
		model.addAttribute("nickName",nickName);
		model.addAttribute("isGet",isGet);
		return BackUtils.returnPage(config,"member", "prize_record", request, model);
	}
	
	/**
	 * 查看中奖用户填写的信息
	 * @param id
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping(value="/show_fill_msg.do")
	public String showFillMsg(Integer id,HttpServletRequest request,ModelMap model){
		List<Config> list = configService.findAll();
		Config config = list.get(0);
		String msg = "";
		if(id != null){
//			PrizeRecord pr = prizeRecordService.findById(id);
			PrizeRecord pr = prizeRecordService.findPrizeRecord(id);
			if(pr != null){
				Prize p = prizeService.findById(pr.getPrizeId());
				if(p != null && Integer.valueOf(1).equals(p.getPrizeLevel()) || p != null && Integer.valueOf(2).equals(p.getPrizeLevel())){
					GameStatus gs = gameStatusService.checkGameStatus(pr.getUserId());
					model.addAttribute("prize",p);
					model.addAttribute("gameStatus",gs);
					model.addAttribute("prizeRecord",pr);
					return BackUtils.returnPage(config, "member", "show_fill_msg", request, model);
				}else{
					msg = "此奖品不需要填写信息";
				}
			}else{
				msg = "记录不存在";
			}
		}else{
			msg = "id = null";
		}
		model.addAttribute("msg",msg);
		return BackUtils.returnPage(config, "member", "prize_record", request, model);
	}
	
	/**
	 * 确认领取
	 * @param id
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping(value="/sure_get.do",method=RequestMethod.POST)
	public String sureGet(Integer id,HttpServletRequest request,ModelMap model){
		String msg = "";
		if(id != null){
			PrizeRecord pr = prizeRecordService.findPrizeRecord(id);
			if(pr != null){
				Prize p = prizeService.findById(pr.getPrizeId());
				if(p != null && Integer.valueOf(1).equals(p.getPrizeLevel()) || p != null && Integer.valueOf(2).equals(p.getPrizeLevel())){
					GameStatus gs = gameStatusService.checkGameStatus(pr.getUserId());
					if(Integer.valueOf(0).equals(gs.getIsGet())){
						gs.setIsGet(Integer.valueOf(1));
						pr.setIsGet(Integer.valueOf(1));
						gameStatusService.updateGsPr(gs,pr);
						
						msg = "领取成功！";
					}
				}else{
					msg = "此奖品不需要填写信息";
				}
			}else{
				msg = "记录不存在";
			}
		}else{
			msg = "id = null";
		}
		model.addAttribute("msg",msg);
		return prizeRecord( null, null, null,null, request, model);
		
	}
	
}
