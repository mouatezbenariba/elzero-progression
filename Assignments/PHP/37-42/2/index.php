<?php

$index = 0;

echo "While Loop Method <br>";
$s = 20;
while ($s> $index) {
    $s -= 2;
    echo 20-$s . "<br>";
   
}

echo "<br>";

echo "For Loop Method <br>";
for($s=18; $s >$index; $s -= 2) {
    echo 20-$s . "<br>";
}

echo "<br>";

echo "Do While Loop Method <br>";
$s = 20;
do {
    $s -= 2;
    echo 20-$s . "<br>";
} while ($s> $index);

/*
// Needed Output
2
4
6
8
10
12
14
16
18
20
*/