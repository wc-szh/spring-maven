<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="zh_CN">
<head>
    <meta charset="UTF-8">
    <title>Clarks Kids</title>
    <meta name="Description" content="">
    <meta name="Keywords" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
    <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
    <meta name="apple-mobile-web-app-title" content=""/>
    <meta name="apple-touch-fullscreen" content="YES"/>
    <meta name="apple-mobile-web-app-capable" content="yes"/>
    <meta name="format-detection" content="telephone=no"/>
    <meta name="HandheldFriendly" content="true"/>
    <meta http-equiv="x-rim-auto-match" content="none"/>
    <meta name="format-detection" content="telephone=no"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
     <script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
    <link rel="stylesheet" href="${base}/common/css/animate.css?v=1.1">
    <link rel="stylesheet" href="${base}/common/css/style.css?v=1.1">
    <script type="text/javascript" src="${base}/common/js/mobi_all.js?v=1.0"></script>
</head>
<body>
<div class="wrap">
<audio id="myaudio" src="${base}/common/sound/bg.mp3?v=1.0" type="audio/mpeg" autoplay loop="loop" hidden="true"></audio>
<div class="layer loadLayer">
    <div class="loading">
        <div class="wText">loading</div>
        <div class="wBall" id="wBall_1">
            <div class="wInnerBall"></div>
        </div>
        <div class="wBall" id="wBall_2">
            <div class="wInnerBall"></div>
        </div>
        <div class="wBall" id="wBall_3">
            <div class="wInnerBall"></div>
        </div>
        <div class="wBall" id="wBall_4">
            <div class="wInnerBall"></div>
        </div>
        <div class="wBall" id="wBall_5">
            <div class="wInnerBall"></div>
        </div>
    </div>
</div>

<div class="page startPage">
    <div class="hidden">
        <img src="${base}/common/images/front/score5.png">
        <img src="${base}/common/images/front/score10.png">
        <img src="${base}/common/images/front/score15.png">
        <img src="${base}/common/images/front/sharePic1.png?v=1.0">
        <img src="${base}/common/images/front/sharePic2.png?v=1.0">
        <img src="${base}/common/images/front/sharePic3.png?v=1.0">
        <img src="${base}/common/images/front/sharePic4.png?v=1.0">
        <img src="${base}/common/images/front/shoesPic1.png">
        <img src="${base}/common/images/front/shoesPic2.png">
        <img src="${base}/common/images/front/shoesPic3.png">
        <img src="${base}/common/images/front/shoesPic4.png">
        <img src="${base}/common/images/front/shoesPic5.png">
        <img src="${base}/common/images/front/shoesPic6.png">
        <img src="${base}/common/images/front/shoesPic7.png">
        <img src="${base}/common/images/front/shoesPic8.png">
        <img src="${base}/common/images/front/shoesPic9.png">
        <img src="${base}/common/images/front/shoesPic10.png">
        <img src="${base}/common/images/front/shoesPic11.png">
        <img src="${base}/common/images/front/shoesPic12.png">
        <img src="${base}/common/images/front/shoesPic13.png">
        <img src="${base}/common/images/front/shoesPic14.png">
        <img src="${base}/common/images/front/shoesPic15.png">
        <img src="${base}/common/images/front/shoesPic16.png">
        <img src="${base}/common/images/front/gamePageBg.jpg">
        <img src="${base}/common/images/front/indexPageBg.jpg">
        <img src="${base}/common/images/front/magicPageBg.jpg">
    </div>
    <div class="screen">
        <div class="layer">
            <div class="indexTitle">
                <img src="${base}/common/images/front/indexTitle.png">
            </div>
            <div class="indexShoes">
                <img src="${base}/common/images/front/shoes.png">
                <div class="shoesIcon">
                    <img src="${base}/common/images/front/shoesIcon-off.png">
                    <img src="${base}/common/images/front/shoesIcon-on.png">
                </div>
            </div>
            <div class="indexTrees">
                <img src="${base}/common/images/front/trees-off.png">
                <img src="${base}/common/images/front/trees-on.png">
            </div>
            <div class="wheelBox">
                <div class="rotateWheel animate">
                    <img src="${base}/common/images/front/wheel.png">
                    <div class="shoesImg shoesImg1">
                        <img src="${base}/common/images/front/shoesImg1.png">
                    </div>
                    <div class="shoesImg shoesImg2">
                        <img src="${base}/common/images/front/shoesImg2.png">
                    </div>
                    <div class="shoesImg shoesImg3">
                        <img src="${base}/common/images/front/shoesImg3.png">
                    </div>
                    <div class="shoesImg shoesImg4">
                        <img src="${base}/common/images/front/shoesImg4.png">
                    </div>
                    <div class="shoesImg shoesImg5">
                        <img src="${base}/common/images/front/shoesImg5.png">
                    </div>
                    <div class="shoesImg shoesImg6">
                        <img src="${base}/common/images/front/shoesImg6.png">
                    </div>
                    <div class="shoesImg shoesImg7">
                        <img src="${base}/common/images/front/shoesImg7.png">
                    </div>
                    <div class="shoesImg shoesImg8">
                        <img src="${base}/common/images/front/shoesImg8.png">
                    </div>
                    <div class="shoesImg shoesImg9">
                        <img src="${base}/common/images/front/shoesImg9.png">
                    </div>
                    <div class="shoesImg shoesImg10">
                        <img src="${base}/common/images/front/shoesImg10.png">
                    </div>
                    <div class="shoesImg shoesImg11">
                        <img src="${base}/common/images/front/shoesImg11.png">
                    </div>
                    <div class="shoesImg shoesImg12">
                        <img src="${base}/common/images/front/shoesImg12.png">
                    </div>
                </div>
                <div class="logoBox">
                    <img src="${base}/common/images/front/logo.png">
                </div>
            </div>

            <div class="ruleBtn J_ruleBtn">
                <img src="${base}/common/images/front/ruleBtn.png">
            </div>
            <div class="audio"></div>
            <div class="startBtn J_startBtn">
                <img src="${base}/common/images/front/startBtn.png">
            </div>
        </div>
    </div>
</div>

<div class="page navPage">
    <div class="screen">
        <div class="layer">
            <div class="indexTitle">
                <img src="${base}/common/images/front/indexTitle.png">
            </div>
            <div class="navBtn1 J_navBtn1" onclick="_czc.push(['_trackEvent', '玩游戏']);">
                <img src="${base}/common/images/front/navBtn1.png">
                <div class="navBtnBg">
                    <img src="${base}/common/images/front/navBtnBg2.jpg">
                </div>
                <div class="navBtnshoes">
                    <img src="${base}/common/images/front/navBtnshoes.png">
                    <div class="navShoesIcon">
                        <img src="${base}/common/images/front/shoesIcon-off.png">
                        <img src="${base}/common/images/front/shoesIcon-on.png">
                    </div>
                </div>

            </div>
            <div class="navBtn2 J_navBtn2">
                <img src="${base}/common/images/front/navBtn2.png">
                <div class="navBtnBg">
                    <img src="${base}/common/images/front/navBtnBg2.jpg">
                </div>
                <div class="navTrees">
                    <img src="${base}/common/images/front/trees-off.png">
                    <img src="${base}/common/images/front/trees-on.png">
                </div>
                <div class="lockIcon J_lockIcon">
                    <img src="${base}/common/images/front/lockIcon.png">
                </div>
            </div>
        </div>
    </div>
</div>

<div class="page gamePage">
    <div class="layer">
        <div class="gamePageBg1 J_gamePageBg"></div>
        <div class="gamePageBg2 J_gamePageBg"></div>        
        <div class="readyWord animated" data-a="zoomIn" data-d="50" data-ea="hidden">
            <img src="${base}/common/images/front/ready.png">
        </div>
        <div class="readyWord animated" data-a="zoomIn" data-d="1000" data-ea="hidden">
            <img src="${base}/common/images/front/number3.png">
        </div>
        <div class="readyWord animated" data-a="zoomIn" data-d="2000" data-ea="hidden">
            <img src="${base}/common/images/front/number2.png">
        </div>
        <div class="readyWord animated" data-a="zoomIn" data-d="3000" data-ea="hidden">
            <img src="${base}/common/images/front/number1.png">
        </div>
        <div class="readyWord animated" data-a="zoomIn" data-d="4000" data-ea="hidden">
            <img src="${base}/common/images/front/go.png">
        </div>
    </div>
    <div class="layer">
        <canvas id="J_gameBox"></canvas>
        <div class="downCount">30s</div>
        <div class="scoreBox">
            <img src="${base}/common/images/front/scoreBox.png">
            <span id="J_number">0</span>
        </div>
        <div class="lifeBoxBox">
            <img src="${base}/common/images/front/lifeBox.png">
            <div class="heartIcon clearfix">
                <img src="${base}/common/images/front/heart.png">
                <img src="${base}/common/images/front/heart.png">
                <img src="${base}/common/images/front/heart.png">
            </div>
        </div>
    </div>
</div>

<div class="page resultPage">
    <div class="screen">
        <div class="layer">
            <div class="resultBox">
                <img src="${base}/common/images/front/messageBoxBg.png">
                <div class="resultText">
                    <img src="${base}/common/images/front/loseText.png">
                    <img src="${base}/common/images/front/successText.png">
                </div>
                <div class="againBtn J_againBtn">
                    <img src="${base}/common/images/front/againBtn.png">
                </div>
                <div class="getMagicBtn J_navBtn2">
                    <img src="${base}/common/images/front/getMagicBtn.png">
                </div>
                <div class="backBtn J_backBtn">
                    <img src="${base}/common/images/front/backBtn.png">
                </div>
            </div>
        </div>
    </div>
</div>

<div class="page magicPage">
    <div class="screen">
        <div class="layer">
            <div class="magicTrees">
                <img src="${base}/common/images/front/magicTrees.png">
                <div class="get-magicBox">
                    <div class="magicIcon">
                        <img src="${base}/common/images/front/magicIcon.png">
                    </div>
                    <div class="arrowTip">
                        <img src="${base}/common/images/front/arrowTip.png">
                    </div>
                    <div class="magicTip">
                        <img src="${base}/common/images/front/magicTip.png">
                    </div>
                </div>

                <div class="appleBox">
                    <div class="winTitle">
                        <img src="${base}/common/images/front/winTitle.png">
                        <div class="winStar1">
                            <img src="${base}/common/images/front/starIcon.png">
                        </div>
                        <div class="winStar2">
                            <img src="${base}/common/images/front/starIcon.png">
                        </div>
                        <div class="winStar3">
                            <img src="${base}/common/images/front/starIcon.png">
                        </div>
                        <div class="winStar4">
                            <img src="${base}/common/images/front/starIcon.png">
                        </div>
                    </div>
                    <div class="appleBtn1 J_appleBtn">
                        <img src="${base}/common/images/front/appleBtn.png">
                    </div>
                    <div class="appleBtn2 J_appleBtn">
                        <img src="${base}/common/images/front/appleBtn.png">
                    </div>
                    <div class="appleBtn3 J_appleBtn">
                        <img src="${base}/common/images/front/appleBtn.png">
                    </div>
                    <div class="appleBtn4 J_appleBtn">
                        <img src="${base}/common/images/front/appleBtn.png">
                    </div>
                    <div class="appleBtn5 J_appleBtn">
                        <img src="${base}/common/images/front/appleBtn.png">
                    </div>
                    <div class="winTipText">
                        <img src="${base}/common/images/front/winTipText.png">
                    </div>
                </div>
            </div>

            <div class="searchBtn J_searchBtn">
                <img src="${base}/common/images/front/searchBtn.png">
            </div>
        </div>
    </div>
</div>

<div class="page codePage">
    <div class="screen">
        <div class="layer">
            <div class="codeBoxBg J_moveBox" onclick="_czc.push(['_trackEvent', '打开扫码']);">
                <img src="${base}/common/images/front/codePageBoxBg.png">
                <div class="moveBox">
                    <div class="moveLine"></div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="page prizePage">
    <div class="screen">
        <div class="layer">
            <div class="prizeTitleBox">
                <img src="${base}/common/images/front/prizeTitleBox.png">
                <div class="starIcon1">
                    <img src="${base}/common/images/front/starIcon.png">
                </div>
                <div class="starIcon2">
                    <img src="${base}/common/images/front/starIcon.png">
                </div>
                <div class="starIcon3">
                    <img src="${base}/common/images/front/starIcon.png">
                </div>
                <div class="starIcon4">
                    <img src="${base}/common/images/front/starIcon.png">
                </div>
                <div class="prizeName">
                    <img src="${base}/common/images/front/prizeName1.png">
                    <img src="${base}/common/images/front/prizeName2.png">
                    <img src="${base}/common/images/front/prizeName3.png">
                </div>
            </div>
            <div class="flowerIcon">
                <img src="${base}/common/images/front/flowerIcon.png">
            </div>
            <div class="prizePicBox">
                <img src="${base}/common/images/front/prizePicBox.png">
                <div class="prizePic">
                    <img src="">
                </div>
            </div>
            <div class="prize2Box">
                <img src="${base}/common/images/front/prize2.png">
                <span id="secPrizeCode">14546413213165465</span>
            </div>
            <div class="messageBox">
                <div class="messageBtn J_formBtn">
                    <img src="${base}/common/images/front/messageBtn.png">
                </div>
                <div class="messageTip">
                    <img src="${base}/common/images/front/messageTip.png">
                </div>
            </div>
            <div class="messageBox">
                <div class="messageTip J_messageTip">
                    <img src="${base}/common/images/front/firstPrizeTip.png">
                    <img src="${base}/common/images/front/prizeTip.png">
                </div>
            </div>
            <div class="messageBox">
                <div class="messageBtn J_getPrizeBtn">
                    <img src="${base}/common/images/front/prizeBtn.png">
                </div>
            </div>
            <div class="messageBox">
                <div class="messageBtn">
                    <img src="${base}/common/images/front/prizeOver.png">
                </div>
            </div>
        </div>
    </div>
</div>

<div class="page noPrizePage">
    <div class="screen">
        <div class="layer">
            <div class="noPrizeBox">
                <img src="${base}/common/images/front/noPrizeBoxBg.png">
                <div class="noPrizeText">
                    <img src="${base}/common/images/front/noPrizeText.png">
                </div>
                <div class="againBtn J_shareBtn">
                    <img src="${base}/common/images/front/shareBtn.png">
                </div>
                <div class="backBtn J_backBtn">
                    <img src="${base}/common/images/front/backBtn.png">
                </div>
            </div>
        </div>
    </div>
</div>

<div class="page formPage">
    <div class="screen">
        <div class="layer">
            <div class="formBox">
                <img src="${base}/common/images/front/formBoxBg.png">
                <ul class="boxContent">
                    <li class="clearfix">
                        <label>姓名:</label>
                        <input type="text" value="" name="name" id="name"/>
                    </li>
                    <li class="clearfix">
                        <label>手机:</label>
                        <input type="tel" value="" name="tel" id="tel"/>
                    </li>
                    <li class="clearfix">
                        <label>地址:</label>
                        <input type="text" value="" name="address" id="address"/>
                    </li>
                    <li class="clearfix J_cardId">
                        <label>身份证:</label>
                        <input type="text" value="" name="cardId" id="cardId" style="width: 70%;"/>
                    </li>
                    <li class="clearfix">
                        <label>宝贝性别:</label>
                        <input type="text" value="" name="babySex" id="babySex" style="width: 63%;"/>
                    </li>
                    <li class="clearfix">
                        <label>鞋码/脚长:</label>
                        <input type="text" value="" name="babySize" id="babySize" style="width: 60%;"/>
                    </li>
                </ul>
                <div class="submitBtn">
                    <img src="${base}/common/images/front/submitBtn.png">
                </div>
            </div>
        </div>
    </div>
</div>

<div class="page getPrizePage">
    <div class="screen">
        <div class="layer">
            <div class="getPrizeTitle">
                <img src="${base}/common/images/front/getPrizeTitle.png">
            </div>
            <input class="prizeCode" type="text" name="prizeCode" id="prizeCode">
            <div class="prizeFinish J_prizeFinish">
                <img src="${base}/common/images/front/prizeFinish.png">
            </div>
        </div>
    </div>
</div>

<div class="page rulePage">
    <div class="screen">
        <div class="layer">
            <div class="ruleBox">
                <img src="${base}/common/images/front/ruleBoxBg.png">
                <div class="gameRuleBox">
                    <div class="scrollBox" style="position: absolute;width: 83%;margin: auto;top: 7%;height: 89%;left: 0;right: 0;">
                        <div class="scrollContent">
                             <span style="font-size: 1.2rem;">
                                Clarks红苹果乐园</br>
                                活动规则说明</br>
                                1.【活动时间】2016年5月4日0时至5月31日24时</br>
                                2.【奖品设置】</br>
                                ①一等奖3名：迪士尼家庭游门票套票1组（2张成人+1张儿童，品牌指定日期，购买门票需要提供个人相关信息）</br>
                                ②二等奖5名：Clarks Kids指定童鞋1双（需要填写个人相关信息）</br>
                                ③三等奖100名：Clarks Kids五折优惠券1张（具体使用规则请以优惠券为准）</br>
                                ④四等奖500名：Clarks儿童时尚束口袋1个（需至Clarks Kids门店领取）</br>
                                ⑤五等奖500名：Clarks 时尚童袜1双（需至Clarks Kids门店领取）</br>
                                查询优惠券的使用门店请关注@ClarksKids童鞋世家，在菜单栏中选择“我的Clarks”，点击“领取优惠”，即可查询。</br>
                                3.【活动参与方式】</br>
                                ①关注@ClarksKids童鞋世家，在菜单栏中选择“乐玩宝贝”，点击“红苹果乐园”进入游戏。</br>
                                ②按顺序完成关卡，最终通关。</br>
                                第1关：点击从滑梯上掉落的鞋子，在30s的游戏时间中，得分超过800分则闯关成功，
                                 错过3双鞋子或得分低于800分，则游戏结束，继续闯关需重新开始游戏；</br>
                                第2关：点击进入并至线下门店扫描通关密语，完成最终闯关；</br>
                                完成第1关后方可进入第2关，否则无法进入第2关；</br>
                                ③通关后即可参与抽奖。每个ID只有一次中奖机会。</br>
                                ④中奖者填写相关信息，领取奖品。</br>
                                1.为确保本活动公平有序地进行，所有参加活动者都必须遵守活动主办方制定的活动规则及条件领取奖品。
                                 如有发现参加活动者在活动中违反活动规则或使用任何不正当的手段参加活动的，
                                 活动主办方有权在不需事先通知取消其参加活动及获奖的资格。</br>
                                2.参加活动者向活动主办方保证其提供给活动主办方的个人信息真实有效。
                                 如因提供信息错误而导致活动主办方无法和获奖者取得联系，
                                 活动主办方将视中奖者中奖资格无效。</br>
                                3.参加活动者向活动主办方保证其提供给活动主办方的所有信息将不会侵犯他人隐私权，
                                 名誉权或任何其他任何第三方的权利。若活动参加者所提供的信息有任何侵犯他人隐私权，
                                 名誉权或任何其他任何第三方权利的，或为虚假信息的，
                                 主办方将有权不需事先通知取消参加活动者之参加活动及获奖资格，
                                 并保留追究其承担由此引起的一切损失的法律权利。</br>
                                4.参加活动者向活动主办方保证其提供给活动主办方14岁以下儿童的个人信息的，
                                 其本人为该儿童之家长或法定监护人, 并同时已同意活动主办方使用其所提供的信息。</br>
                                5.参加活动者知晓并同意在本次活动中提供给活动主办方的所有与本次活动有关的信息
                                  将可被活动主办方用于本活动包括但不限于填写联络方式参与抽奖和后期寄送奖品等相关目的。
                                  活动主办方有权在上述许可范围内，
                                  无偿使用活动参加者所提供之信息包括但不限于肖像、姓名（包括但不限于真名、名微信ID等。</br>
                                6.活动主办方不对因网络传输原因而导致参加者提交的信息错误或延误承担任何责任。</br>
                                7.在法律允许的范围内，活动主办方将对以上活动规则及条件做出合理说明和解释，
                                  并保留对本次活动规则及条件进行修改的权利。如遇不可抗力，活动主办方有权相应修改、暂停或取消本次活动。</br>
                                8.活动不限参加者身份及所在地区，但是获奖者仅限中国大陆地区（不包括港澳台地区）在住居民。</br>
                                9.参加活动者上传或提供个人相关信息将视为其已充分理解并同意接受本活动规则及条件, 并对信息的提供给予相关的同意。</br>
                                10.参加活动者同意，因本次活动所引起的或与其相关的争议均应交由上海仲裁委员会按照其仲裁规则通过仲裁解决。
                            </span>
                        </div>
                    </div>
                </div>
                <div class="gameRuleBox">
                    <div class="gameRuleText">
                        <img src="${base}/common/images/front/gameRuleText.png">
                    </div>
                    <div class="gameStartBtn J_gameStartBtn">
                        <img src="${base}/common/images/front/gameStart.png">
                    </div>
                </div>
                <div class="gameRuleBox">
                    <div class="magicRuleText">
                        <img src="${base}/common/images/front/magicRuleText.png">
                    </div>
                </div>
            </div>

            <div class="closedBtn J_closedBtn">
                <img src="${base}/common/images/front/closedBtn.png">
            </div>
        </div>
    </div>
</div>

<div class="page sharePage">
    <div class="layer">
        <div class="sharePic J_sharePic">
            <img src="${base}/common/images/front/sharePic1.png">
        </div>
    </div>
</div>
</div>
<jsp:include page="include/indexjs.jsp" flush="true"/>

<script type="text/javascript">
var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");
document.write(unescape("%3Cspan style=display:none id='cnzz_stat_icon_1258879318'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol + "s95.cnzz.com/z_stat.php%3Fid%3D1258879318' type='text/javascript'%3E%3C/script%3E"));
</script>
</body>
</html>