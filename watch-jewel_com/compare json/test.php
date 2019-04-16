<?php
include 'utility.php';

$sets = array();
foreach ($urls as $url)
{
    $json = file_get_contents($url); // Collect all URLS
    $data = json_decode($json, true); // Decode JSON to read and edit
    foreach ($data as $key => $innerObject) { // Delete each item that is not needed
        if (isset(
            $innerObject['SPEC_Bullet point 1'],
            $innerObject['SPEC_Bullet point 2'],
            $innerObject['SPEC_Bullet point 3'],
            $innerObject['SPEC_Bullet point 4'],
            $innerObject['SPEC_Bullet point 5'],
            $innerObject['SPEC_Extra info'],
            $innerObject['SPEC_Keywords'],
            $innerObject['SPEC_Featured'],
            $innerObject['SPEC_Bullet point 1 TEXT'],
            $innerObject['SPEC_Bullet point 2 LIST'],
            $innerObject['SPEC_Bullet Point 1'],
            $innerObject['SPEC_Bullet point 2 TEXT'],
            $innerObject['SPEC_Bullet Point 1 TEXT'],
            $innerObject['SPEC_Bullet Point 2'],
            $innerObject['SPEC_Bullet point 3 LIST'],
            $innerObject['SPEC_Bullet Point 2 TEXT'],
            $innerObject['SPEC_Bullet point 3 TEXT'],
            $innerObject['SPEC_Bullet point 4 LIST'],
            $innerObject['SPEC_Bullet point 4 TEXT'],
            $innerObject['SPEC_Bullet Point 3'],
            $innerObject['SPEC_Bullet Point 3 TEXT'],
            $innerObject['SPEC_Bullet point 5 LIST'],
            $innerObject['SPEC_Bullet point 5 TEXT'],
            $innerObject['SPEC_Bullet Point 4 TEXT'],
            $innerObject['SPEC_Bullet Point 5'],
            $innerObject['SPEC_Bullet Point 5 TEXT'],
            $innerObject['SPEC_Bullet point 1 LIST']
        )) {
            unset(
                $data[$key]['SPEC_Bullet point 1'],
                $data[$key]['SPEC_Bullet point 2'],
                $data[$key]['SPEC_Bullet point 3'],
                $data[$key]['SPEC_Bullet point 4'],
                $data[$key]['SPEC_Bullet point 5'],
                $data[$key]['SPEC_Extra info'],
                $data[$key]['SPEC_Keywords'],
                $data[$key]['SPEC_Featured'],
                $data[$key]['SPEC_Bullet point 1 TEXT'],
                $data[$key]['SPEC_Bullet point 2 LIST'],
                $data[$key]['SPEC_Bullet Point 1'],
                $data[$key]['SPEC_Bullet point 2 TEXT'],
                $data[$key]['SPEC_Bullet Point 1 TEXT'],
                $data[$key]['SPEC_Bullet Point 2'],
                $data[$key]['SPEC_Bullet point 3 LIST'],
                $data[$key]['SPEC_Bullet Point 2 TEXT'],
                $data[$key]['SPEC_Bullet point 3 TEXT'],
                $data[$key]['SPEC_Bullet point 4 LIST'],
                $data[$key]['SPEC_Bullet point 4 TEXT'],
                $data[$key]['SPEC_Bullet Point 3'],
                $data[$key]['SPEC_Bullet Point 3 TEXT'],
                $data[$key]['SPEC_Bullet point 5 LIST'],
                $data[$key]['SPEC_Bullet point 5 TEXT'],
                $data[$key]['SPEC_Bullet Point 4 TEXT'],
                $data[$key]['SPEC_Bullet Point 5'],
                $data[$key]['SPEC_Bullet Point 5 TEXT'],
                $data[$key]['SPEC_Bullet point 1 LIST']
            );
        }
    }
    $json = substr($json, 1, -1); // Delete upper level brackets
    $sets = array_merge($sets, $data); // Merge all URLS in one single JSON file
    $filteredData = array_filter_recursive($sets); // Filter the empty items and delete them
}

$new = json_encode($filteredData, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES); // Encode back to JSON pretty print and remove unescaped slashes
echo '<pre>'; // Add breaks
echo $new; // Echo the result

// Write the new file
$fp = fopen(getFileName('new'), 'w');
fwrite($fp, $new);
fclose($fp);
