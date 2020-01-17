<?php
$host = "localhost";
$user = "gatito";
$pass = "gatita";
$db = "gatos";


$con = new MySQLi($host,$user,$pass,$db);
$con->query("SET NAMES utf8");

if (isset($_POST['nombre']) && isset($_POST[''])) {
    
}
?>