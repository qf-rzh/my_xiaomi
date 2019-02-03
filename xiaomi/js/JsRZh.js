function baiDu(url,data) {
    var $s = document.createElement('script');
    var flag = url.indexOf('?') > -1 ? "&" : "?";
    url+= flag + "_=" + Date.now();
    for(var key in data){
        url+= "&" + key + "=" + data[key];
    }
    $s.src = url;
    document.body.appendChild($s);
}
