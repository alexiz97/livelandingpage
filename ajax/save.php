<?php
$head = "<html><head><title>Twoja strona</title><meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1.0'><script src='https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js'></script><script src='https://code.jquery.com/jquery-1.12.4.js'></script><script src='js/bootstrap.min.js'></script><link href='css/main.css' rel='stylesheet' /><link href='css/bootstrap.min.css' rel='stylesheet' /><link rel='stylesheet' href='css/font-awesome.min.css'></head><body>";
$body = $_POST[body];
$foot = "</body></html>";
$html = $head.$body.$foot;
$myfile = fopen("../output/yoursite.html", "w");
$zip = new ZipArchive;
$zipname = "../temp/livelandingpage.zip";
$zip->open($zipname, ZipArchive::CREATE | ZipArchive::OVERWRITE);
fwrite($myfile, $html);
fclose($myfile);

$dir = realpath('../output');
$it = new RecursiveDirectoryIterator($dir, RecursiveDirectoryIterator::SKIP_DOTS);
$files = new RecursiveIteratorIterator($it, RecursiveIteratorIterator::CHILD_FIRST);

foreach ($files as $name => $file)
{
    if (!$file->isDir())
    {
        $filePath = $file->getRealPath();
        $relativePath = substr($filePath, strlen($dir) + 1);
        $zip->addFile($filePath, $relativePath);
    }
}
$zip->close();
        $zipname = 'temp/livelandingpage.zip';
        echo $zipname;
?>
