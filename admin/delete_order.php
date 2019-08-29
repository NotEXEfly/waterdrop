<?php 
require_once "../php/DataBase.php";

$delete_element = $_POST['delete_element'];

$db = DataBase::Connect();

$res = $db->query("DELETE FROM customers WHERE id = {$delete_element}");

echo 1;

?>

