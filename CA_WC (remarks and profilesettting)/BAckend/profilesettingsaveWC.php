<?php
include "config.php";

$Received_JSON = file_get_contents('php://input');

// decoding the received JSON and store into $obj variable.
$obj = json_decode($Received_JSON, true);

$CAusernamep = $obj["CAusername"];
$usernamep = $obj["username"];
$companyNamep = $obj["companyName"];
$addressp = $obj["address"];
$emailp = $obj["email"];
$contactp = $obj["contact"];



//Checking User entered username and password is correct

$UpdateUserLogin = "UPDATE `user_login` SET `username` = '$usernamep' WHERE `user_login`.`username` = '$CAusernamep'";
$UpdateCAtable = "UPDATE `company_admin` SET `company_email` = '$emailp',`address`='$addressp',`company_name` = '$companyNamep',`company_contact` = '$contactp' WHERE `company_admin`.`admin_username` = '$usernamep'";

$UpdateSLtable = "UPDATE `salesperson` SET `company_name` = '$companyNamep' WHERE `salesperson`.`admin_username` = '$usernamep'";




$doneUserLogin= mysqli_query($conn,$UpdateUserLogin);
$doneSL= mysqli_query($conn,$UpdateSLtable);
$doneCA= mysqli_query($conn,$UpdateCAtable);


//$psw= mysqli_fetch_array(mysqli_query($conn, $Changepsw));



	//$succesful="Save Complete";
 
    //$succesful_Json=json_encode($succesful);
	
	//echo  $succesful_Json;
	//echo json_encode($doneUserLogin." ".$doneSL." ".$doneCA);
	echo  json_encode("Succesful Updated");

    


mysqli_close($conn);
