package com.jeecms.common.web;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class RedirectFilter implements Filter {
	protected final Logger log = LoggerFactory.getLogger(RedirectFilter.class);

	public void doFilter(ServletRequest req, ServletResponse resp,
			FilterChain filterChain) throws IOException, ServletException {
		String hostName = "http://"+req.getServerName();
		if(hostName.startsWith("http://www.niushuashua.cn") || hostName.startsWith("http://niushuashua.com")
			|| hostName.startsWith("http://www.niushuashua.com.cn") || hostName.startsWith("http://niushuashua.cn")) {
			HttpServletResponse response = (HttpServletResponse) resp;
			HttpServletRequest httpRequest = (HttpServletRequest)req;
			String queryString = (httpRequest.getQueryString() == null ? "" : "?"+httpRequest.getQueryString());
			response.setStatus(301);
			String requestUrl = httpRequest.getRequestURL().toString();
			if(hostName.startsWith("http://www.niushuashua.cn")){
				requestUrl = requestUrl.replace("http://www.niushuashua.cn", "http://www.niushuashua.com");
			}else if(hostName.startsWith("http://niushuashua.com")){
				requestUrl = requestUrl.replace("http://niushuashua.com", "http://www.niushuashua.com");
			}else if(hostName.startsWith("http://www.niushuashua.com.cn")){
				requestUrl = requestUrl.replace("http://www.niushuashua.com.cn", "http://www.niushuashua.com");
			}else if(hostName.startsWith("http://niushuashua.cn")){
				requestUrl = requestUrl.replace("http://niushuashua.cn", "http://www.niushuashua.com");
			}
		     response.setHeader( "Location", requestUrl + queryString);
		     response.setHeader( "Connection", "close" );
		}else {
			filterChain.doFilter(req, resp);
		}
	}
	
	
	public void destroy() {
	}
	
	
	public void init(FilterConfig arg0) throws ServletException {
	}


}