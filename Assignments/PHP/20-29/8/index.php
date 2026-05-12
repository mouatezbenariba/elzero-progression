<?php 

// Code 1
@$a = @$b or die("Error a and b are not defined");

// Code 2
$f = file("Not_A_File") or die("Error no file found");

// Code 3
include("Not_A_File") or die("Error no file found");