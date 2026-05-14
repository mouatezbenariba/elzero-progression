<?php

$mix = [1, 2, "A", "B", "C", 3, 4, 5, "D", "D", "E", "F"];
$numbersPrinted = 0;
$lettersIgnored = 0;
for($i=0; $i< count($mix); $i++) {
    if(gettype($mix[$i])==="integer") {
        echo $mix[$i] . "<br>";
        $numbersPrinted++;
    } else {
        $lettersIgnored++;
    }
}

echo "$numbersPrinted Numbers Printed<br>"; 
echo "$lettersIgnored Letters Ignored<br>";

// Output
/*
1
2
3
4
"4 Numbers Printed"
"3 Letters Ignored"
*/