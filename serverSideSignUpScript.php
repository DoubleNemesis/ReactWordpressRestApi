<?php
// $email = $_POST['email'];
// $password = $_POST['pass'];
// $user_login = $_POST['user'];


$user_login = "newUser22";
$email = "grange22@grance.com";
$password = "wert1";



$url = 'https://tomsclassroom.com/student/?rest_route=/simple-jwt-login/v1/users&email=' . $email . '&user_login=' . $user_login . '&password=' . $password . '&pleaseHammerDontHurtEm=' . $pleaseHammerDontHurtEm;

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$server_output = curl_exec($ch);
curl_close($ch);
echo $server_output;

//Authenticate
$authenticationUrl = 'https://tomsclassroom.com/student/?rest_route=/simple-jwt-login/v1/auth&email=' . $email . '&password=' . $password;

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $authenticationUrl);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$server_output = curl_exec($ch);
curl_close($ch);
//echo gettype($server_output);
$server_output_decode = json_decode($server_output);
// echo $server_output;
// echo "-<br>";
// echo $xx->{'success'};
// echo "-<br>";
//echo $server_output_decode->{'data'}->jwt;
// echo "-<br>";
// echo gettype($xx);
$jwt = isset($server_output_decode->{'data'}) && isset($server_output_decode->{'data'}->jwt)
    ? $server_output_decode->{'data'}->jwt
    : null;
echo "<br>";
//display the JWT so you can get it from react
echo $jwt;
