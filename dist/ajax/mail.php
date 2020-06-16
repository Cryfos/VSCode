<?php

$recepient = "vladimir.razomazov@yandex.ru";
$siteName = "Починим-все.рф";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$crash = trim($_POST["crash"]);
$date = date('d.m');
$time = date('H:i');
$message = "Дата: $date\rВремя: $time\nИмя: $name \nТелефон: $phone\nСообщение: $crash";

$pagetitle = "Заявка с сайта \"$siteName\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>