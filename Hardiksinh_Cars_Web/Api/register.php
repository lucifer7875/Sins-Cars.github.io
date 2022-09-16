<?php

include("connect.php");

$name = $_POST['name'];
$email = $_POST['email'];
$password = $_POST['password'];
$cpassword = $_POST['cpassword'];



   if ($password == $cpassword) {

    $sql = "INSERT INTO user_register (name,email, password) VALUES ('$name','$email', '$password')";
    $insert = mysqli_query($connect, $sql);

    if ($insert) {
        echo '
            <script>
               alert("registration successfull!");
               window.location = "../Login/login.html";
               </script>;
            ';
    } else {
        echo '
          <script>
             alert("some error occured!");
             window.location = "../Register/register.html";
             </script>;
          ';
    }
} else {
    echo '
          <script>
             alert("password and confirm password does not match!");
             window.location = "../Register/register.html" ;
             </script>;
          ';
}
