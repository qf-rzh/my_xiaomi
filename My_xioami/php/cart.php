<?php
    $json = file_get_contents("php://input");
    $json = json_decode($json);
    $json = json_decode($json);
    // var_dump($json);
    $versions = $json ->versions;
    $coon = new Mysqli('localhost', 'root', '', 'db_xiaomi', '3306');
    $sql = "select * from  xiaomi_cart where  versions= '$versions'";
    $coon->query("SET CHARACTER SET 'utf8'");  
    $coon->query("SET NAMES 'utf8'");
    $row = $coon -> query($sql);
    $result = $row -> fetch_assoc();  
    if($result) {
        $arr = array("code" => "200","data" => array("id" => $result['id']));
    } else {
        $arr = array("code" => "1000","data" => array());
    }
    echo json_encode($arr);
    // var_dump($coon);
?>