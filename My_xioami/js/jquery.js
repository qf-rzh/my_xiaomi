// 下拉菜单
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
})
// 轮播图
var index1 = 0; 
var timer = null;
var $banner = ($(".banner").children()[0]).children;
var $dao = $($(".dao").children());
var $previous = $(".previous");
var $next = $(".next");

console.log(index1);
$($banner[0]).fadeIn(0).siblings().fadeOut(0);
$dao.click(function(){
    clearInterval(timer);
    index1 = $dao.index(this);
    console.log(index1);  
    $($dao[index1]).addClass("banner-nav").siblings().removeClass("banner-nav");
    $($banner[index1]).fadeIn(500).siblings().fadeOut(500);
})
$next.click(function(){
    clearInterval(timer);
    index1++;
    if(index1 >= $dao.length){
        index1 = 0;
    }
    $($dao[index1]).addClass("banner-nav").siblings().removeClass("banner-nav");
    $($banner[index1]).fadeIn(500).siblings().fadeOut(500);
})
$previous.click(function(){
    clearInterval(timer);
    index1--;
    if(index1 < 0){
        index1 = $dao.length - 1;
    }
    $($dao[index1]).addClass("banner-nav").siblings().removeClass("banner-nav");
    $($banner[index1]).fadeIn(500).siblings().fadeOut(500);
})
timer = setInterval(() => {
    index1++;
    if(index1 >= $dao.length){
        index1 = 0;
    }
    $($dao[index1]).addClass("banner-nav").siblings().removeClass("banner-nav");
    $($banner[index1]).fadeIn(500).siblings().fadeOut(500);
}, 5000);
// 底部jquery
$('#footer_wrapper').css({
    'height': '340px',
    'background': 'white'
});
$('.footer').css({
    'height': '340px',
    'background': 'white'
});
$('.footer_case').css({
    'width': '1226px',
    'height': '98px',
    'border-bottom': '1px solid #e0e0e0'
});
$('.footer_box').css({
    'width':'1226',
    'height':'144px',
    'margin-top':'45px'
});
$('.footer_left').css({
    'float':'left',
    'width':'979px',
    'height':'144px',
    'border-right':'1px solid #e0e0e0'
});
$('.footer_right').css({
    'float':'right',
    'width':'244px',
    'height':'144px'
});
$('.footer_right h3').css({
    'text-align':'center',
    'font-size':'20px',
    'color':'#ff6700'
});
$('.footer_right p').css({
    'font-size':'12px',
    'color':'#616161',
    'text-align':'center',
    'margin-top':'5px'
});
$('#copy_wrapper').css({
    'height':'268px',
    'background':'#fafafa'
});
$('.copy').css({
    'height': '268px',
    'background': '#fafafa'
});

