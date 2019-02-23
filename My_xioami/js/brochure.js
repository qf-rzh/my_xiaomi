var $ = jQuery;
var $navList = $("li.box01");
var $nav = $(".nav");
var $boxWrapper = $(".box-wrapper");
// console.log($xian);
var index = 0;
$navList.hover(
    function () {
        let $xian = $("ul.xian");
        $boxWrapper.stop();
        $boxWrapper.slideDown(200);
        index = $navList.index(this);
        if (index > 7) {
            $boxWrapper.stop();
            $boxWrapper.slideUp(200);
        }
        // console.log(index);
        // console.log($($xian)[index]);
        $($xian[index]).show().siblings().hide();
    }
);
$nav.mouseleave(function () {
    $boxWrapper.stop();
    $boxWrapper.slideUp(200);
})
// 二级菜单
var $menu = $(".menu");
var $menuList = $(".menu-list").children();
var $me = $(".me").children();
// console.log($menu);
$menu.mouseenter(function () {
    let index = 0;
    $me.mouseover(
        function () {
            index = $me.index(this);
            // console.log(index);
            $($me[index]).css("background", "#ff7600").siblings().css("background", "")
            // console.log($($menuList[index]).children().length);
            var width = Math.ceil($($menuList[index]).children().length / 6) * 248 + 'px';
            $($menuList[index]).css({ "display": "flex", "width": width }).siblings().css("display", "none")
        }
    )
})
$menu.mouseleave(function () {
    $menuList.css("display", "none");
    $me.css("background", "");
});

var $box = (function(){
    var $case_box = document.querySelector('.case_box3');
    var $firstbox = $case_box.firstElementChild;
    var $twobox = $firstbox.nextElementSibling;
    var $twofirstspan = $twobox.firstElementChild;
    var $threebox = $twobox.nextElementSibling;
    var $threefirstspan = $threebox.firstElementChild;
    var $lastbox = $case_box.lastElementChild;
    var $lastspan = $lastbox.lastElementChild;
    var $fourbox = $lastbox.previousElementSibling;
    var $fourfirstspan = $fourbox.firstElementChild;
    var $fourlastspan = $fourbox.lastElementChild;
    var $fivebox = $threebox.nextElementSibling;
    var $fivefirstspan = $fivebox.firstElementChild;
    var $rzh = document.querySelector('.rzh strong');
    var $xwy = $rzh.nextElementSibling;
    var imgList = document.querySelectorAll('.swiper-wrapper img');
    var $swiper = document.querySelector('.swiper-container');
    var $a = document.querySelector('.case_box5').firstElementChild;
    var $ban = 'i5 4G 128G SATA+1TB MX110';  
    //  console.log($a);
    
    return{
        init() {
            this.event();
            this.insertData();
        },
        event() {
            const _this = this;
            $twobox.onclick = function () {
                $threebox.style.borderColor = '#e0e0e0';
                $threefirstspan.style.color = '#333333';
                $twobox.style.borderColor = '#ff6700';
                $twofirstspan.style.color = '#ff6700';
                $fivebox.style.borderColor = '#e0e0e0';
                $fivefirstspan.style.color = '#333333';
                $lastbox.style.display = 'none';
                $rzh.innerHTML = '3899元';
                $xwy.innerHTML = '4199元';
                $ban = $twofirstspan.innerHTML;
            }
            $threebox.onclick = function () {
                $threebox.style.borderColor = '#ff6700';
                $threefirstspan.style.color = '#ff6700';
                $twobox.style.borderColor = '#e0e0e0';
                $twofirstspan.style.color = '#333333';
                $fivebox.style.borderColor = '#e0e0e0';
                $fivefirstspan.style.color = '#333333';
                $lastbox.style.display = 'inline-block';
                $rzh.innerHTML = '4199元';
                $xwy.innerHTML = '4499元';
                $ban = $threefirstspan.innerHTML;
                
            }
            $fivebox.onclick = function () {
                $threebox.style.borderColor = '#e0e0e0';
                $threefirstspan.style.color = '#333333';
                $twobox.style.borderColor = '#e0e0e0';
                $twofirstspan.style.color = '#333333';
                $fivebox.style.borderColor = '#ff6700';
                $fivefirstspan.style.color = '#ff6700';
                $lastbox.style.display = 'none';
                $rzh.innerHTML = '4979元';
                $xwy.innerHTML = '4999元';
                $ban = $fivefirstspan.innerHTML;
            }
            $lastbox.onclick = function () {
                $fourbox.style.borderColor = '#e0e0e0';
                $fourfirstspan.style.color = '#cccccc';
                $fourlastspan.style.color = '#333333';
                $lastbox.style.borderColor = '#ff6700';
                $lastspan.style.color = '#ff6700';
                for(var i = 0;i<imgList.length;i++){
                    imgList[i].src = "images/item_case"+[i]+".jpg";
                 }
                $rzh.innerHTML = '4399元';
                $xwy.innerHTML = '4599元';
            }
            $fourbox.onclick = function () {
                $fourbox.style.borderColor = '#ff6700';
                $fourfirstspan.style.color = '#ff6700';
                $fourlastspan.style.color = '#ff6700';
                $lastbox.style.borderColor = '#e0e0e0';
                $lastspan.style.color = '#333333';
                for (var i = 0; i < imgList.length; i++) {
                    imgList[i].src = "images/brochure_icon" + [i] + ".jpg";
                }
                $rzh.innerHTML = '4199元';
                $xwy.innerHTML = '4499元';
            }
           $a.onclick = function () {
               console.log($ban);
               sendAjax('php/cart.php',{
                    type:'POST',
                    data:{
                        "versions":$ban 
                    },
                   success(data) {
                       console.log(data);
                    //    let { code, msg, data: _data } = JSON.parse(data);
                    //    if (code == 200) {
                    //        console.log(1);
                    //    } else {
                    //    }
                   }
               });
           } 
            
        },
        insertData() {
            var _this = this;
            document.body.onscroll = function () {                
                var $yes = document.documentElement.scrollTop || document.body.scrollTop;  
                if ($yes>220 && $yes<600) {
                    $swiper.style.top = $yes -30 + 'px';
                }
                if($yes>600){
                    $swiper.style.top = 600 - 30 + 'px';
                }
                if($yes < 240){
                    $swiper.style.top  = 200 + 'px';
                }          
                // console.dir($yes);
            }
        }
    }
}())
$box.init();


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
