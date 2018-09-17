package com.clarks.front.controller;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.serializer.SerializerFeature;
import com.alibaba.fastjson.serializer.SimplePropertyPreFilter;
import com.clarks.back.service.ConfigService;
import com.clarks.back.service.PrizeRecordService;
import com.clarks.back.service.PrizeService;
import com.clarks.back.service.StatisticService;
import com.clarks.bean.*;
import com.clarks.front.service.GameStatusService;
import com.jeecms.core.Constants;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Date;
import java.util.List;
import java.util.Random;

@Controller
@RequestMapping(value="/user")
public class UserAction extends BaseAction{

	
	@Autowired
	private ConfigService configService;
	@Autowired
	private PrizeService prizeService;
	@Autowired
	private PrizeRecordService prizeRecordService;
	@Autowired
	private GameStatusService gameStatusService;
	@Autowired
	private StatisticService statisticService;

	/**
	 * 获取用户闯关及抽奖情况
	 * 
	 * @param response
	 * @param request
	 */
	@RequestMapping(value = "/check_game_status.cc", method = RequestMethod.POST)
	public void myGameStatus(HttpServletResponse response,
			HttpServletRequest request) {
		try {
			//获取session
			User user = (User) request.getSession().getAttribute(
					Constants.USER_KEY);
			if (user == null || user.getId() == null) {
				ajaxErrorToJson(response, null, "登入超时");
				return;
			} else {
				GameStatus gs = gameStatusService.checkGameStatus(user.getId());
				SimplePropertyPreFilter filter = new SimplePropertyPreFilter(
						GameStatus.class, "id", "userId", "firstPass",
						"secondPass", "firstBest", "secondBest", "isScan",
						"isDraw", "isPrize", "isGet", "isFillMsg", "name",
						"phone", "address", "identityNo");
				ajaxSuccessToJson(response, JSON.toJSONString(gs, filter,
						SerializerFeature.BrowserCompatible));
				return;
			}
		} catch (Exception e) {
			log.error("获取用户闯关情况出错了！", e);
			ajaxErrorToJson(response, null, "获取闯关情况出错了！");
			return;
		}
	}

	/**
	 * 记录用户参与第一关
	 * @param response
	 * @param request
	 */
	@RequestMapping(value = "/record_first.cc", method = RequestMethod.POST)
	public void recordFirst(HttpServletResponse response,
			HttpServletRequest request) {
		try {
			User user = (User) request.getSession().getAttribute(
					Constants.USER_KEY);
			if (user == null || user.getId() == null) {
				ajaxErrorToJson(response, null, "登入超时");
				return;
			} else {
				GameStatus gs = gameStatusService.checkGameStatus(user.getId());
				gs.setFirstJoin(Integer.valueOf(1));
				gameStatusService.updateGameStatus(gs);
				return;
			}
		} catch (Exception e) {
			log.error("记录用户参与第一关出错了！", e);
			ajaxErrorToJson(response, null, "出了点小差错~");
			return;
		}
	}
	
	/**
	 * 获取用户的奖品信息
	 * 
	 * @param response
	 * @param request
	 */
	@RequestMapping(value = "/get_my_prize.cc", method = RequestMethod.POST)
	public void myPrize(HttpServletResponse response, HttpServletRequest request) {
		User user = (User) request.getSession()
				.getAttribute(Constants.USER_KEY);
		if (user == null || user.getId() == null) {
			ajaxErrorToJson(response, null, "登入超时");
			return;
		} else {
			GameStatus gs = gameStatusService.checkGameStatus(user.getId());
			PrizeRecord pr = new PrizeRecord();
			Prize p = new Prize();
//			pr.setUserId(user.getId());
			int userId = user.getId();
			PrizeRecord prizeRecord = prizeRecordService.findPrizeRecord(userId);
			
			if (prizeRecord == null ) {
				ajaxErrorToJson(response, null, "没有找到中奖记录");
				return;
			} else {
				pr = prizeRecord;
				p = prizeService.findById(pr.getPrizeId());
				if (p == null) {
					ajaxErrorToJson(response, null, "没有找到奖品");
					return;
				}
			}
			p.setIsPrize(gs.getIsPrize());
			p.setIsGet(gs.getIsGet());
			p.setIsFillMsg(gs.getIsFillMsg());
			SimplePropertyPreFilter filter = new SimplePropertyPreFilter(
					Prize.class, "id", "isPrize", "isGet", "isFillMsg",
					"prizeLevel", "prizeName", "prizeDesc", "prizePic");
			ajaxSuccessToJson(response, JSON.toJSONString(p, filter,
					SerializerFeature.BrowserCompatible));
			return;
		}
	}

	/**
	 * 游戏结束 提交用户的游戏数据
	 * 
	 * @param gameNo
	 * @param gameMark
	 * @param isPass
	 * @param response
	 * @param request
	 */
	@RequestMapping(value = "/record_game.cc", method = RequestMethod.POST)
	public void recordGame(Integer gameNo, Integer gameMark,Integer miss,
			HttpServletResponse response, HttpServletRequest request) {
		try {
			List<Config> list = configService.findAll();
			Config config = null;
			if(list != null){
				config = list.get(0);
			}
			User user = (User) request.getSession().getAttribute(
					Constants.USER_KEY);
			if (user == null || user.getId() == null) {
				ajaxErrorToJson(response, null, "登入超时");
				return;
			} else if (gameNo == null || gameMark == null) {
				ajaxErrorToJson(response, null, "数据提交出了点小问题哦~");
				return;
			} else {
				Integer pass = Integer.valueOf(0);
				if (config.getFirstLimit().intValue() <= gameMark.intValue() && miss != null && miss.intValue()>=0) {
					pass = Integer.valueOf(1);
				}
				GameStatus gs = gameStatusService.checkGameStatus(user.getId());
				if (Integer.valueOf(1).equals(gameNo)) {
					gs.setFirstPass(!Integer.valueOf(1).equals(
							gs.getFirstPass()) ? pass : gs.getFirstPass());
					gs.setFirstBest(gs.getFirstBest().intValue() < gameMark
							.intValue() ? gameMark : gs.getFirstBest());
				} else if (Integer.valueOf(2).equals(gameNo)) {
					gs.setSecondPass(!Integer.valueOf(1).equals(
							gs.getSecondPass()) ? pass : gs.getSecondPass());
					gs.setSecondBest(gs.getSecondBest().intValue() < gameMark
							.intValue() ? gameMark : gs.getSecondBest());
				}
//				gs = (GameStatus) gameStatusService.update(gs);
				gameStatusService.updateGameStatus(gs);
				
				gs.setFirstPass(pass);
				SimplePropertyPreFilter filter = new SimplePropertyPreFilter(
						GameStatus.class, "id", "userId", "firstPass",
						"secondPass", "firstBest", "secondBest", "isScan",
						"isDraw", "isPrize", "isGet", "isFillMsg", "name",
						"phone", "address", "identityNo");
				ajaxSuccessToJson(response, JSON.toJSONString(gs, filter,
						SerializerFeature.BrowserCompatible));
				return;
			}
		} catch (Exception e) {
			ajaxErrorToJson(response, null, "系统开了个小差哦~");
			return;
		}

	}

	/**
	 * 记录用户扫码
	 * 
	 * @param request
	 * @param response
	 * @param model
	 */
	@RequestMapping(value = "/record_scan.cc", method = RequestMethod.POST)
	public void recordScan(String secretPass, HttpServletRequest request,
			HttpServletResponse response, ModelMap model) {
		List<Config> list = configService.findAll();
		Config config = null;
		if(list != null){
			config = list.get(0);
		}
		try {
			User user = (User) request.getSession().getAttribute(
					Constants.USER_KEY);
			if (user == null || user.getId() == null) {
				ajaxErrorToJson(response, null, "登入超时");
				return;
			} else {
//				if (StringUtils.isBlank(secretPass)
//						|| !secretPass.equals(config.getSecretPass())) {
//					ajaxErrorToJson(response, null, "密钥不正确");
//					return;
//				}
				GameStatus gs = gameStatusService.checkGameStatus(user.getId());
				gs.setIsScan(Integer.valueOf(1));
				gs.setSecondPass(Integer.valueOf(1));
				gs.setSecondJoin(Integer.valueOf(1));
//				gs = (GameStatus) gameStatusService.update(gs);
				gameStatusService.updateGameStatus(gs);
				SimplePropertyPreFilter filter = new SimplePropertyPreFilter(
						GameStatus.class, "id", "userId", "firstPass",
						"secondPass", "firstBest", "secondBest", "isScan",
						"isDraw", "isPrize", "isGet", "isFillMsg", "name",
						"phone", "address", "identityNo");
				ajaxSuccessToJson(response, JSON.toJSONString(gs, filter,
						SerializerFeature.BrowserCompatible));
				return;
			}
		} catch (Exception e) {
			log.error("记录用户扫码出错了！", e);
			ajaxErrorToJson(response, null, "记录用户扫码出错了！");
			return;
		}
	}

	/**
	 * 用户提交资料
	 * 
	 * @param name
	 * @param phone
	 * @param address
	 * @param identityNo
	 * @param request
	 * @param response
	 * @param model
	 */
	@RequestMapping(value = "/record_fill_msg.cc", method = RequestMethod.POST)
	public void recordFillMsg(String name, String phone, String address,
			String identityNo, String sex, String size,
			HttpServletRequest request, HttpServletResponse response,
			ModelMap model) {
		User user = (User) request.getSession()
				.getAttribute(Constants.USER_KEY);
		if (user == null || user.getId() == null) {
			ajaxErrorToJson(response, null, "登入超时");
			return;
		} else {
			GameStatus gs = gameStatusService.checkGameStatus(user.getId());
			gs.setName(name);
			gs.setPhone(phone);
			gs.setAddress(address);
			gs.setIdentityNo(identityNo);
			gs.setSex(sex);
			gs.setSize(size);
			gs.setIsFillMsg(Integer.valueOf(1));
//			gs = (GameStatus) gameStatusService.update(gs);
			gameStatusService.updateGameStatus(gs);
			SimplePropertyPreFilter filter = new SimplePropertyPreFilter(
					GameStatus.class, "id", "userId", "firstPass",
					"secondPass", "firstBest", "secondBest", "isScan",
					"isDraw", "isPrize", "isGet", "isFillMsg", "name", "phone",
					"address", "identityNo");
			ajaxSuccessToJson(response, JSON.toJSONString(gs, filter,
					SerializerFeature.BrowserCompatible));
			return;
		}
	}

	/**
	 * 用户抽奖
	 * 
	 * @param secretPass
	 * @param request
	 * @param response
	 * @param model
	 */
	@RequestMapping(value = "/draw.cc", method = RequestMethod.POST)
	public void draw(HttpServletRequest request, HttpServletResponse response,
			ModelMap model) {
		Object drawing = request.getSession().getAttribute("drawing");
		if(drawing == null){
			request.getSession().setAttribute("drawing", "1");
		}else if("1".equals(drawing.toString())){
			ajaxErrorToJson(response, null, "请勿重复提交");
			return;
		}
		User user = (User) request.getSession()
				.getAttribute(Constants.USER_KEY);
		if (user == null || user.getId() == null) {
			ajaxErrorToJson(response, null, "登入超时");
			return;
		} else {
			GameStatus gs = gameStatusService.checkGameStatus(user.getId());
			if (Integer.valueOf(1).equals(gs.getIsDraw())) {
				ajaxErrorToJson(response, null, "您已经抽过奖了哦！");
				return;
			}
			Prize p = new Prize();
//			p.setIsDelete(Integer.valueOf(0));
			int isDelete = Integer.valueOf(0);
			List<Prize> list = prizeService.selectPrize(isDelete);
			
			System.out.println("奖品数量为=" + list.size());
			// 事先定下 最小概率为1/1000000
			int all = 1000000;
			Prize pz = null;// 未中奖
			int num = new Random().nextInt(all);// 获取一个随机数
			double presentNum = 0;// 段落标记
			System.out.println("/////////////////num = " + num);
			// 拿到每个奖品的中奖概率
			for (int i = 0; i < list.size(); i++) {
				if (i == 0
						&& num < list.get(i).getPrizeProb().doubleValue() * all) {
					pz = list.get(i);
					break;
				} else if (num >= presentNum
						&& num < presentNum
								+ list.get(i).getPrizeProb().doubleValue()
								* all) {
					pz = list.get(i);
					break;
				}
				presentNum = presentNum
						+ list.get(i).getPrizeProb().doubleValue() * all;
			}
			if (pz != null) {
				System.out.println("奖品id为：" + pz.getId());
				// 检查次奖品 今天送出的数量是否已达顶，如果达到数量，则改为未中奖
				if (!checkPrizeNum(pz.getId())) {
					System.out.println("超过了奖品限制了哦~~");
					pz = null;
				}
			}
			PrizeRecord pr = new PrizeRecord();
			gs.setIsDraw(Integer.valueOf(1));
			// pz == null为未中奖
			if (pz == null) {
				pz = new Prize();
				pz.setId(Integer.valueOf(0));
				gs.setIsPrize(Integer.valueOf(0));
			} else {
				gs.setIsPrize(Integer.valueOf(1));
				pr.setDate(new Date());
				pr.setPrizeId(pz.getId());
				pr.setUserId(user.getId());
				pr.setIsGet(Integer.valueOf(0));
			}
			System.out.println("//////最后奖品id=" + pz.getId());
			gs = (GameStatus) gameStatusService.updateRecord(gs, pr);
			SimplePropertyPreFilter filter = new SimplePropertyPreFilter(
					Prize.class, "id", "prizeLevel", "prizeName", "prizeDesc",
					"prizePic");
			ajaxSuccessToJson(response, JSON.toJSONString(pz, filter,
					SerializerFeature.BrowserCompatible));
			request.getSession().removeAttribute("drawing");
			return;
		}
	}
	


	/**
	 * 记录用户领取奖品
	 * 
	 * @param request
	 * @param response
	 * @param model
	 */
	@RequestMapping(value = "/record_get.cc", method = RequestMethod.POST)
	public void recordGetPrize(String secretGet, HttpServletRequest request,
			HttpServletResponse response, ModelMap model) {
		User user = (User) request.getSession()
				.getAttribute(Constants.USER_KEY);
		List<Config> list = configService.findAll();
		Config config = null;
		if(list != null){
			config = list.get(0);
		}
		if (user == null || user.getId() == null) {
			ajaxErrorToJson(response, null, "登入超时");
			return;
		} 
//		else if (StringUtils.isBlank(secretGet)
//				|| !config.getSecretGet().equals(secretGet)) {
//			ajaxErrorToJson(response, null, "领取密钥错误！");
//			return;
//		} 
			else {
			GameStatus gs = gameStatusService.checkGameStatus(user.getId());
			gs.setIsGet(Integer.valueOf(1));
//			PrizeRecord pr = prizeRecordService.findByUser(user.getId());
			PrizeRecord pr = prizeRecordService.selectPrizeRecord(user.getId());
			if(pr != null){
				pr.setIsGet(Integer.valueOf(1));
			}
			gs = (GameStatus) gameStatusService.updateGsPr(gs,pr);
			SimplePropertyPreFilter filter = new SimplePropertyPreFilter(
					GameStatus.class, "id", "userId", "firstPass",
					"secondPass", "firstBest", "secondBest", "isScan",
					"isDraw", "isPrize", "isGet", "isFillMsg", "name", "phone",
					"address", "identityNo");
			ajaxSuccessToJson(response, JSON.toJSONString(gs, filter,
					SerializerFeature.BrowserCompatible));
			return;
		}
	}

	/**
	 * 检查次奖品 今天送出的数量是否已达顶，如果达到数量，则改为未中奖
	 * 
	 * @param id
	 * @return true:未超出限制 false:超出限制
	 */
	public boolean checkPrizeNum(Integer id) {
		boolean flag = true;
		if (id == null) {
			flag = false;
		} else {
			Prize p = prizeService.findById(id);
			Integer sendNum = prizeRecordService.findSendCount(id);
			if (p == null || p.getAllNum().intValue() <= sendNum.intValue()) {
				flag = false;
			} else {
				int count = prizeRecordService.findCount(id, new Date());
				if (p.getDayLimit() != null
						&& p.getDayLimit().intValue() <= count) {
					flag = false;
				} else {
					flag = true;
				}
			}
		}
		return flag;
	}
	
}
