package com.clarks.front.service;



import com.clarks.pojo.User;

import javax.servlet.http.HttpServletRequest;
import java.util.Date;
import java.util.List;

public interface UserService{

//	public User add(User user);
	
	public User findByUsername(String username);
	
	boolean register(String username, String password, String nickName, Integer sex) throws Exception ;
	
//	public boolean login(String username, String password, HttpServletRequest request) throws Exception;

	public User statUser();

	public Integer findCount(Date date, Date nowTime) throws Exception;

	public void wxLogin(String openId, String accessToken, HttpServletRequest req) throws Exception;

	public List<User> selectUser(String username, String nickName);
	
	
}
