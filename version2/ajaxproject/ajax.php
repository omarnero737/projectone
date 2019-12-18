
 <?php
$servername = "localhost";
$username = "root";
$password = 12345;


$conn = mysqli_connect($servername, $username, $password);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "CREATE DATABASE myDB1";
if (mysqli_query($conn, $sql)) {
    //echo "Database created successfully";
} else {
    //echo "Error creating database: " . mysqli_error($conn);
}
$sql1 = "use myDB1";
if(mysqli_query($conn, $sql1)){
    // echo "use correct \n";
}
else{
    echo "something wrong \n";
}
$sql2 = "CREATE TABLE events (
    id INT(6) AUTO_INCREMENT PRIMARY KEY ,
    even VARCHAR(30) NOT NULL)";
    
    if (mysqli_query($conn, $sql2)) {
       // echo "Table MyGuests created successfully";
    } else {
        echo "Error creating table: " . mysqli_error($conn);
    }
if(isset($_POST['name'])){
    $eventn= $_POST['name'];
    $eventt= $_POST['time'];
    $eventty = $_POST['type'];

    $sql3 = "INSERT INTO events (even)
    VALUES ('$eventty.$eventn.$eventt')";
    
    if (mysqli_query($conn, $sql3)) {
        // echo "New record created successfully";
       
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
}
$sql4 = "SELECT  even FROM events";
$result = mysqli_query($conn, $sql4);

if (mysqli_num_rows($result) > 0) {
    // output data of each row
    while($row = mysqli_fetch_assoc($result)) {
        echo  $row["even"]."<br>";
    }
} else {
    echo "0 results";
}



?>