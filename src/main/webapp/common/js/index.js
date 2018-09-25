document.addEventListener('touchmove', function(e){e.preventDefault();}, false);

//打开首页需要判断是否完成关卡1，是否输入咒语（即点亮苹果树）
var firstGameOn = "${gameStatus.firstPass}";    //用户是否通关第一个关卡(1已通关，0未通关)
var getMagic = "${gameStatus.isScan}";       //是否输入过咒语(1已输入，0未输入)
var shareTitle = '${wxConfig.shareTitle}';
var gameSound = document.querySelector('#myaudio');
$(function() {
    var winSize = getWinSize(), winWidth = winSize[0] > 640 ? 640 : winSize[0], winHeight = winSize[1],
        scale = winWidth / 640, isAnimated = false, minHeight = 1008 * scale, animateTime = 800;
    if (winHeight < 1008 * scale) {
        var scale = winHeight / 1008;
        winWidth = parseInt(640 * scale);
    }

    // 设置页面高度
    $('.page').height(winHeight).eq(0).show();

    $('.screen').each(function() {
        $(this).width(winWidth);
    });

    $('.page').on('in', function() {
        isAnimated = true;
        var maxDaley = 0;
        $('.animated', this).each(function() {
            var animate = $(this).data('a'),
                daley = $(this).data('d'),
                btnAnimate = $(this).data('ea'),
                self = this;
                daley = daley || 0;
            if (daley > maxDaley) {
                maxDaley = daley;
            }

            setTimeout(function() {
                $(self).css({opacity: 1}).addClass(animate);
                setTimeout(function() {
                    $(self).removeClass(animate);
                    $(self).css({opacity: 1}).addClass(btnAnimate);
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

    }).on('out', function() {
        $('.animated', this).css({opacity: 0});
        $('.readyWord').removeClass('hidden');
    }).on('readyRun', function() {
        $(this).trigger('out');
    }).trigger('readyRun');

    $('.wrap').loadImages({
        callback: function() {
            setTimeout(function(){
                $('.loadLayer').hide();
            },200);

            if(firstGameOn == 1) {
                $('.shoesIcon img').hide().eq(1).show();
                if(getMagic == 1) {
                    $('.indexTrees img').hide().eq(1).show();
                }else {
                    $('.indexTrees img').hide().eq(0).show();
                }
            }else {
                $('.shoesIcon img').hide().eq(0).show();
                $('.indexTrees img').hide().eq(0).show();
            }

            $('.startPage').trigger('in');
        }
    });

    //开始按钮
    $('.startBtn').tap(function() {
        if (!isAnimated) {
            isAnimated = true;
            //获取用户是否完成关卡1
            $.ajax({
                type: 'post',
                url: "${base}/user/check_game_status.cc",
                dataType: 'json',
                success: function(data) {
                    if(data.status == 1){
                        data = data.data;
                        $('#J_number').html(data.firstBest);
                        if(data.firstPass == 1) {
                            $('.J_lockIcon').hide();
                            $('.navShoesIcon img').hide().eq(1).show();
                            if(data.isScan == 1) {
                                $('.navTrees img').hide().eq(1).show();
                            }else {
                                $('.navTrees img').hide().eq(0).show();
                            }
                        }else {
                            $('.J_lockIcon').show();
                            $('.navShoesIcon img').hide().eq(0).show();
                            $('.navTrees img').hide().eq(0).show();
                        }
                        $('.navPage').css({opacity:0,display:'block',zIndex: 2}).animate({opacity:1},500,function(){
                            $('.startPage').css({display:'none',zIndex:0});
                            $(this).css({zIndex:1}).trigger('in');
                        });
                    }else{
                        alert(data.info);
                        isAnimated = false;
                        return;
                    }
                },error:function(request){
                    alert("获取用户闯关情况出错了！");
                    isAnimated = false;
                    return ;
                }
            });

        }
    });

    //点击第一关
    $('.J_navBtn1').tap(function(){
        if(!isAnimated) {
            isAnimated = true;
            $('.gameRuleBox').hide().eq(1).show();
            $('.J_closedBtn').hide();
            $('.rulePage').css({display:'block',opacity: 0,zIndex:2}).animate({opacity:1},500,function(){
                isAnimated = false;
            });
        }
    });

    //开始第一关游戏
    $('.J_gameStartBtn').tap(function(){
        if(!isAnimated) {
            isAnimated = true;
            $.ajax({
            	url:"${base}/user/record_first.cc",
            	type:"post"
            })
            $('.heartIcon img').css({opacity:1});
            $('.downCount').html('30s');
            $('.gamePage').trigger('readyRun');
            $('.gamePage').css({opacity:0,display:'block',zIndex:5}).animate({opacity:1},500,function(){
                $('.rulePage').css({opacity:0,display:'none',zIndex:0});
                $('.navPage').css({opacity:0,display:'none',zIndex:0});
                $('.gameRuleBox').hide();
                $(this).css({zIndex:1}).trigger('in');
                setTimeout(function(){
                    game.play();
                },5000);
            });
        }
    });

    //重新开始第一关游戏
    $('.J_againBtn').tap(function(){
        if(!isAnimated) {
            isAnimated = true;
            $('.heartIcon img').css({opacity:1});
            $('.downCount').html('30s');
            $('.gamePage').trigger('readyRun');
            $('.resultPage').animate({opacity:0},500,function(){
                $(this).css({opacity:0,display:'none',zIndex:0});
                $('.gamePage').trigger('in');
                setTimeout(function(){
                    game.play();
                },5000);
            });
        }
    });

    //返回首页
    $('.J_backBtn').tap(function(){
        if(!isAnimated) {
            isAnimated = true;
            var parent = $(this).parent();
            while(!parent.hasClass('page')) {
                parent = parent.parent();
            }
            //重新获取用户完成状态
            $.ajax({
                type: 'post',
                url: "${base}/user/check_game_status.cc",
                dataType: 'json',
                success: function(data) {
                    if(data.status == 1){
                        data = data.data;
                        //第一步判断是否通关第一关
                        if(data.firstPass == 0) {
                            $('.shoesIcon img').hide().eq(0).show();
                            $('.indexTrees img').hide().eq(0).show();
                        }else {
                            $('.shoesIcon img').hide().eq(1).show();
                            //第一步判断是否输入咒语
                            if(data.isScan == 0) {
                                $('.indexTrees img').hide().eq(0).show();
                            }else {
                                $('.indexTrees img').hide().eq(1).show();
                            }
                        }

                        $('.startPage').css({opacity:0,display:'block',zIndex: 9}).animate({opacity:1},500,function(){
                            $('.gamePage').css({display:'none',zIndex:0});
                            $('.magicPage').css({opacity:0,display:'none',zIndex: 0});
                            $('.navPage').css({display:'none',zIndex:0});
                            parent.css({display:'none',zIndex:0});
                            $(this).css({zIndex:1}).trigger('in');
                        });
                    }else{
                        alert(data.info);
                        isAnimated = false;
                    }
                },error:function(request){
                    alert("获取游戏数据失败！");
                    isAnimated = false;
                }
            });
        }
    });

    //点击第二关
    $('.J_navBtn2').tap(function(){
        if(!isAnimated) {
            isAnimated = true;
            $.ajax({
                type: 'post',
                url: "${base}/user/check_game_status.cc",
                dataType: 'json',
                success: function(data) {
                    if(data.status == 1){
                        data = data.data;
                        //第一步判断是否通关第一关
                        _czc.push(['_trackEvent', '进入抽奖页面']);
                        if(data.firstPass == 0) {
                            alert('亲，请先完成第一关！');
                            isAnimated = false;
                        }else {
                            //判断是否已抽奖
                            if(data.isDraw == 0) {
                                //判断是否已扫码
                                if(data.isScan == 0) {
                                    $('.appleBox').hide();
                                    $('.get-magicBox').show();
                                }else {
                                    $('.appleBox').show();
                                    $('.get-magicBox').hide();
                                }
                                $('.magicPage').css({opacity:0,display:'block',zIndex: 2}).animate({opacity:1},500,function(){
                                    $('.resultPage').css({display:'none',zIndex: 0});
                                    setTimeout(function(){
                                        $('.gameRuleBox').hide().eq(2).show();
                                        $('.J_closedBtn').show();
                                        /* $('.rulePage').css({display:'block',opacity: 0,zIndex:5}).animate({opacity:1},500,function(){
                                            isAnimated = false;
                                        }); */
                                    },500);
                                });
                            }else {
                                var isGet = 0, isFillMsg = 0;//填写信息  0：未    1：已
                                //是否领取奖品 0：未   1：已
                                if(data.isGet == 1){
                                    isGet = 1;
                                }
                                if(data.isFillMsg == 1){
                                    isFillMsg = 1;
                                }

                                $.ajax({
                                    url:"${base}/user/get_my_prize.cc",
                                    type:"post",
                                    dataType:"json",
                                    success:function(data){
                                        if(data.status == 1){
                                            data =data.data;
                                            //判断中什么奖
                                            switch (data.prizeLevel) {
                                                case 1:
                                                    shareTitle = "嘿！我在Clarks Kids红苹果乐园抽中了迪士尼门票大奖，你也参加呀！";
                                                    $('.J_sharePic img').attr('src','${base}/common/images/front/sharePic4.png');
                                                    $('.prizePic img').attr('src',data.prizePic).show();
                                                    $('.prizeName img').hide().eq(0).show();
                                                    if(isFillMsg == 1) {
                                                        $('.messageBox', '.prizePage').hide();
                                                        $('.messageBox', '.prizePage').eq(1).show();
                                                        $('.J_messageTip img').hide().eq(0).show();
                                                    }else {
                                                        $('.boxContent li').eq(4).hide();
                                                        $('.boxContent li').eq(5).hide();
                                                        $('.messageBox', '.prizePage').hide();
                                                        $('.messageBox', '.prizePage').eq(0).show();
                                                    }
                                                    break;
                                                case 2:
                                                    shareTitle = "嘿！我在Clarks Kids红苹果乐园抽中了一双童鞋，你也参加呀！";
                                                    $('.J_sharePic img').attr('src','${base}/common/images/front/sharePic3.png');
                                                    $('.prizePic img').attr('src',data.prizePic).show();
                                                    $('.prizeName img').hide().eq(1).show();
                                                    if(isFillMsg == 1) {
                                                        $('.messageBox', '.prizePage').hide();
                                                        $('.messageBox', '.prizePage').eq(1).show();
                                                        $('.J_messageTip img').hide().eq(1).show();
                                                    }else {
                                                        $('.boxContent li').eq(3).hide();
                                                        $('.messageBox', '.prizePage').hide();
                                                        $('.messageBox', '.prizePage').eq(0).show();
                                                    }
                                                    break;
                                                case 3:
                                                    shareTitle = "嘿！我在Clarks Kids红苹果乐园抽中了六一好礼，你也参加呀！";
                                                    $('.J_sharePic img').attr('src','${base}/common/images/front/sharePic2.png');
                                                    $('.prizePicBox').hide();
                                                    $('.prizeName img').hide().eq(2).show();
                                                    $('.prize2Box').show();
                                                    $('.messageBox', '.prizePage').hide();
                                                    $('#secPrizeCode').html("123456"); //填入优惠券识别码
                                                    break;
                                                case 4:
                                                    shareTitle = "嘿！我在Clarks Kids红苹果乐园抽中了六一好礼，你也参加呀！";
                                                    $('.J_sharePic img').attr('src','${base}/common/images/front/sharePic2.png');
                                                    $('.prizePic img').attr('src',data.prizePic).show();
                                                    $('.prizeName img').hide().eq(2).show();
                                                    $('.messageBox', '.prizePage').eq(2).show();
                                                    if(isGet == 1) {
                                                        $('.messageBox', '.prizePage').hide();
                                                        $('.messageBox', '.prizePage').eq(3).show();
                                                    }else {
                                                        $('.messageBox', '.prizePage').hide();
                                                        $('.messageBox', '.prizePage').eq(2).show();
                                                    }
                                                    break;
                                                case 5:
                                                    shareTitle = "嘿！我在Clarks Kids红苹果乐园抽中了六一好礼，你也参加呀！";
                                                    $('.J_sharePic img').attr('src','${base}/common/images/front/sharePic2.png');
                                                    $('.prizePic img').attr('src',data.prizePic).show();
                                                    $('.prizeName img').hide().eq(2).show();
                                                    $('.messageBox', '.prizePage').eq(2).show();
                                                    if(isGet == 1) {
                                                        $('.messageBox', '.prizePage').hide();
                                                        $('.messageBox', '.prizePage').eq(3).show();
                                                    }else {
                                                        $('.messageBox', '.prizePage').hide();
                                                        $('.messageBox', '.prizePage').eq(2).show();
                                                    }
                                                    break;
                                            }
                                            $('.prizePage').css({display: 'block', zIndex: 5,opacity:0}).animate({opacity:1},500,function(){
                                                isAnimated = false;
                                            });
                                            loadShare();
                                        }else{
                                            $('.noPrizePage').css({display: 'block', zIndex: 5,opacity:0}).animate({opacity:1},500,function(){
                                                $('.resultPage').css({display:'none',zIndex: 0});
                                                isAnimated = false;
                                            });
                                        }
                                    },error:function(request){
                                        alert("获取抽奖结果出错了~");
                                        isAnimated = false;
                                        return;
                                    }
                                });
                            }
                        }
                    }else{
                        alert(data.info);
                        isAnimated = false;
                        return;
                    }
                },error:function(request){
                    isAnimated = false;
                    alert("出错咯~");
                    return;
                }
            });
        }
    });


    //第二关点击帮助
    $('.J_searchBtn').tap(function(){
        if(!isAnimated) {
            isAnimated = true;
            $('.gameRuleBox').hide().eq(2).show();
            $('.J_closedBtn').show();
            $('.rulePage').css({display:'block',opacity: 0,zIndex:5}).animate({opacity:1},500,function(){
                isAnimated = false;
            });
        }
    });

    //向下滑扫一扫
    $('.magicPage').tap(function(){
        if(!isAnimated) {
            isAnimated = true;
            $.ajax({
                url:"${base}/user/record_scan.cc",
                type:"post",
                data:{secretPass: "${secretPass}"},
                dataType:"json",
                success:function(data){
                	isAnimated = false;
                    if(data.status == 1){
                        //扫码成功页面跳转,需要上传（完成扫码）;
                        $('.appleBox').show();
                        $('.get-magicBox').hide();
                        _czc.push(['_trackEvent', '扫码成功']);
                    }else{
                        alert(data.info);
                    }
                    return;
                },error:function(request){
                	isAnimated = false;
                    alert("扫码失败！请重试！");
                    return;
                }
            });          
        }
    });

    //摘取苹果抽奖
    $('.J_appleBtn').tap(function(){
        if(!isAnimated) {
            isAnimated = true;
            $.ajax({
                type: 'post',
                url: "${base}/user/draw.cc",
                dataType: 'json',
                success: function(data) {
                    //抽取键盘，获取奖品标识
                    isAnimated = false;
                    if(data.status == 1) {
                        data = data.data;
                        if(data.id == 0){
                            $('.noPrizePage').css({display: 'block', zIndex: 5, opacity:0}).animate({opacity:1},500,function(){
                                isAnimated = false;
                            });
                        }else{
                            $('.prizePage').css({display: 'block', zIndex: 5});
                            //根据奖品标识显示对应奖品
                            switch (data.prizeLevel) {
                                case 1:
                                    shareTitle = "嘿！我在Clarks Kids红苹果乐园抽中了迪士尼门票大奖，你也参加呀！";
                                    $('.J_sharePic img').attr('src','${base}/common/images/front/sharePic4.png');
                                    $('.boxContent li').eq(4).hide();
                                    $('.boxContent li').eq(5).hide();
                                    $('.prizePic img').attr('src',data.prizePic).show();
                                    $('.prizeName img').hide().eq(0).show();
                                    $('.messageBox', '.prizePage').eq(0).show();
                                    break;
                                case 2:
                                    shareTitle = "嘿！我在Clarks Kids红苹果乐园抽中了一双童鞋，你也参加呀！";
                                    $('.J_sharePic img').attr('src','${base}/common/images/front/sharePic3.png');
                                    $('.boxContent li').eq(3).hide();
                                    $('.prizePic img').attr('src',data.prizePic).show();
                                    $('.prizeName img').hide().eq(1).show();
                                    $('.messageBox', '.prizePage').eq(0).show();
                                    break;
                                case 3:
                                    shareTitle = "嘿！我在Clarks Kids红苹果乐园抽中了六一好礼，你也参加呀！";
                                    $('.J_sharePic img').attr('src','${base}/common/images/front/sharePic2.png');
                                    $('.prizePicBox').hide();
                                    $('.prizeName img').hide().eq(2).show();
                                    $('.prize2Box').show();
                                    $('.messageBox', '.prizePage').hide();
                                    $('#secPrizeCode').html("123456"); //填入优惠券识别码
                                    break;
                                case 4:
                                    shareTitle = "嘿！我在Clarks Kids红苹果乐园抽中了六一好礼，你也参加呀！";
                                    $('.J_sharePic img').attr('src','${base}/common/images/front/sharePic2.png');
                                    $('.prizePic img').attr('src',data.prizePic).show();
                                    $('.prizeName img').hide().eq(2).show();
                                    $('.messageBox', '.prizePage').eq(2).show();
                                    break;
                                case 5:
                                    shareTitle = "嘿！我在Clarks Kids红苹果乐园抽中了六一好礼，你也参加呀！";

                                    $('.prizePic img').attr('src',data.prizePic).show();
                                    $('.prizeName img').hide().eq(2).show();
                                    $('.messageBox', '.prizePage').eq(2).show();
                                    break;
                            }
                            loadShare();
                        }
                    }  else{
                        alert(data.info);
                        isAnimated = false;
                        return;
                    }
                },error:function(request){
                    alert("抽奖出错了！");
                    isAnimated = false;
                    return;
                }
            });
        }
    });



    //打开规则页面
    var scrollBox = null;
    $('.J_ruleBtn').tap(function(){
        if(!isAnimated) {
            isAnimated = true;
            $('.gameRuleBox').hide().eq(0).show();
            $('.J_closedBtn').show();
            $('.scrollBox', '.rulePage').height(winHeight*0.85);
            $('.rulePage').css({display:'block',opacity: 0,zIndex:5}).animate({opacity:1},500,function(){
                scrollBox = new IScroll($('.scrollBox',this)[0]);
                isAnimated = false;
            });
        }
    });

    //点击关闭按钮触发
    $('.J_closedBtn').tap(function(){
        if(!isAnimated) {
            isAnimated = true;
            var parent = $(this).parent();
            while(!parent.hasClass('page')) {
                parent = parent.parent();
            }
            parent.animate({opacity: 0},500,function(){
                $(this).css({display:'none',zIndex: 0});
                if(scrollBox != null) {
                    scrollBox.scrollTo(0,0);
                }
                isAnimated = false;
            });
        }
    });

    //点击填写信息按钮
    $('.J_formBtn').tap(function(){
        if(!isAnimated) {
            isAnimated = true;
            $('.formPage').css({zIndex:9,display:'block',opacity:0}).animate({opacity:1},500,function(){
                isAnimated = false;
            });
        }
    });

    //提交信息
    $('.submitBtn').tap(function() {
        if (!isAnimated) {
            isAnimated = true;
            var name = $('#name').val(),
                    tel = $('#tel').val(),
                    address = $('#address').val(),
                    cardId = $('#cardId').val(),
                    babySex = $('#babySex').val(),
                    babySize = $('#babySize').val();
            if (name == '') {
                alert('请填写你的姓名');
                isAnimated = false;
                return ;
            }
            if (tel == '') {
                alert('请填写你的手机号');
                isAnimated = false;
                return ;
            } else if (!/^1[34578][0-9]{9}$/g.test(tel)) {
                alert('请认真填写你的手机号');
                isAnimated = false;
                return ;
            }
            if (address == '') {
                alert('填写您的地址,确保我们能准确为您发放奖品');
                isAnimated = false;
                return ;
            }
            //判断是否需要填写身份证(特等奖迪士尼门票需填写，其他无需填写)
            if($('.J_cardId').css('display') != 'none') {
                $('.J_messageTip img').hide().eq(0).show();
                if (cardId == '') {
                    alert('请填写您的身份证号');
                    isAnimated = false;
                    return ;
                } else if (!/^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/g.test(cardId)) {
                    alert('请认真填写你的身份证号');
                    isAnimated = false;
                    return ;
                }
            }else {
                $('.J_messageTip img').hide().eq(1).show();
                if (babySex == '') {
                    alert('请填写您的宝贝性别');
                    isAnimated = false;
                    return ;
                }

                if (babySize == '') {
                    alert('请填写您宝贝的鞋码');
                    isAnimated = false;
                    return ;
                }
            }
            $.ajax({
                type: 'post',
                url: "${base}/user/record_fill_msg.cc",
                data: {name: name, phone: tel, address: address,identityNo: cardId, sex: babySex, size: babySize},
                dataType: 'json',
                success: function(data) {
                    isAnimated = false;
                    if (data.status == 1) {
                        $('.messageBox').hide().eq(1).show();
                        $('.formPage').animate({opacity:0},500,function(){
                            $(this).css({display:'none',zIndex:0,opacity:0});
                            isAnimated = false;
                        });
                    } else {
                        alert(data.info);
                    }
                }
            });
        }
    });

    //打开领取奖品页面，需要店员输入兑奖码
    $('.J_getPrizeBtn').tap(function(){
        if(!isAnimated) {
            isAnimated = true;
            $('.getPrizePage').css({display:'block',zIndex:9,opacity:0}).animate({opacity:1},500,function(){
                isAnimated = false;
            });
        }
    });

    //确认领取奖品（该奖品为实物奖品）
    $('.J_prizeFinish').tap(function(){
        if(!isAnimated) {
            isAnimated = true;
            var prizeCode = $('#prizeCode').val();
            //需要上传确认领取奖品
            $.ajax({
                url:"${base}/user/record_get.cc",
                type:"post",
                data:{secretGet:prizeCode},
                dataType:"json",
                success:function(data){
                    if(data.status == 1){
                        alert("领取成功！");
                        $('.messageBox').hide().eq(3).show();
                        $('.getPrizePage').hide();
                    }else{
                        alert(data.info);
                    }
                    isAnimated = false;
                },error:function(request){
                    isAnimated = false;
                    alert("领取失败！");
                }
            });
        }
    });

    var Bag = function (src, opt) {
        this.image = new Image();
        this.image.src = src;
        this.speed = opt.speed;
        this.score = opt.score;
        this.scoreImgIndex = opt.scoreImgIndex;
        this.pos = opt.pos || {x:0, y: 0};
        this.width = opt.width;
        this.height = opt.height;
        this.opened = false;
        this.killed = false;
        this.prize = null;
    };

    Bag.prototype = {
        version: '1.0',
        update: function() {
            this.pos.y += this.speed;
            if (this.pos.y > ig.game.height) {
                //需要添加扣血
                $('.heartIcon img').eq(ig.heart).css({opacity:0});
                ig.heart --;
                if(ig.heart < 0) {
                    game.gameOver();
                }
                this.kill();
            }
            if (this.opened) {
                var now = ig.game.gameTime;
                if (now - this.openTime > 500) {
                    this.kill();
                }
            }
        },
        draw: function() {
            if (this.opened) {
                if (this.prize) {
                    ig.game.cxt.drawImage(this.prize, this.pos.x + this.width / 2 - 25, this.pos.y - 26);
                }
            } else {
                ig.game.cxt.drawImage(this.image, this.pos.x, this.pos.y);
            }
        },
        checkOpen: function(x, y) {
            if (x > this.pos.x && x < (this.pos.x + this.width) && y > this.pos.y && y < this.pos.y + this.height) {
                return true;
            }
            return false;
        },
        kill: function() {
            this.killed = true;
        },
        open: function() {
        	if(!this.opened) {
	           	// 显示选中鞋子分值
	            this.addPrize(ig.score[this.scoreImgIndex]);
	            ig.bagNumber += this.score;
	            $('#J_number').html(ig.bagNumber);
            }
            this.opened = true;
            this.speed = 0;
            this.openTime = ig.game.gameTime;            
        },
        addPrize: function(src) {
            this.prize = new Image();
            this.prize.src = src;
        }
    };

    var ig = {};
    ig.input = {};
    ig.score = ["${base}/common/images/front/score5.png","${base}/common/images/front/score10.png","${base}/common/images/front/score15.png"];
    ig.bagNumber  = 0;
    ig.heart = 2;
    var Game = function(canvas, width, height) {
        this.canvas = canvas;
        this.canvas.style.width = width + 'px';
        this.canvas.style.height = height + 'px';
        this.width = 640;
        this.height = Math.round(640 * height / width);
        this.scale = 640 / width;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.cxt = this.canvas.getContext('2d');
        ig.game = this;
        this.bags = [];
        this._deleteBags = [];
        this.clearTimer = null;
        this.timeStep = 1000/60;
        this.addBagsTime = 0;
        this.changeBg = 0;
        this.gameTotalTime = 10;
        ig.bagNumber  = 0;
        this.addTouchEvent();
    };
    Game.STATUS = {PLAY: 1, OVER :2};
    Game.prototype = {
        play: function() {
            this.addBagsTime = 0;
            this.changeBg = 0;
            this.bags = [];
            this._deleteBags = [];
            this.gameTime = 0;
            ig.bagNumber = 0;
            ig.heart = 2;

            $('#J_number').html(ig.bagNumber);
            this.status = Game.STATUS.PLAY;
            clearInterval(this.clearTimer);
            var that = this;
            this.clearTimer = setInterval(function() {
                that.gameTime += that.timeStep;
                if(that.status == Game.STATUS.OVER) {
                    clearInterval(that.clearTimer);
                    that.clearScreen();
                    return;
                }
                that.run();
            }, this.timeStep);
        },
        addBags: function() {
            // 产生个数
            var now = this.gameTime;
            var speedBox = [4,6,9];
            if (now - this.addBagsTime > 300) {
                this.addBagsTime = now;
                var index = Math.floor(Math.random() * 16) + 1;
                var scoreIndex = Math.floor(Math.random() * ig.score.length);
                var bag = new Bag('${base}/common/images/front/shoesPic' + index +'.png',{
                    width:182, height:102, speed: speedBox[scoreIndex],
                    pos: {x: (Math.random() * (640 - 320) + 75), y: -200},
                    score: (scoreIndex + 1)*5,
                    scoreImgIndex: scoreIndex
                });
                this.bags.push(bag);
            }
        },
        addTouchEvent: function() {
            var that = this;
            this.canvas.addEventListener('touchstart', function(e) {that.touchStart(e);}, false);
            this.canvas.addEventListener('touchend', function(e) {that.touchEnd(e);}, false);
        },
        touchStart: function(e) {
            e.preventDefault();

            if (this.status == Game.STATUS.OVER) {
                return ;
            }

            var x = e.touches[0].clientX * this.scale;
            var y = e.touches[0].clientY * this.scale;

            ig.input.pointer = {x: x,y: y};
            ig.input.pressed = true;

            var length = this.bags.length;
            for (var i = 0; i < length; i++) {
                var item = this.bags[i];
                if (item.checkOpen(x, y)) {
                    item.open();
                }
            }
        },
        touchEnd: function(e) {
            e.preventDefault();
            ig.input.pointer = null;
            ig.input.released = false;
        },
        clearScreen: function() {
            this.cxt.clearRect(0,0, this.width, this.height);
        },
        run: function() {
            this.downCount();
            this.update();
            this.draw();
        },
        update: function() {
            this.addBags();
            this.updateBags();
            this.killBags();
        },
        draw: function() {
            this.clearScreen();
            this.drawBags();
        },
        downCount: function() {
            var time = this.gameTotalTime * 1000 - this.gameTime;
            if(time > 10000 && time <= 20000 && this.changeBg == 0) {
                this.changeBg = 1;
                $('.J_gamePageBg').hide().eq(0).show();
            }else if(time <= 10000 && this.changeBg == 1) {
                this.changeBg = 0;
                $('.J_gamePageBg').hide().eq(1).show();
            }
            if (time <= 0) {
                time = 0;
                $('.J_gamePageBg').hide();
                this.gameOver();
            }
            $('.downCount').html(Math.ceil(time / 1000) + 's');
        },
        gameOver: function() {
            this.status = Game.STATUS.OVER;
            //需要上传第一关数据
            var score = ig.bagNumber;
            _czc.push(['_trackEvent', '第一关结束']);
            //提交当前获得的分值,miss次数
            $.ajax({
                type: 'post',
                url: "${base}/user/record_game.cc",
                data: {gameMark: score,gameNo:1,miss: ig.heart},
                dataType: 'json',
                success: function(data) {
                    if (data.status == 1){
                        data = data.data ;
                        if(data.firstPass == 1){
                            $('.resultText img').hide().eq(1).show();
                            $('.J_againBtn').hide();
                            $('.getMagicBtn').show();

                        } else {
                            $('.resultText img').hide().eq(0).show();
                            $('.J_againBtn').show();
                            $('.getMagicBtn').hide();
                        }
                        $('.resultPage').css({opacity:0,zIndex:2,display:'block'}).animate({opacity:1},500,function(){
                            $('#J_number').html(data.firstBest);
                            $(this).css({zIndex:1});
                            isAnimated = false;
                        });
                    } else {
                        alert(data.info);
                    }
                },error:function(request){
                    alert("提交游戏数据出错了！");
                }
            });
        },
        killBags: function() {
            if (this._deleteBags.length) {
                var length = this._deleteBags.length;
                for (var i = 0; i < length; i++) {
                    var item = this._deleteBags[i];
                    for (var j = 0; j < this.bags.length; j++) {
                        if (this.bags[i] == item) {
                            this.bags.splice(j, 1);
                        }
                    }
                }
                this._deleteBags = [];
            }
        },
        updateBags: function() {
            var length = this.bags.length;
            for (var i = 0; i < length; i++) {
                var item = this.bags[i];
                if (item.killed) {
                    this._deleteBags.push(item);
                } else {
                    item.update();
                }
            }
        },
        drawBags: function() {
            var length = this.bags.length;
            for (var i = 0; i < length; i++) {
                var item = this.bags[i];
                item.draw();
            }
        }
    };

    // 鞋子掉落
    var game = new Game(document.querySelector('#J_gameBox'), winWidth, winHeight);
    
    //点击分享按钮
    $('.J_shareBtn').tap(function(){
        if(!isAnimated) {
            isAnimated = true;
            $('.sharePage').css({display:'block',zIndex:10,opacity:0}).animate({opacity:1},500,function(){
                isAnimated = false;
            });
        }
    });

    $('.sharePage').tap(function(){
        if(!isAnimated) {
            isAnimated = true;
            $(this).animate({opacity:0},500,function(){
                $(this).css({display:'none',zIndex:0,opacity:0});
                isAnimated = false;
            });
        }
    });
});

$('.audio').on('touchend', function() {
    if(gameSound.paused){
        $(this).removeClass('audio_off');
        gameSound.play();
    } else {
        $(this).addClass('audio_off');
        gameSound.pause();
    }
});

$('.audio').hide();
setTimeout(function() {
    $('.audio').css({display: 'block'});
    $('#myaudio')[0].play();
}, 1000);
