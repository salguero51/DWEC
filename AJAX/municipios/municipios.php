<?php 
    $c = new mysqli("172.30.12.100","dwec","dwec","provincias");
    $c->query("SET NAMES utf8");
    $r = $c->query("SELECT id, municipio FROM municipios WHERE provincia = ".$_GET['provincia']." ORDER BY provincia");
    echo json_encode($r->fetch_all(MYSQLI_ASSOC));
?>