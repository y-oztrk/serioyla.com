<?php 

ob_start();
require 'BasicDB.php';
  try {
	  
		//$db = new PDO("mysql:host=89.252.179.221;dbname=serilink_main;charset=utf8","serilink_furkan","erfur12_");
		$db = new BasicDB('89.252.179.221', 'furkankalyonc1_serioyla', 'furkankalyonc1_serioyla', '1sLzWdv0~y8K');
		$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		$db->exec("SET TIME_ZONE = '+3:00'"); 
	  
  }catch(PDOException $mesaj) {
	  
	  echo $mesaj->getmessage();
	  die();
	  
  }
