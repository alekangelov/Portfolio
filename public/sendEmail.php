<?php

$method = $_SERVER['REQUEST_METHOD'];
$request = explode('/', trim($_SERVER['PATH_INFO'], '/'));
$input = json_decode(file_get_contents('php://input'), true);

if (empty($input['from']) && empty($input['message'])) {
    die(json_encode(['success' => false, 'message' => "You didn't input your email and message"]));
}

$body = '<table style=" width: 100%;" border="0">';
foreach ($input as $key => $value) {
    $body .= "<tr><td style=\"padding:1rem;width: 25%;background:rgba(0,0,0,0.1);\">";
    $body .= "<p>$key</p></td>";
    $body .= "<td style=\"padding:1rem\"><p>$value</p></td></tr>";
}
$body .= "</table>";

$to = "alekangelov@icloud.com";
$subject = "Form Submission Website";
$headers = "From: $input[from]" . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
$return = mail($to, $subject, $body, $headers);

die(json_encode(['success' => $return, 'message' => "Awesome"]));
