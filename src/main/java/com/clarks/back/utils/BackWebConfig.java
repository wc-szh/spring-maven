package com.clarks.back.utils;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.List;

@Configuration
public class BackWebConfig implements WebMvcConfigurer {


    @Autowired
    private BackLoginInterceptors backLoginInterceptors;

    public void addInterceptors(InterceptorRegistry registry){
        registry.addInterceptor(backLoginInterceptors)
                .addPathPatterns("/**")
                .excludePathPatterns("/manager/admin/index.do","/**/*.js","/**/*.css","/**/*.png",
                        "/**/*.images","/**/*.html","/**/*.gif","/**/logout.do","/manager/admin/index.do",
                        "**/bannerImg/upload_pic.do");
    }
}
