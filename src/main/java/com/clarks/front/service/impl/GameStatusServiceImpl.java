package com.clarks.front.service.impl;

import com.clarks.front.service.GameStatusService;
import com.clarks.mapper.GameStatusMapper;
import com.clarks.mapper.PrizeRecordMapper;
import com.clarks.pojo.GameStatus;
import com.clarks.pojo.GameStatusExample;
import com.clarks.pojo.PrizeRecord;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class GameStatusServiceImpl implements GameStatusService {
	
	
	@Autowired
	private GameStatusMapper gameStatusMapper;
	@Autowired
	private PrizeRecordMapper prizeRecordMapper;
 
	
		
    public GameStatus checkGameStatus(Integer userId){
    	if(userId == null){
    		return null;
    	}
//    	GameStatus gs = new GameStatus();
//    	gs.setUserId(userId);
//    	List<GameStatus> list = findByEgList(gs);
    	GameStatusExample gameStatusExample = new GameStatusExample();
    	GameStatusExample.Criteria criteria = gameStatusExample.createCriteria();
    	criteria.andUserIdEqualTo(userId);
    	List<GameStatus> list = gameStatusMapper.selectByExample(gameStatusExample);
    	GameStatus gs = new GameStatus();
    	if(list != null && list.size() > 0){
    		gs = list.get(0);
    	}else{
    		gs.setUserId(userId);
    		gs.setFirstPass(0);
    		gs.setFirstBest(0);
    		gs.setSecondBest(0);
    		gs.setSecondPass(0);
    		gs.setIsDraw(0);
    		gs.setIsGet(0);
    		gs.setFirstJoin(Integer.valueOf(0));
    		gs.setSecondJoin(Integer.valueOf(0));
    		gs.setIsScan(0);
    		gs.setIsPrize(0);
    		gs.setIsFillMsg(Integer.valueOf(0));
//    		gs = save(gs);
    		gameStatusMapper.insertSelective(gs);
    	}
    	return gs;
    }
    
    public GameStatus updateRecord(GameStatus gs,PrizeRecord pr){
    	if(pr.getPrizeId()!= null){
//    		prizeRecordService.save(pr);
    		prizeRecordMapper.insertSelective(pr);
    	}
//    	gs = (GameStatus) update(gs);
    	gameStatusMapper.updateByPrimaryKeySelective(gs);
    	return gs;
    }
    
	public GameStatus updateGsPr(GameStatus gs,PrizeRecord pr){
//		gs = (GameStatus) update(gs);
//		prizeRecordService.update(pr);
		gameStatusMapper.updateByPrimaryKeySelective(gs);
		prizeRecordMapper.updateByPrimaryKeySelective(pr);
		return gs;
	}

	public void updateGameStatus(GameStatus gs) {
		gameStatusMapper.updateByPrimaryKeySelective(gs);
	}

}
