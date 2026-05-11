<?php 

$a = "10";

echo +$a;
echo '<br>';
echo gettype(+$a);
echo '<br>';echo '###############';echo '<br>';

echo $a+0;
echo '<br>';
echo gettype($a+0);
echo '<br>';echo '###############';echo '<br>';

echo (int) $a;  
echo '<br>';
echo gettype((int) $a);
echo '<br>';echo '###############';echo '<br>';

echo "$a"/1;
echo '<br>';
echo gettype("$a"/1);
echo '<br>';echo '###############';echo '<br>';

echo "$a"%100;
echo '<br>';
echo gettype("$a"%100);
echo '<br>';echo '###############';echo '<br>';


/*
// Needed Ouput
10
"integer"
10
"integer"
10
"integer"

// For The People Who Love Searching
10
"integer"
10
"integer"
*/