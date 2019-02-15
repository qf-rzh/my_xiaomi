var com = (function () {
    return {
        init() {
            this.event();
        },
        event() {
            const _this = this;
            var $header = document.querySelector('#header-wrapper');
            var $scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            console.log($scrollTop);
            // if ($scrollTop > 64) {
            //     $header.classList.add('head');
            // }else {
            //     $header.classList.remove('head');
            // }
        }
    }

}())