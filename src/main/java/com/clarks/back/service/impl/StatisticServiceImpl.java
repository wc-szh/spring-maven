package com.clarks.back.service.impl;

import com.clarks.back.service.StatisticService;
import com.clarks.front.utils.RequestUtils;
import com.clarks.mapper.DailyCountMapper;
import com.clarks.mapper.PrizeRecordMapper;
import com.clarks.mapper.StatisticMapper;
import com.clarks.mapper.UserMapper;
import com.clarks.pojo.*;
import com.jeecms.common.utils.DateFormatUtils;
import com.jeecms.common.web.Constants;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.servlet.http.HttpServletRequest;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@Service
@Transactional
public class StatisticServiceImpl implements StatisticService {


	@Autowired
	private StatisticMapper statisticMapper;
	@Autowired
	private PrizeRecordMapper prizeRecordMapper;
	@Autowired
	private UserMapper userMapper;
	@Autowired
	private DailyCountMapper dailyCountMapper;
	
    
//    /**
//     * 获取最后一天统计的一天
//     */
//    public Date getMaxDate() throws Exception{
//    	return getStatisticDao().getMaxDate();
//    }
//    
//    public Pagination getDetail(Integer pageNo,Integer pageSize) throws Exception{
//    	
//    	Pagination p = getStatisticDao().getDetail(pageNo,pageSize);
//    	return p;
//    }
    
    public Statistic saveStatistic(String pageUrl,HttpServletRequest request){
    	String ipAddr = RequestUtils.getIpAddr(request);
		StringBuffer requestURL = request.getRequestURL();
		String sessionId = RequestUtils.getRequestedSessionId(request);
		String username = "";
		User user = (User)request.getSession().getAttribute(Constants.USER_KEY);
		if (user != null) {
			username = user.getUsername();
		}
		if(StringUtils.isEmpty(pageUrl)){
			return null;
		}
		Statistic statistic = new Statistic();
		statistic.setAddTime(new Date());
		statistic.setIp(ipAddr);
		statistic.setPageUrl(pageUrl);
		statistic.setRequestUrl(requestURL.toString());
		statistic.setSessionId(sessionId);
		statistic.setUsername(username);
//		statistic = save(statistic);
		statisticMapper.insertSelective(statistic);
		return statistic;
    }
    
//    public List<String> getAllPage(){
//    	return getStatisticDao().getAllPage();
//    }

    
   
    //查询当天注册人数
	public Statistic findRegSum() throws Exception {
		SimpleDateFormat sim=new SimpleDateFormat("yyyy-MM-dd");
		String date = sim.format(new Date());
		Date statisticDate = sim.parse(date);   
		Statistic statistic = new Statistic();
//		statistic.setStatisticDate(statisticDate);
//		List<Statistic> list = findByEgList(statistic);
		StatisticExample statisticExample = new StatisticExample();
		StatisticExample.Criteria criteria = statisticExample.createCriteria();
		criteria.andStatisticDateEqualTo(statisticDate);
		List<Statistic> list = statisticMapper.selectByExample(statisticExample);
		if(list != null && list.size() > 0) {
			statistic = list.get(0);
		}else {
			statistic = null;
		}
		return statistic;
	}

	
	//新增抽奖人数+1
	public void saveDrawSum() throws Exception{
		//获取当前时间
		SimpleDateFormat sim=new SimpleDateFormat("yyyy-MM-dd");
		String date = sim.format(new Date());
		Date statisticDate = sim.parse(date);   
		Statistic statistic = new Statistic();
		statistic.setStatisticDate(statisticDate);
		statistic.setDayDrawSum(Integer.valueOf(1));
//		save(statistic);
		statisticMapper.insertSelective(statistic);
	}
	
	//修改抽奖人数+1
	public void dayDrawSum (Statistic statistic) throws Exception{
		Integer sum = statistic.getDayDrawSum()+ Integer.valueOf(1);
		//获取时间
		SimpleDateFormat sim=new SimpleDateFormat("yyyy-MM-dd");
		String date = sim.format(new Date());
		Date statisticDate = sim.parse(date); 
		//更新
		statistic.setStatisticDate(statisticDate);
		statistic.setDayDrawSum(sum);
//		update(statistic);
		statisticMapper.updateByPrimaryKeySelective(statistic);
	}

	//新增保存当天注册人数
	public void saveRegisterSum(Integer count) throws Exception {
		SimpleDateFormat sim=new SimpleDateFormat("yyyy-MM-dd");
		String date = sim.format(new Date());
		Date statisticDate = sim.parse(date);   
		Statistic statistic = new Statistic();
		statistic.setStatisticDate(statisticDate);
		statistic.setDayRegisterSum(count);
//		save(statistic);
		statisticMapper.insertSelective(statistic);
	}

	//更新当天注册人数
	public void UpadteRegisterSum(Integer count,Statistic statistic) throws Exception {
		Integer sum = count;
		statistic.setDayRegisterSum(sum);
//		update(statistic);
		statisticMapper.updateByPrimaryKeySelective(statistic);
	}

	
	//保存当天当前时间的统计数据
	public void saveDayStatistic(Statistic stat,Integer count, Integer drawCount, Integer userCount, Integer loginCount)
			throws Exception {
		
			if(count == null ) {
				count = Integer.valueOf(0);
			}if(drawCount == null) {
				drawCount = Integer.valueOf(0);
			}if(userCount == null) {
				userCount = Integer.valueOf(0);
			}if(loginCount == null) {
				loginCount = Integer.valueOf(0);
			}
		if(stat == null) {
			//获取日期
			SimpleDateFormat sim=new SimpleDateFormat("yyyy-MM-dd");
			String date = sim.format(new Date());
			Date statisticDate = sim.parse(date);
			Statistic sta = new Statistic();
			sta.setDayRegisterSum(count);
			sta.setDayDrawSum(drawCount);
			sta.setDayUv(userCount);
			sta.setDayPv(loginCount);
			sta.setStatisticDate(statisticDate);
			//如果为空插入数据，不为空则更新
			statisticMapper.insertSelective(sta);
		}else {
			stat.setDayRegisterSum(count);
			stat.setDayDrawSum(drawCount);
			stat.setDayUv(userCount);
			stat.setDayPv(loginCount);
			statisticMapper.updateByPrimaryKeySelective(stat);
		}
	}

	/**
	 * 获取最近四天统计的日期
	 */
	public List<Statistic> findDate(String threeDay, String yesterDay) throws Exception {
//		return getStatisticDao().findDate(threeDay,yesterDay);
		StatisticExample statisticExample = new StatisticExample();
		StatisticExample.Criteria criteria = statisticExample.createCriteria();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd") ;
		criteria.andStatisticDateBetween(sdf.parse(threeDay), sdf.parse(yesterDay));
		return statisticMapper.selectByExample(statisticExample);
	}

	/**
	 * 保存插入某天的数据(注册、抽奖、pc、uv)
	 */
	public void saveSomeDay(String someDay) throws Exception {
		if(someDay != null) {
			Statistic statistic = new Statistic();
			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
			Date statisticDate = sdf.parse(someDay);
			String beginTime = DateFormatUtils.format(statisticDate,"yyyy-MM-dd 00:00:00");//当天开始时间
			String endTime = DateFormatUtils.format(statisticDate,"yyyy-MM-dd 23:59:59");//当天结束时间
//			Integer dayDrawSum = prizeRecordDao.findDrawSum(beginTime,endTime);//查询那天的抽奖人数
//			Integer dayRegisterSum = userDao.findRegisterSum(beginTime,endTime);//查询那天的注册人数
//			Integer dayPV = dailyCountDao.findDayLoginCount(beginTime,endTime);//查询那天的登录次数
//			Integer dayUV = dailyCountDao.findDayNameCount(beginTime,endTime);//查询那天的登录人数
			
			//查询那天的抽奖人数
			PrizeRecordExample prizeRecordExample = new PrizeRecordExample();
			PrizeRecordExample.Criteria criteria = prizeRecordExample.createCriteria();
			criteria.andDateBetween(sdf.parse(beginTime), sdf.parse(endTime));
			Integer dayDrawSum = prizeRecordMapper.countByExample(prizeRecordExample);
			
			//查询那天的注册人数
			UserExample userExample = new UserExample();
			UserExample.Criteria criteriaUser = userExample.createCriteria();
			criteriaUser.andFirstLoginTimeBetween(sdf.parse(beginTime), sdf.parse(endTime));
			Integer dayRegisterSum = userMapper.countByExample(userExample);
			
			//查询那天的登录次数
			DailyCountExample dailCountExample = new DailyCountExample();
			DailyCountExample.Criteria criteriaDailyCount = dailCountExample.createCriteria();
			criteriaDailyCount.andLoginTimeBetween(sdf.parse(beginTime), sdf.parse(endTime));
			Integer dayPV = dailyCountMapper.countByExample(dailCountExample);
			
			//查询那天的登录人数
			dailCountExample.setDistinct(true);
			Integer dayUV = dailyCountMapper.countByExample(dailCountExample);		

			
			statistic.setStatisticDate(statisticDate);
			statistic.setDayDrawSum(dayDrawSum);
			statistic.setDayRegisterSum(dayRegisterSum);
			statistic.setDayPv(dayPV);
			statistic.setDayUv(dayUV);
//			save(statistic);
			statisticMapper.insertSelective(statistic);
		}
	}

	/**
	 * uodate插入某天的数据(注册、抽奖、pc、uv)
	 */
	public void updateSomeDay(String someDay, Statistic statistic) throws Exception{
		if(statistic != null && someDay != null) {
			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
			Date statisticDate = sdf.parse(someDay);
			String beginTime = DateFormatUtils.format(statisticDate,"yyyy-MM-dd 00:00:00");//当天开始时间
			String endTime = DateFormatUtils.format(statisticDate,"yyyy-MM-dd 23:59:59");//当天结束时间
//			Integer dayDrawSum = prizeRecordDao.findDrawSum(beginTime,endTime);//查询那天的抽奖人数
//			Integer dayRegisterSum = userDao.findRegisterSum(beginTime,endTime);//查询那天的注册人数
//			Integer dayPV = dailyCountDao.findDayLoginCount(beginTime,endTime);//查询那天的登录次数
//			Integer dayUV = dailyCountDao.findDayNameCount(beginTime,endTime);//查询那天的登录人数
			
			//查询那天的抽奖人数
			PrizeRecordExample prizeRecordExample = new PrizeRecordExample();
			PrizeRecordExample.Criteria criteria = prizeRecordExample.createCriteria();
			criteria.andDateBetween(sdf.parse(beginTime), sdf.parse(endTime));
			Integer dayDrawSum = prizeRecordMapper.countByExample(prizeRecordExample);
			
			//查询那天的注册人数
			UserExample userExample = new UserExample();
			UserExample.Criteria criteriaUser = userExample.createCriteria();
			criteriaUser.andFirstLoginTimeBetween(sdf.parse(beginTime), sdf.parse(endTime));
			Integer dayRegisterSum = userMapper.countByExample(userExample);
			
			//查询那天的登录次数
			DailyCountExample dailCountExample = new DailyCountExample();
			DailyCountExample.Criteria criteriaDailyCount = dailCountExample.createCriteria();
			criteriaDailyCount.andLoginTimeBetween(sdf.parse(beginTime), sdf.parse(endTime));
			Integer dayPV = dailyCountMapper.countByExample(dailCountExample);
			
			//查询那天的登录人数
			dailCountExample.setDistinct(true);
//			DailyCountExample.Criteria criteriaDaily = dailCountExample.createCriteria();
			Integer dayUV = dailyCountMapper.countByExample(dailCountExample);		

			
			
			
			statistic.setStatisticDate(statisticDate);
			statistic.setDayDrawSum(dayDrawSum);
			statistic.setDayRegisterSum(dayRegisterSum);
			statistic.setDayPv(dayPV);
			statistic.setDayUv(dayUV);
//			update(statistic);
			statisticMapper.updateByPrimaryKey(statistic);
		}
	}



	public void insertStatistic(Statistic statistic) {
		statisticMapper.insertSelective(statistic);
	}

	public List<Statistic> selectStatistic() {
		StatisticExample statisticExample = new StatisticExample();
		return statisticMapper.selectByExample(statisticExample);
	}
}
