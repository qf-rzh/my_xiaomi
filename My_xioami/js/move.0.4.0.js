function move(obj,strr,target,time,callback){
    if(typeof(obj) == "string"){
        obj = document.querySelector(obj);
    }
    clearInterval(obj.timer);
    // 获取初始值
    var init = parseFloat(getStyle(obj,strr));
    if(strr == 'opacity'){
        init *= 100;
        target *= 100;
    }
    // console.log(init);
   // 获取运动速度
    var speed = (target - init) / (time / 10);
    obj.timer = setInterval( _ =>{
        init += speed;
        // console.log(init);
        if((speed >= 0 && init >= target) || speed <= 0 && init <= target){
            clearInterval(obj.timer);
            init = target;
            if(typeof callback == 'function'){
                callback(obj);
            }
        }
        // console.log(init);
        if(strr == 'opacity'){
        obj.style[strr] = init / 100;
        }
        obj.style[strr] = init + 'px';
    },10);
}
function getStyle(obj,strr){
    if(window.getComputedStyle){
        return window.getComputedStyle(obj,null)[strr];
    }
    return obj.currentStyle[attr];
}