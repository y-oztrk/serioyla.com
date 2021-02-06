<?php
ob_start();
date_default_timezone_set('Europe/Istanbul');
$request =  $_SERVER['SCRIPT_URL'];

if ($request == '/home') {
    require 'index.html';
    exit;
}
require 'api/helper/db.php';
$getPollID = explode('/', $request);
if (is_numeric($getPollID[1])) {
    $find = $db->from('polls')
        ->where('pollID', $getPollID[1])
        ->first();
    if ($find) {
        print_r($find);
    } else {
        echo 'kanka buraya 404 sayfası yapılacak :*';
    }
}
