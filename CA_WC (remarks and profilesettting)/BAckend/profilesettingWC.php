<?php
include "config.php";

$Received_JSON = file_get_contents('php://input');

// decoding the received JSON and store into $obj variable.
$obj = json_decode($Received_JSON, true);

$CAusername = $obj["CAusername"];


//Checking User entered username and password is correct
$info = "select * FROM company_admin WHERE admin_username='$CAusername'";

// Executing SQL Query.
$infos = mysqli_fetch_array(mysqli_query($conn, $info));

//if (isset($remarks)) {

	$succesfulinfos= $infos;
 
    $succesfulinfos_Json=json_encode($succesfulinfos);
	//$x=explode(':',$succesfulinfos_Json);
	//$x2=$x[2];
	//$x3=trim($x2,"}");
	//$x4=trim($x3,'"');
	//$x5=trim($x4,"/\\");
	//$x6=json_encode($x5);
	//echo $x6;
	echo  $succesfulinfos_Json;

    
//} else {
	
	//$noremarks = 'NO remarks to be view';

    // Converting the message into JSON format.
    //$noremarks_Json = json_encode($noremarks);

    // Echo, Printing the message on screen.
    //echo $noremarks_Json;
   
//}
mysqli_close($conn);
