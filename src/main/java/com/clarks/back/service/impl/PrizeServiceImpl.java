package com.clarks.back.service.impl;

import com.clarks.back.service.PrizeService;
import com.clarks.bean.Prize;
import com.clarks.bean.PrizeExample;
import com.clarks.bean.PrizeExample.Criteria;
import com.clarks.dao.PrizeMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class PrizeServiceImpl implements PrizeService {

	@Autowired
	private PrizeMapper prizeMapper;

	public int insertPrize(Prize p) {
		return prizeMapper.insert(p);
	}

	public Prize findById(Integer id) {
		return prizeMapper.selectByPrimaryKey(id);
	}

	@Override
	public int updatePrize(Prize pz) {
		return prizeMapper.updateByPrimaryKeySelective(pz);
	}

	public List<Prize> selectPrize(int isDelete) {
		PrizeExample prizeExample = new PrizeExample();
		PrizeExample.Criteria criteria = prizeExample.createCriteria();
		criteria.andIsDeleteEqualTo(isDelete);
		return prizeMapper.selectByExample(prizeExample);
	}

	public List<Prize> selectPrizeById() {
		PrizeExample prizeExample = new PrizeExample();
		prizeExample.setOrderByClause("id asc");
		Criteria criteria = prizeExample.createCriteria();
		criteria.andIsDeleteEqualTo(Integer.valueOf(0));
		return prizeMapper.selectByExample(prizeExample);
	}
	
	public List<Prize> findByCond(Integer prizeLevel, String username, Integer isGet, int cpn, int pageSize) {
		PrizeExample prizeExample = new PrizeExample();
		prizeExample.setOrderByClause("id desc");
		return prizeMapper.selectByExample(prizeExample);
	}
    
}
