<?php

include_once('./config.php');
include_once('./telegramClass.php');

$title = "Новое сообщение с сайта Небеса Онлайн: \r\n";
$type = $_POST['type_request'];
$userName = $_POST['user_name'];
$userPhone = $_POST['user_phone'];


$message = '';

if($type == 'recall') {
    $typeText = "<b>Консультация</b>\r\n";
    $message = $title.$typeText . "<i>Имя клиента: </i>$userName\r\n<i>Телефон: </i>$userPhone";
}

if($type == 'taxi') {
    $typeText = "<b>Запрос на такси</b>\r\n";
    $addres = $_POST['addres'];
    $message = $title.$typeText . "<i>Имя клиента: </i>$userName\r\n<i>Телефон: </i>$userPhone\r\n<i>Адрес:</i> $addres";
}


$telegramApi = $settings['telegramApi'];
$chatId = $settings['chatId'];
$telegram = new TelegramClass($telegramApi);
$telegram->sendMessage($chatId, $message);

