<form action="" method="POST">
  <input type="text" name="user">
  <input type="submit" value="Send">
</form>



<?php
$admins = ["Osama", "Ahmed", "Sayed"];

$requestMethod= $_SERVER['REQUEST_METHOD'];
$username = $_POST['user'];  


if ($requestMethod === "POST") {
    echo "The Request Method Is Post And Username Is $username. <br>";
    if (in_array($username, $admins)) {
        echo "This Username $username Is Admin";
    }
} else {
    echo "Request method is not post";
}       

// Needed Output
// "The Request Method Is Post And Username Is Osama"
// "This Username Osama Is Admin"