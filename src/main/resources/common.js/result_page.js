 $(function() {
        var winSize = getWinSize(), winWidth = winSize[0] > 640 ? 640 : winSize[0], winHeight = winSize[1],
                scale = winWidth / 640, isAnimated = false, minHeight = 1008 * scale, animateTime = 800;



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
        }).on('readyRun', function() {
            $(this).trigger('out');
        }).trigger('readyRun');

        $('.page').loadImages({loadHtml: '<div class="layer loadLayer"><div class="loading"><div class="wText">loading</div><div class="wBall" id="wBall_1"><div class="wInnerBall"></div></div><div class="wBall" id="wBall_2"><div class="wInnerBall"></div></div><div class="wBall" id="wBall_3"><div class="wInnerBall"></div></div><div class="wBall" id="wBall_4"><div class="wInnerBall"></div></div><div class="wBall" id="wBall_5"><div class="wInnerBall"></div></div></div></div>',
            callback: function() {
                $('.loadLayer', this).hide();
                if ($(this).hasClass('firstpage')) {
                    $(this).trigger('in');
                }
            }
        });
        var index = 0;
        var length = $('.moveBox').length;
        $('.J_nextBtn').tap(function(){
            if(!isAnimated){
                isAnimated = true;
                    if (index + 1 > length) {
                        index = 0;
                    }
                    $('.moveBox').eq(index).css({opacity:1}).animate({opacity:0},700);
                    $('.moveBox').eq((index+1)%length).css({opacity:0}).animate({opacity:1},700,function(){
                        isAnimated = false;
                    });
                    index++;

            }
        })


    });