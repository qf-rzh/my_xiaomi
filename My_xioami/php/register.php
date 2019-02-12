<?php
    $username = $_POST["username"];
    $pwd = $_POST["password"];
    $user_pwd = $_POST["user_password"];
    $tel = $_POST["teliphone"];
    $coon = new Mysqli('localhost', 'root', '', 'db_xiaomi', '3306');
    $sql = "insert into my_xiaomi(username,password,user_password,teliphone) value ('$username', '$pwd', '$user_pwd', 'tel')";
    $coon->query("SET CHARACTER SET 'utf8'");  
    $coon->query("SET NAMES 'utf8'");
    $result = $coon -> query($sql);
    if($result){
        echo ("<script type='text/javascript'> alert('注册成功!'); </script>");
    }
    else{
        echo ("<script type='text/javascript'> alert('注册失败！');history.back(); </script>");
    }
    echo ("<a href='../login.html'>点击跳转</a>");
?>