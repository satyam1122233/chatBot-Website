<?php

include 'config.php';

$jsonData = json_decode(file_get_contents('php://input'), true);

$newId = $jsonData['newId'];
$newUsrMsg = $jsonData['newUsrMsg'];
$newUsrTime = $jsonData['newUsrTime'];
$newChatBotMessage = $jsonData['newChatBotMessage'];
$newChatBotTime = $jsonData['newChatBotTime'];




$userMessagesStr = implode("||", $newUsrMsg);
    $userTimeStr = implode("||", $newUsrTime);
    $chatbotMessagesStr = implode("||", $newChatBotMessage);
    $chatBotTimeStr = implode("||", $newChatBotTime);      


   

$updateData = "UPDATE chat_user 
SET `time` = '$userTimeStr', 
    `userMsg` = '$userMessagesStr', 
    `botMsg` = '$chatbotMessagesStr', 
    `chatBotTime` = '$chatBotTimeStr'
WHERE id = '$newId'";


     $conn->query($updateData);

?>