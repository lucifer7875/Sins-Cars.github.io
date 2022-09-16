<?php
include("connect.php");


$email = $_POST['email'];
$password = $_POST['password'];

$SQL = "SELECT * FROM `admin_register` WHERE email = '$email' AND password = '$password' ;";
$CHECK = mysqli_query($connect, $SQL);


$sql = "SELECT * FROM user_register WHERE email = '$email' AND password = '$password' ";
$check = mysqli_query($connect, $sql);
if (mysqli_num_rows($check) > 0) {
    $userdata = mysqli_fetch_array($check);

    $_SESSION['user_register data'] = $userdata;

    echo '
        <script>
         window.location = "../Cover/cover.html";
        </script>;
    ';
} elseif (mysqli_num_rows($CHECK) > 0) {
    $USERDATA = mysqli_fetch_array($CHECK);
    $_SESSION['admin_register data'] = $USERDATA;
    echo '
        <script>
         window.location = "../Admin/admin.html"
        </script>;
 ';
} else {
    echo '
               <script>
                    alert("invalid user or user not found !");
                    window.location = "../Login/login.html";
               </script>;
       ';
}
