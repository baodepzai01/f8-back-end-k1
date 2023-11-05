<?php

require ('../db.php');

$sql = "SELECT * FROM posts";

$result = mysqli_query($conn, $sql);

$posts = mysqli_fetch_all($result, MYSQLI_ASSOC); //['id' => 1, 'name' => 'camnh' ]

print_r($posts);