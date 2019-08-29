<?php 
	session_start();
	require_once "php/DataBase.php";
	$db = DataBase::Connect();
	//first old    SELECT * FROM customers LIMIT 20
	$result = $db->query("SELECT * FROM customers ORDER BY `date` DESC LIMIT 20");

	//exit button
	if(isset($_POST['exit'])){
		$_SESSION = array();
		session_destroy();
	}
?>

<!DOCTYPE html>
<html lang="en">
	
<?php if ($_SESSION['password'] == 'admin'): ?>

	<head>
	  <meta charset="utf-8">
	  <title>Заказы</title>
	  <link rel="stylesheet" href="admin/admin-style.css">
	  <link rel="icon" href="images/favicon.png" type="image/x-icon">
  	<link rel="shortcut icon" href="images/favicon.png" type="image/x-icon">
	</head>
  <body>
  	
  	<form action="" method="post">
  		<button id="exit" type="submit" name="exit">Выход</button>
  	</form>
  	<a href="/" class="on-main">Главная</a>
  	<div id="table-wrapper">
	    <table>
	    	<tr>
		        <th>id</th>
		        <th>Имя</th>
		        <th>Телефон</th>
		        <th>Дата/Время</th>
		        <th>Описание</th>
		    </tr>
		    <?php foreach ($result as $value): ?>
		    <tr>
		        <td><?php echo $value['id'] ?></td>
		        <td><?php echo $value['name'] ?></td>
		        <td><?php echo $value['phone'] ?></td>
		        <td><?php echo $value['date'] ?></td>
		        <td><?php echo $value['secondary_info'] ?></td>  
		        <td class="delete" data-id="<?php echo $value['id'] ?>"></td>
		    </tr>
		    <?php endforeach; ?>
			</table>
		</div>
		<script defer src="js/jquery-3.2.1.min.js"></script>
		<script defer src="admin/admin-custom.js"></script>

<?php else: ?>

	<head>
	  <meta charset="utf-8">
	  <title>Авторизация</title>
	  <link rel="stylesheet" href="admin/admin-style.css">
	  <link rel="icon" href="images/favicon.png" type="image/x-icon">
  	<link rel="shortcut icon" href="images/favicon.png" type="image/x-icon">
	</head>
  <body>
		<div class="wrapper">
			<div class="admin-form">
				<div class="head-form">
						<h2><a href="http://waterdrop.ru">Waterdrop - Orders</a></h2>
				</div>
				<form method="post" action="admin/admin_session.php">
					<input type="password" name="password" placeholder="Password">
					<button type="submit">LOG IN</button>
					<div class="button-3d-shadow"></div>
				</form>
			</div>
		</div>

<?php endif ?>

  </body>
</html>