var com = (function () {
    return {
        init() {
            this.event();
            this.guding();
        },
        event() {
            const _this = this;
            var $header = document.querySelector('#header-wrapper');
            var $scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            console.log($scrollTop);
<<<<<<< HEAD
            if ($scrollTop > 64) {
                $header.classList.add('head');
            }else {
                $header.classList.remove('head');
=======
            // if ($scrollTop > 64) {
            //     $header.classList.add('head');
            // }else {
            //     $header.classList.remove('head');
            // }
        },
        guding(){
            var $newHead = document.querySelector("#newheader-wrapper");
            console.log($newHead);
            window.onload=function(){
                    H = 0,
                    Y = $newHead;       
                while (Y) {
                    H += Y.offsetTop; 
                    Y = Y.offsetParent;
                }
                window.onscroll = function()
                {
                    var s = document.body.scrollTop || document.documentElement.scrollTop
                    if(s>H) {
                        $newHead.style = "position:fixed;top:0;"
                    } else {
                        $newHead.style = "";
                    }
                }
>>>>>>> 完善computer页和主页部分动画
            }
        }
    }

}())
