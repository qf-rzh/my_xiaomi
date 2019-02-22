
var swiper = (function () {
    var $ul = document.querySelector('.swiper-wrapper');
    var $_ol = document.querySelector('#_ol');
    var $olchild = $_ol.children;
    var $slide = document.querySelectorAll('.swiper-slide');
    var $left = document.querySelector('.swiper-button-prev');
    var $right = document.querySelector('.swiper-button-next');
    var index = 0;
    for (let i = 0; i < $olchild.length; i++) {
        $olchild[i].index = i;
    }
    
    return {
        init() {
            this.event();
            this.autoPlay();
        },
        event() {
            const self = this;
            $_ol.onclick = function (e) {
                e = e || window.event;
                var target = e.target || e.srcElement;
                if (target.nodeName == 'LI') {
                    index = target.index;
                    self.showImage();

                }
            }
            $left.onclick = function (e) {
                e = e || window.event;
                var target = e.target || e.srcElement;
                --index;
                self.showImage();

            }
            
            $right.onclick = function (e) {
                e = e || window.event;
                var target = e.target || e.srcElement;
                ++index;
                self.showImage();
            }
        },
        showImage() {
            if (index < 0) {
                index = $slide.length - 1;
            } else if (index > $slide.length - 1) {
                index = 0;
            }
            for (let i = 0; i < $olchild.length; i++) {
                $olchild[i].classList.remove('current');
                $slide[i].style.display = 'none';
            }
            $olchild[index].classList.add('current');
            $slide[index].style.display = 'block';

        },
    }
}())
swiper.init();