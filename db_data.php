<?php

include 'config.php'; 

$query = "SELECT * FROM chat_user";
$result = mysqli_query($conn, $query);



$data=array();

if (mysqli_num_rows($result) > 0) {

    while ($row = mysqli_fetch_assoc($result)) {
         $data[]=$row;
    }
} else {
    echo "No records found.";
}

echo json_encode($data);

mysqli_close($conn);

                                                
                                                
?>

