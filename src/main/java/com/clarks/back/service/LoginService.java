package com.clarks.back.service;


import com.clarks.pojo.LoginRecord;
import com.clarks.pojo.User;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

public interface LoginService {

	public LoginRecord loginLog(HttpServletRequest request, Integer id);

	public LoginRecord userLogin(User user, HttpServletRequest request);

	public List<LoginRecord> selectLoginRecord(Integer id);

}
