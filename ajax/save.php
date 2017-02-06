<?php
$myfile = fopen("data2.php", "w") or die("Unable to open file!");
    $txt=filter_input(INPUT_POST, 'txt');
fwrite($myfile, $txt);
fclose($myfile);
