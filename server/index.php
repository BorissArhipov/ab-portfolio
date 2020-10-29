<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;
require 'vendor/autoload.php';

if($_SERVER['HTTP_REFERER'] === 'https://borissarhipov.me/') {

    //Getting vars
    $name = isset($_GET['name']) ? $_GET['name'] : null;
    $email = isset($_GET['mail']) ? $_GET['mail'] : null;
    $text = isset($_GET['text']) ? $_GET['text'] : null;

    if($name && $email && $text) {

        $name = htmlspecialchars($name);
        $email = htmlspecialchars($email);
        $text = htmlspecialchars($text);

        $mail = new PHPMailer();

        try {
            //Server settings
            $mail->isSMTP();      
            $mail->Mailer = "smtp"; 
            $mail->Host = "localhost"; 
            $mail->Port = "25"; 
            $mail->SMTPSecure = 'none'; 
            $mail->SMTPAuth = false;
            $mail->SMTPOptions = array(
                  'ssl' => array(
                      'verify_peer' => false,
                      'verify_peer_name' => false,
                      'allow_self_signed' => true
                  )
              );

            //Recipients
            $mail->setFrom('contact@borissarhipov.me', 'Contact form');
            $mail->addAddress('contact@borissarhipov.me');  
            $mail->addReplyTo('contact@borissarhipov.me', 'Information');

            // Content
            $mail->isHTML(true);  
            $mail->Subject = 'Message from contact section';
            $mail->Body    = 'Name: ' . $name . '<br/> 
                                Email: ' . $email . '<br/>
                                Message: ' . $text;

            $mail->send();
            echo 'message-sent';
        } catch (Exception $e) {
            echo "error";
        }
    } else {
        echo 'empty-fields';
    }  
} else {
    echo 'wrong-server';
}