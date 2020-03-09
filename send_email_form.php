<?php 
if(isset($_POST['submit'])){
    $to = "t@boho.tech"; // this is your Email address
    $name = $_POST['name'];
    $email_phone = $_POST['email_phone'];
    $subject = "Website Form submission";
    $message = "Name: " . $name . "\nEmail or Phone: " . $email_phone;

    $headers = "From:" . $to;
    $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    header('Location: ' . $_SERVER['HTTP_REFERER']);
    }
?>