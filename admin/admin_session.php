<?php
	session_start();
	$_SESSION['password'] = $_POST['password'];

	header('Location: ../admin.php');