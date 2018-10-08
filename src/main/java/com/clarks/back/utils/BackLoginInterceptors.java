package com.clarks.back.utils;

import com.clarks.back.service.ConfigService;
import com.clarks.pojo.AdminUser;
import com.clarks.pojo.Config;
import com.jeecms.common.web.Constants;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

@Component
public class BackLoginInterceptors implements HandlerInterceptor {

    @Autowired
    private ConfigService configService;

    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object object)throws Exception{
        String url="http://" + request.getServerName() //服务器地址
                + ":"
                + request.getServerPort()           //端口号
                + request.getRequestURI();
        System.out.println(url);
        request.setCharacterEncoding("UTF-8");
        response.setCharacterEncoding("UTF-8");
        response.setContentType("text/html;charset=UTF-8");
        AdminUser user = (AdminUser)request.getSession().getAttribute(Constants.ADMIN_KEY);
        if(user == null ){
            Config config = null;
            System.out.println("该url没有session，已拦截");

            response.sendRedirect("/clarks/manager/admin/index.do");
            return false;
            }

    System.out.println("url通过session检测,放行");
    return true;
    }


    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
    }

    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {
    }
}
