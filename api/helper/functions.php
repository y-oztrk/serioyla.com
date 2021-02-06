<?php

function BadRequest()
{
    $status = array(
        'error' => array(
            'message' => 'Bad Request',
            'code' => '400',
        )
    );
    print_r(json_encode($status, JSON_UNESCAPED_UNICODE));
    header("HTTP/1.1 400 Bad Request");
}

function UniqueRandomNumbersWithinRange($min, $max, $quantity) {
    $numbers = range($min, $max);
    shuffle($numbers);
    $yey = array_slice($numbers, 0, $quantity);
    return $yey[0];
}