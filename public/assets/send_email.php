<?php
$to = $_POST['to'];
$subject = $_POST['subject'];
$name = $_POST['name'];
$city = $_POST['city'];
$email = $_POST['email'];
$location = $_POST['location'];
$phone = $_POST['phone'];
$country = $_POST['country'];
$message = $_POST['message'];

$body = "Nombre: $name\nCiudad: $city\nCorreo: $email\nUbicación: $location\nTeléfono: $phone\nPaís: $country\nMensaje: $message";

$headers = 'From: remitente@correo.com' . "\r\n" .
  'Reply-To: remitente@correo.com' . "\r\n" .
  'X-Mailer: PHP/' . phpversion();

if (mail($to, $subject, $body, $headers)) {
  echo 'Correo enviado exitosamente.';
} else {
  echo 'Error al enviar el correo.';
}
