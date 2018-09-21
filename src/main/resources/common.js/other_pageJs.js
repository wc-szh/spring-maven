$(function() {
    var winSize = getWinSize(), winWidth = winSize[0] > 640 ? 640 : winSize[0], winHeight = winSize[1],
        scale = winWidth / 640, isAnimated = false, minHeight = 1008 * scale, animateTime = 800;


    $('a').on('click', function() {
        if (!isAnimated) {
            return true;
        }

        return false;
    });

// 设置页面高度
    $('.page').height(winHeight).eq(0).css({display: 'block', zIndex: 1});

    $('.page').on('in', function() {
        isAnimated = true;
        var page = this;
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
        
        var height = $('.changePics > img').height();
        $('.changePics').height(height);
        $('.round').height($('.round').width());
        $('.roundBox').height($('.round').width());
        $('.coins').height($('.coinsContainer img').height()*2);

        setTimeout(function(){
	            $('.plane').animate({translate:'400%,-1000%'},2400,function(){
                    $('.round').addClass('roundRote');
                setTimeout(function(){
                    $('.plane').animate({translate:'-300%,-1600%'},1400,function(){
                        $('.plane').hide();
                        $('.roundImg').addClass('first1');
                        setTimeout(function(){
                            $('.roundBox').animate({scale:0.7},700,function(){
                                $(this).animate({marginTop:'-3%'},1200,function(){
                                    $('.X').animate({opacity:1},700,function(){
                                        $('.phone').animate({opacity:1},700,function(){
                                            coinsMove();
                                            setTimeout(function(){
                                                $('.text').eq(0).animate({bottom:'15%'},900,function(){
                                                    $('.text').eq(1).animate({bottom:'12%'},900,function(){
                                                        $('.text').eq(2).animate({bottom:'9%'},900,function(){
                                                            $('.text').eq(0).css({opacity:1}).animate({opacity:0},700)
                                                            $('.text').eq(1).css({opacity:1}).animate({opacity:0},700)
                                                            $('.text').eq(2).css({opacity:1}).animate({opacity:0},700,function(){
                                                                $('.text').eq(3).animate({bottom:'15%'},900,function(){
                                                                    $('.text').eq(4).animate({bottom:'12%'},900,function(){
                                                                        $('.text').eq(5).animate({bottom:'9%'},900,function(){
                                                                            $('.text').eq(3).css({opacity:1}).animate({opacity:0},700);
                                                                            $('.text').eq(4).css({opacity:1}).animate({opacity:0},700);
                                                                            $('.text').eq(5).css({opacity:1}).animate({opacity:0},700,function(){
                                                                                $('.text').eq(6).animate({bottom:'15%'},900,function(){
                                                                                    $('.text').eq(7).animate({bottom:'12%'},900,function(){
                                                                                        $('.text').eq(8).animate({bottom:'9%'},900,function(){
                                                                                            $('.text').eq(9).animate({bottom:'6%'},900,function(){
                                                                                                $('.text').eq(6).css({opacity:1}).animate({opacity:0},700);
                                                                                                $('.text').eq(7).css({opacity:1}).animate({opacity:0},700);
                                                                                                $('.text').eq(8).css({opacity:1}).animate({opacity:0},700);
                                                                                                $('.text').eq(9).css({opacity:1}).animate({opacity:0},700,function(){
                                                                                                    $('.text').eq(10).animate({bottom:'15%'},900,function(){
                                                                                                        $('.text').eq(11).animate({bottom:'12%'},900,function(){
                                                                                                            $('.text').eq(12).animate({bottom:'9%'},900,function(){
                                                                                                                $('.text').eq(13).animate({bottom:'6%'},900,function(){

                                                                                                                })
                                                                                                            })
                                                                                                        })
                                                                                                    })
                                                                                                });
                                                                                            })
                                                                                        })

                                                                                    })
                                                                                })
                                                                            });
                                                                        })
                                                                    })
                                                                })
                                                            })

                                                        })
                                                    })
                                                })
                                            },14000);
                                            setInterval(coinsMove ,15000);
                                        });
                                    });
                                });
                            });
                        },700)
                    });
                },3000);
            });
        },1000);
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


    function coinsMove(){
        $('.finger').css({top:'66%',opacity:0}).animate({opacity:1},700,function(){
            $('.finger').animate({top:'64%'},function(){
                $('.tipPop').animate({opacity:1},700,function(){
                    pointMove();
                });
            });
        });
    }

    function pointMove(){
        var index = 0;
        var c = setInterval(function(){
            if(index < 9){
                $('.coinsContainer img').eq(index).animate({opacity:1},700,function(){
                    index ++;
                });
            }else if ( index >= 9){
                index = 0;
                clearInterval(c);
                //$('.coinsContainer img').animate({left:'35%',top:'28%'},700,function(){
                    $('.coinsContainer img').animate({opacity:0},700);
                //});
                setTimeout(function(){
                    $('.H5coin').animate({opacity:1},700,function(){
                        //$('.coinsContainer img').eq(0).css({left:0,top:0});
                        //$('.coinsContainer img').eq(1).css({left: '25%',top:0});
                        //$('.coinsContainer img').eq(2).css({left: '48%',top:0});
                        //$('.coinsContainer img').eq(3).css({left: '74%',top:0});
                        //$('.coinsContainer img').eq(4).css({top: '50%',left:'2%'});
                        //$('.coinsContainer img').eq(5).css({top: '50%',left:'16%'});
                        //$('.coinsContainer img').eq(6).css({top: '50%',left:'30%'});
                        //$('.coinsContainer img').eq(7).css({top: '50%',left:'44%'});
                        //$('.coinsContainer img').eq(8).css({top: '50%',left:'58%'});
                        //$('.coinsContainer img').eq(9).css({top: '50%',left:'72%'});
                        $('.H5coin').animate({opacity:0},700);
                        $('.tipPop').animate({opacity:0},700);
                        $('.finger').animate({opacity:0},700);
                    });
                },1400);
            }
        },800);
    }

    
    $('.audio').on('touchend', function() {		
	    var audio = $('audio', this)[0];
	    if(audio.paused)
	    {
	        $(this).removeClass('audio_off');
	        audio.play();
	    } else {
	        $(this).addClass('audio_off');
	        audio.pause();
	    }
	});

    $('.audio').hide();
    setTimeout(function() {
        $('.audio').show();
        $('.audio audio')[0].play();
    }, 1500);
});


	