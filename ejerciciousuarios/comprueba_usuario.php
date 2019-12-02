<?php 
$c = new MySQLI("172.30.12.100", "dwec", "dwec", "noticias");
$usuario = $_POST['usuario'];
$password = $_POST['password'];
$r = $c->query("SELECT id FROM usuario WHERE usuario = '$usuario' AND password = MD5('$password')");

if ($r->num_rows > 0) {
    echo "S";
} else {
    echo "N";
}
?>