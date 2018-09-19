package com.clarks.back.service;

import com.clarks.pojo.AdminUser;

import java.util.List;


public interface AdminUserService {


	

	public List<AdminUser> findAdminUser(String userName, String md5);

	public AdminUser findAdminUser(Integer id);

	public int updateAdminUser(AdminUser user);

	public void insertAdminUser(AdminUser adminUser);

	public List<AdminUser> countByAdminUser(String userName);

	public List<AdminUser> selectLikeAdminUser(String keyWords);
	
}
