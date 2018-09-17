package com.clarks.back.service;


import com.clarks.bean.DailyCount;

import java.util.Date;

public interface DailyCountService {

	void saveDailyCount(DailyCount dailyCount) throws Exception;

	Integer findUserCount(Date date, Date nowTime) throws Exception;

	Integer findLoginCount(Date date, Date nowTime) throws Exception;

}
