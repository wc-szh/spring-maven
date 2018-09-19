package com.clarks.front.service;


import com.clarks.pojo.WxAuthorize;

import java.util.List;

public interface WeixinService {

	List<WxAuthorize> findWxAuth(String openId) throws Exception;
}
