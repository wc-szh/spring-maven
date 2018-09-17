package com.clarks.front.service.impl;

import com.clarks.back.service.DailyCountService;
import com.clarks.bean.DailyCount;
import com.clarks.bean.User;
import com.clarks.bean.UserExample;
import com.clarks.dao.DailyCountMapper;
import com.clarks.dao.UserMapper;
import com.clarks.front.service.UserService;
import com.clarks.front.service.WeixinService;
import com.clarks.front.utils.MD5Utils;
import com.clarks.front.utils.RequestUtils;
import com.jeecms.core.Constants;
import org.apache.commons.lang.StringUtils;
import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.servlet.http.HttpServletRequest;
import java.net.URI;
import java.util.Date;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Service
@Transactional
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserMapper userMapper;
	@Autowired
	private DailyCountMapper dailyCountMapper;
	
	@Autowired
	private WeixinService weixinService;
	
	@Autowired
	private DailyCountService dailyCountService;
	

	
	
	public User findByUsername(String username){
		User user = new User();
		user.setUsername(username);
//		List<User> list = findByEgList(user);
		UserExample userExample = new UserExample();
		UserExample.Criteria criteria = userExample.createCriteria();
		criteria.andUsernameEqualTo(username);
		List<User> list = userMapper.selectByExample(userExample);
		if(list != null && list.size() > 0){
			user = list.get(0);
		}else{
			user = null;
		}
		return user;
	}
	
	public boolean register(String username, String password, String nickName,Integer sex) throws Exception {
		if (StringUtils.isNotBlank(username) && StringUtils.isNotBlank(password) && StringUtils.isNotBlank(nickName)
		&& sex != null) {
			User user = findByUsername(username);
			if (user == null) {
				user = new User(username, MD5Utils.md5(password), nickName);
				user.setSex(sex);
				user.setRegisterTime(new Date());
				user.initForRegister();
//				save(user);
				userMapper.insertSelective(user);
				return true;
			}
		}
		return false;
	}
	
//	public boolean login(String username, String password, HttpServletRequest request) throws Exception{
//		if (StringUtils.isNotBlank(username) && StringUtils.isNotBlank(password)) {
//			User user = findByUsername(username);
//			// 密码一致则成功登入
//			if (user != null && MD5Utils.md5(password).equals(user.getPassword())) {
//				user.setLastLoginTime(new Date());
//				user.setLoginTimes(user.getLoginTimes()!=null?Integer.valueOf(user.getLoginTimes().intValue()+1):Integer.valueOf(1));
//				user = (User) update(user);
//				request.getSession().setAttribute(Constants.USER_KEY, user);
//				loginService.userLogin(user, request);//登录日志
//				return true;
//			}
//		}
//		return false;
//	}
	
	protected String sendGet( String url ) {
		String html = null;
		try {
			HttpGet httpGet = new HttpGet(new URI(url));
			CloseableHttpClient httpclient = HttpClients.createDefault();
			HttpResponse httpresponse = httpclient.execute(httpGet);
			HttpEntity entity = httpresponse.getEntity();
			html = EntityUtils.toString(entity, "UTF-8");
			httpGet = null;
		} catch (Exception e) {
			// TODO: handle exception
		}
		return html;
	}
	
		
	public static String emojiGun(String s){
		Pattern p = Pattern.compile("[\ud83c\udc00-\ud83c\udfff]|[\ud83d\udc00-\ud83d\udfff]|[\u2600-\u27ff]" ,Pattern.UNICODE_CASE | Pattern.CASE_INSENSITIVE );
		Matcher m=p.matcher(s);  
		while(m.find()){  
			s = m.replaceAll("*");
		}  
       return s ;
	}
	

	
	public static void main(String []args){

	}
	//	String str = "{\"country\":\"中国\",\"province\":\"浙江\",\"city\":\"嘉兴\",\"openid\":\"o7dMcxAKy_vkxFwmfj83Mu_l15r0\",\"sex\":1,\"nickname\":\"✌?️谢夫人✌?️\",\"headimgurl\":\"http://wx.qlogo.cn/mmopen/47CicbLQOxtU1naTI30zN3PCQiaOsYD8cZKWLibxzHpqibPKSIFFJzQlUicgmUk7rTDSXAOJfP7adsEFIwzIg291iaUA/0\",\"language\":\"zh_CN\",\"privilege\":[]}";
//		
//		
//		Object obj=JSONValue.parse(str);
//		System.out.println(obj);
//		str = (str == null ? "" : str); 
//		String tmp; 
//		StringBuffer sb = new StringBuffer(1000); 
//		char c; 
//		int i, j; 
//		sb.setLength(0); 
//		for (i = 0; i < str.length(); i++) 
//		{ 
//		c = str.charAt(i); 
//		sb.append("\\u"); 
//		j = (c >>>8); //取出高8位 
//		tmp = Integer.toHexString(j); 
//		if (tmp.length() == 1) 
//		sb.append("0"); 
//		sb.append(tmp); 
//		j = (c & 0xFF); //取出低8位 
//		tmp = Integer.toHexString(j); 
//		if (tmp.length() == 1) 
//		sb.append("0"); 
//		sb.append(tmp); 
//
//		} 
//		System.out.println(new String(sb));
//		String sq = sb.toString();
//		sq = sq.replaceAll("[\\ud83c\\udc00-\\ud83c\\udfff]|[\\ud83d\\udc00-\\ud83d\\udfff]|[\\u2600-\\u27ff]", "*"); 
//		System.out.println(sq);
		//System.out.println(sq);  
       // System.out.println(sq.length());  
      //  System.out.println(sq.replaceAll("[\\ud83c\\udc00-\\ud83c\\udfff]|[\\ud83d\\udc00-\\ud83d\\udfff]|[\\u2600-\\u27ff]", "*"));  
        //System.out.println(filterEmoji(sq)); 
		//return (new String(sb)); 
//		 Pattern emoji = Pattern.compile ("[ud83cudc00-ud83cudfff]|[ud83dudc00-ud83dudfff]|[u2600-u27ff]",Pattern.UNICODE_CASE | Pattern . CASE_INSENSITIVE ) ;
//		 Matcher emojiMatcher = emoji.matcher(sq);
//		 if ( emojiMatcher.find()) 
//		{
//		 sq = emojiMatcher.replaceAll("*");
//		}
//		 System.out.println(sq);
	 public static String filterEmoji(String source) {  
	        if(StringUtils.isNotBlank(source)){  
	            return source.replaceAll("\\ud800\\udc00-\\udbff\\udfff\\ud800-\\udfff", "*");  
	        }else{  
	            return source;  
	        }  
	    }  
	
	
	public static String unescapeUnicode(String str){
		StringBuffer b=new StringBuffer();
		Matcher m = Pattern.compile("\\\\u([0-9a-fA-F]{4})").matcher(str);
		while(m.find()){
		//	System.out.println("1");
			b.append((char)Integer.parseInt(m.group(1),16));
		}
		return b.toString();
	}



	//查询当天注册人数
	public Integer findCount(Date date, Date nowTime) throws Exception{
		UserExample userExample = new UserExample();
		UserExample.Criteria criteria = userExample.createCriteria();
		criteria.andFirstLoginTimeBetween(date, nowTime);
		return userMapper.countByExample(userExample);
	}
	
	
	/**
	 * accessToken、openid获取用户信息，并保存
	 */
	public void wxLogin(String openId,String accessToken,HttpServletRequest req) throws Exception {

		//获取用户信息
		if(StringUtils.isNotBlank(openId)) {
			String url = "https://api.weixin.qq.com/sns/userinfo?access_token="+accessToken //授权接口调用凭证
					+ "&openid="+openId//用户唯一标识
					+ "&lang=zh_CN";//简体
			String result = sendGet(url);
			JSONObject jsonObject = new JSONObject(result);
//			String openId = jsonObject.getString("openid");    //openid
			String nickname = jsonObject.getString("nickname");//昵称
			String sex = jsonObject.getString("sex");          //性别
			String headPic = jsonObject.getString("headimgurl");//用户头像
			
			UserExample userExample = new UserExample();
			UserExample.Criteria criteria = userExample.createCriteria();
			criteria.andOpenIdEqualTo(openId);
			List<User> list = userMapper.selectByExample(userExample);
			User user = new User();
			try {
				if(list != null && list.size() >0) {
					user = list.get(0);
					updateUser(user,req,openId,nickname,sex,headPic);//user信息更新
				}else {
					user = createUser(req,openId,nickname,sex,headPic);//封装user并保存
				}
				
				req.getSession().setAttribute(Constants.USER_KEY, user);
				req.getSession().setAttribute("open_id", openId); 
				saveDailyCount(user,req,nickname);//更新访问记录表
			} catch (Exception e) {
				throw new RuntimeException("用户登录数据error："+e.getMessage());
			}
			
		}
	}
	
	/**
	 * 更新访问记录表
	 * @param user
	 * @param req
	 * @param nickname
	 */
	public void saveDailyCount(User user, HttpServletRequest req, String nickname){
		try {
			String ip = RequestUtils.getIpAddr(req);
			DailyCount dailyCount = new DailyCount();  
			dailyCount.setUserIp(ip);
			dailyCount.setPageUrl("index.cc");
			dailyCount.setNickName(nickname);
			dailyCount.setLoginTime(new Date());
			dailyCount.setUserId(user.getId());
			dailyCountMapper.insertSelective(dailyCount);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	
	/**
	 * 更新user数据和访问记录表
	 * @param user
	 * @param req
	 * @param headPic 
	 * @param sex 
	 * @param nickname 
	 * @param openId 
	 * @return 
	 */
	private void updateUser(User user, HttpServletRequest req, String openId, String nickname, String sex, String headPic) {
		if(user != null) {
			user.setLastLoginTime(new Date());
			user.setNickName(nickname);
			user.setSex(Integer.valueOf(sex));
			user.setHeadpic(headPic);
			user.setLoginTimes(user.getLoginTimes()!=null?Integer.valueOf(user.getLoginTimes().intValue()+1):Integer.valueOf(1));
			UserExample userExample = new UserExample();
			UserExample.Criteria criteria = userExample.createCriteria();
			criteria.andOpenIdEqualTo(user.getOpenId());
			userMapper.updateByExampleSelective(user, userExample);
		}
	}


	/**
	 * 微信登录，封装user并保存
	 * @param result
	 * @param req
	 * @param headPic 
	 * @param sex 
	 * @param nickname 
	 * @param openId 
	 * @return
	 */
	private User createUser(HttpServletRequest req, String openId, String nickname, String sex, String headPic) {
			User user = new User();
			user.setNickName(nickname);
			user.setOpenId(openId);
			user.setSex(Integer.valueOf(sex));
			user.setHeadpic(headPic);
			user.setFirstLoginTime(new Date());//首次登录时间
			user.setLastLoginTime(user.getFirstLoginTime());//首次登录的最后登录就是首次登录时间
			user.setStatus(Integer.valueOf(0));//初始状态正常
			user.setLoginTimes(Integer.valueOf(1));//登录次数首次为1
			userMapper.insert(user);
			
			UserExample userexample = new UserExample();
			UserExample.Criteria criteria= userexample.createCriteria();
			criteria.andOpenIdEqualTo(openId);
			List<User> userList = userMapper.selectByExample(userexample);
			if(userList != null ) {
				user=userList.get(0);
			}
			return user;
	}

	public List<User> selectUser(String username, String nickName) {
		UserExample example = new UserExample();
		UserExample.Criteria criteria = example.createCriteria();
		if(StringUtils.isNotBlank(username) ) {
			criteria.andUsernameLike("%"+username+"%");
		}
		if(StringUtils.isNotBlank(nickName)) {
			criteria.andNickNameLike("%"+nickName+"%");
		}
		return userMapper.selectByExample(example);
	}

	public User statUser() {
		return userMapper.selectUserStstic();
//		return userMapper.selectByExample(example);
	}
}
