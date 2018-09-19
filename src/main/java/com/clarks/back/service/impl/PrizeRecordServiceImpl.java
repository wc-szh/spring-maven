package com.clarks.back.service.impl;

import com.clarks.back.service.PrizeRecordService;
import com.clarks.mapper.PrizeRecordMapper;
import com.clarks.pojo.PrizeRecord;
import com.clarks.pojo.PrizeRecordExample;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.text.ParseException;
import java.util.Date;
import java.util.List;

@Service
@Transactional
public class PrizeRecordServiceImpl implements PrizeRecordService {

	@Autowired
	private PrizeRecordMapper prizeRecordMapper;


	public PrizeRecord findPrizeRecord(Integer id) {
		return prizeRecordMapper.selectByPrimaryKey(id);
	}
	
    
   
	
    public int findCount(Integer id,Date date){
//    	return getPrizeRecordDao().findCount(id, date);
    	PrizeRecordExample prizeRecordExample = new PrizeRecordExample();
    	PrizeRecordExample.Criteria criteria = prizeRecordExample.createCriteria();
    	criteria.andIdEqualTo(id);
    	criteria.andDateEqualTo(date);
    	return prizeRecordMapper.countByExample(prizeRecordExample);
    }
    
//    public Pagination findByCond(Integer prizeLevel,String username,Integer isGet,Integer pageNo,Integer pageSize){
//		
//    	return prizeRecordMapper.findByCond(prizeLevel,username,isGet,pageNo,pageSize);
//    }
    
    public Integer findSendCount(Integer prizeId){
//    	PrizeRecord pr = new PrizeRecord();
//    	pr.setPrizeId(prizeId);
//    	Integer count = findCountByEg(pr, false);
    	PrizeRecordExample prizeRecordExample = new PrizeRecordExample();
    	PrizeRecordExample.Criteria criteria = prizeRecordExample.createCriteria();
    	criteria.andIdEqualTo(prizeId);
    	Integer count = prizeRecordMapper.countByExample(prizeRecordExample);
    	if(count == null ){
    		count = Integer.valueOf(0);
    	}
    	return count;
    }

    public Integer findGetCount(Integer prizeId){
//    	PrizeRecord pr = new PrizeRecord();
//    	pr.setPrizeId(prizeId);
//    	pr.setIsGet(Integer.valueOf(1));
    	PrizeRecordExample prizeRecordExample = new PrizeRecordExample();
    	PrizeRecordExample.Criteria criteria = prizeRecordExample.createCriteria();
    	criteria.andIdEqualTo(prizeId);
    	criteria.andIsGetEqualTo(Integer.valueOf(1));
    	Integer count = prizeRecordMapper.countByExample(prizeRecordExample);
    	if(count == null ){
    		count = Integer.valueOf(0);
    	}
    	return count;
    }
    
    public PrizeRecord findByUser(Integer userId){
    	if(userId == null){
    		return null;
    	}
    	PrizeRecord pr = new PrizeRecord ();
//    	pr.setUserId(userId);
//    	List<PrizeRecord> list = findByEgList(pr);
    	PrizeRecordExample prizeRecordExample = new PrizeRecordExample();
    	PrizeRecordExample.Criteria criteria= prizeRecordExample.createCriteria();
    	criteria.andIdEqualTo(userId);
    	List<PrizeRecord> list = prizeRecordMapper.selectByExample(prizeRecordExample);
    	if(list != null && list.size() > 0){
    		return list.get(0);
    	}
    	return null;
    	
    }


    //获取当天抽奖记录数
	public Integer findDayCount(Date date, Date nowTime) throws ParseException {
		PrizeRecordExample prizeRecordExample = new PrizeRecordExample();
		PrizeRecordExample.Criteria criteria = prizeRecordExample.createCriteria();
		criteria.andDateBetween(date, nowTime);
		return prizeRecordMapper.countByExample(prizeRecordExample);
	}




	public PrizeRecord  findPrizeRecord(int userId) {
//		PrizeRecordExample prizeRecordExample = new PrizeRecordExample();
//		PrizeRecordExample.Criteria Criteria = prizeRecordExample.createCriteria();
//		Criteria.andUserIdEqualTo(userId);
		return prizeRecordMapper.selectByPrimaryKey(userId);
	}




	public PrizeRecord selectPrizeRecord(Integer userId) {
		return prizeRecordMapper.selectByPrimaryKey(userId);
	}




	public List<PrizeRecord> selectPrizeRecord(Integer prizeLevel, String nickName, Integer isGet) {
//		if( nickName != null ) {
//			if(nickName.trim().equals("") ) {
//				nickName = null;
//			}else {
//				nickName = "%"+nickName+"%";
//			}
//		}else{
//			nickName = null;
//		}
		if(StringUtils.isNotBlank(nickName)){
			nickName = "%"+nickName+"%";
		}else {
			nickName = null;
		}
		return prizeRecordMapper.selectPrizeRecord(prizeLevel, nickName, isGet);
		
	}







}
