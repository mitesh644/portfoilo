<?php
$conn = mysqli_connect("localhost", "root", "", "phpdata");

if (!$conn) {
    die("Database connection failed");
}

$fname   = $_POST['fname'];
$lname   = $_POST['lname'];
$email   = $_POST['email'];
$phone   = $_POST['phone'];
$message = $_POST['message'];


$sql = "INSERT INTO information
        (fname, lname, email, phone, message)
        VALUES
        ('$fname', '$lname', '$email', '$phone', '$message')";


if (mysqli_query($conn, $sql)) {
    echo "Form submitted successfully ✅";
} else {
    echo "Error ❌";
}
?>
