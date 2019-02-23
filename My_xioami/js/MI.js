var swiper = (function () {
    var $_ul = document.querySelector('#_ul');
    var $_ol = document.querySelector('#_ol');
    var $click = $_ol.children;
    var $ulli = document.querySelector("#_ul").children;
    var $olli = document.querySelector('#_ol').children;
    var $evaluate = document.querySelector(".evaluate");
    // console.log($click);
    var timer = 0;
    var index = 0;
    for (let i = 0; i < $click.length; i++) {
        $click[i].index = i;
    }
    return {
        init() {
            this.event();
            // this.shadow();
            this.li_click();
            // this.autoPlay();
            // this.evaluate();
        },
        event() {
            var _this = this;
            var $hour = document.querySelector(".hour");
            var $min = document.querySelector(".min");
            var $second = document.querySelector(".second");
            var $spanAll = document.querySelectorAll(".daojishi div span")
            var shijiancha;
            var timer = setInterval(() => {
                //获取当前时间
                var date = new Date();
                var now = date.getTime();
                //设置截止时间
                var str = "2019-3-12 0:00:00";
                var endDate = new Date(str);
                var end = endDate.getTime();//返回格林威治到结束时间的毫秒数
                //时间差
                shijiancha = end - now;
                //保存倒计时时间
                var hour, min, second;
                if (shijiancha >= 0) {
                    hour = Math.floor(shijiancha / 1000 / 60 / 60 % 24);
                    min = Math.floor(shijiancha / 1000 / 60 % 60);
                    second = Math.floor(shijiancha / 1000 % 60);
                }
                if (hour < 10) {
                    hour = "0" + parseInt(hour);
                }
                if (min < 10) {
                    min = "0" + parseInt(min);
                }
                if (second < 10) {
                    second = "0" + parseInt(second);
                }
                $hour.innerHTML = hour;
                // console.log(hour);
                $min.innerHTML = min;
                // console.log(min);
                $second.innerHTML = second;
                // console.log(second);
            }, 1000)
            if (shijiancha <= 0) {
                clearInterval(timer);
            }
        },

        shadow() {
            var $shoujiUl = document.querySelector(".shouji_wrapper ul");
            var $shoujiLi = $shoujiUl.children;
            $shoujiUl.onmouseenter = function (e) {
                e = e || window.event;
                var target = e.target || e.srcElement;
                if (target.nodeName == 'LI') {
                    console.log(1);
                    for (let i = 0; i < $shoujiLi.length; i++) {
                        $shoujiLi[i].classList.add('shadow');
                    }
                    target.classList.add('shadow');
                }
            }

            $shoujiUl.onmouseleave = function(e){

                e = e || window.event;
                var target = e.target || e.srcElement;
                if (target.nodeName == 'LI'){
                    $shoujiLi[i].classList.remove('shadow')
                }
            }
        },
        li_click() {
            const _this = this;
            $_ol.onclick = function (e) {
                e = e || window.event;
                var target = e.target || e.srcElement;
                if (target.nodeName == 'LI') {
                    index = target.index;
                    _this.showImage();
                }
            }
        },
        showImage() {
            if (index < 0) {
                index = $ulli.length - 1;
            } else if (index > $ulli.length - 1) {
                index = 0;
            }
            for (let i = 0; i < $click.length; i++) {
                $click[i].classList.remove('li_click');
                $ulli[i].style.display = 'none';
            }
            // console.log($click);
            $click[index].classList.add('li_click');
            $ulli[index].style.display = 'block';
        },
        // autoPlay() {
        //     var _this = this;
        //     clearInterval(timer);
        //     timer = setInterval(function () {
        //         index++;
        //         _this.showImage();
        //     }, 1000)
        // }

        // evaluate(){
        //     var $shoujiLi = document.querySelectorAll(".shouji_wrapper ul li");
        //     // console.log( $shoujiLi);
        //     $shoujiLi.onmouseenter = function(){
        //         console.log(11111);
        //         $evaluate.move($evaluate,opcity,1,time = 200);
        //         $evaluate.move($evaluate,bottom,0,time = 200);
        //     }
        // }
        
    }

}())
swiper.init();