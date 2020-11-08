<?php
include "config.php";

$Received_JSON = file_get_contents('php://input');

// decoding the received JSON and store into $obj variable.
$obj = json_decode($Received_JSON, true);

$Leadsid = $obj["leadsid"];


//Checking User entered username and password is correct
$remark = "select remarks FROM leads WHERE lead_id='$Leadsid'";

// Executing SQL Query.
$remarks = mysqli_fetch_array(mysqli_query($conn, $remark));

//if (isset($remarks)) {

	$succesfulremarks= $remarks;
   
    $succesfulremarks_Json=json_encode($succesfulremarks);
	$x=explode(':',$succesfulremarks_Json);
	$x2=$x[2];
	$x3=trim($x2,"}");
	$x4=trim($x3,'"');
	$x5=trim($x4,"/\\");
	$x6=json_encode($x5);
	echo $x6;
	//echo $sucessLogininput_Json;

    
//} else {
	
	//$noremarks = 'NO remarks to be view';

    // Converting the message into JSON format.
    //$noremarks_Json = json_encode($noremarks);

    // Echo, Printing the message on screen.
    //echo $noremarks_Json;
   
//}
mysqli_close($conn);
