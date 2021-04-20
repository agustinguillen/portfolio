<?php
  if(isset($_POST['submit'])){
    $name = $_POST['name'];
    $emailFrom = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $emailTo = "agustinnguillen@gmail.com";
    $headers = "From: ".$emailFrom;
    $txt = "Recibiste un email desde tu PORTFOLIO de ".$name.".\n\n".$message;


    mail( $emailTo, $subject, $txt, $headers );
  }


?>
