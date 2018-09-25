<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="Access-Control-Allow-Origin" content="*">
<title>Insert title here</title>
<script type="text/javascript" src="${base}/common/js/jquery-1.7.2.min.js"></script>
<script src="${base}/common/js/jquery-form.js" type="text/javascript"></script>
</head>
<body>
<script type="text/javascript">
	$(document).ready(function(){ 
		var video = '${videoUrl}';
		var msg = '${msg}';
		var videoImg = '${videoImg}';
		if(msg != "" && msg != null){
			alert(msg);
			window.parent.closeUping();
			return;
		}else{
			$("#baseVideo",window.parent.document).val(video);
			$("#videoImg",window.parent.document).val(videoImg);
			window.parent.showVideo();
			return;
		}
	}); 
</script>
</body>
</html>