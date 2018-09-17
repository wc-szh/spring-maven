package com.clarks.back.service.impl;

import com.clarks.back.service.AdminUserService;
import com.clarks.bean.AdminUser;
import com.clarks.bean.AdminUserExample;
import com.clarks.dao.AdminUserMapper;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Service
@Transactional
public class AdminUserServiceImpl  implements AdminUserService {

	@Autowired
    private AdminUserMapper adminUserMapper;
	
	
//	public AdminUser add(AdminUser user) throws Exception{
//		return getAdminUserDao().add(user);
//	}





	public List<AdminUser> findAdminUser(String userName, String md5) {
		AdminUserExample adminUserExample = new AdminUserExample();
		AdminUserExample.Criteria criteria = adminUserExample.createCriteria();
		criteria.andUserNameEqualTo(userName);
		criteria.andPasswordEqualTo(md5);
		return adminUserMapper.selectByExample(adminUserExample);
	}


	public AdminUser findAdminUser(Integer id) {
		return adminUserMapper.selectByPrimaryKey(id);
	}


	public int updateAdminUser(AdminUser user) {
		
		return adminUserMapper.updateByPrimaryKeySelective(user);
	}


	public void insertAdminUser(AdminUser adminUser) {
		adminUserMapper.insert(adminUser);
	}


	public List<AdminUser> countByAdminUser(String userName) {
		AdminUserExample adminUserExample =new AdminUserExample();
		AdminUserExample.Criteria criteria = adminUserExample.createCriteria();
		criteria.andUserNameEqualTo(userName);
		return adminUserMapper.selectByExample(adminUserExample);
	}

	
	public List<AdminUser> selectLikeAdminUser(String keyWords) {
		AdminUserExample adminUserExample = new AdminUserExample();
		if(StringUtils.isNotBlank(keyWords)){
			keyWords = "%"+keyWords+"%";
			AdminUserExample.Criteria criteria = adminUserExample.createCriteria();
			criteria.andUserNameLike(keyWords);	
		}else {
			keyWords = null;
		}
		return adminUserMapper.selectByExample(adminUserExample);
	}



	
}
