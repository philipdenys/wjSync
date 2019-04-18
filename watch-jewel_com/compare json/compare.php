<?php
include 'utility.php';

if (!file_exists(getFileName('old'))) {
    file_put_contents(getFileName('old'), json_encode([]));
}
 
$oldData = json_decode(file_get_contents(getFileName('old')), true);
$newData = json_decode(file_get_contents(getFileName('new')), true);

$refinedData = [];

echo '<pre>';

if (empty($oldData)) {
    file_put_contents(getFileName('old'), json_encode($newData, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES));

    exit('Script needs to be run first to sync');
}
foreach ($newData as $newProduct) {

    $isNotTheSame = false;
    $found = false;

    foreach ($oldData as $oldProduct) {

        if ($newProduct['SKU'] == $oldProduct['SKU']) {

            foreach ($compare as $key) {

                if (
                    (isset($newProduct[$key]) && isset($oldProduct[$key])) &&
                    ($newProduct[$key] != $oldProduct[$key])
                ) {
                    $isNotTheSame = $key;
                }
            }

            $found = true;

            if ($isNotTheSame) {
                $refinedData[] = $newProduct;
            }

        }

    }

    /**
     * If the product is not found in the old list
     * add it to the refined list to be created
     */
    if (!$found) {
        $refinedData[] = $newProduct;
    }

}

file_put_contents(getFileName('old'), json_encode($newData, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES));

echo json_encode($refinedData, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES); // Echo the result

file_put_contents(getFileName('refined'), json_encode($refinedData, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES));

$date = date('dmy-His');
file_put_contents(getFileName('refined_' . $date ), json_encode($refinedData, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES));
