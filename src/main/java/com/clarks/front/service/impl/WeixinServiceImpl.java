package com.clarks.front.service.impl;

import com.clarks.bean.WxAuthorize;
import com.clarks.bean.WxAuthorizeExample;
import com.clarks.dao.WxAuthorizeMapper;
import com.clarks.front.service.WeixinService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class WeixinServiceImpl implements WeixinService {
	
	@Autowired
	private WxAuthorizeMapper wxAuthorizeMapper;
	
	/**
	 * 根据openid查询wx_authorize表
	 */
	
	public List<WxAuthorize> findWxAuth(String openId) throws Exception {
//		return (List<WxAuthorize>) weixinDao.findWxAuth(openId);
		WxAuthorizeExample wxAuthorizeExample = new WxAuthorizeExample();
		WxAuthorizeExample.Criteria criteria = wxAuthorizeExample.createCriteria();
		criteria.andOpenIdEqualTo(openId);
		return wxAuthorizeMapper.selectByExample(wxAuthorizeExample);
	}

}
