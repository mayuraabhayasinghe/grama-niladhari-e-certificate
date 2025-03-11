<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Grama Niladhari E-Certificate</title>
</head>
<body>
    <h2>Citizen Registration</h2>
    <form action="php/citizen.php" method="POST">
        <label>Name:</label>
        <input type="text" name="name" required><br>
        
        <label>NIC:</label>
        <input type="text" name="nic" required><br>

        <label>Address:</label>
        <input type="text" name="address" required><br>

        <label>Phone:</label>
        <input type="text" name="phone" required><br>

        <label>Email:</label>
        <input type="email" name="email" required><br>

        <button type="submit">Submit</button>
    </form>

    <h2>Institute Registration</h2>
    <form action="php/institute.php" method="POST">
        <label>Institute Name:</label>
        <input type="text" name="institute_name" required><br>

        <label>Registration No:</label>
        <input type="text" name="registration_no" required><br>

        <label>Address:</label>
        <input type="text" name="address" required><br>

        <label>Contact Person:</label>
        <input type="text" name="contact_person" required><br>

        <label>Contact Email:</label>
        <input type="email" name="contact_email" required><br>

        <button type="submit">Submit</button>
    </form>
</body>
</html>
