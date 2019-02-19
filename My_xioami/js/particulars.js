var $top = document.querySelector('.top');
var $ul = document.querySelector('.top ul');
var $li = $ul.firstElementChild;
var $a = $li.firstElementChild;
var $lione = document.querySelector('.top_case');
var $aone = $lione.lastElementChild;
var $span = $lione.firstElementChild;
var $litwo = $ul.lastElementChild;
var $atwo = document.querySelector('.header_case');
var $ulAll = document.querySelector('.header_box');
var $form = document.querySelector('.header_form');
var $logo = document.querySelector('.logo');
console.log($logo);
$a.onmouseenter = function () {
    $a.style.color = 'white';
}
$a.onmouseleave = function () {
    $a.style.color = '#b0b0b0';
}
$li.onmouseenter = function () {
    $lione.style.background = '#424242';
    $aone.style.color = '#b0b0b0';
    // $litwo.style.display = 'none';
    $span.style.position = 'absolute';
    $span.style.background = 'url(images/font07.png) no-repeat center center';
    $span.style.backgroundPosition = '-2px -10px';
    $span.style.width = '24px';
    $span.style.height = '40px';
    $span.style.backgroundSize = '24px 40px';
    setTimeout(() => {
        $form.style.display = 'block';
    }, 500);
}
$lione.onmouseenter = function () {
    $lione.style.background = 'white';
    $aone.style.color = '#ff6700';
    // $litwo.style.display = 'block';
    $span.style.position = 'absolute';
    $span.style.background = 'url(images/font08.png) no-repeat';
    $span.style.backgroundPosition = '-2px -10px';
    $span.style.width = '24px';
    $span.style.height = '40px';
    $span.style.backgroundSize = '24px 40px';
    $form.style.display = 'none';
}
$litwo.onmouseleave = function () {
    // $litwo.style.display = 'none';
    setTimeout(() => {
        $lione.style.background = '#424242';
        $aone.style.color = '#b0b0b0';
        $span.style.position = 'absolute';
        $span.style.background = 'url(../xiaomi/images/font07.png) no-repeat center center';
        $span.style.backgroundPosition = '-2px -10px';
        $span.style.width = '24px';
        $span.style.height = '40px';
        $span.style.backgroundSize = '24px 40px';
    }, 500);
    setTimeout(() => {
        $form.style.display = 'block';
    }, 500);
}
$atwo.onmouseenter = function () {
    $ulAll.style.display = 'block';
}
$ulAll.onmouseleave = function () {
    $ulAll.style.display = 'none';
}
$logo.onmouseenter = function () {
    $ulAll.style.display = 'none';
}
$top.onmouseenter = function () {
    $ulAll.style.display = 'none';
}
document.onmouseenter = function () {
    $ulAll.style.display = 'none';
}
var particulars = (function () {
    var $ol = document.querySelector('.banner_box');
    var $liAll = document.querySelectorAll('ol li');
    var $ulone = document.querySelector('.banner_case');
    var $ulChild = document.querySelectorAll('.banner_case li');
    var $one = document.querySelector('.one');
    var $two = $one.nextElementSibling;
    var $three = $two.nextElementSibling;
    var $four = $three.nextElementSibling;
    var index = 0;
    // console.log($three);
    for (let i = 0; i < $liAll.length; i++) {
        $liAll[i].index = i;
    }
    return {
        init() {
            this.event();
        },
        event() {
            var _this = this;
            $ol.onclick = function (e) {
                e = e || window.event
                var target = e.target || e.srcElement;
                if (target.nodeName === 'LI') {
                    index = target.index;
                    _this.showImage();
                }
            }
            $one.onmouseenter = function () {
                $three.style.display = 'block';
            }
            $one.onmouseleave = function () {
                $three.style.display = 'none';
            }
            $two.onmouseenter = function () {
                $four.style.display = 'block';
            }
            $two.onmouseleave = function () {
                $four.style.display = 'none';
            }
            $one.onclick = function () {
                index--;
                _this.showImage();
            }
            $two.onclick = function () {
                index++;
                _this.showImage();
            }
        },
        showImage() {
            var _this = this;
            if (index < 0) {
                index = $liAll.length - 1;
            } else if (index > $liAll.length - 1) {
                index = 0;
            }
            for (let i = 0; i < $liAll.length; i++) {
                $liAll[i].classList.remove('runing');
                // $ulChild[i].style.display = 'none';
                move($ulChild[i], 'opacity', 0, 500, function (obj) {
                    obj.style.display = 'none';
                });
            }
            $liAll[index].classList.add('runing');
            $ulChild[index].style.display = 'block';
            move($ulChild[index], 'opacity', 100, 500);
        }
    }
}())
particulars.init();

var textBox = (function () {
    var $inp = document.querySelector('.txt');
    var $inp1 = document.querySelector('.sub');
    var $iconFont = $inp1.nextElementSibling;
    var $i = document.querySelector('.header_rzh');
    var $iAll = document.querySelector('.header_xwy');
    var $ulthree = document.querySelector('.header_item');
    var timer = null;
    // console.log($ulthree);
    return {
        init() {
            this.event();
        },
        event() {
            var _this = this;
            $inp.onfocus = function () {
                $inp.style.borderColor = '#ff6700';
                $inp1.style.borderColor = '#ff6700';
                $i.style.display = 'none';
                $iAll.style.display = 'none';
            }
            $inp.onblur = function () {
                $inp.style.borderColor = '#e0e0e0';
                $inp1.style.borderColor = '#e0e0e0';
                $i.style.display = 'block';
                $iAll.style.display = 'block';
                timer = setTimeout(() => {
                    $ulthree.style.display = 'none';
                }, 300);
            }
            $i.onmouseenter = function () {
                $i.style.color = 'white';
                $i.style.background = '#ff6700';
            }
            $i.onmouseleave = function () {
                $i.style.color = '#757575';
                $i.style.background = '#eeeeee';
            }
            $iAll.onmouseenter = function () {
                $iAll.style.background = '#ff6700';
                $iAll.style.color = 'white';
            }
            $iAll.onmouseleave = function () {
                $iAll.style.background = '#eeeeee';
                $iAll.style.color = '#757575';
            }
            $inp1.onmouseenter = function () {
                $inp1.style.background = '#ff6700';
                $iconFont.style.color = 'white';
                $iconFont.onmouseenter = function () {
                    $inp1.style.background = '#ff6700';
                    $iconFont.style.color = 'white';
                }
            }
            $inp1.onmouseleave = function () {
                $inp1.style.background = 'white';
                $iconFont.style.color = '#616161';
            }
            $inp.oninput = function () {
                clearTimeout(timer);
                var val = this.value;
                if (val == "") {
                    $ulthree.style.display = 'none';
                }
                else {
                    $ulthree.style.display = 'block';
                    timer = setTimeout(() => {
                        _this.getSome(val);
                    }, 200);
                }
            }
            $ulthree.onclick = function (e) {
                e = e || window.event
                var target = e.target || e.srcElement
                if (target.nodeName == 'LI') {
                    $inp.value = target.innerHTML;
                    $i.style.display = 'none';
                    $iAll.style.display = 'none';
                }
            }
        },
        getSome(val) {
            var url = 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su';
            baiDu(url, {
                wd: val,
                cb: "textBox.insertData"
            });
        },
        insertData(data) {
            $ulthree.innerHTML = '';
            var flag = document.createDocumentFragment();
            data.s.forEach(item => {
                var $lithree = document.createElement('li');
                $lithree.classList = 'header_keep';
                $lithree.innerHTML = item;
                flag.appendChild($lithree);
            });
            $ulthree.appendChild(flag);
        }
    }
}())
textBox.init();

var $footer = (function () {
    var $footerul = document.querySelector('.footer_case ul');
    var $footerli = $footerul.firstElementChild;
    var $footerspan = $footerli.firstElementChild;
    var $footerA = $footerli.lastElementChild;
    var $footerone = document.querySelector('.footer_one');
    var $footeronespan = $footerone.firstElementChild;
    var $footeroneA = $footerone.lastElementChild;
    var $footertwo = document.querySelector('.footer_two');
    var $footertwospan = $footertwo.firstElementChild;
    var $footertwoA = $footertwo.lastElementChild;
    var $footerthree = document.querySelector('.footer_three');
    var $footerthreespan = $footerthree.firstElementChild;
    var $footerthreeA = $footerthree.lastElementChild;
    var $footerliAll = $footerul.lastElementChild;
    var $footerliAllspan = $footerliAll.firstElementChild;
    var $footerliAllA = $footerliAll.lastElementChild;
    var $footer_right = document.querySelector('.footer_right');
    var $footer_A = $footer_right.lastElementChild;
    var $footer_span = $footer_A.firstElementChild;
    console.log($footer_span);
    return {
        init() {
            this.event();
        },
        event() {
            var _this = this;
            $footerspan.onmouseenter = function () {
                $footerspan.style.color = '#ff6700';
                $footerA.style.color = '#ff6700';
            }
            $footerA.onmouseenter = function () {
                $footerspan.style.color = '#ff6700';
                $footerA.style.color = '#ff6700';
            }
            $footerA.onmouseleave = function () {
                $footerA.style.color = '#616161';
                $footerspan.style.color = '#646c8b';
            }
            $footerspan.onmouseleave = function () {
                $footerA.style.color = '#616161';
                $footerspan.style.color = '#646c8b';
            }
            $footeroneA.onmouseenter = function () {
                $footeronespan.style.color = '#ff6700';
                $footeroneA.style.color = '#ff6700';
            }
            $footeronespan.onmouseenter = function () {
                $footeronespan.style.color = '#ff6700';
                $footeroneA.style.color = '#ff6700';
            }
            $footeroneA.onmouseleave = function () {
                $footeroneA.style.color = '#616161';
                $footeronespan.style.color = '#646c8b';
            }
            $footeronespan.onmouseleave = function () {
                $footeroneA.style.color = '#616161';
                $footeronespan.style.color = '#646c8b';
            } 
            $footertwoA.onmouseenter = function () {
                $footertwospan.style.color = '#ff6700';
                $footertwoA.style.color = '#ff6700';
            }
            $footertwospan.onmouseenter = function () {
                $footertwospan.style.color = '#ff6700';
                $footertwoA.style.color = '#ff6700';
            }
            $footertwoA.onmouseleave = function () {
                $footertwoA.style.color = '#616161';
                $footertwospan.style.color = '#646c8b';
            }
            $footertwospan.onmouseleave = function () {
                $footertwoA.style.color = '#616161';
                $footertwospan.style.color = '#646c8b';
            } 
            $footerthreeA.onmouseenter = function () {
                $footerthreespan.style.color = '#ff6700';
                $footerthreeA.style.color = '#ff6700';
            }
            $footerthreespan.onmouseenter = function () {
                $footerthreespan.style.color = '#ff6700';
                $footerthreeA.style.color = '#ff6700';
            }
            $footerthreeA.onmouseleave = function () {
                $footerthreeA.style.color = '#616161';
                $footerthreespan.style.color = '#646c8b';
            }
            $footerthreespan.onmouseleave = function () {
                $footerthreeA.style.color = '#616161';
                $footerthreespan.style.color = '#646c8b';
            } 
            $footerliAllA.onmouseenter = function () {
                $footerliAllspan.style.color = '#ff6700';
                $footerliAllA.style.color = '#ff6700';
            }
            $footerliAllspan.onmouseenter = function () {
                $footerliAllspan.style.color = '#ff6700';
                $footerliAllA.style.color = '#ff6700';
            }
            $footerliAllA.onmouseleave = function () {
                $footerliAllA.style.color = '#616161';
                $footerliAllspan.style.color = '#646c8b';
            }
            $footerliAllspan.onmouseleave = function () {
                $footerliAllA.style.color = '#616161';
                $footerliAllspan.style.color = '#646c8b';
            }
            $footer_A.onmouseenter = function () {
                $footer_A.style.background = '#ff6700';
                $footer_A.style.color = 'white';
                $footer_span.style.color = 'white';
            }
            $footer_A.onmouseleave = function () {
                $footer_A.style.background = 'white';
                $footer_A.style.color = '#ff6700';
                $footer_span.style.color = '#ff6700';
            } 
        }
    }
}())
$footer.init();