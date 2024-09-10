<?php
// Load PHPMailer
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Create a new PHPMailer instance
    $mail = new PHPMailer(true);

    try {
        // Server settings
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';             // Set the SMTP server
        $mail->SMTPAuth = true;                     // Enable SMTP authentication
        $mail->Username = 'karthick@mongrov.com';   // SMTP username (your email)
        $mail->Password = 'test1234';    // SMTP password (your email password)
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;  // Enable TLS encryption
        $mail->Port = 587;                          // TCP port to connect to

        // Recipients
        $mail->setFrom('karthick@mongrov.com', 'Mongrov'); // Sender email
        $mail->addAddress($email, $name);                            // Recipient email
        

        // Email content
        $mail->isHTML(true);
        $mail->Subject = 'Acknowledgment of your message';
        $mail->Body = "Hello $name,<br><br>Thank you for contacting us. We have received your message:<br>$message<br><br>We will get back to you as soon as possible!";
        $mail->AltBody = "Hello $name,\n\nThank you for contacting us. We have received your message:\n$message\n\nWe will get back to you as soon as possible!";

        // Send the email
        $mail->send();
        echo 'Acknowledgment email sent successfully!';
    } catch (Exception $e) {
        echo "Failed to send acknowledgment email. Mailer Error: {$mail->ErrorInfo}";
    }
}
?>
