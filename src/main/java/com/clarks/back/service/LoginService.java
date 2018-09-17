package com.clarks.back.service;

import com.clarks.bean.LoginRecord;
import com.clarks.bean.User;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

public interface LoginService {

	public LoginRecord loginLog(HttpServletRequest request, Integer id);

	public LoginRecord userLogin(User user, HttpServletRequest request);

	public List<LoginRecord> selectLoginRecord(Integer id);

}
