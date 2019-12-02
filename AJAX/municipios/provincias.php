<?php 
    $c = new mysqli("172.30.12.100","dwec","dwec","provincias");
    $c->query("SET NAMES utf8");
    $r = $c->query("SELECT id, provincia FROM provincias WHERE autonomia = ".$_GET['autonomia']);
    echo json_encode($r->fetch_all(MYSQLI_ASSOC));
?>