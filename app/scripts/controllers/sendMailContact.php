<?php

  $email_to = "club.serreets@etsmtl.net";

  $email_subject = "SerreÉTS - Contact";

	$postdata = file_get_contents("php://input");
	$request = json_decode($postdata);
	@$name = $request->name;
	@$subject = $request->subject;
	@$email_from = $request->email;
	@$message_email = $request->messageContact;


  $email_message = "<h4>SerreÉTS</h4>";
  $email_message .= "Date : " . date("Y-m-d H:i:s") . "<br />";
  $email_message .= "Objet : Question ou commentaire<br />";
  $email_message .= "<hr><br />";
  $email_message .= "Bonjour,<br /><br />";
  $email_message .= "La personne suivante une question ou un commentaire à partager <br /><br />";

  function clean_string($string) {
    $bad = array("content-type", "bcc:", "to:", "cc:", "href");
    return str_replace($bad, "", $string);
  }

  $email_message .= "Nom : " . clean_string($name) . "<br />";
  $email_message .= "Courriel : " . clean_string($email_from) . "<br />";
  $email_message .= "Sujet : " . clean_string($subject) . "<br />";
  $email_message .= "Message : " . clean_string($message_email) . "<br /><br />";
  $email_message .= "Merci,<br />";
  $email_message .= "le site de SerreÉTS";

  // create email headers
  $headers = 'From: ' . $email_from . "\r\n" .
          'Reply-To: ' . $email_from . "\r\n" .
          "Content-type: text/html; charset=UTF-8" . "\r\n" .
          'X-Mailer: PHP/' . phpversion();

  @mail($email_to, $email_subject, $email_message, $headers);

