<?php 
	require_once("DataBase.php");
	$name = trim($_POST['name']);
	$phone = $_POST['phone'];
	$secondary_info = $_POST['secondary_info'];
	$badSymbols = [" ","(",")"];
	$phone = str_replace($badSymbols, "", $phone);
	// db connect

	$db = DataBase::Connect();
  $sql = "INSERT INTO customers (`name`, `phone`, `secondary_info`) VALUES ('$name', '$phone', '$secondary_info')";
	$countComands = $db->exec($sql);
	
  echo 1;

?>