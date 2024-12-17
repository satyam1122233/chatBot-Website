<?php

$host='localhost';
$dbname='chatBot';
$username='root';
$password='';

$conn= new mysqli($host,$username,$password,$dbname);

$createDb='CREATE DATABASE IF NOT EXISTS chatBot';


// if ($conn->connect_error) {
//     echo 'no bro';

//     die("Connection failed: " . $conn->connect_error);
// }else{
//     echo 'success';
// }


$conn->query($createDb);

$createTable = 'CREATE TABLE IF NOT EXISTS chat_user (
    id INT(11) AUTO_INCREMENT PRIMARY KEY,
    time VARCHAR(100) NOT NULL,
    userMsg VARCHAR(100) NOT NULL,
   botMsg VARCHAR(100) NOT NULL

    )';


$conn->query($createTable);

?>




