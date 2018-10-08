package com.clarks.front.utils;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class FrontWebConfig implements WebMvcConfigurer {
    @Autowired
    private FrontInterceptors frontInterceptors;

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(frontInterceptors)
                .addPathPatterns("/**/*.cc")
                .excludePathPatterns("/**/index.cc","/**/autho.cc","/**/code.cc");
    }
}
