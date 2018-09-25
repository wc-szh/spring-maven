<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="zh_CN">
<head>
    <meta charset="UTF-8">
    <title>拾光</title>
    <meta name="Description" content="">
    <meta name="Keywords" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
    <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
    <meta name="apple-mobile-web-app-title" content=""/>
    <meta name="apple-touch-fullscreen" content="YES" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="format-detection" content="telephone=no" />
    <meta name="HandheldFriendly" content="true" />
    <meta http-equiv="x-rim-auto-match" content="none" />
    <meta name="format-detection" content="telephone=no" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <link rel="stylesheet" href="${base }/common/css/other_style.css?v=1.1" type="text/css">
    <link rel="stylesheet" href="${base }/common/css/animate.css?v=1.1" type="text/css">
    <script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
    <script type="text/javascript" src="${base }/common/js/mobile.js"></script>
    <script type="text/javascript" src="${base }/common/js/other_pageJs.js"></script>
</head>

<body>
<div class="audio">
	  <audio id="myaudio" src="${base}/common/sound/other_bg.mp3?v=1.0" type="audio/mpeg"  loop="loop" hidden="true"></audio>
</div>
    <div class="wrap">	    
        <div class="screen">
            <div class="page firstPg">
                <div class="layer">
                    <div class="text">
                        <img src="${base}/common/images/front/text1.png">
                    </div>
                    <div class="text">
                        <img src="${base}/common/images/front/text2.png">
                    </div>
                    <div class="text">
                        <img src="${base}/common/images/front/text3.png">
                    </div>
                    <div class="text">
                        <img src="${base}/common/images/front/text4.png">
                    </div>
                    <div class="text">
                        <img src="${base}/common/images/front/text5.png">
                    </div>
                    <div class="text">
                        <img src="${base}/common/images/front/text6.png">
                    </div>
                    <div class="text">
                        <img src="${base}/common/images/front/text7.png">
                    </div>
                    <div class="text">
                        <img src="${base}/common/images/front/text8.png">
                    </div>
                    <div class="text">
                        <img src="${base}/common/images/front/text9.png">
                    </div>
                    <div class="text">
                        <img src="${base}/common/images/front/text10.png">
                    </div>
                    <div class="text">
                        <img src="${base}/common/images/front/text11.png">
                    </div>
                    <div class="text">
                        <img src="${base}/common/images/front/text12.png">
                    </div>
                    <div class="text">
                        <img src="${base}/common/images/front/text13.png">
                    </div>
                    <div class="text">
                        <img src="${base}/common/images/front/text14.png">
                    </div>
                </div>
                <div class="layer">
                    <div class="roundBox" style="position: relative;width: 100%;margin-top: 26%;">
                        <div class="round scale">
                            <svg class="roundImg" >
                                <circle cx="50%" cy="50%" r="50%" stroke-width="1px"/>
                            </svg>
                            <div class="plane">
                                <img src="${base}/common/images/front/plane.png">
                            </div>
                        </div>
                        <div class="SG animated scale " data-a="opacityIn" data-d="700">
                            <img src="${base}/common/images/front/SG.png">
                        </div>
                        <div class="missTime animated scale2" data-a="opacityIn" data-d="700">
                            <img src="${base}/common/images/front/missTime.png">
                        </div>
                    </div>
                    <div class="X">
                        <img src="${base}/common/images/front/X.png">
                    </div>
                    <div class="phone">
                        <img src="${base}/common/images/front/phone.png">
                    </div>
                    <div class="finger">
                        <img src="${base}/common/images/front/finger.png">
                    </div>
                    <div class="tipPop">
                        <img src="${base}/common/images/front/tipPop.png">
                    </div>
                    <div class="coins">
                        <div class="coinsContainer">
                            <img src="${base}/common/images/front/musicCoin.png" class="musicCoin aa">
                            <img src="${base}/common/images/front/UpanCoin.png"  class="UpanCoin aa" >
                            <img src="${base}/common/images/front/picCoin.png" class="picCoin aa">
                            <img src="${base}/common/images/front/linkCoin.png" class="linkCoin aa">
                            <img src="${base}/common/images/front/pointCoin.png" class="pointCoin1 aa">
                            <img src="${base}/common/images/front/pointCoin.png" class="pointCoin2 aa">
                            <img src="${base}/common/images/front/pointCoin.png" class="pointCoin3 aa">
                            <img src="${base}/common/images/front/pointCoin.png" class="pointCoin4 aa">
                            <img src="${base}/common/images/front/pointCoin.png" class="pointCoin5 aa">
                            <img src="${base}/common/images/front/pointCoin.png" class="pointCoin6 aa">
                        </div>
                    </div>
                    <div class="H5coin">
                        <img src="${base}/common/images/front/H5coin.png">
                    </div>
                </div>

            </div>
        </div>
    </div>
</body>
</html>