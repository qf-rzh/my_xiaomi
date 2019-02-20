//购物车数据渲染
var $car = (function () {
    var id = localStorage.valueOf();
    var div = JSON.stringify(id);
    var $three = document.querySelector('.three');
    var $jie = $three.lastElementChild;
    // var $three = document.querySelector('.three');
    var $one = document.querySelector('.one');
    return {
        init() {
            this.getJson();
            this.insertData();
            this.event();
        },
        event() {
            var _this = this;
        },
        getJson() {
            sendAjax('php/car.php', {
                type: 'POST',
                data: div,
                success(data) {
                    console.log($one);
                    var data = JSON.parse(data);
                    var data = data.data.id;
                    var flag = document.createDocumentFragment();
                    for (var i = 0; i < data.length; i++) {
                        var $div = document.createElement('div');
                        $div.innerHTML = `
                        <div class="main-body clearfix" >
                        <div class="two two-check"><i style="display:block" class="iconfont icon-check"></i></div>
                        <div class="two two-img"><img src="${data[i].site}"></div>
                        <div class="two two-name">${data[i].name}${data[i].versions}</div>
                        <div class="two two-price">${data[i].price}</div>
                        <div class="two two-num">
                        <div class="change">
                        <i class="iconfont icon-back"></i><input type="text" value="1">
                        <i class="iconfont icon-add"></i>
                        </div>
                        </div>
                        <div class="two two-total">${data[i].price}元</div>
                        <div class="two two-action"><i class="iconfont icon-roundclose"></i></div>
                        </div>    
                        `
                        // $div.classList = 'main-body clearfix';
                        flag.appendChild($div);
                    }
                    $three.insertBefore(flag, $jie);
                    $one.style.display = 'none';
                    $three.style.display = 'block';
                    var $mainAll = document.querySelectorAll('.three .main-body');
                    var $input = document.querySelectorAll('.change input');
                    var $change = document.querySelectorAll('.change');
                    var $two_total = document.querySelectorAll('.main-body .two-total');
                    var $two_price = document.querySelectorAll('.main-body .two-price');
                    var $two_check = document.querySelectorAll('.main-body .two-check');
                    var $two_box = document.querySelector('.main-header .two-check');
                    var $main = $three.firstElementChild;
                    var $main_body = $main.nextElementSibling;
                    var index = 0;
                    var flag = true;
                    for (let i = 0; i < $mainAll.length; i++) {
                        $mainAll[i].index = i;
                    }
                    $three.onclick = function (e) {
                        e = e || window.event
                        var target = e.target || e.srcElement;
                        if (target.className === 'iconfont icon-roundclose') {
                            index = target.parentNode.parentNode.index;
                            var bool = confirm('你确定要删除吗?');
                            if (bool) {
                                $mainAll[index].style.display = 'none';
                                localStorage.removeItem(data[index].id);
                            }
                            if(target.parentNode.parentNode.index === 0){
                                $three.style.display = 'none';
                                $one.style.display = 'block';
                            }
                        }
                    }
                    for (var i = 0; i < $change.length; i++) {
                        $change[i].onclick = function (e) {
                            e = e || window.event
                            var target = e.target || e.srcElement;
                            if (target.className === 'iconfont icon-back') {
                                var xwy = target.nextElementSibling;
                                if (xwy.value <= 0) {
                                    xwy.value = 0;
                                }
                                else {
                                    xwy.value = xwy.value - 1;
                                }
                            }
                            if (target.className === 'iconfont icon-add') {
                                var rzh = target.previousElementSibling;
                                if (rzh.value >= 5) {
                                    rzh.value = 5;
                                }
                                else {
                                    rzh.value = Number(rzh.value) + 1;
                                }
                            }
                            for (let i = 0; i < $two_total.length; i++) {
                                var lyy = $two_total[i];
                                var price = $two_price[i].innerHTML;
                                var sum = price * $input[i].value;
                                lyy.innerHTML = sum + '元';
                            }
                        }
                    }
                    $two_box.onclick = function () {
                            if($two_box.firstElementChild.style.display == 'inline-block'){ 
                                for (let i = 0; i < $two_check.length; i++) {
                                    $two_check[i].firstElementChild.style.display = 'none';
                                    $two_box.firstElementChild.style.display = 'none';
                                }  
                            }
                            else{
                                for(let i =0;i<$two_check.length;i++){
                                    $two_box.firstElementChild.style.display = 'inline-block';
                                    $two_check[i].firstElementChild.style.display = 'block';
                                }
                            }
                    }

                    for (let i = 0; i < $two_check.length; i++) {
                        $two_check[i].onclick = function () {
                            if ($two_check[i].firstElementChild.style.display == 'block') {
                                $two_check[i].firstElementChild.style.display = 'none';
                            }
                            else {
                                $two_check[i].firstElementChild.style.display = 'block';
                            }
                            for (var j = 0; j < $two_check.length; j++) {
                                if ($two_check[j].firstElementChild.style.display == 'block') {
                                    flag = false;
                                }
                                else {
                                    flag = true;
                                    break;
                                    
                                }

                            }
                            if (flag) {
                                $two_box.firstElementChild.style.display = 'none';
                            }
                            else{
                                $two_box.firstElementChild.style.display = 'inline-block'; 
                            }

                        }
                    }
                }
            })
        },
        insertData() {
        }
    }
}())
$car.init();