<?php

$nums = [1, 13, 12, 20, 51, 17, 30];

foreach($nums as $number) {
    if($number % 2 == 0) {
        echo $number/2 . "<br>";
    }
}

// Output
// 6
// 10
// 15