package com.jeecms.common.web;

/**
 * web常量
 */
public abstract class Constants {
	/**
	 * 路径分隔符
	 */
	public static final String SPT = "/";
	/**
	 * 索引页
	 */
	public static final String INDEX = "index";
	/**
	 * 默认模板
	 */
	public static final String DEFAULT = "default";
	/**
	 * UTF-8编码
	 */
	public static final String UTF8 = "UTF-8";
	/**
	 * 提示信息
	 */
	public static final String MESSAGE = "message";
	/**
	 * 跳转的显示名字
	 */
	public static final String REDIRECT_LEFT_NAME = "redirectLeftName";
	/**
	 * 跳转的链接
	 */
	public static final String REDIRECT_LEFT_URL = "redirectLeftUrl";
	/**
	 * 跳转的显示名字
	 */
	public static final String REDIRECT_RIGHT_NAME = "redirectRightName";
	/**
	 * 跳转的链接
	 */
	public static final String REDIRECT_RIGHT_URL = "redirectRightUrl";
	/**
	 * cookie中的JSESSIONID名称
	 */
	public static final String JSESSION_COOKIE = "JSESSIONID";
	/**
	 * url中的jsessionid名称
	 */
	public static final String JSESSION_URL = "jsessionid";
	/**
	 * HTTP POST请求
	 */
	public static final String POST = "POST";
	/**
	 * HTTP GET请求
	 */
	public static final String GET = "GET";
	
	public static final String appId = "2015031600036375";
	public static final String privateKey = "MIICdwIBADANBgkqhkiG9w0BAQEFAASCAmEwggJdAgEAAoGBAN2B1eZl5foBzsZe"
																+ "RXGAQW+PttNSYi3N5XL+eS05EVJGVHyAX5qZKyEHdziJDla+/FDln4lcZx9UNT0R"
																+ "T6RknnX6biVKWuT+nrCzjb5lqiPuel6N3DOXvlrYh7JoNbBjIQI172exNM/3Tkbc"
																+ "Dt3JvZRjHpMiQgcF2LASZrmWvAEPAgMBAAECgYAz0EUaqcdL3dRibnbL//ZOhE19"
																+ "zQ2OLVV4urHZtDmrByyIGvdCEIYYKcjnfpfODsqymaPh2617lJUHfd8lUywFeWeU"
																+ "bRv+niLPHz2rGxcmITBCc5Woy5RD4KArfQqrFyKHguuW+C3AqpG/9PRc1/gniudF"
																+ "eHzeK6YDHcsXAAOH8QJBAPRnG4eVuPtJBJrLTbopP6Clk61wBzmClzW4Cs0CLT2b"
																+ "sK2SG76xlrfortdnRikrFEiei1C7LvOPMdfuFPDji40CQQDoBJpU6lDQ6ZLQK9cX"
																+ "NahqLhsz6sfq/Z5ZKqFoRArZJQUGl7ZtAagPB14gb9p8UXK59vTisB0Y/0TJPyam"
																+ "Z4oLAkEAgpU0mFTe6SQyWaKWfQjc/jB5nwlkUs37jLAw1Sh8k5ZD5/lQ6appJQol"
																+ "oOGFEyn5RHOxbAkXJPs1XnHOroZlYQJBALd5VFXMCWZ7HnbyBCA9dVWp6icPBVKl"
																+ "hj+6v3LFQ9LdPHEvLbpbsftYdy2tZhgjDFdUm+hbHldzHYELKFQ00msCQDV8NilV"
																+ "Vt/inj2VMgYibNJUehbF/s76TVN9GIPzXnxZU6eSMY+TxChHUSzFrgQwxes2NTpG"
																+ "wRq16ChOH9B8GeA=";
	
	public static final String alipayUrl = "https://openapi.alipay.com/gateway.do";


	public static String USER_KEY = "user";

	public static String ADMIN_KEY = "admin";

	/**
	 * 首页url 用于获取微信jsapi_ticket（request.getRequestURL()获取的链接有时会不准确）
	 */
	public static String INDEX_URL = "http://misstime.goldmiao.com/index.pc";

	/**
	 * 类--错误国际化信息配置
	 */
	public static String CLASS_ERROR_CODE = "/WEB-INF/config/classes-error.properties";
}
