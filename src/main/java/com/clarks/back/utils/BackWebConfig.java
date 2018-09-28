package com.clarks.back.utils;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.HashSet;
import java.util.Set;

@Configuration
public class BackWebConfig implements WebMvcConfigurer {

    @Autowired
    private BackLoginInterceptors backLoginInterceptors;

    public void addInterceptors(InterceptorRegistry registry){
        registry.addInterceptor(backLoginInterceptors)
                .addPathPatterns("/**")
                .excludePathPatterns("/manager/admin/index.do","/**/*.js","/**/*.css","/**/*.png","/**/*.jpg",
                        "/**/*.images","/**/*.html","/**/*.gif","/**/logout.do");
    }

//    public void addResourceHandlers(ResourceHandlerRegistry registry) {
//        registry.addResourceHandler("/**")
//                .addResourceLocations("classpath:/webapp/");
//        registry.addResourceHandler("/image/**").addResourceLocations("file:D:/clarks-boot/adminUpload/image");
//    }
}
