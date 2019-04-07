<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Thank You!</title>
<link rel="stylesheet" type="text/css" href="css/style.css">


</head>
<body style="background:#FFFFFF !important; direction:rtl;">
<center>
<?php
$con=mysqli_connect("localhost","xxx","yyy","zzz");


$sql="INSERT INTO xxxx (
movie1,
movie2,
movie3,
movie4,
movie5,
movie6,
movie7,
movie8,
movie9,
movie10,
movie11,
movie12,
movie13,
movie14,
movie15,
movie16,
movie17,
movie18,
movie19,
movie20,
movie21,
movie22,
movie23,
movie24,
movie25,
movie26,
movie27,
movie28,
movie29,
movie30
)
VALUES
('$_POST[movie1]',
'$_POST[movie2]',
'$_POST[movie3]',
'$_POST[movie4]',
'$_POST[movie5]',
'$_POST[movie6]',
'$_POST[movie7]',
'$_POST[movie8]',
'$_POST[movie9]',
'$_POST[movie10]',
'$_POST[movie11]',
'$_POST[movie12]',
'$_POST[movie13]',
'$_POST[movie14]',
'$_POST[movie15]',
'$_POST[movie16]',
'$_POST[movie17]',
'$_POST[movie18]',
'$_POST[movie19]',
'$_POST[movie20]',
'$_POST[movie21]',
'$_POST[movie22]',
'$_POST[movie23]',
'$_POST[movie24]',
'$_POST[movie25]',
'$_POST[movie26]',
'$_POST[movie27]',
'$_POST[movie28]',
'$_POST[movie29]',
'$_POST[movie30]'
)";
if (!mysqli_query($con,$sql))
  {
  die('Error: ' . mysqli_error($con));
  }
echo "<br><br><br><br><br><br><a class='return_text'>باز هم ممنون.</a> <br><a class='return_text'>"; 
echo "امتیازات ثبت شده با موفقیت ذخیره شدند."; 
echo "</a>";
mysqli_close($con);
?> 

<br>
<img src="img/check02.gif" style="width:40%;">
<br>
<a class="return_btn" href="http://www.rabin.freehost.io">بازگشت</a>

<br><br>
</body>
</center>
</html>