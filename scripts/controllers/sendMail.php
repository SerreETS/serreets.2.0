<?php

  $email_to = "club.serreets@etsmtl.net";

  $email_subject = "SerreÉTS - Recrutement";

	$postdata = file_get_contents("php://input");
	$request = json_decode($postdata);
	@$first_name = $request->firstName;
	@$last_name = $request->lastName;
	@$program = $request->program;
	@$email_from = $request->email;
	@$message_email = $request->messageEmail;


  $email_message = "<h4>SerreÉTS</h4>";
  $email_message .= "Date : " . date("Y-m-d H:i:s") . "<br />";
  $email_message .= "Objet : Demande pour rejoindre le club<br />";
  $email_message .= "<hr><br />";
  $email_message .= "Bonjour,<br /><br />";
  $email_message .= "La personne suivante a fait une demande pour rejoindre SerreÉTS <br /><br />";

  function clean_string($string) {
    $bad = array("content-type", "bcc:", "to:", "cc:", "href");
    return str_replace($bad, "", $string);
  }

  $email_message .= "Nom : " . clean_string($first_name) . " " . clean_string($last_name) . "<br />";
  $email_message .= "Courriel : " . clean_string($email_from) . "<br />";
  $email_message .= "Département : " . clean_string($program) . "<br />";
  $email_message .= "Description de la demande : " . clean_string($message_email) . "<br /><br />";
  $email_message .= "Merci,<br />";
  $email_message .= "le site de SerreÉTS";

  // create email headers
  $headers = 'From: ' . $email_from . "\r\n" .
          'Reply-To: ' . $email_from . "\r\n" .
          "Content-type: text/html; charset=UTF-8" . "\r\n" .
          'X-Mailer: PHP/' . phpversion();

  @mail($email_to, $email_subject, $email_message, $headers);
