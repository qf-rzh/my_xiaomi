var com = (function () {
    return {
        init() {
            this.event();
        },
        event() {
            const _this = this;
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
                    if(s>H + 64) {
                        $newHead.style = "position:fixed;top:0;"
                    } else {
                        $newHead.style = "";
                    }
                }
            }
        },
    }

}())
