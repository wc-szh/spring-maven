package com.clarks.back.controller;


import com.clarks.back.service.ConfigService;
import com.clarks.back.service.PrizeRecordService;
import com.clarks.back.service.PrizeService;
import com.clarks.back.utils.BackUtils;
import com.clarks.front.controller.BaseAction;
import com.clarks.pojo.AdminUser;
import com.clarks.pojo.Config;
import com.clarks.pojo.Prize;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.gwold.page.Pagination;
import com.jeecms.common.web.Constants;
import com.jeecms.common.web.CookieUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;
import java.util.Date;
import java.util.List;


@Controller
@RequestMapping(value="/manager/admin/prize/")
public class PrizeAct extends BaseAction {
	public static final Logger log = LoggerFactory.getLogger(PrizeAct.class);
	@Autowired
	private ConfigService configService;
	@Autowired
	private PrizeService prizeService;
	@Autowired
	private PrizeRecordService prizeRecordService;
	
	/**
	 * 抽奖奖品列表
	 * @param pageNo
	 * @param request
	 * @param model
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value="list.do")
	public String prizeList(Integer pageNo,HttpServletRequest request,ModelMap model){
		List<Config> listConfig = configService.findAll();
		Config config = null;
		if(listConfig != null){
			config = listConfig.get(0);
		}
//		Prize pz = new Prize();
//		pz.setIsDelete(Integer.valueOf(0));
//		Condition []cond = { OrderBy.desc("id")};
//		Pagination p = prizeService.findByEg(pz,cond,Pagination.cpn(pageNo),CookieUtils.getPageSize(request));
		
		PageHelper.startPage(Pagination.cpn(pageNo),CookieUtils.getPageSize(request));
		List<Prize> listPrize = prizeService.selectPrizeById();
		PageInfo<Prize> p = new PageInfo<Prize>(listPrize);
		List<Prize> list = (List<Prize>) p.getList();
		for(Prize pi :list){
			Integer sendNum = prizeRecordService.findSendCount(pi.getId());
			Integer getNum = prizeRecordService.findGetCount(pi.getId());
			pi.setGetNum(getNum);
			pi.setSendNum(sendNum);
		}
		model.addAttribute("pagination",p);
		return BackUtils.returnPage(config, "prize", "list", request, model);
	}
	
	/**
	 * 去添加抽奖奖品页面
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping(value="to_add.do")
	public String toAdd(HttpServletRequest request,ModelMap model){
		List<Config> listConfig = configService.findAll();
		Config config = null;
		if(listConfig != null){
			config = listConfig.get(0);
		}
		return BackUtils.returnPage(config, "prize", "add", request, model);
	}
	
	/**
	 * 添加奖品
	 * @param p
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping(value="add_prize.do",method=RequestMethod.POST)
	public String addPrize(Prize p,HttpServletRequest request,ModelMap model){
		List<Config> list = configService.findAll();
		Config config = list.get(0);
		String msg = "";
		try {
			AdminUser user = (AdminUser)request.getSession().getAttribute(Constants.ADMIN_KEY);
			if(user != null) {
				if(p != null){
					p.setAddDate(new Date());
					p.setAdminId(user.getId());
					p.setIsDelete(Integer.valueOf(0));
					
					int pr = prizeService.insertPrize(p);
//					p = prizeService.save(p);
					if(pr <= 0){
						msg = "添加 失败！";
					}else{
						msg = "添加成功！";
					}
				}else{
					msg = "添加失败！信息不完整";
				}
			}else {
				return BackUtils.returnPage(config,"index", "login",request,model);
			}
		} catch (Exception e) {
			msg = "添加出错了！";
			log.error("添加抽奖奖品出错了！",e);
		}
		model.addAttribute("msg",msg);
		return prizeList(null,request,model);
	}
	
	
	/**
	 * 去修改奖品页面
	 * @param id
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping(value="to_update.do")
	public String toUpdate(Integer id,HttpServletRequest request,ModelMap model){
		List<Config> list = configService.findAll();
		Config config = list.get(0);
		String msg = "";
		if(id != null){
			Prize p = prizeService.findById(id);
			if(p != null){
				model.addAttribute("prize",p);
				return BackUtils.returnPage(config, "prize", "update", request, model);
			}else{
				msg = "奖品不存在";
			}
		}else{
			msg = "id = null";
		}
		model.addAttribute("msg",msg);
		return prizeList(null,request,model);
	}
	
	/**
	 * 修改奖品
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping(value="update_prize.do",method=RequestMethod.POST)
	public String updatePrize(Prize p ,HttpServletRequest request,ModelMap model){
		String msg = "";
		List<Config> list = configService.findAll();
		Config config = list.get(0);
		try {
			AdminUser user = (AdminUser)request.getSession().getAttribute(Constants.ADMIN_KEY);
			if(p != null && p.getId() != null){
				Prize pz = prizeService.findById(p.getId());
				pz.setOperDate(new Date());
				pz.setOperUserId(user.getId());
				pz.setPrizeDesc(p.getPrizeDesc());
				pz.setPrizeName(p.getPrizeName());
				pz.setPrizeProb(p.getPrizeProb());
				pz.setDayLimit(p.getDayLimit());
				pz.setAllNum(p.getAllNum());
				int eff = prizeService.updatePrize(pz);
//				pz = (Prize) prizeService.update(pz);
				if(eff <= 0){
					msg = "修改失败！";
				}else{
					msg = "修改成功！";
				}
			}else{
				msg = "提交信息错误！修改失败！";
			}
		} catch (Exception e) {
			log.error("管理员修改奖品信息出错了！",e);
			msg = "出错了！";
		}
		model.addAttribute("msg",msg);
		model.addAttribute("config", config);
		return prizeList(null,request,model);
	}
	
	/**
	 * 删除奖品
	 * @param id
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping(value="delete_prize.do")
	public String deletePrize(Integer id,HttpServletRequest request,ModelMap model){
		AdminUser user = (AdminUser)request.getSession().getAttribute(Constants.ADMIN_KEY);
		String msg = "";
		if(id != null){
			Prize p = prizeService.findById(id);
			if(p != null){
				p.setIsDelete(Integer.valueOf(1));
				p.setOperDate(new Date());
				p.setOperUserId(user.getId());
//				p = (Prize) prizeService.update(p);
				prizeService.updatePrize(p);
				msg = "删除成功！";
			}else{
				msg = "奖品不存在";
			}
		}else{
			msg = "id = null";
		}
		model.addAttribute("msg",msg);
		return prizeList(null,request,model);
	}
	
	
}
