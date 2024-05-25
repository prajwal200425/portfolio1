<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FeedBack</title>
    <style>
        p{
            text-align:center;
            font-size:2rem;
            font-family:cursive;
        }
        button {
            margin-left:39rem;
            height:2.4rem;
            width:6rem;
            border-radius:4px;
            border:none;
            background-color: black;
          
        }
        button:hover{
            height:2.7rem;
            width:7rem;
            background-color:gray;
  
        }
        a:hover{
            color: black;
        }
        a{
            color: white;
            text-decoration: none;
            font-size:15px;
        }
        body{
            margin-top: 15rem;
        }
    </style>
</head>
<body>
<?php
$name = $_POST['name'];
$Email = $_POST['Email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

$conn = new mysqli('localhost','root','','feedback');
if($conn->connect_error){
    die('connection failed:'.$conn->connect_error);

}
else{
    $stmt = $conn->prepare("insert into feedback(name,email,phone,message) values(?,?,?,?)");
    $stmt->bind_param("ssis",$name,$Email,$phone,$message);
    $stmt->execute();
    echo "<p> Feed Back Sent Successfully</p>";
    
    echo "<button> <a href=index.html> Go Back </a></button>";
    
    $stmt->close();
    $conn->close();
  
}
?>

</body>
</html>