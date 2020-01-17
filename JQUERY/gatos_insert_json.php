<?php
$host = "localhost";
$user = "gatito";
$pass = "gatita";
$db = "gatos";


$con = new MySQLi($host,$user,$pass,$db);
$con->query("SET NAMES utf8");

$datos = json_decode(file_get_contents("php://input"));
if (isset($post)) {
    # code...
}
?>