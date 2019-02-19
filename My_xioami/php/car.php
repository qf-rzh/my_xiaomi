<?php
    $json = file_get_contents("php://input");
    $json = json_decode($json);
    $json = json_decode($json);
    // var_dump($json);
    $attr = array();
    foreach ($json as $key => $value) {
        // print "$key => $value"."<br/>";
        // echo "$key"."<br/>";
        $dd = "$value".'<br/>';
    
    // echo $dd;
    $coon = new Mysqli('localhost', 'root', '', 'db_xiaomi', '3306');
    $sql = "select * from  xiaomi_cart where  id= '$dd'";
    $coon->query("SET CHARACTER SET 'utf8'");  
    $coon->query("SET NAMES 'utf8'");
    $row = $coon -> query($sql);
    $result = $row -> fetch_assoc(); 
    // var_dump($result);
    $attr[] = $result;
    // var_dump($attr);
    // echo json_encode($attr);
}
        if($attr) {
            $arr = array("code" => "200","data" => array("id" => $attr));
        } else {
            $arr = array("code" => "1000","data" => array());
        }
        echo json_encode($arr);
    // var_dump($coon);
?>