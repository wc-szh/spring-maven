package com.clarks.back.service;


import com.clarks.pojo.Prize;

import java.util.List;

public interface PrizeService {

	int insertPrize(Prize p);

	Prize findById(Integer id);

	int updatePrize(Prize pz);

	List<Prize> selectPrize(int isDelete);

	List<Prize> selectPrizeById();

	
}
