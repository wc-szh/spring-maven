package com.clarks.front.utils;

import com.clarks.pojo.User;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Component
public class FrontInterceptors implements HandlerInterceptor {
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) {
       try {
           String url="http://" + request.getServerName() //服务器地址
                   + ":"
                   + request.getServerPort()           //端口号
                   + request.getRequestURI();
           System.out.println(url);
           request.setCharacterEncoding("UTF-8");
           response.setCharacterEncoding("UTF-8");
           response.setContentType("text/html;charset=UTF-8");
       }catch (Exception e){
           e.printStackTrace();
       }
        User user= (User)request.getSession().getAttribute("user");
        if(user == null || user.getNickName() == null || user.getOpenId() == null){
            System.out.println("没有session，拦截！！！");
            return false;
        }
        System.out.println("放行！！！");
        return true;
    }
}
