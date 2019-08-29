<?php 
	require_once "../php/DataBase.php";

	$num = intval($_GET['num']);
	$db = DataBase::Connect();
	// SELECT * FROM customers LIMIT {$num}, 10
	$res = $db->query("SELECT * FROM customers ORDER BY `date` DESC LIMIT {$num}, 10");

	$result = array();
	foreach ($res as $row) {
	  $result[] = $row;
	}

	echo json_encode($result);
 ?>