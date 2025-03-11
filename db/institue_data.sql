<?php
include '../db/db_connect.php'; // Ensure correct DB connection

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $institute_name = $_POST['institute_name'];
    $registration_no = $_POST['registration_no'];
    $address = $_POST['address'];
    $contact_person = $_POST['contact_person'];
    $contact_email = $_POST['contact_email'];

    // Insert into Database
    $sql = "INSERT INTO institutes (institute_name, registration_no, address, contact_person, contact_email) 
            VALUES ('$institute_name', '$registration_no', '$address', '$contact_person', '$contact_email')";

    if (mysqli_query($conn, $sql)) {
        echo "Institute data inserted successfully.";

        // Store the query in a .sql file
        $sqlFile = '../db/institute_data.sql';  
        file_put_contents($sqlFile, $sql . ";\n", FILE_APPEND | LOCK_EX);
    } else {
        echo "Error: " . mysqli_error($conn);
    }

    mysqli_close($conn);
}
?>
