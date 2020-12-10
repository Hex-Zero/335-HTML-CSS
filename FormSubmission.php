<?php
// specify the server, username, password, and database
$server = 'localhost';
$username = 'mantasbr_max';
$password = 'hidden';
$database = 'mantasbr_Guestbook1';

// try to connect to the database
$conn = new mysqli($server, $username, $password, $database);

$comment=htmlspecialchars
($_REQUEST["fcomment"]);
echo "Comment Successfully Added";
$email=htmlspecialchars
($_REQUEST["femail"]);
$name=htmlspecialchars
($_REQUEST["fname"]);


// construct the query using the data from the input fields
$sql = "INSERT INTO Entries (guest_name, guest_email, comment)
 VALUES ('$name', '$email', '$comment')";

// apply the query to the database, inserting the new comment, and record whether it went in OK
$success = $conn->query($sql);
?>
