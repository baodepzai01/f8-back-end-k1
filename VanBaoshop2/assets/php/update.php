<?php 

//?id=1
require('../db.php');

$id = $_GET['id'];


$sql = "UPDATE posts SET title = 'a new title' WHERE id = $id";

mysqli_query($conn, $sql);