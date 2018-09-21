
$(function() {
    var winSize = getWinSize(), winWidth = winSize[0] > 640 ? 640 : winSize[0], winHeight = winSize[1],
        scale = winWidth / 640, isAnimated = false, minHeight = 1008 * scale, animateTime = 800;

// 设置页面高度
    $('.page').height(winHeight).eq(0).css({display: 'block', zIndex: 1});

    $('.page').on('in', function() {
        isAnimated = true;
        var maxDaley = 0;
        $('.animated', this).each(function() {
            var animate = $(this).data('a'),
                daley = $(this).data('d'),
                self = this;
            daley = daley || 0;

            if (daley > maxDaley) {
                maxDaley = daley;
            }
            setTimeout(function() {
                $(self).css({opacity: 1}).addClass(animate);
                setTimeout(function() {
                    $(self).removeClass(animate);
                }, 1000);
            }, daley);
        });
        if ($('.animated', this).length) {
            setTimeout(function() {
                isAnimated = false;
            }, maxDaley + 700);
        } else {
            setTimeout(function() {
                isAnimated = false;
            }, 100);
        }
        $('.secondPage').show();
        var height = $('.changePics > img').height();
        $('.changePics').height(height);
        $('.roundBox').height($('.roundImg').width());
    }).on('out', function() {
        $('.animated', this).css({opacity: 0});
    }).on('readyRun', function() {
        $(this).trigger('out');
    }).trigger('readyRun');
    $('.wrap').loadImages({loadHtml: '<div class="layer loadLayer"><div class="loading"><div class="wText">loading</div><div class="wBall" id="wBall_1"><div class="wInnerBall"></div></div><div class="wBall" id="wBall_2"><div class="wInnerBall"></div></div><div class="wBall" id="wBall_3"><div class="wInnerBall"></div></div><div class="wBall" id="wBall_4"><div class="wInnerBall"></div></div><div class="wBall" id="wBall_5"><div class="wInnerBall"></div></div></div></div>',
        callback: function() {
            $('.loadLayer', this).hide();
            $('.firstPg').trigger('in');
        }
    });
    $('.BigPic').height($('.BigPic').width()*1.5);
    $('.firstPg').tap(function(){
        if(!isAnimated){
            isAnimated = true;
            $('.secondPage').css({opacity:0,zIndex:2}).animate({opacity:1},700,function(){
                $('.firstPg').css({display:'none',zIndex:1});
                isAnimated = false;
            })
        }
    });
    //无缝轮播
    var index = 0;
    var length = $('.pic').length;
    var isMove = false;
    var move =  setInterval(function(){
           if(!isMove){
               isMove = true;
               if (index + 1 > length) {
                   index = 0;
               }
               $('.point').css({background:'#898989'});
               $('.point').eq((index+1)%length).css({background:'#231815'});
               $('.pic').eq(index).css({left:'0'}).animate({left:'-100%'},700);
               $('.pic').eq((index+1)%length).css({left:'100%'}).animate({left:'0'},700,function(){
                   isMove = false;
               });
               index++;
           }
    },2100);
    $('.pic').on('swipeLeft',function(){
           if(!isMove){
               isMove = true;
               clearInterval(move);
               if (index + 1 > length) {
                   index = 0;
               }
               $('.point').css({background:'#898989'});
               $('.point').eq((index+1)%length).css({background:'#231815'});
               $('.pic').eq(index).css({left:'0'}).animate({left:'-100%'},700);
               $('.pic').eq((index+1)%length).css({left:'100%'}).animate({left:'0'},700,function(){
                   moveAgainLeft();
                   isMove = false;
               });
               index++;
           }
    }).on('swipeRight', function(){
        if(!isMove){
            isMove = true;
            clearInterval(move);
            index--;
            if(index < 0){
                index = length - 1
            }
            $('.point').css({background:'#898989'});
            $('.point').eq(index).css({background:'#231815'});
            $('.pic').eq((index+1)%length).css({left:'0'}).animate({left:'100%'},700);
            $('.pic').eq(index).css({left:'-100%'}).animate({left:'0'},700,function(){
                moveAgainLeft();
                isMove = false;
            });
        }
    });
    function moveAgainLeft(){
        move =  setInterval(function(){
            if(!isMove){
                isMove = true;
                if (index + 1 > length) {
                    index = 0;
                }
                $('.point').css({background:'#898989'});
                $('.point').eq((index+1)%length).css({background:'#231815'});
                $('.pic').eq(index).css({left:'0'}).animate({left:'-100%'},700);
                $('.pic').eq((index+1)%length).css({left:'100%'}).animate({left:'0'},700,function(){
                    isMove = false;
                });
                index++;
            }
        },2100);
    }
    $('.J_make').tap(function(){
        if(!isAnimated){
            isAnimated = true;
            $('.thirdPage').css({display:'block',zIndex:3,opacity:0}).animate({opacity:1},700,function(){
                $('.thirdPage').css({zIndex:2});
                $('.secondPage').css({display:'none',zIndex:1});
                isAnimated = false;
            })
        }
    });
    $('.J_get').tap(function(){
        if(!isAnimated){
            isAnimated = true;
                $('.inputKeyPage').css({display:'block',zIndex:3,opacity:0}).animate({opacity:1},700,function(){
                    $('.inputKeyPage').css({zIndex:2});
                    $('.secondPage').css({display:'none',zIndex:1});
                    isAnimated = false;
                });
        }
    });


    function centerImg(imgWidth, imgHeight, boxWidth, boxHeight) {
        if (imgHeight / imgWidth > boxHeight / boxWidth) {
            var width = boxWidth;
            var height = Math.floor(boxWidth * imgHeight / imgWidth);
            return {w: width, h: height, x: 0, y: (boxHeight - height) / 2};
        } else {
            var width = Math.floor(boxHeight * imgWidth / imgHeight);;
            var height = boxHeight;
            return {w: width, h: height, x: (boxWidth - width) / 2, y: 0};
        }
    }
    

    var signUping = false;
    var localIds = [];
    var data = {localIds:localIds[0]};

      // var imgIndex = 0;
      // uploadVoid(soundId);
     //  upload(localIds[imgIndex]);
      // signUping = true;
  var downloadAudio = null;
    //提交提取码 获取明信片
    $('.J_getBtn').tap(function(){
        if(!isAnimated){
            isAnimated = true;
            var keyInput = $('#KeyInput').val();
            if(keyInput == ''){
                alert('请输入提取码');
                isAnimated = false;
                return;
            }
           // var c = setTimeout(function() {
           //     alert('正在提交....');
           //     isAnimated = false;
           // }, 3000);
            getPostcard(keyInput);
        }
    }).on('tap', function() {
        $(this).trigger('mouseDown');
    });

    //点击制作 视频 明信片  
    $('.J_vedioBtn').tap(function(){
        if(!isAnimated){
            isAnimated = true;
            $("#postcardType").val(1);
            $('.forthPage').css({display:'block',zIndex:3,opacity:0}).animate({opacity:1},700,function(){
                $('.thirdPage').css({display:'none',zIndex:1});
                $('.tenthPage').css({zIndex:2});
                isAnimated = false;
            });
            $('.containBox').height($('.containBox').width());
        }
    });
    //点击制作 照片 明信片  
    $('.J_photoBtn').tap(function(){
        if(!isAnimated){
            isAnimated = true;
            $("#postcardType").val(2);
            $('.sixthPage').css({display:'block',zIndex:3,opacity:0}).animate({opacity:1},700,function(){
                $('.thirdPage').css({display:'none',zIndex:1});
                $('.sixthPage').css({zIndex:2});
                isAnimated = false;
            });
            $('.J_containBox').height($('.J_containBox').width());
        }
    });
     //照片明信片  选择照片 并上传
    $('.J_uploadPic').tap(function(){
        if (!isAnimated) {
            isAnimated = true;
            setTimeout(function () {
                isAnimated = false;
            }, 100);
        } else {
            return;
        }
        var count = 1;
        var self = this;
        wx.chooseImage({
            count: count,
            sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
            success: function (res) {
                var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
                $(".show_baseImg").attr("src",localIds);
                 if (localIds.indexOf("wxlocalresource") != -1) {
                	 localIds = localIds.replace("wxlocalresource", "wxLocalResource");
                 } 
                 uploadImage(localIds.toString());
            }
        });
    });
    //照片明信片  照片上传完成进入下一页（选择音频与文字）
    $(".finish2").tap(function(){
    	if(!isAnimated){
    		isAnimated = true;
            $('.sixthPage2').css({display:'block',zIndex:3,opacity:0}).animate({opacity:1},700,function(){
                $('.sixthPage').css({display:'none',zIndex:1});
                $('.sixthPage2').css({zIndex:2});
                isAnimated = false;
            });
            $('.sixthPage2 .containBox').height($('.sixthPage2 .containBox').width());
    	}
    })
    //照片明信片  照片上传完成，选择进入语音或者文字
    $('.text').tap(function(){
        var index = $('.text').index(this);
        if( index == 0){
            if(!isAnimated){
                isAnimated = true;
                $('.sixthPage2 .fifthPageBtns').css({ marginTop: '37%',display:'block', opacity: 1}).animate({opacity:0},700,function(){
                    $('.sixthPage2 .fifthPageBtns').animate({marginTop:'-10%'},700,function(){
                        $('.sixthPage2 .fifthPageBtns').hide();
                        isAnimated = false;
                    });
                });
                $('.press').css({marginTop:'25%',display:'block',opacity:1});
            }
        }else if(index == 1){
            if(!isAnimated){
                isAnimated = true;
                $('.seventhPage').css({display:'block',zIndex:3,opacity:0}).animate({opacity:1},700,function(){
                    $('.sixthPage2').css({display:'none',zIndex:1});
                    $('.seventhPage').css({zIndex:2});
                    isAnimated = false;
                });
                $('.seventhPage .containBox').height($('.seventhPage .containBox').width());
            }
        }
    });
    //录音
    var soundId = [];
    var startRecordTime = 0;
    var stopRecordTime = 0;
    //照片明信片 轻按 录音按钮与松开  
    $('.J_press').on('touchstart',function(e){
        e.preventDefault();
        $('.micBox').show();
        wx.startRecord();
        startRecordTime = new Date().getTime();
        wx.onVoiceRecordEnd({
            // 录音时间超过一分钟没有停止的时候会执行 complete 回调
            complete: function (res) {
                var localId = res.localId;
                soundId.push(localId);
            }
        });
    }).on('touchend',function(e){
        e.preventDefault();
        stopRecordTime = new Date().getTime();
        var voiceTime = (stopRecordTime - startRecordTime)/1000;
        if(voiceTime > 15){
        	alert("请把录音时长保持在15s内");
        	$('.micBox').hide();
        	return ;
        }else{
        	$('.micBox').hide();
        	$('.timeBar').css({display:'block',opacity:0}).animate({opacity:1},700);
        	$('.press').css({opacity:1}).animate({opacity:0},700,function(){
        		$('.press').hide();
        		$('.againBox').css({display:'block',opacity:0}).animate({opacity:1},700);
        	});
        	wx.stopRecord({
        		success: function (res) {
        			var localId = res.localId;
        			soundId.push(localId);
        		}
        	});
        	$('.time').html(Math.ceil(voiceTime) + "'");
        }
    });
    //照片明信片  录音后点击状态条 点击播放录音
    $(".J_playBtn").tap(function(){
    	var localId = soundId[0];
    	alert(localId);
    	if(localId == null || localId == "" || localId === undefined){
    		return ;
    	}
    	wx.playVoice({
		    localId: soundId[0].toString()// 需要播放的音频的本地ID，由stopRecord接口获得
		});
    	setTimeout(function(){isAnimated =false;},0)
    })
        
    //重录 音频
    $('.J_againBtn').tap(function(){
        if (!isAnimated){
            isAnimated = true;
            soundId.splice(0,soundId.length);
            $('.againBox').css({opacity:1}).animate({opacity:0},700,function(){
                $('.againBox').hide();
                $('.press').css({opacity:0,display:'block'}).animate({opacity:1},700,function(){
                    isAnimated =false;
                });
            });
        }
    });

    //照片明信片 录音完成（上传音频） 点击下一页
    $('.J_arrow3').tap(function(){
        if(!isAnimated){
            isAnimated = true;
            var data = soundId[0];
            if(data != null && data != ""){
            	uploadVoice(data.toString());
            }
            $('.seventhPage').css({display:'block',zIndex:3,opacity:0}).animate({opacity:1},700,function(){
            	$('.sixthPage2').css({display:'none',zIndex:1});
            	$('.seventhPage').css({zIndex:2});
            	isAnimated = false;
            });
            $('.seventhPage .containBox').height($('.seventhPage .containBox').width());
        }
    });
    //照片明信片 输完文字 最终finish按钮（保存照片明信片）
    $('.J_finish3').tap(function(){
        if(!isAnimated){
            isAnimated = true;
            var textarea = $('.seventhPage .textarea').val();
            if(textarea == null){
            	textarea = "";
            }
            $("#remark").val(textarea);
            var key = doSave();
            returnEndPage(this,key);
            setTimeout(function(){isAnimated = false;},100);
        }
    });
    //点击制作 音频 明信片  
    $('.J_voiceBtn').tap(function(){
        if(!isAnimated){
            isAnimated = true;
            $("#postcardType").val(3);
            $('.eighthPage').css({display:'block',zIndex:3,opacity:0}).animate({opacity:1},700,function(){
                $('.thirdPage').css({display:'none',zIndex:1});
                $('.eighthPage').css({zIndex:2});
                isAnimated = false;
            });
            $('.seventhPage .containBox').height($('.seventhPage .containBox').width());
        }
    });
    //音频明信片  点击开始录音
    $('.J_press2').on('touchstart',function(e){
        e.preventDefault();
        $('.micBox').show();
        wx.startRecord();
        startRecordTime = new Date().getTime();
        wx.onVoiceRecordEnd({
            // 录音时间超过一分钟没有停止的时候会执行 complete 回调
            complete: function (res) {
                var localId = res.localId;
                soundId.push(localId);
            }
        });
    }).on('touchend',function(e){
        e.preventDefault();
        stopRecordTime = new Date().getTime();
        var voiceTime = (stopRecordTime - startRecordTime)/1000;
        if(voiceTime > 15){
        	alert("请把录音时长保持在15s内");
        	$('.micBox').hide();
        	return ;
        }else{
	        $('.micBox').hide();
	        $('.timeBar').css({display:'block',opacity:0}).animate({opacity:1},700);
	        $('.ninthPage').css({display:'block',zIndex:3,opacity:0}).animate({opacity:1},700,function(){
	            $('.eighthPage').css({display:'none',zIndex:1});
	            $('.ninthPage').css({zIndex:2});
	        });
	        wx.stopRecord({
				success: function (res) {
					var localId = res.localId;
					soundId.push(localId);
				}
	        });
	        $('.time').html(Math.ceil(voiceTime) + "'");
        }
    });
    //音频明信片   点击finish 上传音频并保存明信片 跳转至 结果页
    $('.J_finishS').tap(function(){
        if(!isAnimated){
            isAnimated = true;
            var data = soundId[0];
           // alert("null:"+(data!=null)+",'':"+(data!="")+",undefined:"+(data===undefined));
            if(data != null && data != ""){
            	uploadVoice(data.toString());
            }else{
            	alert("您还没有录音！");
            	return;
            }
            setTimeout(function(){
            	var key = doSave();
            	returnEndPage(this,key);
            	isAnimated = false;
            },0)
        }
    });
    //点击制作 文字 明信片  
    $('.J_wordBtn').tap(function(){
        if(!isAnimated){
            isAnimated = true;
            $("#postcardType").val(4);
            $('.tenthPage').css({display:'block',opacity:0,zIndex:3}).animate({opacity:1},700,function(){
                $('.thirdPage').css({display:'none',zIndex:1});
                $('.tenthPage').css({zIndex:2});
                isAnimated = false;
            })
        }
    });
    
   
    
    $('.J_finish').tap(function(){
        if(!isAnimated){
            isAnimated = true;
            //var uploadVideo = ;//从后端获取的视频路径
            var video = $('.file').val();
            if(video == ''){
                alert('请先上传视频哦');
                isAnimated = false;
                return;
            }
            var data = {video:video};


            $.ajax({
                    type: 'post',
                    url: "",
                    data: data,
                    dataType: 'json',
                    success: function (data) {
                        signUping = false;
                        if (data.code == 0) {
                            alert('上传成功！');
                            $('.uploadVideo').attr(src,uploadVideo);
                            $('.fifthPage').css({display:'block',zIndex:3,opacity:0}).animate({opacity:1},700,function(){
                                $('.forthPage').css({display:'none',zIndex:1});
                                $('.fifthPage').css({zIndex:2});
                                isAnimated = false;
                            });
                        }
                    }
            });
        }
    });

    //（照片明信片  视频明信片）点击文字 弹出输入框
    $('.J_inputText').tap(function(){
        if(!isAnimated){
            isAnimated = true;
            $('.bottomLayer').animate({bottom:'0'},700,function(){
                isAnimated = false;
            });
        }
    });
    //点击文本框  隐藏光标
    $('.textarea').tap(function(){
        $('.lineBox').hide();
    });
    
    var  type = '视频';
    $('.J_OK').tap(function(){
        if(!isAnimated){
            isAnimated = true;
            $('.bottomLayer').animate({bottom:'-50%'},700,function(){
                $('.lineBox').show();
                isAnimated = false;
            });
        }
    });

    $('.J_arrowRight').tap(function(){
        if(!isAnimated){
            isAnimated = true;
            var that = this;
            var textArea =  $('.textarea').val();
            if(textArea.length > 20){
                alert('最多只能输入20个字哦~');
                isAnimated = false;
                return ;
            }else if(textArea == ''){
                $(that).css({opacity:1}).animate({opacity:0},700,function(){
                    $(that).css({display:'none'});
                    $('.J_finish2').show();
                    isAnimated = false;
                });
            }else {
                type = '编辑';
                var data = {textArea:textArea};
                $.ajax({
                    type: 'post',
                    url: "",
                    data: data,
                    dataType: 'json',
                    success: function (data) {
                        signUping = false;
                        if (data.code == 0) {
                            $('.textBoxContainer').text(textArea);
                            $('.textBox').animate({opacity:1},700,function(){
                                $(that).css({display:'none'});
                                $('.J_finish2').show();
                                isAnimated = false;
                            });

                        }
                    }
                });


            }
        }
    });
    



    $('.finish1').tap(function(){
        if(!isAnimated){
            isAnimated = true;
            var key = 123;//获取提取码，从后台获取；
            var parent = $(this).parent();
            while (!parent.hasClass('page')){
                parent = parent.parent();
            }
            var page = parent;
            $('.loadPage').css({display:'block',zIndex:3,opacity:0}).animate({opacity:1},700,function(){
                page.css({display:'none',zIndex:1});
                $('.loadPage').css({zIndex:2});
                setTimeout(function(){
                    $('.keyBox').html(key);
                    $('.getKeyPage').css({display:'block',zIndex:3,opacity:0}).animate({opacity:1},700,function(){
                        $('.loadPage').css({display:'none',zIndex:1});
                        $('.getKeyPage').css({zIndex:2});
                        isAnimated = false;
                    })
                },3000);
            });
        }
    });



    $('.J_finish2').tap(function(){
        if(!isAnimated){
            isAnimated = true;
            var textArea =  $('.fifthPage .textarea').val();
            console.log(textArea)
            var data = {textArea:textArea};
            $.ajax({
                type: 'post',
                url: "",
                data: data,
                dataType: 'json',
                success: function (data) {
                    signUping = false;
                    if (data.code == 0) {
                        alert('上传成功！');
                       returnEndPage(this);
                    }
                }
            });

        }
    });

    $('.J_arrowLeft').tap(function(){
        if(!isAnimated){
            isAnimated = true;
            $('.type').text(type);
            $('.pop').show();
            setTimeout(function(){
                isAnimated = false;
            },200)
        }
    });

    $('.cancel').tap(function(){
        if(!isAnimated){
            isAnimated = true;
            $('.pop').hide();
            setTimeout(function(){
                isAnimated = false;
            },200)
        }
    });

    $('.yes').tap(function(){
        if(!isAnimated){
            isAnimated = true;
            $('.fifthPage .textBoxContainer').html('');
            $('.fifthPage .textBox').css({opacity:0});
            $('.fifthPage .fifthPageBtns > div').css({display:'inlineBlock',opacity:1});
            $('.fifthPage .J_finish2').css({opacity:1});
            $('.forthPage').css({display:'block',zIndex:3,opacity:0}).animate({opacity:1},700,function(){
                $('.pop').hide();
                $('.fifthPage').css({display:'none',zIndex:1});
                $('.forthPage').css({zIndex:2});
                isAnimated = false;
            })
        }
    });

    $('.J_arrowLeft2').tap(function(){
        if(!isAnimated){
            isAnimated = true;
            $('.timeBar').css({
                display: 'none',
                width:'65%'
            });
            $('.againBox').css({
                width: '75.59%',
                marginTop: '29%',
                display: 'none'
            });
            $('.press').css({marginTop:'25%',display:'block'});
            $('.sixthPage2 .fifthPageBtns').css({
                marginTop: '37%',
                display:'block',
                opacity: 1
            });
            $('.sixthPage2').css({display:'block',zIndex:3,opacity:0}).animate({opacity:1},700,function(){
                $('.seventhPage').css({display:'none',zIndex:1});
                $('.sixthPage2').css({zIndex:2});
                isAnimated = false;
            })
        }
    });
    
   


    

    $('.J_arrowRight2').tap(function(){
        if(!isAnimated){
            isAnimated = true;
            var that = this;
            type = '编辑';
            var textArea =  $('.seventhPage .textarea').val();
            if(textArea.length > 20){
                alert('最多只能输入20个字哦~');
                isAnimated = false;
                return ;
            }else {
                $(that).css({opacity:1}).animate({opacity:0},700,function(){
                    $(that).hide();
                    $('.seventhPage .finish1').show();
                    isAnimated = false;
                });
                textArea =  $('.seventhPage .textarea').val();
                $('.seventhPage .textBoxContainer').text(textArea);
                $('.textBox').animate({opacity:1},700,function(){
                    $(that).hide();
                    $('.seventhPage .finish1').show();
                    isAnimated = false;
                });
            }
        }
    });
    
    
    
    $('.J_no').tap(function(){
        alert('该功能还在开发中,敬请期待');
    });

    $('.J_timeBar').tap(function(){
        if(!isAnimated){
            isAnimated = true;
            var src = soundId[0];
            var sound =  new Audio();
            sound.src = src;
            sound.loop = false;
            sound.play();
        }
    });

    $('.J_againBtn2').tap(function(){
        if(!isAnimated){
            isAnimated = true;
            soundId.splice(0,soundId.length);
           $('.eighthPage').css({display:'block',opacity:0,zIndex:3}).animate({opacity:0},700,function(){
               $('.ninthPage').css({display:'none',zIndex:1});
               $('.eighthPage').css({zIndex:2});
               isAnimated = false;
           });
        }
    });

    


    $('.J_finishW').tap(function(){
        var textArea = $('.tenthPage .textarea').val();
        var data = {text:textArea};
        if(!isAnimated){
            isAnimated = true;
            if(textArea.length > 20){
                alert('最多只能输入20个字哦~');
                isAnimated = false;
                return ;
            }else {
                $.ajax({
                    type: 'post',
                    url: "",
                    data: data,
                    dataType: 'json',
                    success: function (data) {
                        signUping = false;
                        if (data.code == 0) {
                            alert('上传成功！');
                            isAnimated = false;
                        }
                    }
                });
            }

        }
    });

    $('.J_OK2').tap(function(){
        if(!isAnimated){
            isAnimated = true;
            var textArea = $('.tenthPage .textarea').val();
            $('.bottomLayer').animate({bottom:'-50%'},700,function(){
                $('.lineBox').show();
                isAnimated = false;
            });
            $('.tenthPage .textBoxContainer').html(textArea);
            $('.tenthPage .textBox').css({opacity:0}).animate({opacity:1},700);
        }
    });

    $('.J_homePageBtn').tap(function(){
        if(!isAnimated){
            isAnimated = true;
            $('.secondPage').css({display:'block',opacity:0,zIndex:3}).animate({opacity:1},700,function(){
                $('.inputKeyPage').css({display:'none',zIndex:1});
                $('.secondPage').css({zIndex:2});
                isAnimated = false;
            });
        }
    });

    $('.resultPageArrow').tap(function(){
        if(!isAnimated){
                isAnimated = true;
            var parent = $(this).parent();
            while (!parent.hasClass('page')){
                parent = parent.parent();
            }
            var page = parent;
            $('.secondPage').css({display:'block',zIndex:3,opacity:0}).animate({opacity:1},700,function(){
                page.css({display:'none',zIndex:1});
                $('.secondPage').css({zIndex:2});
                isAnimated = false;
            });
        }
    });

});

