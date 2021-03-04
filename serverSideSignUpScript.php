$user_login = $_REQUEST['user'];
$email = $_REQUST['email'];
$password = $_REQUST['pass'];
$AUTHKEY = 'your_auth_key';

//Create the user
$url = 'https://mydomain.com/?rest_route=/simple-jwt-login/v1/users&email=' . $email . '&user_login=' . $user_login .'&password='. $password . '&AUTH_KEY=' . $AUTHKEY;

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$server_output = curl_exec($ch);
curl_close ($ch);

//Authenticate
$authenticationUrl = 'https://mydomain.com/?rest_route=/simple-jwt-login/v1/auth&email=' . $email . '&password='. $password;
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$server_output = curl_exec($ch);
curl_close ($ch);
$jwt = isset($server_output['data'])&& isset($server_output['data']['jwt'])
? $server_output['data']['jwt']
: null;

//display the JWT so you can get it from react
echo $jwt;