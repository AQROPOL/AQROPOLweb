<html>
	<head>
		<meta charset="UTF-8">
	</head>
	<body>
	<?php
		require 'db_access.php';

		echo "Type de requête : ".$_SERVER['REQUEST_METHOD']."<br />\n";

		if ($_SERVER['REQUEST_METHOD'] === 'POST') {
			echo "POST bien reçu.<br />\n";
			if (isset($_POST['idCapt'], $_POST['mesure'], $_POST['date'])) {
				if ($stmt_write->execute(array(':idCapt' => $_POST[`idCapt`], ':mesure' => $_POST['mesure'], ':date' => $_POST['date'])))
					echo "Insertion dans la base réussie.<br />\n";
				else
					echo "Insertion échouée.<br />\n";
			}
			else {
				echo "Erreur : 'idCapt', 'mesure' et 'date' nécessaires.<br />\n";
			}
		}
		else if ($_SERVER['REQUEST_METHOD'] === 'GET') {
			echo "GET bien reçu.<br />\n";
			if ($stmt_read->execute()) {?>
		<table>
			<tr>
				<th>ID</th>
				<th>ID Capteur</th>
				<th>Mesure</th>
				<th>Date</th>
			</tr>
			<?php 
				while ($row = $stmt_read->fetch(PDO::FETCH_BOTH)) {
					echo "<tr><td>".$row[0]."</td><td>".$row[1]."</td><td>".$row[2]."</td><td>".$row[3]."</td></tr>";
				}
			?>
		</table>
		<?php	}
			else
				echo "Sélection échouée.<br />\n";
		}
	?>
	</body>
</html>
