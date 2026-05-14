<?php

$day = "Sat";

if($day === "Sat" || $day === "Sun" || $day === "Mon") {
    echo "We Are Open All The Day";
} else if($day === "Tue" || $day === "Wed") {
    echo "We Are Open From 08:12";
} else if($day === "Thu" || $day === "Fri") {
    echo "We Are Closed";
} else {
    echo "Unknown Day";
}

/*

switch($day) {
  case "Sat":
  case "Sun":
  case "Mon":
    echo "We Are Open All The Day";
    break;
  case "Tue":
  case "Wed":
    echo "We Are Open From 08:12";
    break;
  case "Thu":
  case "Fri":
    echo "We Are Closed";
    break;
  default:
    echo "Unknown Day";
}

*/