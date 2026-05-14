<?php

$genre = "Hack And Slash";


switch($genre)  {
    case"RPG":
        echo "I Recommend Ys Games";
        break;  
    case"Hack And Slash":
        echo "I Recommend Castlevania Games";
        break;
    case"FPS":
        echo "I Recommend Uncharted Games";
        break;
    case"Platform":
        echo "I Recommend Megaman Games";
        break;
    case"Puzzle":
        echo "I Recommend Megaman Games";
        break;
    default:
        echo "I Recommend Shadow Of Mordor And Shadow Of War";
}


/*

if ($genre === "RPG") {

  echo "I Recommend Ys Games";

} elseif ($genre === "Hack And Slash") {

  echo "I Recommend Castlevania Games";

} elseif ($genre === "FPS") {

  echo "I Recommend Uncharted Games";

} elseif ($genre === "Platform") {

  echo "I Recommend Megaman Games";

} elseif ($genre === "Puzzle") {

  echo "I Recommend Megaman Games";

} else {

  echo "I Recommend Shadow Of Mordor And Shadow Of War";

}
*/

// Needed Output
// "I Recommend Castlevania Games"