<?php

// Test Case 1
$a = 800;
$b = 1000;
$c = 2000;

if($a > $b && $a > $c) {
    echo "A Is Larger Than B And C";    
} else if($a > $b) {
    echo "A Is Larger Than B";
    } else if ($a > $c) {
        echo "A Is Larger Than C";
} else {
    echo "A Is Not Larger Than B Or C";
}