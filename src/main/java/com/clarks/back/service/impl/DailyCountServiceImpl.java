package com.clarks.back.service.impl;

import com.clarks.back.service.DailyCountService;
import com.clarks.mapper.DailyCountMapper;
import com.clarks.pojo.DailyCount;
import com.clarks.pojo.DailyCountExample;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;

@Service
@Transactional
public class DailyCountServiceImpl  implements DailyCountService {
	
	@Autowired
	private DailyCountMapper dailyCountMapper;
	
	public void saveDailyCount(DailyCount dailyCount) {
//		dailyCountDao.save(dailyCount);
		dailyCountMapper.insert(dailyCount);
	}

	//获取当天总登录人数(独立访客)
	public Integer findUserCount(Date date, Date nowTime) throws Exception {
//		DailyCountExample dailyCountExample = new DailyCountExample();
//		dailyCountExample.setDistinct(true);
//		DailyCountExample.Criteria criteria = dailyCountExample.createCriteria();
//		criteria.andLoginTimeBetween(date, nowTime);
//		return dailyCountMapper.countByExample(dailyCountExample);
		return dailyCountMapper.selectDailCount(date, nowTime);
	}
	
	//获取当天总登录次数(访问量)
	public Integer findLoginCount(Date date, Date nowTime) throws Exception {
		DailyCountExample dailyCountExample = new DailyCountExample();
		DailyCountExample.Criteria criteria = dailyCountExample.createCriteria();
		criteria.andLoginTimeBetween(date, nowTime);
		return dailyCountMapper.countByExample(dailyCountExample);
	}


}
