var register = (function () {
    var $inp = document.querySelector('#txt');
    var $inp1 = document.querySelector('#pass');
    var $inp2 = document.querySelector('#user_pass');
    var $inp3 = document.querySelector('#tel');
    var $btn = document.querySelector('.sub');
    var $one = document.querySelector('.one');
    var $two = document.querySelector('.two');
    var $three = document.querySelector('.three');
    var $four = document.querySelector('.four');
    var $item = document.querySelector('.item');
    var $item1 = document.querySelector('.item1');
    var $item2 = document.querySelector('.item2');
    var $item3 = document.querySelector('.item3');
    console.log($item3);
    return{
        init(){
            this.event();
        },
        event(){
            var _this = this;
            $inp.oninput = function (e) {
                e = e || window.event
                var reg = /^[a-zA-Z0-9_-]{6,13}$/;
                if(reg.test($inp.value) == true){
                    $item.style.display = 'none';
                    $one.style.display = 'block';
                    $one.innerHTML = '成功';
                    $one.style.fontSize = '12px';
                    $inp.style.border = '1px solid';
                    $inp.style.borderColor = 'green';
                }
                else{
                    $one.style.display = 'none';
                    $item.style.display = 'block';
                    $item.innerHTML = '失败';
                    $item.style.fontSize = '12px';
                    $inp.style.border = '1px solid';
                    $inp.style.borderColor = 'red';
                }
                if($inp.value == ""){
                    $inp.style.border = '1px solid #999999';
                    $item.style.display = 'none';
                    $one.style.display = 'none';
                }
            }
            $inp.onblur = function () {
                if ($inp.onblur){
                    $inp.style.border = '1px solid #999999';
                    $one.style.display = 'none';
                    $item.style.display = 'none';
                }
            }
            $inp1.oninput = function (e) {
                e = e || window.event
                var reg = /\w{6,15}\d/;
                if(reg.test($inp1.value) == true){
                    $item1.style.display = 'none';
                    $two.style.display = 'block';
                    $two.innerHTML = '成功';
                    $two.style.fontSize = '12px';
                    $inp1.style.border = '1px solid';
                    $inp1.style.borderColor = 'green';
                }
                else{
                    $two.style.display = 'none';
                    $item1.style.display = 'block';
                    $item1.innerHTML = '失败';
                    $item1.style.fontSize = '12px';
                    $inp1.style.border = '1px solid';
                    $inp1.style.borderColor = 'red';
                }
                if($inp1.value == ""){
                    $inp1.style.border = '1px solid #999999';
                    $two.style.display = 'none';
                    $item1.style.display = 'none';
                }
            }
            $inp1.onblur = function () {
                if ($inp.onblur) {
                    $inp1.style.border = '1px solid #999999';
                    $two.style.display = 'none';
                    $item1.style.display = 'none';
                }
            }
            $inp2.oninput = function (e) {
                e = e || window.event
                if($inp2.value === $inp1.value){
                    $item2.style.display = 'none';
                    $three.style.display = 'block';
                    $three.innerHTML = '成功';
                    $three.style.fontSize = '12px';
                    $inp2.style.border = '1px solid';
                    $inp2.style.borderColor = 'green';
                }
                else{
                    $three.style.display = 'none';
                    $item2.style.display = 'block';
                    $item2.innerHTML = '失败';
                    $item2.style.fontSize = '12px';
                    $inp2.style.border = '1px solid';
                    $inp2.style.borderColor = 'red';
                }
                if($inp2.value == ""){
                    $three.style.display = 'none';
                    $item2.style.display = 'none';
                    $inp2.style.border = '1px solid #999999';
                }
            }
            $inp2.onblur = function () {
                if ($inp.onblur) {
                    $three.style.display = 'none';
                    $item2.style.display = 'none';
                    $inp2.style.border = '1px solid #999999';
                }
            }
            $inp3.oninput = function (e) {
                e = e || window.event
                var reg = /^1[34578]\d{9}$/;
                if(reg.test($inp3.value) == true){
                    $item3.style.display = 'none';
                    $four.style.display = 'block';
                    $four.innerHTML = '成功';
                    $four.style.fontSize = '12px';
                    $inp3.style.border = '1px solid';
                    $inp3.style.borderColor = 'green';
                }
                else{
                    $four.style.display = 'none';
                    $item3.style.display = 'block';
                    $item3.innerHTML = '失败';
                    $item3.style.fontSize = '12px';
                    $inp3.style.border = '1px solid';
                    $inp3.style.borderColor = 'red'; 
                }
                if($inp3.value == ""){
                    $four.style.display = 'none';
                    $item3.style.display = 'none';
                    $inp3.style.border = '1px solid #999999'; 
                }
            }
            $inp3.onblur = function () {
                if ($inp3.onblur){
                    $four.style.display = 'none';
                    $item3.style.display = 'none';
                    $inp3.style.border = '1px solid #999999'; 
                }
            }
            $btn.onmouseenter = function (e) {
                e = e || window.event
                $btn.style.opacity = '0.7';
            }
            $btn.onmouseleave = function (e) {
                e = e || window.event
                $btn.style.opacity = '1'; 
            }
            $btn.onclick = function (e) {
                e = e || window.event
                if($one.innerHTML != '成功'){
                    e.preventDefault();
                    $inp.focus(); 
                    $inp.style.border = '1px solid';
                    $inp.style.borderColor = 'red';
                    $item.style.display = 'block';
                }else if($two.innerHTML != '成功'){
                    e.preventDefault();
                    $inp1.focus();
                    $inp1.style.border = '1px solid';
                    $inp1.style.borderColor = 'red';
                    $item1.style.display = 'block'; 
                }else if($three.innerHTML != '成功'){
                    e.preventDefault();
                    $inp2.focus(); 
                    $inp2.style.border = '1px solid';
                    $inp2.style.borderColor = 'red';
                    $item2.style.display = 'block';
                }else if($four.innerHTML != '成功'){
                    e.preventDefault();
                    $inp3.focus(); 
                    $inp3.style.border = '1px solid';
                    $inp3.style.borderColor = 'red';
                    $item3.style.display = 'block';
                }
            }
        }
    } 
}())
register.init();