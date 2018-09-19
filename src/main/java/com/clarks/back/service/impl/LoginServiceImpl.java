package com.clarks.back.service.impl;

import com.clarks.back.service.LoginService;
import com.clarks.front.utils.RequestUtils;
import com.clarks.mapper.AdminUserMapper;
import com.clarks.mapper.LoginRecordMapper;
import com.clarks.pojo.AdminUser;
import com.clarks.pojo.LoginRecord;
import com.clarks.pojo.LoginRecordExample;
import com.clarks.pojo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.servlet.http.HttpServletRequest;
import java.util.Date;
import java.util.List;

/**
 * 管理员登录记录
 * @author wsc
 * @version 2016年3月30日
 */
@Service
@Transactional
public class LoginServiceImpl  implements LoginService {

	@Autowired
	private LoginRecordMapper loginRecordMapper;
	
	@Autowired
	private AdminUserMapper adminUserMapper;
	
	 public LoginRecord save(int category, String ip, Date date, Integer userId) {
//		 	AdminUser adminUser = adminUserService.findById(userId);
		 AdminUser adminUser = adminUserMapper.selectByPrimaryKey(userId);
	    	LoginRecord log = new LoginRecord();
			log.setLoginIp(ip);
			log.setLoginDate(date);
			log.setUserId(userId);
			log.setUserName(adminUser.getUserName());
			log.setContent(LoginRecord.LOGIN_SUCCESS_TITLE);
			log.setCategory(Integer.valueOf(category));
			log.setUserType(LoginRecord.TYPE_ADMIN);
//			if(LoginRecord.LOGIN_SUCCESS ==  category) {
//				log.setCategory(Integer.valueOf(category));
//			}else {
//				log.setCategory(Integer.valueOf(LoginRecord.LOGIN_FAILURE));
//			}
//			log = save(log);
			loginRecordMapper.insert(log);
			
			adminUser.setLastLoginTime(date);
//			adminUserService.update(adminUser);
			adminUserMapper.updateByPrimaryKeySelective(adminUser);
			return log;
		}
	    
	    @Override
	    public LoginRecord loginLog (HttpServletRequest request,Integer userId) {
			String ip = RequestUtils.getIpAddr(request);
			Date date = new Date();
			Integer category = Integer.valueOf(1);
			LoginRecord log = save(category,  ip, date,userId);
			return log;
		}
	    
	    public LoginRecord userLogin (User user, HttpServletRequest request){
	    	LoginRecord lr = new LoginRecord();
	    	String ip = RequestUtils.getIpAddr(request);
	    	lr.setContent(LoginRecord.LOGIN_SUCCESS_TITLE);
	    	lr.setCategory(LoginRecord.LOGIN_SUCCESS);
	    	lr.setLoginDate(user.getLastLoginTime());
	    	lr.setLoginIp(ip);
	    	lr.setUserId(user.getId());
	    	lr.setUserType(LoginRecord.TYPE_USER);
//	    	lr = save(lr);
	    	loginRecordMapper.insert(lr);
	    	return lr;
	    }

	    
	    
		public List<LoginRecord> selectLoginRecord(Integer id) {
			LoginRecordExample loginRecordExample = new LoginRecordExample();
			LoginRecordExample.Criteria criteria = loginRecordExample.createCriteria();
			criteria.andIdEqualTo(id);
			criteria.andUserTypeEqualTo(Integer.valueOf(1));
			return loginRecordMapper.selectByExample(loginRecordExample);
		}
}
