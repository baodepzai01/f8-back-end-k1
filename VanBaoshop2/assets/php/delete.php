<?php 

//?id=2

require('../db.php');

$id = $_GET['id'];

$sql = "DELETE FROM posts WHERe id = $id";

mysqli_query($conn, $sql);