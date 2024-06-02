<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="stylesss.css">
</head>
<body>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form data
    $firstname = $_POST['Firstname'];
    $lastname = $_POST['Lastname'];
    $country = $_POST['Country'];
    $address = $_POST['Address'];

    // You can perform further validation here if needed

    // Connect to your database (replace with your actual database credentials)
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "hari";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Insert the form data into your database (replace with your actual table name and column names)
    $sql = "INSERT INTO hariprasad (Firstname, number, Country, Address)
    VALUES ('$firstname', '$lastname', '$country', '$address')";

    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>


