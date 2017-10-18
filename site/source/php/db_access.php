<?php
	require 'config.php';

	try {
		$db = new PDO($dsn,$username,$password);
	} catch (PDOException $e) {
		echo 'Connexion échouée : '.$e->getMessage();
	}
	$stmt_write = $db->prepare('INSERT INTO mesures (idCapt, mesure, date) VALUES (:idCapt, :mesure, :date);');
	$stmt_read = $db->prepare('SELECT * FROM mesures;'); //placeholder
?>
