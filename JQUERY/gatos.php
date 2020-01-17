<?php

//require "conection.req.php";
$c = new MySQLi($host,$user,$pass,$db);
$c->query("SET NAMES utf8");
if (isset($_GET['id'])) {
    $sql = "SELECT * FROM gato WHERE id = ".$_GET['id'];
} else {
    $sql = "SELECT * FROM gato";
}



?>