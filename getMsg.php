<?php

include 'config.php';

$chatJson = $_GET['chatlog'];

$chatlog = json_decode($chatJson, true);

$userMessages = [];
$chatbotMessages = [];
$userTime = [];
$chatBotTime = [];

if ($chatlog != null) {
    foreach($chatlog as $data){
        $userMessages[] =  $data['userMessage'];
        $userTime[] =  $data['userTime'];
        $chatbotMessages[] =  $data['chatBotMessage'];
        $chatBotTime[] =  $data['chatBotTime'];
        
    }

    $userMessagesStr = implode("||", $userMessages);
    $userTimeStr = implode("||", $userTime);
    $chatbotMessagesStr = implode("||", $chatbotMessages);
    $chatBotTimeStr = implode("||", $chatBotTime);

                      
    
    $insertData = "INSERT INTO chat_user (`time`, `userMsg`, `botMsg`, `chatBotTime`) 
                   VALUES ('$userTimeStr', '$userMessagesStr', '$chatbotMessagesStr', '$chatBotTimeStr')";

    $conn->query($insertData);
    
} 



?>
