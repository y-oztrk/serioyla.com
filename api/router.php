<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST");
header('Content-Type: application/json; charset=UTF-8"');
header("Access-Control-Allow-Credentials: true");
$requestMethod = $_SERVER["REQUEST_METHOD"];
require 'helper/functions.php';
$url = htmlspecialchars($_SERVER['SCRIPT_URL']);
$explodeurl = explode('/', $url);
$request = $explodeurl[2];


switch ($requestMethod) {
  default:
    BadRequest();
    break;
  case 'POST':
    if ($request == 'create') {
      print_r($_POST);
      $data = json_decode(file_get_contents("php://input"));
      print_r($data);
      echo 'oha';
    } else {
      BadRequest();
    }

    break;
}