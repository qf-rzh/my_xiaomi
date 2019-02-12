function move(ele, attr, target, time=1000, callback) {
    var obj = ele;
    // clearInterval(ele.timer);
    if(typeof ele == 'string') {
        obj = document.querySelector(ele);
    }
    clearInterval(obj.timer);
    // 获取初始值
    var init = parseFloat(getStyle(obj, attr));
    if(attr == 'opacity') init *= 100;
    var speed = (target - init) / time * 10;
    // 把定时器存储到dom对象中
    obj.timer = setInterval(() => {
        init += speed;
        if((speed >= 0 && init >= target) || (speed <= 0 && init <= target) ) {
            // 运动终止的条件
            clearInterval(obj.timer);
            init = target;
            // function callback(obj) {
            //     //
            // }
            if(typeof callback == 'function') {
                callback(obj)
            }
        }
        if(attr == 'opacity') {
            obj.style[attr] = init / 100;
        } else {
            obj.style[attr] = init + 'px';
        }
    }, 10)
}
// 获取非行内样式
function getStyle(obj, attr) {
    if(window.getComputedStyle) {
        return window.getComputedStyle(obj, null)[attr];
    }
    return obj.currentStyle[attr];
}