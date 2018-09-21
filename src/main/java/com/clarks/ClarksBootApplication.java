package com.clarks;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@MapperScan("com.clarks.mapper")
//开启定时任务
@EnableScheduling
public class ClarksBootApplication {

    public static void main(String[] args) {
        SpringApplication.run(ClarksBootApplication.class, args);
    }
}
