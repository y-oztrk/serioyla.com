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
      require 'helper/db.php';
      $data = json_decode(file_get_contents("php://input"), true);
      // print_r($data);
      $title = ($data[0]['title'] == null ? $data['title'] : $data[0]['title']);

      $getoptions = array();
      for ($i = 1; $i <= 10; $i++) {
        if ($data[$i]['option'] != null) {
          $option = array(
            $i => $data[$i]['option']
          );
          $getoptions[$i] = $data[$i]['option'];
        }
      }
      $pollid = UniqueRandomNumbersWithinRange(100000, 999999, 1);
      // print_r(json_encode($getoptions));
      $insert =  $db->insert('polls')
        ->set([
          'title' => $title,
          'options' => json_encode($getoptions),
          'pollID' => $pollid
        ]);
      if ($insert) {
        $status = array(
          'status' => 200,
          'message' => 'inserting successful',
          'pollID' => $pollid
        );
        print_r(json_encode($status));
      } else {
        $status = array(
          'status' => 300,
          'message' => 'something wrong'
        );
        print_r(json_encode($status));
      }
    } else {
      BadRequest();
    }

    break;
}
