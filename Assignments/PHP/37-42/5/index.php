<?php

$start = 0;
$mix = [1, 2, 3, "A", "B", "C", 4];

for ($i = $start+1; $i < count($mix); $i++) {  
     echo (gettype($mix[$i])==="integer")? $mix[$i] . "<br>" : "";
}

// Output
// 2
// 3
// 4