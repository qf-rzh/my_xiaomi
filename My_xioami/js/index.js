// 头部交互
var xu = (function () {
    var $nav = document.querySelector('.nav');
    var $navList = document.querySelector('.nav-list');
    var $xia = document.querySelector('.box-wrapper');
    var $box01 = document.querySelectorAll('.box01');
    var $xian = document.querySelectorAll('.xian');
    var $txt = document.querySelector('.txt');
    var $btn = document.querySelector('.btn');
    var $aBox = document.querySelector('.a-box');

    var index = 0;
    // console.log($box01);
    for (var i = 0; i < $box01.length; i++) {
        $box01[i].index = i;
    }
    return {
        init() {
            this.event();
        },
        event() {
            const _this = this;
            // 导航栏交互
            // $navList.onmouseenter = function(){
            //     move($xia,'height',230,200);
            // }
            $nav.onmouseleave = function () {
                move($xia, 'height', 0, 200);
            }
            $navList.onmouseover = function (e) {
                e = e || window.event;
                var target = e.target || e.srcElement;
                console.log(1);
                if (target.nodeName == 'A') {
                    index = target.parentNode.index;
                    for (var i = 0; i < $xian.length; i++) {
                        $xian[i].style.display = 'none';
                    }
                    if (index == undefined) {
                        move($xia, 'height', 0, 200);
                    } else {
                        move($xia, 'height', 230, 200);
                        $xian[index].style.display = 'block';
                    }

                }
            }
            // 搜索交互
            $txt.onfocus = function () {
                move($aBox, 'opacity', 0, 500);
                $txt.style.borderColor = '#ff6700';
                $btn.style.borderColor = '#ff6700';
            }
            $txt.onblur = function () {
                $txt.style.borderColor = '#e0e0e0';
                $btn.style.borderColor = '#e0e0e0';
                if ($txt.value == '') {
                    move($aBox, 'opacity', 1, 500);
                } else {
                    move($aBox, 'opacity', 0, 500);
                }
            }
        }
    }
}())
xu.init();
// 二级菜单和轮播图交互
var lun = (function () {
    var $ul = document.querySelector('.banner ul');
    var $ol = document.querySelector('.banner ol');
    var $olAll = $ol.querySelectorAll('li');
    var $ulAll = $ul.querySelectorAll('li');
    var $previous = document.querySelector('.previous');
    var $next = document.querySelector('.next');
    var $menuUl = document.querySelector('.menu ul');
    var $menuLi = $menuUl.querySelectorAll('li'); 
    var $menu = document.querySelector('.menu');
    // 二级菜单宽度自适应
    var $menuUlAll = document.querySelectorAll('.menu-list ul');
    
    console.log($menuUl);

    var index = 0;
    var index1 = 0;
    var timer = null;
    for (var i = 0; i < $olAll.length; i++) {
        $olAll[i].index = i;
    }
    for (var m = 0; m < $menuLi.length; m++) {
        $menuLi[m].index = m;
    }
    return {
        init() {
            this.event();
            this.autoplay();
        },
        event() {
            var _this = this;
            $ol.onclick = function (e) {
                e = e || window.event;
                var target = e.target || e.srcElement;
                if (target.nodeName == "SPAN") {
                    index = target.parentNode.index;
                    // console.log(index);
                    _this.show();
                    _this.autoplay();
                }
            }
            $previous.onclick = function () {
                index--;
                _this.show();
                _this.autoplay();
            }
            $next.onclick = function () {
                index++;
                _this.show();
                _this.autoplay();
            }
            $menuUl.onmouseover = function(e) {
                console.log(1);
                e = e || window.event;
                var target = e.target || e.srcElement;
                if(target.nodeName == 'A'){
                    index1 = target.parentNode.index;
                    // console.log(index1);
                    for (var j = 0; j < $menuUlAll.length; j++) {
                        $menuLi[j].style.background = '';
                        $menuUlAll[j].style.display = 'none';
                    }
                    var $liAll = $menuUlAll[index1].querySelectorAll('li');
                    $menuUlAll[index1].style.display = 'flex';
                    $menuUlAll[index1].style.width = Math.ceil($liAll.length / 6) * 248 + 'px';
                    target.parentNode.style.background = '#ff6700';
                }
            }
            $menu.onmouseleave = function() {
                for (var j = 0; j < $menuUlAll.length; j++) {
                    $menuLi[j].style.background = '';
                    $menuUlAll[j].style.display = 'none';
                }
            }
        },
        autoplay() {
            clearInterval(timer);
            var _this = this;
            timer = setInterval(function () {
                index++;
                _this.show();
            }, 5000)
        },
        show() {
            if (index >= $olAll.length) {
                index = 0;
            } else if (index < 0) {
                index = $olAll.length - 1;
            }
            for (var i = 0; i < $olAll.length; i++) {
                $olAll[i].className = '';
                move($ulAll[i], 'opacity', 0, 1000);
            }
            $olAll[index].className = 'banner-nav';
            move($ulAll[index], 'opacity', 1, 1000);
        }
    }
}())
lun.init();