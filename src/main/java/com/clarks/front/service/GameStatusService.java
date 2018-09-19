package com.clarks.front.service;


import com.clarks.pojo.GameStatus;
import com.clarks.pojo.PrizeRecord;

public interface GameStatusService {

	public GameStatus checkGameStatus(Integer userId);
	
	public GameStatus updateRecord(GameStatus gs, PrizeRecord pr);




	public GameStatus updateGsPr(GameStatus gs, PrizeRecord pr);

	public void updateGameStatus(GameStatus gs);

}
