(function(win, doc, $) {
    /**
     * 滑页面类
     * @param options 设置参数,包括滑动容器（container）（可不设置），页面集合（container)，滑动前回调方法（before)，
     * 滑动结束后回调方法（after)，滑动过程中回调方法（moving)， 滑动方向（direct)(默认为up)，开始滑动有效距离（validSlideDistance），
     * 当前滑动页面的index（currentPageIndex），当前页面滑出速度（currentMoveSpeed），当前页面滑出缩放比（currentMoveScale），
     * 页面宽（pageWidth)， 页面高（pageHeight）
     */
    var SlidePage = function(options) {
        if (options.container) {
            this.container = $(options.container);
        }

        if (options.pages) {
            this.pages = $(options.pages);
        } else {
            console.error('需要指定滑动的页面集合');
            return ;
        }
        this.before = options.before || function() {};  // 移动前回调
        this.complete = options.complete || function() {};  // 移动前回调
        this.after = options.after || function() {};  // 移动后回调
        this.moving = options.moving || function() {};  // 移动过程中回调

        this.direct = options.direct || 'up'; // 滑动方向
        this.validSlideDistance = options.validSlideDistance || 15;  // 有效滑动距离，滑动距离大小此数值时，页面才会滑动

        this.currentPageIndex = parseInt(options.currentPageIndex) || 0; // 当前页面下标
        this.currentMoveSpeed = parseFloat(options.currentMoveSpeed) || 1;  // 当前页面移动速度
        this.currentMoveScale = parseFloat(options.currentMoveScale) || 1;  // 当前页面移动缩放

        this.pageHeight = parseInt(options.pageHeight) || window.innerHeight;
        this.pageWidth = parseInt(options.pageWidth) || window.innerWidth;

        this.isLoop = !!options.isLoop;  // 是否可循环

        this.init();
    }
    SlidePage.prototype = {
        init: function() {
            this._touched = false;
            this._isAutoMove = false;
            this._isMove = false;
            this._startMove =  0;
            this._endMove =  0;
            this._moveAlready = false;
            this._nextPageIndex = -1;
            this._callBeforeEnbled = true;

            this._enabled = true;

            this._slideDirect = this._getSlideDirect();
            this._slideSize = this._getSlideSize();
            this._addEvent();
        },
        disabled:function() {
            this._enabled = false;
        },
        enabled: function() {
            this._enabled = true;
        },
        _addEvent: function() {

            var eventOwner = this.container;
            if (!this.container) {
                eventOwner = this.pages;
            }

            this.destroy();
            eventOwner.on('touchstart', this._touchStart.bind(this)).on('mousedown', this._touchStart.bind(this));
            $(doc).on('touchmove', this._touchMove.bind(this));
            $(doc).on('mousemove', this._touchMove.bind(this));
            $(doc).on('touchend', this._touchEnd.bind(this));
            $(doc).on('mouseup', this._touchEnd.bind(this));
        },
        _getValueByDirect: function(e) {
            var name = 'y';
            switch (this.direct) {
                case 'left':
                case 'right':
                    name = 'x';
                    break;
            }
            return this._getValue(e, name);
        },
        _getValue: function(e, name) {
            if(e.type == "touchmove" || e.type == "touchstart"){
                return e.touches[0]['client' + name.toUpperCase()];
            }else{
                return e['page' + name.toUpperCase()]||e['name'];
            }
        },
        _getSlideDirect: function() {
            var name = 'translateY';
            switch (this.direct) {
                case 'left':
                case 'right':
                    name = 'translateX';
                    break;
            }
            return name;
        },
        _getSlideSize: function() {
            var size = this.pageHeight;
            switch (this.direct) {
                case 'left':
                    size = this.pageWidth;
                    break;
                case 'down':
                    size = -size;
                    break;
                case 'right':
                    size = -this.pageWidth;
                    break;
            }
            return size;
        },
        _isNext: function() {
            var yes = true;
            switch (this.direct) {
                case 'up':
                case 'left':
                    if (this._startMove <= this._endMove) {
                        yes = false;
                    }
                    break;
                case 'down':
                case 'right':
                    if (this._startMove >= this._endMove) {
                        yes = false;
                    }
                    break;
            }

            return yes;
        },
        _moveValue: function(diff, isNext) {
            if (isNext) {
                return diff + this._slideSize;
            } else {
                return diff - this._slideSize;
            }
        },
        /**
         *
         * @param goNext
         * @returns {{}}
         * @private
         */
        _moveCssEnd: function(goNext) {
            goNext = goNext ? -1 : 1;
            var animateCss = {};
            if (this._isNext()) {
                animateCss[this._slideDirect] = goNext * this._slideSize + 'px';
            } else {
                animateCss[this._slideDirect] = goNext * -this._slideSize + 'px';
            }
            return animateCss;
        },
        _touchStart: function(e) {
            if (this._isAutoMove || !this._enabled) {
                return ;
            }

            this._startMove = this._getValueByDirect(e);
            this._endMove = 0;
            this._nextPageIndex = -1;
            this._touched = true;
        },
        _touchMove: function(e) {
            var me = this;
            if (this._isAutoMove || !this._enabled) {
                return ;
            }
            if (this._touched) {
                this._endMove = this._getValueByDirect(e);
                var diff = this._endMove - this._startMove;
                // 滑动一个有效距离时开始滑动
                if (!this._moveAlready) {
                    if (Math.abs(diff) > this.validSlideDistance) {
                        this._isMove = true;
                    } else {
                        return ;
                    }
                }

                var current = this.pages.eq(this.currentPageIndex);

                // 缩放
                var scale = 1 - Math.abs((diff * this.currentMoveSpeed) / this._slideSize);
                if (scale <= this.currentMoveScale) {
                    scale = this.currentMoveScale;
                }

                // 下一页
                function getNextPage(isNext) {
                    var tempNextPageIndex = (isNext ? me.currentPageIndex + 1 : me.currentPageIndex - 1);
                    if (tempNextPageIndex >= me.pages.length) {
                        if (me.isLoop) {
                            tempNextPageIndex = 0;
                        } else {
                            me._nextPageIndex = -1;
                            return false;
                        }
                    } else if (tempNextPageIndex < 0){
                        if (me.isLoop) {
                            tempNextPageIndex = me.pages.length - 1;
                        } else {
                            me._nextPageIndex = -1;
                            return false;
                        }
                    }
                    if (me._nextPageIndex == -1) {
                        me._nextPageIndex = tempNextPageIndex;
                    } else if (me._nextPageIndex != tempNextPageIndex) {
                        me.pages.eq(me._nextPageIndex).css({display: 'none', zIndex: 0}).css3({transform: 'null'});
                        me._nextPageIndex = tempNextPageIndex
                    }
                    return true;
                }
                var isNext = this._isNext();
                if (!getNextPage(isNext)) {
                    return ;
                }

                var css3 = {};
                css3[this._slideDirect] = (diff * this.currentMoveSpeed) + 'px';
                css3['scale'] = scale;
                current.css3(css3).css({zIndex: 1});

                var nextPage = this.pages.eq(this._nextPageIndex);
                css3 = {};
                css3[this._slideDirect] = this._moveValue(diff, isNext) + 'px';
                nextPage.css({display: 'block', zIndex: 2}).css3(css3);

                // 移动前回调方法
                if (this._callBeforeEnbled) {
                    this._callBeforeEnbled = false;
                    this.before.call({slider: this, distance: diff, currentPage: current, nextPage: nextPage, isNext: isNext}, e);
                }

                // 移动中回调方法
                this.moving.call({slider: this, distance: diff, currentPage: current, nextPage: nextPage, isNext: isNext}, e);
            }
        },
        _touchEnd: function(e) {
            var me = this;
            if (this._touched && this._isMove) {
                var diff = this._endMove - this._startMove;

                if (this._nextPageIndex == -1) {
                    return ;
                }

                this._isAutoMove = true;

                var current = this.pages.eq(this.currentPageIndex);
                var nextPage = this.pages.eq(this._nextPageIndex);
                // 移动多少距离后为有效滑动距离
                var validDistance = Math.abs(this._slideSize) / 6;
                if (Math.abs(diff) < validDistance) {
                    // 变回原样
                    var animateCss = {};
                    animateCss[this._slideDirect] = '0px';
                    current.animate(animateCss, 500, function() {
                        me._isAutoMove = false;
                    });

                    nextPage.animate(this._moveCssEnd(), 500, function() {
                        nextPage.css({display: 'none', zIndex: 0}).css3({transform: 'null'});
                    });

                    this.complete.call({slider: me, distance: diff, currentPage: current, nextPage: nextPage, isNext: false});
                } else {
                    // 页面滑动
                    var animateCss = {};
                    animateCss[this._slideDirect] = '0px';
                    var isNext = me.currentPageIndex < me._nextPageIndex || (me.currentPageIndex > me._nextPageIndex && me._nextPageIndex == 0);
                    this.complete.call({slider: me, distance: diff, currentPage: current, nextPage: nextPage, isNext: isNext});

                    nextPage.animate(animateCss, 500, function() {
                        var tempIndex = me.currentPageIndex;
                        me.currentPageIndex = me._nextPageIndex;
                        me._nextPageIndex = tempIndex;
                        me._isAutoMove = false;
                        me.after.call({slider: me, distance: diff, currentPage: current, nextPage: nextPage, isNext: isNext});
                    });
                    animateCss = this._moveCssEnd(true);
                    animateCss['scale'] = this.currentMoveScale;
                    current.animate(animateCss, 500, function() {
                        current.css({display: 'none', zIndex: 0}).css3({transform: 'null'});
                    });
                }
            }
            this._callBeforeEnbled = true;
            this._isMove = false;
            this._touched = false;
        },
        destroy: function() {
            var eventOwner = this.container;
            if (!this.container) {
                eventOwner = this.pages;
            }

            eventOwner.off('touchstart', this._touchStart.bind(this)).off('mousedown', this._touchStart.bind(this));
            $(doc).off('touchmove', this._touchMove.bind(this));
            $(doc).off('mousemove', this._touchMove.bind(this));
            $(doc).off('touchend', this._touchEnd.bind(this));
            $(doc).off('mouseup', this._touchEnd.bind(this));
        }
    };

    var sliderManager = {
        index: 0,
        list: {},
        add: function(slider) {
            if (slider instanceof SlidePage) {
                var name = 'slider' + this.index;
                this.list[name] = slider;
                this.index ++;

                return name;
            }

            return '';
        },
        get: function(name) {
            if (this.list[name]) {
                return this.list[name];
            }
        },
        remove: function(name) {
            if (this.list[name]) {
                delete this.list[name];
                return true;
            }
            return false;
        }
    };

    // $扩展方法
    $.fn.slidePage = function(options, value) {
        if (typeof options == 'undefined' && typeof value == 'undefined') {
            var slider = sliderManager.get(this.data('slidePage'));
            if (slider) {
                return slider;
            }

            return null;
        }

        if (typeof options == 'string' && typeof value !== 'undefined') {
            var slider = sliderManager.get(this.data('slidePage'));
            if (slider) {
                if (options.indexOf('change') == 0) {
                    var pro = options.substr(6,1).toLowerCase() + options.substr(7);
                    if (slider.hasOwnProperty(pro)) {
                        slider[pro] = value;
                    }
                }
            }

            return ;
        }

        if (typeof options == 'destroy') {

            var slider = sliderManager.get(this.data('slidePage'));
            if (slider) {
                sliderManager.remove(this.data('slidePage'));
                slider.destroy();
            }
            return ;
        }

        if (!options) {
            options = {};
        }
        options.pages = this;
        if (!this.data('slidePage')) {
            var slider = new SlidePage(options);
            var name = sliderManager.add(slider);
            this.data('slidePage', name);
        }
    }

})(window, document, $);