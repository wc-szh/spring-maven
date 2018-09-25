package com.clarks.back.utils;

import com.clarks.back.service.StatisticService;
import com.clarks.pojo.Statistic;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.List;


@Component
public class SpringQtz {
	
	public static final Logger log = LoggerFactory.getLogger(SpringQtz.class);
	 @Autowired
	 private StatisticService statisticService;

	 protected void execute()  {  
		 executeStatistics();
	 } 
	 
	 
	 /**
	  * 每天0点01分执行统计注册、抽奖、pv、uv统计记录
	 * @return 
	  */
//	 @Scheduled(fixedDelay = 60000)每隔60秒执行任务
	 @Scheduled(cron = "0 1 0 * * ? ")
	 public void executeStatistics() {
		 try {
			 Date today =new Date();
			 SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
			 Calendar calendar = Calendar.getInstance();//获取日历实例
			 calendar.setTime(today);
			 
			 calendar.add(Calendar.DAY_OF_MONTH, -1);
			 String yesterDay= sdf.format(calendar.getTime());//获取昨天日期
			
			 calendar.add(Calendar.DAY_OF_MONTH, -1);
			 String beforeYesterday= sdf.format(calendar.getTime());//获取前天日期
			 
			 calendar.add(Calendar.DAY_OF_MONTH, -1);
			 String threeDay= sdf.format(calendar.getTime());//获取大前天日期
			 
			 String someDay =null;//某一天
			 
			 
		     calendar.set(2018, 05, 22, 0, 0, 0);//服务器启动时间月份0开始计算
		     Date firstDate=calendar.getTime(); 
			 //获取3天前到昨天的统计数据
		    
			 List<Statistic> list =statisticService.findDate(threeDay,yesterDay);
			 Date tDay = sdf.parse(threeDay);
			 Date bDay = sdf.parse(beforeYesterday);
			 Date yDay = sdf.parse(yesterDay);
     		 //如果不包含大前天，并且大前天>=启动时间，则执行插入大前天的数据
			 if(matching(list,tDay) == true && !tDay.before(firstDate)) {
				 someDay = threeDay;
				 statisticService.saveSomeDay(someDay); 
			 }
     		 //如果不包含前天，并且前天>=启动时间，则执行插入数据
			 if(matching(list,bDay) == true && !bDay.before(firstDate)) {
				 someDay = beforeYesterday;
				 statisticService.saveSomeDay(someDay);
			 }
			 
			 someDay = yesterDay;
			 if(matching(list,yDay) == true) {
				//save昨天的数据
				statisticService.saveSomeDay(someDay);	
			 }else {
				 //获取昨天的statistic
				 Statistic statistic = new Statistic() ;
				 for(int i = 0;i<list.size();i++){
					 if(list.get(i).getStatisticDate().equals(yDay)) {
						 statistic = list.get(i);
						 break;
					 }
				 }
				//update昨天的数据
				statisticService.updateSomeDay(someDay,statistic);
			 }
		 }catch(Exception e) {
				e.printStackTrace();
				log.error("定时统计出错了", e); 
		 }
	 }

	 
	 
	 /**
	  * 判断List<Statistic>是否包含某个日期,时间对比用equals
	  * @param list
	  * @param day
	  * @return
	  */
	 public boolean matching(List<Statistic> list,Date day) {
		 for(Statistic i:list) {
			 //判断是否包含这个日期的数据,不包含返回true
			 if(i.getStatisticDate().equals(day) ) {
				 return false; 
			 }
		 }
		 return true;
	 }
	 
	 
	 
	 /**
	  * 24点执行注册、抽奖、pv、uv统计记录
	  */
	 public void statView(){

	 }
	 
	
	 
}
