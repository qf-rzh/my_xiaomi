<?php
    $json = file_get_contents("php://input");
    $json = json_decode($json);
    $username = $json -> username;
    $pwd = $json -> password;
    $coon = new Mysqli('localhost', 'root', '', 'db_xiaomi', 3306);
    $sql = "select * from  my_xiaomi where username = '$username' and password = '$pwd'";
    $coon->query("SET CHARACTER SET 'utf8'");  
    $coon->query("SET NAMES 'utf8'");
    $row = $coon -> query($sql);
    $result = $row -> fetch_assoc();  
    if($result) {
        $arr = array("code" => "200", "msg" => "恭喜你登录成功", "data" => array("name" => $result['username']));
    } else {
        $arr = array("code" => "1000", "msg" => "用户名或者密码输入错误", "data" => array());
    }
    echo json_encode($arr);
    // var_dump($coon);
?>