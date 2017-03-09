<!DOCTYPE html>
<html lang="pt-br">
	<head>
		<title>Angular Teste</title>
		<meta charset="UTF-8">
	</head>
	<body>
		 <?php
			$path = getcwd();
			$diretorio = dir($path);

			$server   = $_SERVER['SERVER_NAME'];
			$endereco = $_SERVER ['REQUEST_URI'];
			$url      = "http://" . $server . $endereco;
			echo $url . "<br /><br />";

			echo "Arquivos '<strong>".$path."</strong>':<br /><br />";

			while($arquivo = $diretorio -> read()){
				if (strpos($arquivo, "html")) {
					echo "<a href='" . $url . $arquivo . "'>" . $arquivo . "</a><br />";
				}
			}

			$diretorio -> close();
		?>
	</body>
</html>