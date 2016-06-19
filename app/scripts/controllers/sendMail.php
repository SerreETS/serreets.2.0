<?php

//if "email" variable is filled out, send email
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
@$firstName = $request->firstName;
@$lastName = $request->lastName;
@$program = $request->program;
@$email = $request->email;
@$messageEmail = $request->messageEmail;

/* Set e-mail recipient */
$myemail  = "laurianemichaud@hotmail.com";
$subject = "Recrutement";

/* Let's prepare the message for the e-mail */
$message = "Hello!

Your contact form has been submitted by:

Name: $firstName
E-mail: $email
Program: $program

Comments:
$messageEmail

End of message
";

/* Send the message using mail() function */
mail($myemail, $subject, $message);

/* Redirect visitor to the thank you page */
header('Location: thanks.htm');
exit();

/* Functions we used */
function check_input($data, $problem='')
{
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    if ($problem && strlen($data) == 0)
    {
        show_error($problem);
    }
    return $data;
}

function show_error($myError)
{
?>
    <html>
    <body>

    <b>Please correct the following error:</b><br />
    <?php echo $myError; ?>

    </body>
    </html>
<?php
exit();
}
?>