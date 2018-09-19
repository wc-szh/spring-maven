package com.clarks.back.service;

import com.clarks.pojo.Config;

import java.util.List;

public interface ConfigService {

	List<Config> findAll();

	int updateConfig(Config config2);

}
