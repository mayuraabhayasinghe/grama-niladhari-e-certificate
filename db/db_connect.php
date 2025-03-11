<?php
$host = "localhost";
$user = "root"; // Change if necessary
$password = ""; // Change if using a password
$database = "gramaniladhari"; 

$conn = mysqli_connect($host, $user, $password, $database);
if (!$conn) {
    die("Database connection failed: " . mysqli_connect_error());
}
?>
