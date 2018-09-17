package com.clarks.back.service.impl;

import com.clarks.back.service.ConfigService;
import com.clarks.bean.Config;
import com.clarks.bean.ConfigExample;
import com.clarks.dao.ConfigMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class ConfigServiceImpl  implements ConfigService {

	@Autowired
	private ConfigMapper configMapper;

	public List<Config> findAll() {
		ConfigExample ConfigExample = new ConfigExample();
		return configMapper.selectByExample(ConfigExample);
	}

	public int updateConfig(Config config2) {
		return configMapper.updateByPrimaryKeySelective(config2);
	}
	
	
	
	
//    public Config findThisConfig(){
//    	List<Config> list = findAll();
//    	Config config = new Config();
//    	if(list != null && list.size() > 0){
//    		config = list.get(0);
//    	}
//    	return config;
//    }
	
}
