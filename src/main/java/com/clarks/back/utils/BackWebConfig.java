package com.clarks.back.utils;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.Ordered;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.List;

@Configuration
public class BackWebConfig implements WebMvcConfigurer {

    @Autowired
    private BackLoginInterceptors backLoginInterceptors;

    /**
     * 重写addInterceptors接口设置拦截器
     * @param registry
     */
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(backLoginInterceptors)
                .addPathPatterns("/**/*.do")
                .excludePathPatterns("/manager/admin/index.do","/**/*.js","/**/*.css",
                 "/**/*.images","/**/*.html","/**/*.gif","/**/logout.do","/**/*.png");

    }


    /**
     * 重写addResourceHandlers接口设置静态资源(图片)访问
     * @param registry
     */
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
//        registry.addResourceHandler("/static/**").addResourceLocations("classpath:/jsp/");
        registry.addResourceHandler("/adminUpload/image/**")
                .addResourceLocations("file:D:/clarks-boot/adminUpload/image/");
    }


}
