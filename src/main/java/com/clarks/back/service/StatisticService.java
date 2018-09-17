package com.clarks.back.service;

import com.clarks.bean.Statistic;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

public interface StatisticService {
//	public Date getMaxDate() throws Exception;
//	public Pagination getDetail(Integer pageNo,Integer pageSize) throws Exception;
	 
	public Statistic saveStatistic(String pageUrl, HttpServletRequest request);

//	public List<String> getAllPage();


	public Statistic findRegSum() throws Exception;



	public void dayDrawSum(Statistic statistic) throws Exception;

	public void saveDrawSum() throws Exception;

	public void saveRegisterSum(Integer count) throws Exception;

	public void UpadteRegisterSum(Integer count, Statistic statistic) throws Exception;

	public void saveDayStatistic(Statistic stat, Integer count, Integer drawCount, Integer userCount, Integer loginCount) throws Exception;
	public List<Statistic> findDate(String threeDay, String yesterday) throws Exception;
	public void saveSomeDay(String someDay) throws Exception;
	public void updateSomeDay(String someDay, Statistic statistic) throws Exception;
	
	
	public void insertStatistic(Statistic statistic);

	public List<Statistic> selectStatistic();
}
