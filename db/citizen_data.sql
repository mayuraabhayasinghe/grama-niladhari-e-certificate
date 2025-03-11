<?php
include '../db/db_connect.php'; // Ensure correct DB connection

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $nic = $_POST['nic'];
    $address = $_POST['address'];
    $phone = $_POST['phone'];a
    $email = $_POST['email'];

    // Insert into Database
    $sql = "INSERT INTO citizens (name, nic, address, phone, email) 
            VALUES ('$name', '$nic', '$address', '$phone', '$email')";

    if (mysqli_query($conn, $sql)) {
        echo "Citizen data inserted successfully.";

        // Store the query in a .sql file
        $sqlFile = '../db/citizen_data.sql';  
        file_put_contents($sqlFile, $sql . ";\n", FILE_APPEND | LOCK_EX);
    } else {
        echo "Error: " . mysqli_error($conn);
    }

    mysqli_close($conn);
}
?>
