package com.clarks.back.service;

import com.clarks.pojo.Config;
import org.springframework.stereotype.Component;

import java.util.List;
@Component
public interface ConfigService {

	List<Config> findAll();

	int updateConfig(Config config2);

}
