<?php 

require ('../db.php');

$sql = "INSERT INTO posts (title, content) VALUES ('title1', 'content1')";

mysqli_query($conn, $sql);