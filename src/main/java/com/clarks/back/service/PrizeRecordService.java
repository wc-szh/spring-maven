package com.clarks.back.service;


import com.clarks.pojo.PrizeRecord;

import java.text.ParseException;
import java.util.Date;
import java.util.List;

public interface PrizeRecordService {

	



	public int findCount(Integer id, Date date);



	public Integer findSendCount(Integer prizeId);
//
	public Integer findGetCount(Integer prizeId);

	public Integer findDayCount(Date date, Date nowTime) throws ParseException ;



	PrizeRecord findPrizeRecord(int userId);



	public PrizeRecord selectPrizeRecord(Integer userId);



	public List<PrizeRecord> selectPrizeRecord(Integer prizeLevel, String nickName, Integer isGet);

	
	
	
	
	
}
