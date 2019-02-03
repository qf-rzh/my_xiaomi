var login = (function () {
    var $box = document.querySelector('.banner_item');
    var $boxAll = $box.firstElementChild;
    var $boxLast = $box.lastElementChild;
    var $btn = document.querySelector('.banner_tt');
    var $kk = document.querySelector('.erwei');
    var $sub = document.querySelector('.sub');
    var $form = document.querySelector('.banner_box');
    console.log($form);
    return {
        init() {
            this.getData();
            this.event();
        },
        event() {
            var _this = this;
            $boxLast.onclick = function (e) {
                e = e || window.event
                $btn.style.display = 'none';
                $kk.style.display = 'block';
                $boxAll.style.color = '#666666';
                $boxLast.style.color = '#f56600';
                $boxAll.onmouseenter = function () {
                    $boxAll.style.color = '#f56600';
                }
                $boxAll.onmouseleave = function () {
                    $boxAll.style.color = '#666666';
                }
            }
            $boxAll.onclick = function (e) {
                e = e || window.event
                $kk.style.display = 'none';
                $btn.style.display = 'block';
                $boxLast.style.color = '#666666';
                $boxLast.onmouseenter = function () {
                    $boxLast.style.color = '#f56600';
                }
                $boxLast.onmouseleave = function () {
                    $boxLast.style.color = '#666666';
                }
            }
        },
        getData() {
            $sub.onclick = function (e) {
                e = e || window.event
                e.preventDefault();
                sendAjax('php/login.php', {
                    type: 'POST',
                    data: {
                        username: $form['username'].value,
                        password: $form['password'].value
                    },
                    success(data) {
                        let { code, msg, data: _data } = JSON.parse(data);
                        if (code == 200) {
                            // var username = _data.name;
                            localStorage.name = _data.name;
                            location.href = 'login.html';
                        } else {
                            alert(msg);
                        }
                    }
                })
            }
        }
    }
}())
login.init();